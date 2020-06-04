import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { Row, Col } from 'react-bootstrap';
import './Pie.css'

const style = {
    pie: {
        fontSize: "5px",
        fontColor: "white",
    }
}

class Pie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: null,
            data:
                [
                    { title: 'One', value: 10, color: '#ff0000' },
                    { title: 'Two', value: 15, color: '#bd0000' },
                    { title: 'Three', value: 20, color: '#9c0303' },
                    { title: 'Four', value: 10, color: '#6e0101' },
                    { title: 'Five', value: 15, color: '#4a0101' },
                    { title: 'Six', value: 20, color: '#fc8383' },
                    { title: 'Seven', value: 20, color: '#ff1c1c' },
                ],
            percentage: [],
            val: {}
        }
    }

    componentDidMount(){
        fetch("http://0.0.0.0:8000/get_dept")
        .then(res => {
            this.setState({
                val : res.json
            })
            console.log(res)
        })
        .catch(err =>
            console.log("Error: " + err )
        )
    }

    render() {
        return (
            <div className="pie">
                <Row className="show-grid">
                    <Col xs={4} md={3} styles={style.pie} className="flex justify-content-center">
                        <PieChart
                            data={this.state.data}
                            animate="true"
                            animationEasing="ease-out"
                            reveal={98}
                            lineWidth={80}
                            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %` }
                            labelStyle={{
                                ...style.pie,
                            }}
                            onMouseOver={(e, index) => {
                                this.setState({ hovered: index });
                            }}
                            onMouseOut={() => {
                                this.setState({ hovered: null });
                            }}
                        />
                        {this.state.hovered !== null ?
                            <small style={{ color: this.state.data[this.state.hovered].color }}>{this.state.data[this.state.hovered].title}</small>
                            :
                            <small>{" "}</small>}
                    </Col>
                    <Col xs={4} md={3}>
                        <PieChart
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' },
                                { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                        />
                    </Col>
                    <Col xs={4} md={3}>
                        <PieChart
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' },
                                { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                        />
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default Pie;