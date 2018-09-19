import React from 'react';
import { Card, CardContent, Typography,Snackbar, CardActions, Button, InputAdornment,SnackbarContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import facebook from "../../assests/img/facebook.png";
import gplus from "../../assests/img/gplus.png";
import twitter from "../../assests/img/twitter.png";
import { AccountCircle, Lock } from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {ajaxPost}  from "../../Service/UserService"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginData: {
        email: "",
        password: ""
      },
      open: false,
      vertical: 'top',
      horizontal: 'center'
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    console.log("target event ", event.target.name);
    const { loginData } = this.state;
    loginData[event.target.name] = event.target.value;
    this.setState({ loginData });
  }

  handleSubmit = (event) => {
    const url ='login';
    const dataforLogin = {
      email: this.state.loginData.email,
      password: this.state.loginData.password
    };
    ajaxPost(url,dataforLogin).then(function (response) {
      console.log("successfullly",response);
      localStorage.setItem('user-response',JSON.stringify(response.data));
      location.assign('/home');
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response);
        alert(JSON.stringify("status: "+error.response.status+"   message: "+error.response.data.message));
      } 
      console.log("error is ",error.messages);
      // alert(error);
    });
   }

  render() {
    const { loginData,vertical,horizontal } = this.state;
    return (
      <div className='loginCard'>
        <Card className="log-regi-card">
          <CardContent>
            <div className="title">
              Login
            </div>
            <ValidatorForm
              onSubmit={this.handleSubmit}>
              <TextValidator
                label="Email"
                onChange={this.handleChange}
                name="email"
                value={loginData.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextValidator
                label="password"
                onChange={this.handleChange}
                type="password"
                name="password"
                value={loginData.password}
                validators={['required']}
                errorMessages={['this field is required', 'password is not valid']}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
              <CardActions className="common-align-Center" style={{ marginTop: 10 }}>
                <Button type="Submit" size="small" style={{ backgroundColor: '#fb0' }} >Login</Button>
                <Link to="/registration" className="rmLinkUndrln"><Button size="small" style={{ backgroundColor: '#fb0' }}>Registration</Button></Link>
              </CardActions>
            </ValidatorForm>
          </CardContent>
          <Link to="/resetpassword" className="common-align-Center" style={{ fontSize: 13, margin: 10 }}>Help , I forgot my PassWord</Link>
          <Typography style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
            Or sign in with following services
        </Typography>
          <div className="imges common-align-Center">
            <img src={facebook} alt="gb" className="socialImg" />
            <img src={gplus} alt="gmail" className="socialImg" />
            <img src={twitter} alt="tw" className="socialImg" />
          </div>
        </Card>
        {/* <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        /> */}
      </div>
    );
  }
}
export default Login;
