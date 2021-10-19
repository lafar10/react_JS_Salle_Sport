import React,{useState,useEffect} from 'react';
import {Redirect,Route,useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import MasterAdmin from '../layouts/admin/MasterAdmin';

function PrivateAdminRoute({...rest}){

    let history = useHistory();

    const [loading,setLoading] = useState(true);
    const [Authenticated,setAuthenticated] = useState(false);

    useEffect(() => {

        axios.get('/api/checking-authentication').then(res => {

            if(res.status === 200)
            {
                setAuthenticated(true);
            }
            setLoading(false);

        });
        return () => {
            setAuthenticated(false);   
        }
    },[]);

    axios.interceptors.response.use(undefined,function axiosRetryInterceptor(err){

        if(err.response.status === 401)
        {
            swal("Unauthorized",err.response.data.message,"warning")
            history.push('/Unauthorized');
        }
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response){

        return response;
    },function (error){

        if(error.response.status === 403)
        {
            swal("Forbidden",error.response.data.message,"error")
            history.push('/Forbidden');
        }
        return Promise.reject(error);
    });

        if(loading)
    {
        return <div style={{marginTop:'230px'}} align="center">
                    <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
               </div>
    }

    return(

        <Route {...rest}
        
            render={({props,location}) => 
                Authenticated ? 
                <MasterAdmin {...props} /> : 
                <Redirect to={ {pathname:'/Login',state : {from:location}} } />

            }

        />

    );

}

export default PrivateAdminRoute;