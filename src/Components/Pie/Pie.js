import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { Row, Col } from  'react-bootstrap';
import './Pie.css'


class Pie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

    render() {
		return (
            <div className="pie">
                    <Row className="show-grid">
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