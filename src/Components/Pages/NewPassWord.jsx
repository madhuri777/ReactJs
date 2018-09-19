import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { ajaxPut } from "../../Service/UserService"


class NewPassWord extends React.Component {
    constructor() {
        super();
        this.state = {
            forgetPass: {
                newPassWord: ""
            }
        }
    }

    handleChange = (event) => {
        console.log("new password ", event.target.value);
        const { forgetPass } = this.state;
        forgetPass[event.target.name] = event.target.value;
        this.setState({ forgetPass });
        const path = window.location.href;
        const p = new URL(window.location.href);
        const token = p.searchParams.get("token");
        console.log("path ", token);
    }
    handleSubmit = () => {
        const forgetData = this.state.forgetPass;
        console.log("new pass ", this.state.forgetPass);
        const p = new URL(window.location.href);
        const token = p.searchParams.get("token");
        const url = 'resetpassword/' + token;
        ajaxPut(url, forgetData).then(function (response) {
            console.log("resetpassword registration ", response);
            alert("suucessfullay reset password")
        })
            .catch(function (error) {
                console.log("error is ", error);
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
                            NewPassWord
                            </div>
                        <ValidatorForm
                            onSubmit={this.handleSubmit}>
                            <TextValidator
                                id="password"
                                label="Enter new Password"
                                onChange={this.handleChange}
                                name="newPassWord"
                                value={forgetPass.newPassWord}
                                type="password"
                            />
                            <CardActions className="loginCard">
                                <Button type="submit" style={{ backgroundColor: '#fb0' }}>Conform</Button>
                            </CardActions>
                        </ValidatorForm>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
export default NewPassWord;
