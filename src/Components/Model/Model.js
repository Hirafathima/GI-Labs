import React from 'react'
import './Model.css'


class Model extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example: false
        }
    }
    render() {
        return (
            <div className="model-container">
                <h2>Model</h2>
                <div className="model">
                    <iframe src="https://fathomless-ridge-71442.herokuapp.com/map.html" width="700" height="800" frameborder="0" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
                    <div>
                        <div className="text-model">
                            At Governance Innovation Labs, we aim to deliver good governance through civic engagement. In this model, citizens will be active co-producers of the public service rather than passive recipients of the public service. Governance Innovation Labs is an attempt to create a strong state through civic engagement.
                        </div>
                        <div className="choices">
                            <span style={{ display: "flex", alignItems: "center" }}><div className="choice red" /> &emsp; Basic Needs</span>
                            <span style={{ display: "flex", alignItems: "center" }}><div className="choice blue" /> &emsp; Standard Needs</span>
                            <span style={{ display: "flex", alignItems: "center" }}><div className="choice green" /> &emsp; Premium Needs</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Model;