import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const UpdateMember = (props) => {

        const history = useHistory();

        const [memberInput,setMember] = useState([]);
        const [error,setError] = useState([]);
        const [loading,setLoading] = useState(true);

        const handleInput = (e) => {

            e.persist();

            setMember({...memberInput,[e.target.name] : e.target.value});

        }

        useEffect(() => {

            const data = memberInput;

            const member_id = props.match.params.id;

            axios.get('/api/edit-member/'+member_id,data).then( res => {

                if(res.data.status === 200)
                {
                    setMember(res.data.member);
                }
                else if(res.data.status === 404)
                {
                    swal("404",res.data.message,"error");
                    history.push('/admin/Member');
                }
                setLoading(false);
            })

        },[props.match.params.id,history]);

        const memberSubmit = (e) => {

            e.preventDefault();

            const data = memberInput;

            const member_id = props.match.params.id;

            axios.put('/api/update-member/'+member_id,data).then(res => {

                if(res.data.status === 200)
                {
                    swal("Successfully",res.data.message,"success");
                    history.push('/admin/Member');
                }
                else if(res.data.status === 500)
                {
                    setError(res.data.errors);
                }
                else if(res.data.status === 404)
                {
                    swal("404",res.data.message,"error");
                    history.push('/admin/Member');
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
            <div className="container p-5 bg-light">
                        <h3>Update Member</h3>
                        <hr style={{color:'#e67e22',height:'4px',width:'180px'}} />
                    <br/>
                    <br/>
                          <form >
                            <div className="row g-2">
                                <div className="col-lg-6">
                                    FullName : <input type="text"  name="name" onChange={handleInput} value={memberInput.name} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.name}</span>
                                </div>
                                <div className="col-lg-6">
                                    C I N : <input type="text"  name="cin"  onChange={handleInput} value={memberInput.cin} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.cin}</span>
                                </div>

                                <div className="col-lg-6">
                                    Télé : <input type="text"  name="tele"  onChange={handleInput} value={memberInput.tele} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.tele}</span>
                                </div>
                                <div className="col-lg-6">
                                    Age : <input type="text"  name="age"  onChange={handleInput} value={memberInput.age} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.age}</span>
                                </div>

                                <div className="col-lg-6">
                                    adresse : <input type="text"  name="adresse"  onChange={handleInput} value={memberInput.adresse} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.adresse}</span>
                                </div>
                                <div className="col-lg-6">
                                    Abonnement : <input type="text"  name="subscribe"  onChange={handleInput} value={memberInput.subscribe} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.subscribe}</span>
                                </div>
                                <div className="col-lg-6">
                                    Assurance Abonnement : <input type="text"  name="assurance"  onChange={handleInput} value={memberInput.assurance} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.assurance}</span>
                                </div>
                                <div className="col-lg-6">
                                    Date Payment Assurance : <input type="date"  name="date_assurance"  onChange={handleInput} value={memberInput.date_assurance} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.date_assurance}</span>
                                </div>
                                <div className="col-lg-6">
                                    Date Expire Assurance : <input type="date"  name="date_payment_assurance"  onChange={handleInput} value={memberInput.date_payment_assurance} className="form-control" id="control" />
                                    <br/>
                                    <span style={{color:'red'}}>{error.date_payment_assurance}</span>
                                </div>
                                <div className="col-lg-6">
                                    Etat : 
                                    <select type="text"  name="etat" onChange={handleInput} value={memberInput.etat} className="form-control"  id="control">
                                        <option>On</option>
                                        <option>Off</option>
                                    </select>
                                    <br/>
                                    <span style={{color:'red'}}>{error.etat}</span>
                                </div>

                                <div className="col-lg-12" align="center">
                                    <button type="submit" onClick={memberSubmit} className="btn btn-outline-secondary"  id="control"> Update </button>
                                    <br/>
                                </div>
                            </div>
                        </form>
                </div>
        );

}


export default UpdateMember;