import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){

    var authmenu = '';

    if(!localStorage.getItem('token'))
    {
        authmenu = 
            (
                <div>
                <li className="mb-2"><Link to='/Login' className="text-muted">Login</Link></li>
                <li className="mb-2"><Link to='/Register' className="text-muted">Register</Link></li>
                </div>        
            );
    }
    return(

        <footer className="bg-white" >
                <hr/> 
            <div className="container py-3" >
                
                <div className="row py-4">
                    <div className="col-lg-6 col-md-6 mb-4 mb-lg-0" align="center">
                        <img src="/login.png" width="250px" height="200px"  alt=''/>
                        <br/>
                        <br/>
                        <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
        
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><Link to='/TownClub/Home' className="text-muted">Home</Link></li>
                            <li className="mb-2"><Link to='/TownClub/Contact' className="text-muted">Contact US</Link></li>
                           {authmenu}
                
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">LR10-Fitness</h6>
                        <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                        <ul className="list-inline mt-4">
                            <li className="list-inline-item"><Link to="#"  id="icons" title="twitter"><i className="fab fa-twitter"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"  id="icons" title="facebook"><i className="fab fa-facebook"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"  id="icons" title="instagram"><i className="fab fa-instagram"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"  id="icons" title="youtube"><i className="fab fa-youtube"></i></Link></li>
                            <li className="list-inline-item"><Link to="#"  id="icons" title="whatsapp"><i className="fab fa-whatsapp"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-light py-2">
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">Created With <i style={{color:'red'}} className="fa fa-heart"></i> By Lafar Ayoub ,  © 2021 All rights reserved.</p>
                    </div>
                </div>
        </div>
        </footer>

    );

}

export default Footer;