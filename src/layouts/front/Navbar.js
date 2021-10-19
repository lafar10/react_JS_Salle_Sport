import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

function Navbar(){

    let history = useHistory();

    const logoutSubmit = (e) => {

        e.preventDefault();

        axios.get('/sanctum/csrf-cookie').then(res => {

            axios.post('/api/logout').then(res =>{

                if(res.data.status === 200)
                {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user email');
                    localStorage.removeItem('user_id');
                    swal("success",res.data.message,"success");
                    history.push('/Login');
                }

            });
        });
    }

  

    var Authorized = '';

    if(!localStorage.getItem('token'))
    {
        Authorized = (<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to='/Login'>Sign In</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline-secondary" to='/Register' style={{borderRadius:'0%',marginTop:'5px'}}>Sign Up</Link>
            </li>
        </ul>)
    }
    else
    {

        Authorized = (<li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="far fa-user-circle"></i>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item"  to={'/TownClub/Profile/'+localStorage.getItem('user_id')} >My Account <i class="fas fa-user"></i></Link></li>
                <li><Link className="dropdown-item"  onClick={logoutSubmit} >Logout <i class="fas fa-sign-out-alt"></i></Link></li>
            </ul>
        </li>)
    }

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top">
            <div className="container">
            <Link className="navbar-brand" to="/TownClub">
                            <img src="/login.png" width="60px" alt='' height="50px" />  Town-Club
                        </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/TownClub/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/TownClub/Contact">Contact US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='#team'>Services</Link>
                        </li>
                         {/*<li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                            </li>*/}
                            &nbsp;&nbsp;&nbsp;
                            {Authorized}
                    </ul>
                </div>
            </div>
        </nav>

    );

}

export default Navbar;