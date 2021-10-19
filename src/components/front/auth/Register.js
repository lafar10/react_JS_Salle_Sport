import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

function Register(){

    let history = useHistory();

    const [error,setError] = useState([]); 
    const [registerInput,setRegister] = useState({
        name : '',
        email : '',
        password : '',
    });

    const handleInput = (e) => {

        setRegister({...registerInput,[e.target.name] : e.target.value});

    }

    const registerSubmit = (e) => {

        e.preventDefault();

        const data = {
            name : registerInput.name,
            email : registerInput.email,
            password : registerInput.password,
        };

        axios.get('/sanctum/csrf-cookie').then(res => {
            
                axios.post('/api/register',data).then(res => {

                    if(res.data.status === 200)
                    {
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('user email',res.data.email);
                        swal("Successfully",res.data.message,"success");
                        history.push('TownClub/Home');
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
                <form   onSubmit={registerSubmit}  className="col-lg-4" style={{marginTop:'70px'}}>
                    <Link to='TownClub/Home'><img className="mb-4" src="login.png" alt="" width="82" height="75"/></Link>
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                    
                    <div className="form-floating">
                        <input type="text" name="name" onChange={handleInput} value={registerInput.name} className="form-control"  id="control"  placeholder="Full Name"/>
                        <label for="floatingInput">Full Name</label>
                        <span style={{color:'red'}}>{error.name}</span>
                    </div>
                        <br/>
                    <div className="form-floating">
                        <input type="email" name="email" onChange={handleInput} value={registerInput.email} className="form-control"  id="control"  placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        <span  style={{color:'red'}}>{error.email}</span>
                    </div>
                        <br/>
                    <div className="form-floating">
                        <input type="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control"  id="control"  placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        <span style={{color:'red'}} >{error.password}</span>
                    </div>
                    <br/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <br/>
                        <button className="w-100 btn btn-lg btn-outline-secondary" id="control" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">Copyright; 2021</p>
                </form>
            </div>
        );
   

}

export default Register;