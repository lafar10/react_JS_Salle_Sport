import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Factures = () => {

        const [factureInput,setFacture] = useState([]);
        const [loading,setLoading] = useState(true);
        
        useEffect(() => {

            axios.get('/api/show-facture').then( res => {

                if(res.data.status === 200)
                {
                    setFacture(res.data.factures);
                }
                setLoading(false);
            });

        },[]);

        const deleteFacture = (e,id) => {

            e.preventDefault();

            const thisClicked = e.currentTarget;
            thisClicked.innerText = 'Deleting...';

            axios.delete('/api/delete-facture/'+id).then(res => {

                if(res.data.status === 200)
                {
                    swal("Successfully",res.data.message,"success");
                    thisClicked.closest('tr').remove(); 
                }
                else if(res.data.status === 404)
                {
                    swal("404",res.data.message,"error");
                    thisClicked.innerText = 'Delete';
                }

            });

        }

        var factureslist_HTML ='';

        if(loading)
        {
            return <div style={{marginTop:'220px'}} align="center">
                        <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
                </div>
        }
        else
        {
            factureslist_HTML = 
            factureInput.map(item => {

                return (
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.cin}</th>
                        <th>{item.subscribe}</th>
                        <th>{item.member_id}</th>
                        <th>{item.date_payment}</th>
                        <th>{item.etat}</th> 
                        <th>{item.created_at}</th>
                        <th>{item.updated_at}</th>
                        <th>
                            <form className="d-flex">
                                <Link to={'/admin/UpdateFacture/'+item.id} className="btn btn-primary"><i class="far fa-edit"></i></Link>
                                &nbsp;
                                <Link to={'/Pdf/'+item.id} className="btn btn-secondary"><i class="fas fa-file-pdf"></i></Link>
                                &nbsp;
                                <button onClick={ (e) => deleteFacture(e,item.id)} className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                            </form>
                        </th>
                    </tr>
                );

            });
        }

        return( 
            <div className="container p-5 ">
                <h1 class="mt-4">Factures</h1>
                    <ol class="breadcrumb mb-2">
                        <li class="breadcrumb-item"><Link to="/admin/Dashboard">Dashboard</Link></li>
                        <li class="breadcrumb-item active">Factures List</li>
                    </ol>
                    <hr style={{color:'#e67e22',height:'3px',width:'188px'}} />
                <br/>
                <form className="d-flex" align="center">
                    <input className="form-control m-2" type="search" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>
                    <button className="btn btn-outline-success m-2" id="btnsearch" type="submit"><i className="fas fa-search"></i></button>
                    &nbsp;<Link to="/admin/AddFacture" className="btn btn-outline-info btn-sm ms-2" id="btnsearch" >New Facture</Link>
                </form>
                <br/>
                <br/>
                <div class="table-responsive">
                    <table class="table table-bordered" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th >ID</th>
                                <th >Full Name</th>
                                <th >CIN</th>
                                <th >Subscribe Price</th>
                                <th >Member_ID</th>              
                                <th >Date Payment</th>
                                <th >Etat</th>
                                <th >Updated_at</th>
                                <th >Created_at</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {factureslist_HTML}_
                        </tbody>
                    </table>
                </div>
            </div>
        );

}


export default Factures;