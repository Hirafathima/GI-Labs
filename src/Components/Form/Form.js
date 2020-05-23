import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './Form.css'
const styles = {
	error: {
		color: "red"
	}
};

class Fillform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: 0,
			district: '',
			occupation: '',
			basic:'',
			standard:'',
			premium:'',
			serious:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	async handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		let userData = this.state;
		
		const response = await fetch("/post_survey", {
			method: "POST",
			headers: {
				"Content-Type" : "application/json"
			},
			body: JSON.stringify(userData)
		});

		if(response.ok){
			console.log("success, survey updated")
		}
	}


	render() {
		return (
			<div className="mt-5 mb-5 formc">
				<Container>
					<h2>Citizen Needs</h2>
					<hr className="mt-0 mb-1" />
					<h6 >The whole purpose of this form is to satisfy the requirement of public data for a data science
					internship and the information collected will be solely used for the fulfilment of
					the Citizens needs mapping project. Your sincere contribution and time would greatly
					help in this initiative for a social cause and would be greatly appreciated. Thank you!
					<br /> <br /> Note: There are 3 kinds of needs required for this project from each citizens.
					You can choose a need from the drop down which you feel that could
 					bring a considerably great developmental change in your locality in the near future
					 </h6>
					<hr className="mt-0" />
					<Row>
						<Col sm={3}>
							<small>Name</small>
						</Col>
						<Col sm={3}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										type="text"
										onChange={e => this.setState({ name: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Age</small>
						</Col>
						<Col sm={1}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										type="text"
										onChange={e => this.setState({ age: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>District</small>
						</Col>
						<Col sm={9}>
							<Form.Group>
								<select variant="primary" className="mb-0" onChange={e => this.setState({ district: e.target.value })}>
									<option value="Trivandrum">Trivandrum</option>
									<option value="Thrissur">Thrissur</option>
									<option value="Ernakulam">Ernakulam</option>
									<option value="Kozhikode">Kozhikode</option>
								</select>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Occupation</small>
						</Col>
						<Col sm={9}>
							<Form.Group>
								<select className="mb-0" onChange={e => this.setState({ occupation: e.target.value })}>
									<option value="Teacher">Teacher</option>
									<option value="Engineer">Engineer</option>
									<option value="Housewife">Housewife</option>
									<option value="Doctor">Doctor</option>
									<option value="Student">Student</option>
									<option value="Jobless">Unemployed</option>
								</select>
							</Form.Group>
						</Col>
					</Row>
					<hr className="mt-0 mb-3" />
					<Row>
						<Col sm={3}>
							<h5 title="choose the most required one from list for your locality">
								Basic Need
							</h5>
						</Col>
						<Col sm={9}>
							<Form.Group>
								<select className="mb-0" onChange={e => this.setState({ basic: e.target.value })}>
									<option value="Primary school">Primary school</option>
									<option value="Public toilet">Public toilet</option>
									<option value="Streetlight">Streetlight</option>
									<option value="Health clinic">Health clinic</option>
									<option value="Municipal water supply">Municipal water supply</option>
									<option value="Road reconstruction">Road reconstruction</option>
									<option value="Avoid power cuts">Avoid power cuts</option>
								</select>
							</Form.Group>
						</Col>
					</Row>
					<hr className="mt-2 mb-2" />
					<Row>
						<Col sm={3}>
							<h5 title="choose the most required one from list for your locality">
								Standard Need
							</h5>
						</Col>
						<Col sm={9}>
							<Form.Group>
								<select className="mb-0" onChange={e => this.setState({ standard: e.target.value })}>
									<option value="Public Library">Public Library</option>
									<option value="Taxi service">Taxi service</option>
									<option value="Public park & playgrounds">Public park & playgrounds</option>
									<option value="Traffic control">Traffic control</option>
									<option value="Night patrol">Night patrol</option>
									<option value="Bus waiting shed">Bus waiting shed</option>
									<option value="Better disaster prevention schemes">Better disaster prevention schemes</option>
								</select>
							</Form.Group>
						</Col>
					</Row>
					<hr className="mt-2 mb-2" />
					<Row>
						<Col sm={3}>
							<h5 title="choose the most required one from list for your locality">
								Premium Need
							</h5>
						</Col>
						<Col sm={9}>
							<Form.Group>
								<select className="mb-0" onChange={e => this.setState({ premium: e.target.value })}>
									<option value="Gym">Gym</option>
									<option value="Theatre">Theatre</option>
									<option value="Tourist Resorts">Tourist Resorts</option>
									<option value="Metro rail services">Metro rail services</option>
									<option value="Free wifi">Free wifi</option>
									<option value="Turf">Turf</option>
								</select>
							</Form.Group>
						</Col>
					</Row>
					<hr className="mt-2 mb-2" />
					<Row>
						<Col sm={3}>
							<small>
							Mention a serious public issue faced in your locality, if any.
							</small>
						</Col>
						<Col sm={9}>
							<Form.Group>
								<select className="mb-0" onChange={e => this.setState({ serious: e.target.value })}>
									<option value="Stray dogs">Stray dogs</option>
									<option value="Theft attacks">Theft attacks</option>
									<option value="Broken sewage">Broken sewage</option>
									<option value="Damaged roads">Damaged roads</option>
								</select>
							</Form.Group>
						</Col>
					</Row>
					<div className="d-flex flex-row-reverse bd-highlight">
						<div className="p-2 bd-highlight">
							<Button variant="primary" type="submit" size="sm" onClick={this.handleSubmit} block> Submit </Button>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default Fillform;
