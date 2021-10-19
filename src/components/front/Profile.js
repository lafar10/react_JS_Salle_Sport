import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

function Profile(){

    const [error,setError] = useState([]);
    const [loading,setLoading] = useState(true);
    const [profileInput,setProfile] = useState({});
    let history = useHistory();

    const handleInput = (e) => {

        e.persist();

        setProfile({...profileInput, [e.target.name] : e.target.value});
    }

    useEffect(() => {

        const data = profileInput;

        const user_id = localStorage.getItem('user_id');

        axios.get('/api/profile-user/'+user_id,data).then(res => {

            if(res.data.status === 200)
            {
                setProfile(res.data.user);
            }
            else if(res.data.status === 404)
            {
                swal("404",res.data.message,"error");
                history.push('/TownClub');
            }
            setLoading(false);
        });
    },[localStorage.getItem('user_id'),history]);

    const profileSubmit = (e) => {

        e.preventDefault();

        const data = profileInput;

        const user_id = localStorage.getItem('user_id');

        axios.put('/api/update-user-user/'+user_id,data).then( res => {

            if(res.data.status === 200)
            {
                swal("Successfully",res.data.message,"success");
                setError([]);
                history.push('TownClub');
            }
            else if(res.data.status === 500)
            {
                setError(res.data.errors);
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

       <div>
        <br/>  
        <br/>    
        <div className="container p-5 bg-light">
            <h3>My Infos</h3>
            <hr style={{color:'#e67e22',height:'4px',width:'100px'}} />
            <br/>
                <form >
                    <div className="row g-2">
                        <div className="col-lg-6">
                            FullName : <input type="text"  name="name" onChange={handleInput} value={profileInput.name} className="form-control" id="control" />
                            <br/>
                            <span style={{color:'red'}}>{error.name}</span>
                        </div>
                        <div className="col-lg-6">
                            Email : <input type="text"  name="email"  onChange={handleInput} value={profileInput.email} className="form-control" id="control" />
                            <br/>
                            <span style={{color:'red'}}>{error.email}</span>
                        </div>

                        <div className="col-lg-6">
                            Télé : <input type="text"  name="tele"  onChange={handleInput} value={profileInput.tele} className="form-control" id="control" />
                            <br/>
                            <span style={{color:'red'}}>{error.tele}</span>
                        </div>
                        <div className="col-lg-6">
                            Age : <input type="date"  name="age"  onChange={handleInput} value={profileInput.age} className="form-control" id="control" />
                            <br/>
                            <span style={{color:'red'}}>{error.age}</span>
                        </div>

                        <div className="col-lg-12">
                            adresse : <input type="text"  name="adresse"  onChange={handleInput} value={profileInput.adresse} className="form-control" id="control" />
                            <br/>
                            <span style={{color:'red'}}>{error.adresse}</span>
                        </div>

                        <div className="col-lg-12" align="center">
                            <button type="submit" onClick={profileSubmit} className="btn btn-outline-secondary" id="control"> Update </button>
                            <br/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Profile;
