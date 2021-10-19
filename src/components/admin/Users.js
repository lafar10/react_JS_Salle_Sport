import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const Users = () => {

        const [userInput,setUser] = useState([]);
        const [loading,setLoading] = useState(true);

        useEffect(() => {
            
            axios.get('/api/show-user').then( res => {

                if(res.data.status === 200)
                {
                    setUser(res.data.users);
                }
                setLoading(false);
            });
        },[]);

        const deleteUser = (e,id) => {

            e.preventDefault();

            const thisClicked = e.currentTarget;
            thisClicked.innerText = 'Deleting...';

            axios.delete('/api/delete-user/'+id).then(res => {

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

        var userlist_HTML = '';

        if(loading)
        {
            return <div style={{marginTop:'220px'}} align="center">
                    <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
                  </div>
        }
        else
        {
            userlist_HTML = 
            userInput.map(item => {

                return(
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>{item.age}</th>
                        <th>{item.tele}</th>
                        <th>{item.adresse}</th>
                        <th>{item.role_as}</th>
                        <th>{item.created_at}</th>
                        <th>
                            <form className="d-flex">
                                <Link to={'/admin/UpdateUser/'+item.id} className="btn btn-primary"><i class="far fa-edit"></i></Link>
                                &nbsp;
                                <button onClick={ (e) => deleteUser(e,item.id)} className="btn btn-danger" ><i class="far fa-trash-alt"></i></button>
                            </form>
                        </th>
                    </tr>
                )

            });
        }

        return(
            <div className="container p-5">
                <h1 class="mt-4">Users</h1>
                        <ol class="breadcrumb mb-2">
                            <li class="breadcrumb-item"><Link to="/admin/Dashboard">Dashboard</Link></li>
                            <li class="breadcrumb-item active">Users List</li>
                        </ol>
                        <hr style={{color:'#e67e22',height:'3px',width:'165px'}} />
                <br/>
                <form className="d-flex" >
                    <input className="form-control me-2" type="search" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>
                    <button className="btn btn-outline-success" id="btnsearch" type="submit"><i className="fas fa-search"></i></button>
                </form>
                <br/>
             
      
                <div class="table-responsive">
                    <table class="table table-bordered" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th >ID</th>
                                <th >Full Name</th>
                                <th >Email</th>
                                <th >Age</th>
                                <th >Adresse</th>
                                <th >Télé</th>
                                <th >Role AS</th>
                                <th >Created At</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userlist_HTML}
                        </tbody>
                    </table>
                </div>
                           
            </div>
        );

}


export default Users;