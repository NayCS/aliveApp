import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom"; import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Blood extends Component {
    state = {
        blood: [],
        glucose: "",
        ketone: ""
    };

    componentDidMount() {
        this.loadBlood();
    }

    loadBlood = () => {
        API.getBloods()
            .then(res =>
                this.setState({
                    blood: res.data,
                    glucose: "",
                    ketone: ""

                })
            )
            .catch(err => console.log(err));
    };

    deleteBlood = id => {
        API.deleteBlood(id)
            .then(res => this.loadBlood())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.glucose && this.state.ketone) {
            API.saveBlood({
                glucose: this.state.glucose,
                ketone: this.state.ketone
            })
                .then(res => this.loadBlood())
                .catch(err => console.log(err));
        }
    }



    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Track your Glucose Ketone Index</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.glucose}
                                onChange={this.handleInputChange}
                                name="glucose"
                                placeholder="Glucose (Required in (mg/dL))"
                            />
                            <Input
                                value={this.state.ketone}
                                onChange={this.handleInputChange}
                                name="ketone"
                                placeholder="Ketones (Required in (mmol/L))"
                            />

                            <FormBtn
                                disabled={!(this.state.glucose && this.state.ketone)}
                                onClick={this.handleFormSubmit}
                            >
                                Get your GKI
                  </FormBtn>
                        </form>
                    </Col>

                    <Col size="md-6 sm12">
                        <Jumbotron>
                            <h1>Your Blood Metrics</h1>
                        </Jumbotron>
                        {this.state.blood.length ? (
                            <List>
                                {this.state.blood.map(blood => (
                                    <ListItem key={blood._id}>
                                        <Link to={"../bloods/" + blood._id}>
                                            <strong>
                                                {(blood.glucose / 18.2) / (blood.ketone)}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => this.deleteBlood(blood._id)} />
                                    </ListItem>
                                ))}

                            </List>
                        ) : (
                                <h3>No resutls to Display</h3>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Blood;

