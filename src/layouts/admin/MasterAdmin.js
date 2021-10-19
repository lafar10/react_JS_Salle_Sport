import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';


import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';

import NavbarAdmin from '../admin/NavbarAdmin';
import Footer from '../admin/Footer';
import SidebarAdmin from '../admin/SidebarAdmin';

import routes from '../../Routages/routes';


function MasterAdmin(){

    return(

        <div  className="sb-nav-fixed">
            <NavbarAdmin />

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <SidebarAdmin />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                    <Switch>
                                    {routes.map((route,idx) => {
                                        return(
                                            route.component && (
                                                <Route 
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    render = {(props) => 
                                                        <route.component {...props} />
                                                    }     
                                                />
                                            )
                                        )
                                    })}
                                    <Redirect from='/admin' to='admin/Dashboard' /> 
                            </Switch>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>

    );

}

export default MasterAdmin;