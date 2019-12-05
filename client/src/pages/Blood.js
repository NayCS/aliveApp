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
            <Container fluid style={{ BackgroundColor: "#008080" }} >
                <Row>
                    <Col size="md-7">
                        <Jumbotron>
                            <h1>Track your Glucose Ketone Index</h1>
                        </Jumbotron>
                        <form >

                            <label>
                                <strong>
                                    <h2>What is GKI?</h2>
                                </strong>
                            </label>

                            <label>

                                <h4>Glucose Ketone Index (GKI), is a simple formula that tracks the
                                     ratio of blood glucose to ketones as a single value. But more important,
                                     it’s a biomarker for tracking your metabolic health as well as your level of ketosis,
                                          and it’s easily tracked if you have a blood glucose and ketones testing meter.</h4>

                            </label>


                            <label>
                                <strong>
                                    <h2>Why is GKI important to you?</h2>
                                </strong>
                            </label>

                            <label>

                                <h4>Once you know your GKI, you can use it as a tool to help track your ketosis and general metabolic status.
                                     In the medical industry, it is also becoming an increasingly important measure for therapeutic ketosis
                                     used to manage chronic health conditions, including certain types of cancer, type 2 diabetes, obesity,
                                      Alzheimer’s disease, Parkinson’s, chronic inflammatory diseases, epilepsy, insulin resistance, and
                                      traumatic brain injury!

                                      </h4>

                            </label>

                            <label>
                                <strong>
                                    Input Fasting Glucose level:
                            </strong>
                            </label>

                            <Input
                                value={this.state.glucose}
                                onChange={this.handleInputChange}
                                name="glucose"
                                placeholder="Glucose (Required in (mg/dL))"
                            />
                            <label>
                                <strong>
                                    Input Fasting Ketone level:
                            </strong>
                            </label>

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

                    <Col size="md-5 sm12">
                        <Jumbotron>
                            <h1>Your Blood Metrics</h1>
                        </Jumbotron>
                        <label>
                            <strong>
                                Your Glucose Ketone Index Level:
                            </strong>
                        </label>

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

