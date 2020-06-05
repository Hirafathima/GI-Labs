import React from 'react'
import './Model.css'


class Model extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            example:false
        }
    }
    render(){
        return(
            <div className="model">
                <h2>Model</h2>
                <iframe src="https://fathomless-ridge-71442.herokuapp.com/map.html" width="600" height="450" frameborder="0" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
                {/* <img src="http://127.0.0.1:5000/plot.png" alt="my plot"></img> */}
           </div>
        )
    }
}
export default Model;