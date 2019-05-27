import React, { Component } from "react";


class Home extends Component {
    static getInitialProps({ query }) {
        return { query };
    }

    render() {
        return (
            <>
                <h1>MASE</h1>
            </>
        )
    }
}
export default Home
