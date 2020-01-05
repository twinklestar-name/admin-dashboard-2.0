import React from 'react';
import './upopup.css';
import { connect } from 'react-redux';

const UpdatePopup=(props)=>{

        return(
            <div  className='upopup-box'>
                <div><i class="fas fa-times" onClick={props.onCrossClick}></i></div>
                <div className='upopup-message'>'Information Updated Successfully!'</div>
            </div>
        )

}

const mapDispatchToProps=(dispatch)=>{
    return{
        onCrossClick: ()=>{dispatch({type:'HIDE_UPOPUP'})}
    }
}

export default connect(null,mapDispatchToProps)(UpdatePopup)