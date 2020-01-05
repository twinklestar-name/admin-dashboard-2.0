import React from 'react';
import './home.css'
import Latesthits from '../../Components/home/graphs/latesthit';
import Perfomance from '../../Components/home/graphs/perfomance';
import StorageInformation from '../../Components/home/graphs/storageInformtion';
import Notification from '../../Components/home/Notification/notification';
import Order from '../../Components/home/Order/order';

const Dashboard=(props)=>{
    return(
            <div className="dash-container">
                <div className="dash-row">
                    <p className="dash-title">welcome back,<b>Admin</b></p>
                </div>
                <div className="dash-content">
                    <div className='latest-and-per-boxes'>
                    <div className="con">
                        <div className="con-block">
                            <h2 className="con-title">Latest Hits</h2>
                            <Latesthits/>
                        </div>
                    </div>
                    <div className="con">
                        <div className="con-block">
                            <h2 className="con-title">Perfomance</h2>
                            <Perfomance/>
                        </div>
                    </div>
                    </div>
                    <div className="storage-and-noti-boxes">
                    <div className="storage-con">
                        <div className="con-block">
                            <h2 className="con-title">Storage Information</h2>
                            <StorageInformation/>
                        </div>
                    </div>{console.log(props)}
                    <div className="noti-con">
                        <div className="con-block">
                            <h2 className="con-title">Notification List</h2>
                            <Notification/>
                        </div>
                    </div>
                    </div>
                    <div className="order-list">
                        <div>
                        <h2 className="ol-title">Order List</h2>
                        <Order/>
                        </div>
                    </div>
                </div>
                <div className="extra-space">hi</div>
            </div>
          );
    }

    export default Dashboard;