import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



function Dashboard(){

    const [user,setUser] = useState("");
    const [member,setMember] = useState("");
    const [facture,setFacture] = useState("");
    const [earn,setEarn] = useState("");

    useEffect(() => {
        
        axios.get('/api/total-earn').then( res => {

            if(res.data.status === 200)
            {
                setEarn(res.data.sum_earn);
            }

        });

    }, []);

    useEffect(() => {
        
        axios.get('/api/sum-facture').then( res => {

            if(res.data.status === 200)
            {
                setFacture(res.data.sum_fact);
            }

        });

    }, []);

    useEffect(() => {
        
        axios.get('/api/sum-member').then( res => {

            if(res.data.status === 200)
            {
                setMember(res.data.sum_mem);
            }

        });

    }, []);

    useEffect(() => {
        
        axios.get('/api/sum-user').then( res => {

            if(res.data.status === 200)
            {
                setUser(res.data.sum);
            }

        });

    }, []);
    
    
        return(
            <div className="container">

                <h1 class="mt-4">Dashboard</h1>
                    <ol class="breadcrumb mb-2">
                        <li class="breadcrumb-item"><Link to="/admin/Dashboard">Dashboard</Link></li>
                    </ol>
                    <hr style={{color:'#e67e22',height:'3px',width:'80px'}} />
                <br/>
                <div class="row g-2">
                            <div class="col-xl-12 col-md-6">
                                <div class="card bg-success text-white mb-4 text-center">
                                    <div class="card-body"><i className="fas fa-dollar"></i> Total {earn} <strong>DH"s</strong></div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card bg-warning text-white mb-4 text-center">
                                    <div class="card-body"><i className="fas fa-file"></i> Factures Total ({facture})</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <Link class="small text-white stretched-link" to='/admin/Factures'>See More</Link>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card bg-primary text-white mb-4 text-center">
                                    <div class="card-body"><i className="fas fa-users"></i> Members Total ({member})</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                    <Link class="small text-white stretched-link" to='/admin/Member'>See More</Link>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card bg-danger text-white mb-4 text-center">
                                    <div class="card-body"><i className="fas fa-users"></i> Users Total ({user})</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <Link class="small text-white stretched-link" to='/admin/Users'>See More</Link>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
            </div>
        );

}

export default Dashboard;