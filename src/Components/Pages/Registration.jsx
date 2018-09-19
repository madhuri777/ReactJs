import React from 'react';
import { Card, CardContent, CardActions, Button, SnackbarContent } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ajaxPost } from "../../Service/UserService"



class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationData: {
                name: "",
                email: '',
                password: "",
                phoneNumber: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        const { registrationData } = this.state;
        registrationData[event.target.name] = event.target.value;
        this.setState({ registrationData });
    }
    handleSubmit = () => {
        const regData = this.state.registrationData;
        const url = "registration";
        ajaxPost(url, regData).then(function (response) {
            console.log( response.data);
            location.assign('/login');
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response);
                alert(JSON.stringify("status: " + error.response.status + "   message: " + error.response.data.message));
                location.assign('/registration');
            }
            console.log("error is ", error);
            alert(error);
        });
        this.setState({
            registrationData: {
                name: "",
                email: '',
                password: "",
                phoneNumber: ""
            }
        });
    }
    render() {
        const { registrationData } = this.state;
        return (
            <div className="loginCard">
                <Card className="log-regi-card">
                    <CardContent>
                        <div className="title" component="h6">
                            Registration
                            </div>
                        <ValidatorForm onSubmit={this.handleSubmit}>
                            <TextValidator
                                id="user"
                                label="UserName"
                                onChange={this.handleChange}
                                name="name"
                                value={registrationData.name}
                                validators={['required']}
                                errorMessages={['this field is required', 'UserName is not valid']}
                            />
                            <TextValidator
                                id="email"
                                label="Email"
                                onChange={this.handleChange}
                                name="email"
                                value={registrationData.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                            <TextValidator
                                id="pass"
                                label="password"
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                value={registrationData.password}
                                validators={['required']}
                                errorMessages={['this field is required', 'password is not valid']}
                            />
                            <TextValidator
                                id="phone"
                                label="PhoneNumber"
                                onChange={this.handleChange}
                                type="number"
                                name="phoneNumber"
                                value={registrationData.phoneNumber}
                                validators={['required']}
                                errorMessages={['this field is required', 'PhoneNumber is not valid']}
                            />
                            <CardActions className="loginCard" style={{ marginTop: 5 }}>
                                <Button type="submit" size="small" style={{ backgroundColor: '#fb0' }}>Registration</Button>
                            </CardActions>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default Registration;