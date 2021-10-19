import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/css/2app.css';
import '../../assets/admin/js/scripts';


import Navbar from '../front/Navbar';
import Footer from '../front/Footer';

import routes from '../../Routages/routes';


function MasterPage(){

    return(
        <div >
            <Navbar />
            <br/>
            <br/>
            <main>
                <Switch>
                        {
                            routes.map((route,idx) => {
                                return(
                                    route.component && (
                                         <Route
                                         
                                         key={idx}
                                         path={route.path}
                                         name={route.name}
                                         exact={route.exact}

                                         render = {(props) => <route.component {...props} />}
                                         />
                                    )
                                )
                            })
                        }

                        <Redirect from='/TownClub' to='/TownClub/Home' />

                </Switch>
            </main>

            <Footer />
        </div>
    );

}

export default MasterPage;