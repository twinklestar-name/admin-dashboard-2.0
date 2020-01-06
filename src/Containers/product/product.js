import React, { Component } from 'react';
import './product.css';
import {Link} from 'react-router-dom';
import Categories from '../../Components/categories/Categories';
import ProductList from '../../Components/productList/productlist';
import Popup from '../../Components/Popup/popup';
import { connect } from 'react-redux';

class Product extends Component{

    state={
        pageData:JSON.parse(localStorage.getItem("Response")).productsPage
    }
//-----------CHANGE---------------
//PASSED THROUGH PROPS
    onChkBoxClick=(selectedProductId)=>{
        console.log(this.state.pageData.products)
        let array=this.state.pageData.products
        array[selectedProductId].selected=!array[selectedProductId].selected
        let object=this.state.pageData
        object.products=array
        this.setState({
            pageData:object
        })
    }
//------------------CHANGE----
//MADE A COMMON DELETE SINGLE ROW FUNCTION AND PASSED THROUGH PROPS
    onDeleteIconClick=(listName,id)=>{
        let tempObject=JSON.parse(localStorage.getItem("Response"))
        let array
        if(listName==='productList')
        {    
            array=this.state.pageData.products
            array.splice(id,1)
            tempObject.productsPage.products=array    
        } 
        else if(listName==='categoryList')
        {
            array=this.state.pageData.categories
            array.splice(id,1)
            tempObject.productsPage.categories=array
        }         
        
        localStorage.setItem("Response",JSON.stringify(tempObject))
        
        this.setState({
            pageData:tempObject.productsPage
        })
    }
//---------CHANGE-----------------
//DELETE SELECTED ROWS PASSED THROUGH PROPS
    onDeleteSelectedBtnClick=()=>{
        let object=JSON.parse(localStorage.getItem("Response"))
        let list=this.state.pageData.products
        list=list.filter(li=>!li.selected)
        object.productsPage.products=list
        localStorage.setItem("Response",JSON.stringify(object))
        this.setState({
            pageData:object.productsPage
        })
    }

    render()
    {
        return(
            <div className='productPage'>
                <div className='productListContainer'>
                    <div className='productTableContainer'>
                        <ProductList propsToPass={
                        {
                            productListData:this.state.pageData.products,
                            onClickingCheckbox:this.onChkBoxClick,
                            onDeleteSingleRow:this.onDeleteIconClick
                        }
                        }/>
                    </div>
                    <div className='buttonContainer'>
                        <Link to={'/addproduct'}><button className="add-btn">ADD NEW PRODUCT</button></Link>
                        <button className="de-se-btn" onClick={(e)=>this.onDeleteSelectedBtnClick(e)}>DELETE SELECTED PRODUCTS</button>
                    </div>
                </div>
                <div className='categoryListContainer'>
                    <h2>Product Categories</h2>
                    <div className='categoryTableContainer'>
                        <table className='categoryTable'>
                            <Categories propsToPass={
                                {
                                    categoriesPageData:this.state.pageData.categories,
                                    onDeleteSingleRow:this.onDeleteIconClick
                                }
                            }         
                            />
                        </table>
                    </div>
                    <div className='categoryButtonContainer'>
                        <Link to={'/product/popup'}><button className="category-btn" onClick={this.props.onShowPopup}>ADD NEW CATEGORY</button></Link>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapGlobalStateToProps=(globalState)=>{
    return{
        showPopup:globalState.showPopup
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onShowPopup: ()=>{dispatch({type:'SHOW_POPUP'})}
    }
}

export default connect(mapGlobalStateToProps,mapDispatchToProps)(Product);