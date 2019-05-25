import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

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

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ password: "", passwordConfirmation: "" }}
      validationSchema={passwordSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
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
                  style={{ display: "block", fontSize: "12px", color: "red" }}
                >
                  {errors.password && touched.password && errors.password}
                </label>
              </div>
              <div className="col-xs-12" style={{ minHeight: "70px" }}>
                <label style={{ display: "block" }}>Confirmação de senha</label>
                <input
                  style={{ width: "300px" }}
                  type="password"
                  name="passwordConfirmation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                />
                <label
                  style={{ display: "block", fontSize: "12px", color: "red" }}
                >
                  {errors.passwordConfirmation &&
                    touched.passwordConfirmation &&
                    errors.passwordConfirmation}
                </label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
