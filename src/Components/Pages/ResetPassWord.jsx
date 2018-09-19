import React from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {ajaxPost}  from "../../Service/UserService"


class ResetPassWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forgetPass:{
                email: ""
            }          
        }
    }
    handleChange = (event) => {
        const {forgetPass}=this.state;
        forgetPass[event.target.name]=event.target.value;
        this.setState({forgetPass });
        console.log("forget password ", this.state.forgetPass);
    }
    handleSubmit = () => {
        const forgetData = this.state.forgetPass;
        console.log("email for forget password ", forgetData);
        const url="forgetpassword";
        ajaxPost(url,forgetData).then(function (response) {
            console.log("successfullly registration ",response);
            alert("Link sent on email id to reset password")
          })
          .catch(function (error) {
            console.log("error is ",error);
            alert(error);
          });

    }
    render() {
        const { forgetPass } = this.state;
        return (
            <div className='loginCard'>
                <Card className="log-regi-card">
                    <CardContent>
                        <div className="title">
                            ResetPassWord
                            </div>
                        <ValidatorForm
                            onSubmit={this.handleSubmit}>
                            <TextValidator
                                id="email"
                                label="Email"
                                onChange={this.handleChange}
                                name="email"
                                value={forgetPass.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                            <CardActions className="loginCard">
                                <Button type="submit" style={{ backgroundColor: '#fb0' }}>ResetPassWord</Button>
                            </CardActions>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default ResetPassWord;