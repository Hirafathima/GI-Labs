import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { Row, Col } from 'react-bootstrap';
import './Pie.css'
import axios from 'axios'
const style = {
    pie: {
        fontSize: "5px",
        fontColor: "white",
    }
}
const colors = ['#4e003b', '#662953', '#9a2a5c', '#cb4854', '#d1675e', '#df8165', '#e9b89c'];
// const colors = ['#fc8383', '#ff1c1c', '#fff000', '#bd0000', '#9c0303', '#6e0101', '#4a0101'];
class Pie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered1: null,
            hovered2: null,
            hovered3: null,
            percentage: [],
            val: {},
            basic: [],
            standard: [],
            premium: [],
            place: "Trivandrum"
        }
    }

    async componentDidMount() {
        const res = await axios.get("https://fathomless-ridge-71442.herokuapp.com/get_dept")
        this.setState({ val: res.data });
        this.updateVal("Trivandrum");
    }

    updateVal = (place) => {
        this.setState({ place: place });
        var temp1 = [];
        Object.entries(this.state.val[place].basic).map((val, index) => {
            temp1.push({ title: val[0], value: val[1], color: colors[index] })
        })
        this.setState({ basic: temp1 });
        var temp2 = [];
        Object.entries(this.state.val[place].Standard).map((val, index) => {
            temp2.push({ title: val[0], value: val[1], color: colors[index] })
        })
        this.setState({ standard: temp2 });
        var temp3 = [];
        Object.entries(this.state.val[place].Premium).map((val, index) => {
            temp3.push({ title: val[0], value: val[1], color: colors[index] })
        })
        this.setState({ premium: temp3 });
    }

    render() {
        return (
            <div className="pie-container">
                <h2>District-wise Needs Distribution</h2>
                <br/>
                <Row>
                    <p>Choose the district : </p>
                    <Col sm={3} className="mb-2">
                        <select value={this.state.place} onChange={e => this.updateVal(e.target.value)}>
                            {Object.keys(this.state.val).map(district => {
                                return <option value={district}>{district}</option>
                            })}
                        </select>
                    </Col>
                </Row>
                <Row style={{ height: "100vh" }}>
                    <Col sm={3} className="ml-5 mt-5">
                        <Row className="mb-5">
                            <PieChart
                                data={this.state.basic}
                                animate="true"
                                animationEasing="ease-out"
                                lineWidth={80}
                                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                                labelStyle={{
                                    ...style.pie,
                                }}
                                onMouseOver={(e, index) => {
                                    this.setState({ hovered1: index });
                                }}
                                onMouseOut={() => {
                                    this.setState({ hovered1: null });
                                }}
                            />
                        </Row>
                        <h5>Basic Needs</h5>
                        {this.state.hovered1 !== null ?
                            <large style={{ display: "flex", alignItems: "center", color: colors[this.state.hovered1] }}>
                                <span><div style={{ width: "10px", height: "10px", backgroundColor: colors[this.state.hovered1] }} /></span>
                                &emsp;
                                {this.state.basic[this.state.hovered1].title}
                            </large>
                            :
                            null}
                    </Col>
                    <Col sm={3} className="ml-5 mt-5">
                        <Row className="mb-5">
                            <PieChart
                                data={this.state.standard}
                                animate="true"
                                animationEasing="ease-out"
                                lineWidth={80}
                                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                                labelStyle={{
                                    ...style.pie,
                                }}
                                onMouseOver={(e, index) => {
                                    this.setState({ hovered2: index });
                                }}
                                onMouseOut={() => {
                                    this.setState({ hovered2: null });
                                }}
                            />
                        </Row>
                        <h5>Standard Needs</h5>
                        {this.state.hovered2 !== null ?
                            <large style={{ display: "flex", alignItems: "center", color: colors[this.state.hovered2] }}>
                                <span><div style={{ width: "10px", height: "10px", backgroundColor: colors[this.state.hovered2] }} /></span>
                                &emsp;
                                {this.state.standard[this.state.hovered2].title}
                            </large>
                            :
                            null}
                    </Col>
                    <Col sm={3} className="ml-5 mt-5">
                        <Row className="mb-5">
                            <PieChart
                                data={this.state.premium}
                                animate="true"
                                animationEasing="ease-out"
                                lineWidth={80}
                                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
                                labelStyle={{
                                    ...style.pie,
                                }}
                                onMouseOver={(e, index) => {
                                    this.setState({ hovered3: index });
                                }}
                                onMouseOut={() => {
                                    this.setState({ hovered3: null });
                                }}
                            />
                        </Row>
                        <h5>Premium Needs</h5>
                        {this.state.hovered3 !== null ?
                            <large style={{ display: "flex", alignItems: "center", color: colors[this.state.hovered3] }}>
                                <span><div style={{ width: "10px", height: "10px", backgroundColor: colors[this.state.hovered3] }} /></span>
                                &emsp;
                                {this.state.premium[this.state.hovered3].title}
                            </large>
                            :
                            null}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Pie;