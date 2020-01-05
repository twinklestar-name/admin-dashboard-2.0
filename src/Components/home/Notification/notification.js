import React from 'react';
import './notification.css'

const Notification=()=>{

    let notification=JSON.parse(localStorage.getItem("Response")).dasbhoardPage.notifications.map((item,pos)=>{
        return(
                <div key={pos} className="notification">
                    <img className="noti-images" src={item.pic}/>
                    <div>
                        <h4 className="message">{item.message}</h4>{console.log(item.message)}
                        <p className="time">{item.time}</p>
                    </div>
                </div>
        )
    })

    
        return(
            <div>
                {notification}
            </div>
        )
    }

export default Notification;