import React,{useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';


const AddFacture = () => {

        const [factureInput,setFacture] = useState([]);
        const [memberInput,setMember] = useState([]);
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState([]);

        let history = useHistory();

        const handleInput = (e) => {
            e.persist();

            setFacture({...factureInput, [e.target.name] : e.target.value });
        } 
        
        useEffect(() => {

            axios.get('/api/show-members-ids').then( res => {

                if(res.data.status === 200)
                {
                    setMember(res.data.members_ids);
                }
                setLoading(false);
            });

        });

        const factureSubmit = (e) => {

            e.preventDefault();

            const data = factureInput;

            axios.post('/api/store-facture',data).then( res => {
            
                if(res.data.status === 200)
                {
                    swal("Suucessfully",res.data.message,"success");
                    history.push('/admin/Factures');
                }
                else if(res.data.status === 500)
                {
                    setError(res.data.errors);
                }


            });
        }

        var member_ids ='';

        if(loading)
        {
            return <div style={{marginTop:'220px'}} align="center">
                        <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
                </div>
        }
        else
        {
            member_ids = 
            memberInput.map( item => {
                return(
                  
                        <option key={item.id}>{item.id}</option>
                  
                );
            });
        }

 
        return(
            <div className="container p-5 bg-light">
                        <h3>New Facture</h3>
                        <hr style={{color:'#e67e22',height:'4px',width:'180px'}} />
                    <br/>
                   
                        <form >
                            <div className="row g-2">
                                <div className="col-lg-6">
                                    FullName : <input type="text"  name="name" onChange={handleInput} value={factureInput.name} className="form-control" id="control" />
                                    <span style={{color:'red'}}>{error.name}</span>
                                    <br/>
                                </div>
                                
                                <div className="col-lg-6">
                                    C I N : <input type="text"  name="cin" onChange={handleInput} value={factureInput.cin} className="form-control" id="control" />
                                    <span style={{color:'red'}}>{error.cin}</span>
                                    <br/>
                                </div>
                                
                                <div className="col-lg-6">
                                    Subscribe Price : <input type="text"  name="subscribe" onChange={handleInput} value={factureInput.subscribe} className="form-control" id="control" />
                                    <span style={{color:'red'}}>{error.subscribe}</span>
                                    <br/>
                                </div>
                                
                                <div className="col-lg-6">
                                    Member ID : 
                                    <select name="member_id" onChange={handleInput} value={factureInput.member_id} className="form-control"  id="control">
                                        <option disabled>Select Member ID</option>
                                       {member_ids}
                                        
                                    </select>
                                    <span style={{color:'red'}}>{error.member_id}</span>
                                    <br/>
                                </div>
                                
                                <div className="col-lg-6">
                                    Date Payment : <input type="date"  name="date_payment" onChange={handleInput} value={factureInput.date_payment} className="form-control"  id="control"/>
                                    <span style={{color:'red'}}>{error.date_payment}</span>
                                      <br/>
                                </div>
                              
                                <div className="col-lg-6">
                                    Etat : 
                                    <select name="etat" onChange={handleInput} value={factureInput.etat} className="form-control"  id="control">
                                        <option disabled>Select Etat</option>
                                        <option>On</option>
                                        <option>Off</option>
                                    </select>
                                    <span style={{color:'red'}}>{error.etat}</span>
                                    <br/>
                                </div>
                                
                                <div className="col-lg-12" align="center">
                                    <button type="submit" onClick={factureSubmit} className="btn btn-outline-secondary"   id="control">Add</button>
                                    <br/>
                                </div>
                            </div>
                        </form>
                </div>
        );

}


export default AddFacture;