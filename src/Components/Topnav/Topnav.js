import React from 'react'
import './Topnav.css'


class Topnav extends React.Component {
    constructor(props) {
        super(props);
    }
    gotoform=()=>{
        window.location.pathname="/form";
    }
    render() {
        return (
            <div className="topbar">
                <div id="bar">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
                <button onClick={this.gotoform}>Attempt Syrvey</button>
            </div>
        )
    }
}
export default Topnav;