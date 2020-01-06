import React, { Component } from 'react';
import './addproduct.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Addproduct extends Component{

    state={
        /*pdtnameField:false,
        descField:false,
        categoryField:false,
        dateField:false,
        unitsField:false*/
        addPdtImg:'',
        pic:'https://www.lifewire.com/thmb/yLFRNBmwLcKDRnkaZ0B0nXgLAQM=/960x640/filters:no_upscale():max_bytes(150000):strip_icc()/upload-2c485b5b6fef41f39a05afb9adfce03e.png'
    }

    upi=()=>{
        alert('upload pdt img')
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.props.pdtnameField && this.props.descField && this.props.dateField && this.props.unitsField)
        {
            this.props.history.push('/product');
            console.log(this.props)
        }
    }

    onInputChange=(e,name)=>{
        if(name==='productname'){
            e.target.value.length>0?this.props.onPdtNameFieldTrue():this.props.onPdtNameFieldFalse()
            localStorage.setItem('productname',e.target.value)
        }
        else if(name==='description'){
            e.target.value.length>0?this.props.onDescFieldTrue():this.props.onDescFieldFalse()
            localStorage.setItem('description',e.target.value)
        }
        else if(name==='category'){
            e.target.value.length>0?this.props.onCategoryFieldTrue():this.props.onCategoryFieldFalse()
            localStorage.setItem('category',e.target.value)
        }
        else if(name==='expirydate'){
            e.target.value.length>0?this.props.onDateFieldTrue():this.props.ondateFieldFalse()
            localStorage.setItem('expirydate',e.target.value)
        }
        else if(name==='unitsinstocks'){
            e.target.value.length>0?this.props.onUnitsFieldTrue():this.props.onUnitsFieldFalse()
            localStorage.setItem('unitsinstocks',e.target.value)
        }
        var newProduct={
            name:localStorage.getItem('productname'),
            stock:localStorage.getItem('unitsinstocks'),
            unitSold:localStorage.getItem('description'),
            expireDate:localStorage.getItem('expirydate'),
        }

        console.log(JSON.stringify(newProduct))
        localStorage.setItem('NewProduct',JSON.stringify(newProduct))
  }

   onAddPdtBtnClick=()=>{
       var pdtlist=JSON.parse(localStorage.getItem('Response')).productsPage.products;
       var list=JSON.parse(localStorage.getItem('NewProduct'));
       var newPdtList=(pdtlist).push(JSON.parse(localStorage.getItem('NewProduct')));
       console.log(list)
       console.log(pdtlist)
       var object=JSON.parse(localStorage.getItem("Response"))
        object.productsPage.products=pdtlist;
       localStorage.setItem("Response",JSON.stringify(object))  
       console.log(JSON.parse(localStorage.getItem('Response')))
   }

   onPicUpload=(e)=>{
    var img=this.state.addPdtImg
    var object=JSON.parse(localStorage.getItem('Response'))
    console.log(e.target.files)
    if(e.target.files && e.target.files[0])
    {
        let reader=new FileReader()
        reader.onload=(e)=>{
            let imgSrc=e.target.result
            this.setState({pic:e.target.result})
            object.img=imgSrc;
            localStorage.setItem("Response",JSON.stringify(object))
            console.log(object)
        }
        reader.readAsDataURL(e.target.files[0])
    }
}

    render(){
    return(
        <div className='addPage'>
            <h2>Add Product</h2>
            <form className='credentialsContainer'>
                <div className='credentials'>
                    <div className='formGroup'>
                        <label htmlFor='name'>Product Name</label>
                        <input id="name" name="name" className='accountFormInput' type="text" onInput={(e)=>this.onInputChange(e,'productname')} required></input>
                    </div>
                    <div className='formGroup'>
                        <label for="description">Description</label>
                        <textarea rows="9" className='accountFormInput' onInput={(e)=>this.onInputChange(e,'description')} required></textarea>
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="category">category</label>
                        <select id="category" className="accountFormInput" onInput={(e)=>this.onInputChange(e,'category')} required>
                        <option value="0">Select Category</option>
                        <option value="1">New Arrival</option>
                        <option value="2">Most Popular</option>
                        <option value="3">Trending</option>
                        </select>
                    </div>
                    <div className='formGroup'>
                        <div className='expireyDateContainer'>
                            <label htmlFor="expiry_date">Expire Date</label>
                            <input id="expiry_date" name="expiry_date" className='accountFormInput' type="date" required onInput={(e)=>this.onInputChange(e,'expirydate')}></input>
                        </div>
                        <div className='UnitsInStocksContainer'>
                            <label for="stock">Units In Stock</label>
                            <input id="stock" name="stock" className='accountFormInput' type="number" onInput={(e)=>this.onInputChange(e,'unitsinstocks')} required></input>
                        </div>
                    </div>
                </div>
                <div className='uploadContainer'>
                    <img className="upload-img" src={this.state.pic}/>
                        <div className='formGroup'>
                            <input id="fileInput"  type="file" accept='image/*' className='uploadInput'  onChange={(e)=>this.onPicUpload(e)}/>
                            <label htmlFor='fileInput' className='uploadInputLabel' onClick={()=>this.upi}>UPLOAD PRODUCT IMAGE</label>
                        </div>
                </div>
                <div className='buttonContainer'>
                    <button type="submit" className="add-pdt-btn" onClick={this.onAddPdtBtnClick}>ADD PRODUCT NOW</button>
                </div>
            </form>
        </div>
    )}}

    const mapGlobalStateToProps=(globalState)=>{
        return{
            pdtnameField:globalState.pdtnameField,
            descField:globalState.descField,
            categoryField:globalState.categoryField,
            dateField:globalState.dateField,
            unitsField:globalState.unitsField
        }
    }

    const mapDispatchToProps=(dispatch)=>{
        return{
            onPdtNameFieldTrue: ()=>{dispatch({type:'PDTNAME_YES'})},
            onPdtNameFieldFalse: ()=>{dispatch({type:'PDTNAME_NO'})},
            onDescFieldTrue: ()=>{dispatch({type:'DESCRIPTION_YES'})},
            onDescFieldFalse: ()=>{dispatch({type:'DESCRIPTION_NO'})},
            onCategoryFieldTrue: ()=>{dispatch({type:'CATEGORY_YES'})},
            onCategoryFieldFalse: ()=>{dispatch({type:'CATEGORY_NO'})},
            onDateFieldTrue: ()=>{dispatch({type:'DATE_YES'})},
            ondateFieldFalse: ()=>{dispatch({type:'DATE_NO'})},
            onUnitsFieldTrue: ()=>{dispatch({type:'UNITS_YES'})},
            onUnitsFieldFalse: ()=>{dispatch({type:'UNITS_NO'})}
        }
    }

    export default connect(mapGlobalStateToProps,mapDispatchToProps)(Addproduct);