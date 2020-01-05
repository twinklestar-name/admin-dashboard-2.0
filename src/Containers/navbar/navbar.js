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
        
    //             {/*
    //             {this.state.width<=1150?(this.state.displayMenu?<div className="collapse">
    //                 <ul className="nav">
    //                     <li className="item" >
    //                     {this.props.userLoggedInStatushi?
    //                     <Link to={'/home'} onClick={this.onActiveDashboardClk}>
    //                         <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
    //                             <i className="fas fa-tachometer-alt"></i>
    //                             <p>Dashboard</p>
    //                         </div>
    //                     </Link>
    //                     :
    //                     <Link to={'/login'} onClick={this.onActiveDashboardClk}>
    //                         <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
    //                             <i className="fas fa-tachometer-alt"></i>
    //                             <p>Dashboard</p>
    //                         </div>
    //                     </Link>
    //                     }
    //                     </li>
    //                     <li className="item">
    //                     {this.props.userLoggedInStatushi?
    //                     <Link to={'/product'} onClick={this.onActiveProductClk}>
    //                         <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
    //                             <i className="fas fa-shopping-cart"></i>
    //                             <p>Products</p>
    //                         </div>
    //                     </Link>
    //                     :
    //                     <Link to={'/login'} onClick={this.onActiveProductClk}>
    //                         <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
    //                             <i className="fas fa-shopping-cart"></i>
    //                             <p>Products</p>
    //                         </div>
    //                     </Link>}
    //                     </li>
    //                     <li className="item">
    //                     {this.props.userLoggedInStatushi?
    //                     <Link to={'/account'} onClick={this.onActiveAccountClk}>
    //                         <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
    //                             <i className="fas fa-user"></i>
    //                             <p>Accounts</p>
    //                         </div>
    //                     </Link>
    //                     :
    //                     <Link to={'/login'} onClick={this.onActiveAccountClk}>
    //                         <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
    //                             <i className="fas fa-user"></i>
    //                             <p>Accounts</p>
    //                         </div>
    //                     </Link>}
    //                     </li>
    //                 </ul>
    //                 <ul className="nav">
    //                     <li className="item">
    //                     <Link to={'/'}><div className="link">
    //                         {console.log(this.props.userLoggedInStatushi)}
    //                     {this.props.userLoggedInStatushi?
    //                     <div className="admin" onClick={this.props.onUserLoggedOut}>Admin,<b>Logout</b></div>
    //                     :
    //                     <div className="admin" /*onClick={this.props.onUserLoggedOut()}*//*><b></b></div>}
    //                         </div>
    //                     </Link>
    //                     </li>
    //                 </ul>
    //             </div>:null):<div className="collapse">
    //                 <ul className="nav">
    //                     <li className="item">
    //                     {this.props.userLoggedInStatushi?
    //                     <Link to={'/home'} onClick={this.onActiveDashboardClk}>
    //                         <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
    //                             <i className="fas fa-tachometer-alt"></i>
    //                             <p>Dashboard</p>
    //                         </div>
    //                     </Link>
    //                     :
    //                     <Link to={'/login'} onClick={this.onActiveDashboardClk}>
    //                         <div className={[this.state.activeDashboard?'active':'link'].join(' ')}>
    //                             <i className="fas fa-tachometer-alt"></i>
    //                             <p>Dashboard</p>
    //                         </div>
    //                     </Link>
    //                     }
    //                     </li>
    //                     <li className="item">
    //                     {this.props.userLoggedInStatushi?
    //                     <Link to={'/product'} onClick={this.onActiveProductClk}>
    //                         <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
    //                             <i className="fas fa-shopping-cart"></i>
    //                             <p>Products</p>
    //                         </div>
    //                     </Link>
    //                     :
    //                     <Link to={'/login'} onClick={this.onActiveProductClk}>
    //                         <div className={[this.state.activeProduct?'active':'link'].join(' ')}>
    //                             <i className="fas fa-shopping-cart"></i>
    //                             <p>Products</p>
    //                         </div>
    //                     </Link>}
    //                     </li>
    //                     <li className="item">
    //                     {this.props.userLoggedInStatushi?
    //                     <Link to={'/account'} onClick={this.onActiveAccountClk}>
    //                         <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
    //                             <i className="fas fa-user"></i>
    //                             <p>Accounts</p>
    //                         </div>
    //                     </Link>
    //                     :
    //                     <Link to={'/login'} onClick={this.onActiveAccountClk}>
    //                         <div className={[this.state.activeAccount?'active':'link'].join(' ')}>
    //                             <i className="fas fa-user"></i>
    //                             <p>Accounts</p>
    //                         </div>
    //                     </Link>}
    //                     </li>
    //                 </ul>
    //                 <ul className="nav">
    //                     <li className="item">
    //                     <Link to={'/'}><div className="link" >
    //                     {this.props.userLoggedInStatushi?
    //                     <div className="admin" onClick={this.props.onUserLoggedOut}>Admin,<b>Logout</b></div>
    //                     :
    //                     <div className="admin" /*onClick={this.props.onUserLoggedOut()}*//*><b></b></div>}
    //                         </div>
    //                     </Link>
    //                     </li>
    //                 </ul>
    //             </div>}*/}
    // )}}

// <NavLink to = {'/home'} onClick={(event)=>!this.props.userLoggedInStatushi?event.preventDefault():null} activeClassName='active'>
/* <li className='navLink'>
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
</NavLink> */