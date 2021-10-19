import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Member = () => {

    const [memberInput,setMember] = useState({});

    const [loading,setLoading] = useState(true);

    const deleteSubmit = (e,id) => {
        
        e.preventDefault();

        const thisClicked = e.currentTarget;
        
        thisClicked.innerText = 'Deleting...';

        axios.delete('/api/delete-member/'+id).then( res => {

            
            if(res.data.status === 200)
            {
                swal("Sucessfully",res.data.message,"success");
                thisClicked.closest('tr').remove();
            }else if(res.data.staus === 500)
            {
                swal("Warning",res.data.message,"warning");
                thisClicked.innerText = 'Delete';
            }

        });
    }

    useEffect( () => {

        axios.get('/api/show-member').then( res => {

            if(res.data.status === 200)
            {
                setMember(res.data.members);
            }
            setLoading(false);
        });
        
    },[]);

    var memberslist_HTML = "";

    if(loading)
    {
        return <div style={{marginTop:'220px'}} align="center">
                    <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
               </div>
    }
    else
    {
         memberslist_HTML =
        memberInput.map(item => {

            
            return (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th>{item.cin}</th>
                    <th>{item.tele}</th>
                    <th>{item.age}</th>
                    <th>{item.adresse}</th>
                    <th>{item.subscribe}</th>
                    <th>{item.assurance}</th>
                    <th>{item.date_assurance}</th>
                    <th>{item.date_payment_assurance}</th>
                    <th>{item.etat}</th>
                    <th>{item.created_at}</th>
                    <th>{item.updated_at}</th>
                    <th>
                        <form className="d-flex">
                            <Link to={'/admin/UpdateMember/'+item.id} className="btn btn-primary"><i class="far fa-edit"></i></Link>
                            &nbsp;<button onClick={ (e) => deleteSubmit(e,item.id)} className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                        </form>        
                    </th>
                </tr>
            )

        });
    }

        return(
            <div className="container p-5 ">
                <h1 class="mt-4">Members</h1>
                        <ol class="breadcrumb mb-2">
                            <li class="breadcrumb-item"><Link to="/admin/Dashboard">Dashboard</Link></li>
                            <li class="breadcrumb-item active">Members List</li>
                        </ol>
                        <hr style={{color:'#e67e22',height:'3px',width:'195px'}} />
                <br/>
                <form className="d-flex">
                    <input className="form-control m-2" type="search" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>
                    <button className="btn btn-outline-success  m-2" id="btnsearch" type="submit"><i className="fas fa-search"></i></button>
                    &nbsp;<Link to="/admin/AddMember" className="btn btn-outline-info btn-sm ms-2" id="btnsearch" >New Member</Link>
                </form>
                <br/>
              
                <div class="table-responsive">
                    <table class="table table-bordered" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th >ID</th>
                                <th >Full Name</th>
                                <th >CIN</th>
                                <th >Télé</th>
                                <th >Age</th>
                                <th >Adresse</th>
                                <th >Prix Abonnement</th>
                                <th >Assurance Abonnement</th>
                                <th >Date Assurance</th>
                                <th >Date Payment Assurance</th>
                                <th >Etat</th>
                                <th >Created_at</th>
                                <th >Updated_at</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memberslist_HTML}
                        </tbody>
                    </table>
                </div>
            </div>
        );

}


export default Member;