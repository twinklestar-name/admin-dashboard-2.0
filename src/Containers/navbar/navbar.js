import React, { Component } from 'react';
import './navbar.css';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component{

    state={
        //loggedInStatus:localStorage.getItem('userLoggedInStatus')==='true',
        displayMenu:true,
        width:window.innerWidth,
        activeDashboard:false,
        activeProduct:false,
        activeAccount:false
    }

    onLogoutClicked=()=>{
        this.props.onUserLoggedOut();
        this.props.history.push("/")
    }
    /*userLoggedOut=()=>{
        localStorage.setItem('userLoggedInStatus',false)
        this.setState({loggedInStatus:false})
    }*/

    updateDimensions=()=>{
        if(window.innerWidth<720)
        {
            this.setState({displayMenu:false})
        }
        else
        {
            this.setState({displayMenu:true})
        }
    }

    componentDidMount(){
        this.updateDimensions()
        window.addEventListener('resize',this.updateDimensions())
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.updateDimensions())
    }

     displayCollapse=()=>{
        this.setState({displayMenu:!this.state.displayMenu})
        console.log(this.state.width)
    }

    render(){
        return(
            <nav className='navbar'>{console.log(this.props)}
            <div className='navbarHeading'>
                <h1>PRODUCT ADMIN</h1>
            </div>
            <div className='toggleContainer'>
                <i className="fas fa-bars tm-nav-icon" onClick={()=>this.displayCollapse()}></i>
            </div>
            {this.state.displayMenu?
            <ul className='navList' id="nav">
            <div className='linkContainer'>
            <NavLink to = {'/home'} onClick={(event)=>!this.props.userLoggedInStatushi?event.preventDefault():null} activeClassName='active'>
                <li className='navLink'>
                    <i className="fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                </li>
            </NavLink>
            <NavLink to= {'/product'} onClick={(event)=>!this.props.userLoggedInStatushi?event.preventDefault():null} activeClassName='active'>
                <li className='navLink'>
                    <i className="fas fa-shopping-cart"></i>
                    <p>Products</p>
                </li>
            </NavLink>
            <NavLink to= {'/account'} onClick={(event)=>!this.props.userLoggedInStatushi?event.preventDefault():null} activeClassName='active'>
                <li className='navLink'>
                    <i className="fas fa-user"></i>
                    <p>Accounts</p>
                </li>
            </NavLink>
            </div>
                <div className='loginStatusContainer'>
                    {this.props.userLoggedInStatushi?<p onClick={()=>{this.onLogoutClicked()}}>Admin,<b>Logout</b></p>:null}
                </div>
            </ul>:null}
        </nav>
        )
    }
}
const mapGlobalStateToProps=(globalState)=>{
    return{
        userLoggedInStatushi:globalState.loggedInStatus,
        //displayMenu:globalState.displayMenu,
        //width:globalState.width
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onUserLoggedOut: ()=>{dispatch({type:'USER_LOGOUT'})},
        //onDisplayMenu: ()=>{dispatch({type:'MENU_SHOW'})}
    }
}


export default withRouter(connect(mapGlobalStateToProps,mapDispatchToProps)(Navbar));