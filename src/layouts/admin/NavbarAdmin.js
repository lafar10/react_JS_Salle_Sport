import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


function NavbarAdmin(){

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

    return(

        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="/admin/Dashboard">TownClub Admin</Link>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#layoutSidenav"><i className="fas fa-bars"></i></button>
            <div className="container">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" onClick={logoutSubmit} >Logout  <i class="fas fa-sign-out-alt"></i></Link></li>
                    </ul>
                </li>
            </ul>
            </div>
        </nav>

    );

}

export default NavbarAdmin;