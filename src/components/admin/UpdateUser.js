import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';

const UpdateUser = (props) => {

        let history = useHistory();

        const [userInput,setUser] = useState({});

        const [loading,setLoading] = useState(true);

        const [error,setError] = useState([]);

        const handleInput = (e) => {

            e.persist();

            setUser({...userInput,[e.target.name] : e.target.value});
        }

        useEffect(() => {

            const data = userInput;

            const user_id = props.match.params.id;

            axios.get('/api/edit-user/'+user_id,data).then( res => {

                if(res.data.status === 200)
                {
                    setUser(res.data.users);
                }
                else if(res.data.status === 404)
                {
                    swal("404",res.data.message,"error");
                    history.push('/admin/Users');
                }
                setLoading(false);
            });

        },[props.match.params.id,history]);

        const userSubmit = (e) => {

            e.preventDefault();

            const data = userInput;
            const user_id = props.match.params.id;

            axios.put('/api/update-user/'+user_id,data).then( res => {

                if(res.data.status === 200)
                {
                    swal("Successfully",res.data.message,"success");
                    history.push('/admin/Users');
                }
                else if(res.data.status === 500)
                {
                    setError(res.data.errors);
                }
                else if(res.data.status === 404)
                {
                    swal("404",res.data.message,"error");
                }

            });
        }

        if(loading)
        {
            return <div style={{marginTop:'220px'}} align="center">
                    <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
                  </div>
        }

        return(
            <div className="container p-5">
                        <h3>New Member</h3>
                        <hr style={{color:'#e67e22',height:'4px',width:'180px'}} />
                    <br/>
                    <br/>
                        <form >
                            <div className="row g-2">
                                <div className="col-lg-6">
                                    FullName : <input type="text"  name="name" onChange={handleInput} value={userInput.name} className="form-control" id="control" />
                                    <span style={{color:'red'}}>{error.name}</span>
                                </div>
                                <div className="col-lg-6">
                                    Email : <input type="text"  name="email"  onChange={handleInput} value={userInput.email} className="form-control" id="control" />
                                    <span style={{color:'red'}}>{error.email}</span>
                                </div>

                                <div className="col-lg-6">
                                    Télé : <input type="text"  name="tele"  onChange={handleInput} value={userInput.tele} className="form-control" id="control" />
                                    
                                    <span style={{color:'red'}}>{error.tele}</span>
                                </div>
                                <div className="col-lg-6">
                                    Age : <input type="date"  name="age"  onChange={handleInput} value={userInput.age} className="form-control" id="control" />
                                    
                                    <span style={{color:'red'}}>{error.age}</span>
                                </div>

                                <div className="col-lg-6">
                                    adresse : <input type="text"  name="adresse"  onChange={handleInput} value={userInput.adresse} className="form-control" id="control" />
                                    
                                    <span style={{color:'red'}}>{error.adresse}</span>
                                </div>
                                <div className="col-lg-6">
                                    Role AS : 
                                    <select type="text"  name="role_as" onChange={handleInput} value={userInput.role_as} className="form-control"  id="control">
                                        <option disabled>Select Role</option>
                                        <option>0</option>
                                        <option>1</option>
                                    </select>
                                
                                    <span style={{color:'red'}}>{error.role_as}</span>
                                </div>

                                <div className="col-lg-12" align="center">
                                    <button type="submit" onClick={userSubmit} className="btn btn-outline-secondary" id="control"> Update </button>
                                    <br/>
                                </div>
                            </div>
                        </form>
                </div>
        );

}


export default UpdateUser;