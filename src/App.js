import React, { Component }  from 'react';
import classes from './App.module.css';
import Navbar from './Containers/navbar/navbar';
import Footer from './Containers/footer/footer';
import Login from './Containers/login/login';
import Dashboard from './Containers/home/home';
import Product from './Containers/product/product';
import Account from './Containers/account/account';
import Addproduct from './Containers/addproduct/addproduct';
import Popup from './Components/Popup/popup';
import axios from 'axios';
import { Route, BrowserRouter, Switch }  from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then(response=>{
      console.log(response.data)
      response.data.productsPage.products.map(item=>item.selected=false)
      localStorage.setItem("Response",JSON.stringify(response.data))
      this.props.onUserLoggedIn();
    })
    .catch(err=>{
      console.log(err + " =>please refresh the page")
    })
  }

  render(){
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Navbar/>
      <Switch>
            <Route path="/product/popup" component={Popup} />
            <Route path="/addproduct" component={Addproduct} />
            <Route path="/account" component={Account} />
            <Route path="/product" component={Product} />
            <Route path="/home" component={Dashboard} />
            <Route path="/" component={Login} />
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}}

export default App;
