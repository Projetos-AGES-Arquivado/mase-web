import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createPassword } from "actions/createPassword";

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Senha muito curta, mínimo 6 caracteres")
    .max(50, "Senha muito longa, máximo 50 caracteres")
    .required("Obrigatorio"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Senhas diferentes"
  )
});

class CreatePassword extends Component {
  static getInitialProps({ query }) {
    return { query };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Formik
          initialValues={{ password: "", passwordConfirmation: "" }}
          validationSchema={passwordSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              const jwt = this.props.query.token;
              const { password } = values;
              this.props.createPassword(jwt, password);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} className="wrapper">
              <div className="container-fluid">
                <div className="row center-xs">
                  <h1>Insira sua senha</h1>
                  <div className="col-xs-12" style={{ minHeight: "70px" }}>
                    <label style={{ display: "block" }}>Senha</label>
                    <input
                      style={{ width: "300px" }}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        color: "red"
                      }}
                    >
                      {errors.password && touched.password && errors.password}
                    </label>
                  </div>
                  <div className="col-xs-12" style={{ minHeight: "70px" }}>
                    <label style={{ display: "block" }}>
                      Confirmação de senha
                    </label>
                    <input
                      style={{ width: "300px" }}
                      type="password"
                      name="passwordConfirmation"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.passwordConfirmation}
                    />
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        color: "red"
                      }}
                    >
                      {errors.passwordConfirmation &&
                        touched.passwordConfirmation &&
                        errors.passwordConfirmation}
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={this.props.password.get("submitting")}
                  >
                    Enviar
                  </button>
                  <div>
                    {this.props.password.get("submitError") &&
                      "Erro de conexão"}
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    password: state.password
  };
}

export default connect(
  mapStateToProps,
  {
    createPassword
  }
)(CreatePassword);
