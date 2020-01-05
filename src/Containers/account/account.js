import React, { Component } from 'react';
import './account.css';
import UpdatePopup from '../../Components/updatePopup/upopup'
import { connect } from 'react-redux';

class Account extends Component{

    state={
        accountType:'',
        accountName:'',
        accountEmail:'',
        accountPassword:'',
        accountPhone:'',
        pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png',
        pageData:JSON.parse(localStorage.getItem("Response")).accountsPage,
    }

    onSelectAccount=(e)=>{
    var account=e.target.value
    var accountData=JSON.parse(localStorage.getItem("Response")).accountsPage
    
    switch(account)
    {
        case 'Admin':this.setState({accountName:accountData.Admin.name})
                     this.setState({accountEmail:accountData.Admin.email})
                     this.setState({pic:accountData.Admin.profilePic})
                     this.setState({accountPassword:accountData.Admin.password})
                     this.setState({accountPhone:accountData.Admin.phone})
                     this.setState({accountType:account})
                     break;
        case 'Editor':this.setState({accountName:accountData.Editor.name})
                     this.setState({accountEmail:accountData.Editor.email})
                     this.setState({pic:accountData.Editor.profilePic})
                     this.setState({accountPassword:accountData.Editor.password})
                     this.setState({accountPhone:accountData.Editor.phone})
                     this.setState({accountType:account})
                     break;
        case 'Merchant':this.setState({accountName:accountData.Merchant.name})
                     this.setState({accountEmail:accountData.Merchant.email})
                     this.setState({pic:accountData.Merchant.profilePic})
                     this.setState({accountPassword:accountData.Merchant.password})
                     this.setState({accountPhone:accountData.Merchant.phone})
                     this.setState({accountType:account})
                     break;
        case 'Customer':this.setState({accountName:accountData.Customer.name})
                     this.setState({accountEmail:accountData.Customer.email})
                     this.setState({pic:accountData.Customer.profilePic})
                     this.setState({accountPassword:accountData.Customer.password})
                     this.setState({accountPhone:accountData.Customer.phone}) 
                     this.setState({accountType:account}) 
     }
    }

    onInputChange=(e,name)=>{
        if(name==='name'){
            this.setState({accountName:e.target.value})
        }
        else if(name==='email'){
            this.setState({accountEmail:e.target.value})
        }
        else if(name==='password'){
            this.setState({accountPassword:e.target.value})
        }
        else if(name==='phone'){
            this.setState({accountPhone:e.target.value})
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        var accountData=JSON.parse(localStorage.getItem("Response"))
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin': accountData.accountsPage.Admin.name=this.state.accountName
                        accountData.accountsPage.Admin.email=this.state.accountEmail
                        accountData.accountsPage.Admin.password=this.state.accountPassword
                        accountData.accountsPage.Admin.phone=this.state.accountPhone
                    break;
        case 'Editor': accountData.accountsPage.Editor.name=this.state.accountName
                        accountData.accountsPage.Editor.email=this.state.accountEmail
                        accountData.accountsPage.Editor.password=this.state.accountPassword
                        accountData.accountsPage.Editor.phone=this.state.accountPhone
                     break;
        case 'Merchant':  accountData.accountsPage.Merchant.name=this.state.accountName
                            accountData.accountsPage.Merchant.email=this.state.accountEmail
                            accountData.accountsPage.Merchant.password=this.state.accountPassword
                            accountData.accountsPage.Merchant.phone=this.state.accountPhone
                     break;
        case 'Customer':  accountData.accountsPage.Customer.name=this.state.accountName
                            accountData.accountsPage.Customer.email=this.state.accountEmail
                            accountData.accountsPage.Customer.password=this.state.accountPassword
                            accountData.accountsPage.Customer.phone=this.state.accountPhone
     }
     localStorage.setItem('Response',JSON.stringify(accountData))
    }

