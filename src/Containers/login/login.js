import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';

class Login extends Component{

    state={
        username:true,
        password:true
    }

    // state={
    //     userField:false,
    //     passwordField:false,
    //     loggedInStatus:false
    // }

    /*loggedInStatus=()=>{
        localStorage.setItem('userLoggedInStatus',true);
        this.setState({loggedInStatus:true})
    }*/

    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.props.userField && this.props.passwordField)
        {
            this.props.history.push('/home');
            this.props.onUserLoggedIn()
        }
    }

    onInputChange=(e,name)=>{
        if(name==='username'){
            var name=e.target.value;
            var reg=/([a-zA-Z]+[0-9]+)/
            var test=reg.test(name)
            if(test)
            {
            e.target.value.length>0?this.props.onUserFiedTrue():this.props.onUserFiedFalse()
            this.setState({username:true})
            }
            else
            {
                this.setState({username:false})
            }
        }
        else if(name==='password'){
            var str=e.target.value;
            var reg=/([a-zA-Z0-9]+@#)/
            var test=reg.test(str)
             if(test)
             {
                e.target.value.length>0?this.props.onPasswordFiedTrue():this.props.onPasswordFiedFalse()
                this.setState({password:true})
             }
             else
             {
                 this.setState({password:false})
            }
        }
        }

    render(){
    return(
        <div className="login-page">
           <div className="log-container">
            <div className="row">
                <div className="col">
                    <div className="tm-bg-primary-dark">
                        <div className="row">
                            <div className="col">
                                <h2 className="log-title">Welcome to Dashboard,Login</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <form className="login-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input name="username" type="text" minLength='6' maxLength='10' className="form-input validate" id="username" onInput={(e)=>this.onInputChange(e,'username')} required></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input name="password" type="password" minLength='6' maxLength='10' className="form-input validate" id="password" onInput={(e)=>this.onInputChange(e,'password')} required></input>
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="submit-btn" /*onClick={this.props.onUserLoggedIn}*/>Login</button>
                                    {this.state.username?null:<div className='u-message'><i className="fas fa-exclamation-triangle"></i>Allowed Characters: [a-zA-Z] [0-9] and Username should not start with a number</div>}
                                    {this.state.password?null:<div className='p-message'><i className="fas fa-exclamation-triangle"></i>Required Characters: [a-zA-Z or 0-9] @ #  and password should start with any alphabet or number</div>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    )}
}

const mapGlobalStateToProps=(globalState)=>{
    return{
        userField:globalState.userField,
        passwordField:globalState.passwordField,
        userLoggedInStatus:globalState.loggedInStatus
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onUserLoggedIn: ()=>{dispatch({type:'USER_LOGIN'})},
        onUserFiedTrue: ()=>{dispatch({type:'USERFIELD_YES'})},
        onUserFiedFalse: ()=>{dispatch({type:'USERFIELD_NO'})},
        onPasswordFiedTrue: ()=>{dispatch({type:'PASSWORDFIELD_YES'})},
        onPasswordFiedFalse: ()=>{dispatch({type:'PASSWORDFIELD_NO'})}
    }
}

export default connect(mapGlobalStateToProps,mapDispatchToProps)(Login);