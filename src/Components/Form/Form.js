import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
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
			file: '',
			first_name: '',
			last_name: '',
			bio: '',
			dob: new Date(),
			university: '',
			course: '',
			current_location: '',
			college_year: 1,
			passout: new Date(),
			mobile: 0,
			oldmobile: 0,
			userid: '',
			user:'',
			error:'',
			usertype: '',
			coa_number:0
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
	}



	render() {
		return (
			<div className="mt-5 mb-5 formc">
				<Container>
					<hr className="mt-0 mb-1" />
					<h5 className="ml-5">Fill up the form</h5>
					<hr className="mt-0" />
					<hr className="mt-0 mb-1" />
					<h5 className="A42dftag">About</h5>
					<hr className="mt-0" />
					<Row>
						<Col sm={3}>
							<small>First Name</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										type="text"
										value={this.state.first_name}
										onChange={e => this.setState({ first_name: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Last Name</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										type="text"
										value={this.state.last_name}
										onChange={e => this.setState({ last_name: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Bio</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										as="textarea"
										rows="1"
										value={this.state.bio}
										onChange={e => this.setState({ bio: e.target.value })}
										placeholder="Bio.."
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Date of Birth</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									
									<Form.Text className="text-muted">
										<small>We'll never share your DOB with anyone else.</small>
									</Form.Text>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<hr className="mt-0 mb-1" />
					<h5 className="A42dftag">University/College</h5>
					<hr className="mt-0" />
					<Row>
						<Col sm={3}>
							<small>University/College</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										type="text"
										placeholder="university/college.."
										value={this.state.university}
										onChange={e => this.setState({ university: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Course</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										type="text"
										placeholder="Course.."
										value={this.state.course}
										onChange={e => this.setState({ course: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Location</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									<Form.Control
										size="sm"
										type="text"
										placeholder="Location.."
										value={this.state.current_location}
										onChange={e => this.setState({ current_location: e.target.value })}
									/>
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<small>Which year of college</small>
						</Col>
						<Col sm={9}>
							<Form.Group>
								<Form.Control as="select" size="sm" className="mb-0" value={this.state.college_year} onChange={e => this.setState({ college_year: e.target.value })}>
									<option value={1}>1 Year</option>
									<option value={2}>2 Year</option>
									<option value={3}>3 Year</option>
									<option value={4}>4 Year</option>
									<option value={5}>5 Year</option>
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
					<Row className="mt-3">
						<Col sm={3}>
							<small>Expected year of passing out</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Group>
									
								</Form.Group>
							</Form>
						</Col>
					</Row>
					<hr className="mt-0 mb-1" />
					<h5 className="A42dftag">Contact</h5>
					<hr className="mt-0" />
					<Row className="mt-3">
						<Col sm={3}>
							<small>Mobile Number</small>
						</Col>
						<Col sm={9}>
							<Form>
								<Form.Control
									size="sm"
									type="number"
									placeholder="9876543210"
									onChange={this.validateMobile}
									value={this.state.mobile}
								/>
							</Form>
							<small style={styles.error}>{this.state.error}</small>
						</Col>
					</Row>
					<hr className="mt-3 mb-2" />
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
