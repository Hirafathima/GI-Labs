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
                <h2>Citizen's Needs Visualization Model</h2>
                <div className="model">
                    <iframe src="https://fathomless-ridge-71442.herokuapp.com/map.html" width="700" height="800" frameborder="0" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
                    <div>
                        <div className="text-model">
                            The visualisation shows the geographical mapping of needs data taken from citizens in Kerala. The three types of needs raised by majority of people are highlighted as coloured bubbles in the respective district regions in the map which on click gives the most demanded need of the people. The need-color label indication used is :
                        </div>
                        <div className="choices">
                            <span style={{ display: "flex", alignItems: "center" }}>
                                 &emsp; Basic Needs <div className="choice red" />
                                 &emsp; Standard Needs <div className="choice blue" />
                                 &emsp; Premium Needs <div className="choice green" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Model;