import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


function Login(){

    let history = useHistory();

    const [error,setError] = useState([]); 
    const [loginInput,setLogin] = useState({
        email : '',
        password : '',
    });

    const handleInput = (e) => {

        setLogin({...loginInput,[e.target.name] : e.target.value});

    }

    const loginSubmit = (e) => {

        e.preventDefault();

        const data = {
            email : loginInput.email,
            password : loginInput.password,
        };

        axios.get('/sanctum/csrf-cookie').then(res => {
            
                axios.post('/api/login',data).then(res => {

                    if(res.data.status === 200)
                    {
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('user email',res.data.email);
                        localStorage.setItem('user_id',res.data.id);
                        swal("Successfully",res.data.message,"success");
                        if(res.data.role === 'admin')
                        {
                            history.push('/admin/Dashboard');
                        }
                        else
                        {
                            history.push('/TownClub/Home');
                        }
                    }
                    else if(res.data.status === 422)
                    { 
                        swal("Warning",res.data.message,"warning");
                    }
                    else
                    {
                        setError(res.data.errors);
                    }

                });

        });

    }

    return(
        <div align="center">
            <form onSubmit={loginSubmit} className="col-lg-4" style={{marginTop:'90px'}}>
                <Link to='TownClub/Home'><img className="mb-4" src="login.png" alt="" width="82" height="75"/></Link>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            
                <div className="form-floating">
                        <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control"  id="control"  placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        <span  style={{color:'red'}}>{error.email}</span>
                    </div>
                        <br/>
                    <div className="form-floating">
                        <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control"  id="control"  placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        <span  style={{color:'red'}}>{error.password}</span>
                    </div>
                    <br/>
            
                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox"  id="control"  value="remember-me"/> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-secondary" id="control" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">Copyright; 2021</p>
            </form>
        </div>
    );

}

export default Login;