    onDeleteAccountClick=()=>{
        this.setState({pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'})
        var accountData=JSON.parse(localStorage.getItem("Response"))
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin':this.setState({accountName:''})
                    this.setState({accountEmail:''})
                    this.setState({accountPassword:''})
                    this.setState({accountPhone:''})
                    this.setState({accountType:''})
                    delete accountData.accountsPage.Admin
                    break;
        case 'Editor':this.setState({accountName:''})
                    this.setState({accountEmail:''})
                    this.setState({accountPassword:''})
                    this.setState({accountPhone:''})
                    this.setState({accountType:''})
                    delete accountData.accountsPage.Editor
                    break;
        case 'Merchant': this.setState({accountName:''})
                        this.setState({accountEmail:''})
                        this.setState({accountPassword:''})
                        this.setState({accountPhone:''})
                        this.setState({accountType:''})
                        delete accountData.accountsPage.Merchant
                        break;
        case 'Customer':this.setState({accountName:''})
                        this.setState({accountEmail:''})
                        this.setState({accountPassword:''})
                        this.setState({accountPhone:''})
                        this.setState({accountType:''})
                        delete accountData.accountsPage.Customer
                        break;
        default:  alert('Cannot Delete Default Account')
     }
     localStorage.setItem('Response',JSON.stringify(accountData))
     this.setState({pageData:JSON.parse(localStorage.getItem("Response")).accountsPage})
    }

    onDeleteIconClick=()=>{
        this.setState({pic:'https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'})
        var accountData=JSON.parse(localStorage.getItem("Response"))
        var account=this.state.accountType
        console.log(accountData)

        switch(account)
    {
        case 'Admin': accountData.accountsPage.Admin.profilePic='https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'
                     break;
        case 'Editor':accountData.accountsPage.Editor.profilePic='https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'
                     break;
        case 'Merchant':accountData.accountsPage.Merchant.profilePic='https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'
                     break;
        case 'Customer':accountData.accountsPage.Customer.profilePic='https://i.pinimg.com/originals/3b/c9/ba/3bc9bacfb9d042585160732260fe4c63.png'
     }
     localStorage.setItem('Response',JSON.stringify(accountData));
    }

    onPicUpload=(e)=>{
        var account=this.state.accountType
        var object=JSON.parse(localStorage.getItem('Response'))
        console.log(e.target.files)
        if(e.target.files && e.target.files[0])
        {
            let reader=new FileReader()
            reader.onload=(e)=>{
                let imgSrc=e.target.result
                switch(account)
                {
                    case 'Admin':this.setState({pic:imgSrc})
                                    object.accountsPage.Admin.profilePic=imgSrc;
                                    break;
                    case 'Merchant':this.setState({pic:imgSrc})
                                    object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    case 'Editor':this.setState({pic:imgSrc})
                                    object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    case 'Customer':this.setState({pic:imgSrc})
                                    object.accountsPage.Merchant.profilePic=imgSrc;
                                    break;
                    default:alert("Cant change default image");
                                break;
                }
                localStorage.setItem("Response",JSON.stringify(object))
                console.log(object.accountsPage)
                this.setState({pageData:JSON.parse(localStorage.getItem("Response")).accountsPage})
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    render(){
        return(
            <div className='account-page'>
                <div className='acc-container'>
                    <div className='list-Container'>
                        <h2>List of Accounts</h2>
                        <p>Accounts</p>
                        <select className="dropdown" value={this.state.accountType} onInput={(e)=>this.onSelectAccount(e)}>
                            <option value="0">Select Account</option>
                                 {Object.keys(this.state.pageData).map((list,pos)=>
                                    <option value={list} key={pos}>{list}</option>
                                )}
                        </select>
                    </div>
                    <div className='accountCredentialsContainer'>
                        <div className='avatarContainer'>
                            <h2>Change Avatar</h2>
                            <div className='imageContainer'>
                                <img src={this.state.pic} alt="avatar"/>
                                <i className="far fa-trash-alt tm-product-delete-icon" onClick={this.onDeleteIconClick}></i>
                            </div>
                            <input type='file' id='pic' accept="image/*" className='choose-file' onChange={(e)=>this.onPicUpload(e)}/>
                            <label for='pic'>Upload new photo</label>
                        </div>
                        <div className='avatarCredentials'>
                            <h2>Account Settings</h2>
                            <form className="accountsForm" onSubmit={this.handleSubmit}>
                                <div className='accountFormGroup'>
                                    <label htmlFor="accountname">Account Name</label>
                                    <input name="accountname" type="text" className="formInput" id="accountname" onInput={(e)=>this.onInputChange(e,'name')} value={this.state.accountName}/>
                                </div>
                                <div className='accountFormGroup'>
                                    <label htmlFor="accountEmail">Account Email</label>
                                    <input name="accountEmail" type="email" className="formInput" id="email" onInput={(e)=>this.onInputChange(e,'email')} value={this.state.accountEmail}/>
                                </div>
                                <div className='accountFormGroup'>
                                    <label htmlFor="password">Password</label>
                                    <input name="password" type="password" className="formInput" id="password" onInput={(e)=>this.onInputChange(e,'password')} value={this.state.accountPassword}/>
                                </div>
                                <div className='accountFormGroup'>
                                    <label htmlFor='re-enter-password'>Re-enter Password</label>
                                    <input name='re-enter-password' type='password' className='formInput' id='password' onInput={(e)=>this.onInputChange(e,'password')} value={this.state.accountPassword}/>
                                </div>
                                <div className='accountFormGroup'>
                                    <label htmlFor='phone'>Phone</label>
                                    <input name='phone' type='number' className='formInput' id='phone' onInput={(e)=>this.onInputChange(e,'phone')} value={this.state.accountPhone}/>
                                </div>
                                <div className='accountFormGroup'>
                                    <button className='updateBtn' type='submit' onClick={()=>this.state.accountType!==''?this.props.onShowPopup():alert("CANT UPDATE DEFAULT ACCOUNT")}>UPDATE YOUR PROFILE</button>
                                    {this.props.updatePopup?<UpdatePopup/>:null}
                                </div>
                                <div className='deleteButtonContainer'>
                                    <button className='deleteBtn' onClick={()=>this.onDeleteAccountClick()}>DELETE YOUR ACCOUNT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}    // render(){
    // return(
    //      <div className="account-page">
    //          <div className="extra-space">hi</div>
    //          <div className="acc-container">
    //              <div className="loa-con">
    //                  <h2>List of Accounts</h2>
    //                  <p>Accounts</p>
    //                  <select className="dropdown" value={this.state.accountType} onInput={(e)=>this.onSelectAccount(e)}>
    //                      <option value="0">Select Account</option>
    //                         {Object.keys(this.state.pageData).map((list,pos)=>
    //                             <option value={list} key={pos}>{list}</option>
    //                         )}
    //                  </select>
    //              </div>
    //              <div className="as-con">
    //                  <div className="avatar-con">
    //                      <h2>Change Avatar</h2>
    //                      <div className="image-con">
    //                      <img src={this.state.pic} alt="avatar"/>
    //                      <i className="far fa-trash-alt tm-product-delete-icon" onClick={this.onDeleteIconClick}></i>
    //                      </div>
    //                      <input type='file' accept="image/*" className='choose-file' onChange={(e)=>this.onPicUpload(e)}></input>
    //                      <button className="upload-pic-btn">UPLOAD NEW PHOTO</button>
    //                  </div>
    //                  <div className="set-con">
    //                      <h2>Account Settings</h2>
    //                      <form className="acc-form" onSubmit={this.handleSubmit}>
    //                         <div className="acc-form-group">
    //                             <label for="accountname">Account Name</label>
    //                             <input name="accountname" type="text" className="form" id="accountname" onInput={(e)=>this.onInputChange(e,'name')} value={this.state.accountName}></input>
    //                         </div>
    //                         <div className="acc-form-group">
    //                             <label for="email">Account Email</label>
    //                             <input name="email" type="email" className="form" id="email" onInput={(e)=>this.onInputChange(e,'email')}  value={this.state.accountEmail}></input>
    //                         </div>
    //                         <div className="acc-form-group">
    //                             <label for="password">Password</label>
    //                             <input name="password" type="password" className="form" id="password" onInput={(e)=>this.onInputChange(e,'password')} value={this.state.accountPassword}></input>
    //                         </div>
    //                         <div className="acc-form-group">
    //                             <label for="password">Re-enter Password</label>
    //                             <input name="password" type="password" className="form" id="password" onInput={(e)=>this.onInputChange(e,'password')} value={this.state.accountPassword}></input>
    //                         </div>
    //                         <div className="acc-form-group">
    //                             <label for="phone">Phone</label>
    //                             <input name="phone" type="text" className="form" id="phone" onInput={(e)=>this.onInputChange(e,'phone')} value={this.state.accountPhone}></input>
    //                         </div>
    //                         <button className="update-btn" type='submit' onClick={()=>this.state.accountType!==''?this.props.onShowPopup():alert("CANT UPDATE DEFAULT ACCOUNT")}>UPDATE YOUR PROFILE</button>
    //                         {this.props.updatePopup? <UpdatePopup/> :null}
    //                         <div className="acc-form-group">
    //                             <button className="delete-btn" onClick={this.onDeleteAccountClick}>DELETE YOUR ACCOUNT</button>
    //                         </div>
    //                      </form>
    //                  </div>
    //              </div>
    //          </div>
    //          <div className="extra-space">hi</div>
    //      </div>
    // )}
    // }

const mapGlobalStateToProps=(globalState)=>{
    return{
        updatePopup:globalState.updatePopup
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onShowPopup:()=>{dispatch({type:'SHOW_UPOPUP'})}
    }
}

    
export default connect(mapGlobalStateToProps,mapDispatchToProps)(Account);