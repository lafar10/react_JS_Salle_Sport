import React,{useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';


const UpdateFacture = (props) => {

        const [factureInput,setFacture] = useState([]);
        const [error,setError] = useState([]);
        const [loading,setLoading] = useState(true);
        let history = useHistory();

        const handleInput = (e) => {
            e.persist();

            setFacture({...factureInput, [e.target.name] : e.target.value });
        }

        useEffect(() => {

            const data = factureInput;

            const facture_id = props.match.params.id;

            axios.get('/api/edit-facture/'+facture_id,data).then( res => {

                if(res.data.status === 200)
                {
                    setFacture(res.data.factures);
                }
                else if(res.data.status === 404)
                {
                    swal("404",res.data.message,"error");
                    history.push('/admin/Factures');
                }
                setLoading(false);
            });

        },[props.match.params.id,history]);

        const factureSubmit = (e) => {

            e.preventDefault();

            const data = factureInput;
            const facture_id = props.match.params.id;

            axios.put('/api/update-facture/'+facture_id,data).then( res => {

                if(res.data.status === 200)
                {
                    swal("Successfully",res.data.message,"success");
                    history.push('/admin/Factures');
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

        return(
            <div className="container p-5 bg-light">
                        <h3>Update Facture</h3>
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
                                    Member ID : <input type="text"  name="member_id" onChange={handleInput} value={factureInput.member_id} className="form-control"  id="control"/>
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
                                    <button type="submit" onClick={factureSubmit} className="btn btn-outline-secondary"   id="control"> Update </button>
                                    <br/>
                                </div>
                            </div>
                        </form>
                </div>
        );

}


export default UpdateFacture;