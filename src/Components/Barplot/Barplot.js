import React from 'react'
import './Barplot.css'
import { Container, Row, Col, Form } from "react-bootstrap";


class Barplot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barplot: 0
        }
    }
    render() {
        return (
            <div className="plot">
                <Container>
                <h2>Barplot</h2>
                <Row>
                        Choose the need: &nbsp; &nbsp;
                        <Form.Group>
                            <Form.Control as="select" size="sm" className="mb-0" onChange={e => this.setState({ barplot: e.target.value })}>
                                <option value={0}>Basic Need</option>
                                <option value={1}>Standard Need</option>
                                <option value={2}>Premium Need</option>
                            </Form.Control>
                        </Form.Group>
                </Row>
                <Row>
                    <Col>
                    <br/><br/>
                        {this.state.barplot == 0 ?
                            <img className="barplot" src="https://fathomless-ridge-71442.herokuapp.com/barplot-basic" alt="Basic Need" />
                            : this.state.barplot == 1 ?
                                <img className="barplot" src="https://fathomless-ridge-71442.herokuapp.com/barplot-standard" alt="Standard Need" />
                                : <img className="barplot" src="https://fathomless-ridge-71442.herokuapp.com/barplot-premium" alt="Premium Need" />
                        }</Col>
                </Row>
                </Container>
            </div>
        )
    }
}
export default Barplot;