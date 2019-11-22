import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
    state = {
        blood: {}
    };

    // When this component mounts, grab the blood with the _id of this.props.match.params.
    // e.g. localhost:3002/blood/599dcb67f0f16317844583fc

    componentDidMount() {
        API.getBlood(this.PaymentResponse.match.params.id)
            .then(res => this.setState({ blood: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.blood.glucose}
                            </h1>
                            <br></br>
                            <h1>
                                {this.state.blood.ketone}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Main Page</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Detail;