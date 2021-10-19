import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


const Message = () => {

    const [messagesList,setMessages] = useState({});
    const [loading,setLoading] = useState(true);

    const deleteMessage = (e,id) => {

        e.preventDefault();

        const thisClicked = e.currentTarget;

        thisClicked.innerText = 'Deleting...';

        axios.delete('/api/delete-message/'+id).then( res => {

            if(res.data.status === 200)
            {
                swal("Successfully",res.data.message,"success");
                thisClicked.closest('tr').remove();
            }
            else if(res.data.status === 500)
            {
                swal("Warning",res.data.message,"warning");
                thisClicked.innerText = 'Delete';
            }

        });

    }

    useEffect(()=> {

        axios.get('/api/show-message').then(res => {

            if(res.status === 200)
            {
                setMessages(res.data.messages);
            }
            setLoading(false);
        });
    
    },[]);

    var messageslist_HTML = '';

    if(loading)
    {
        return <div style={{marginTop:'220px'}} align="center">
                    <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
               </div>
    }
    else
    {
         messageslist_HTML = 
         messagesList.map(item => {

            return(

                <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>{item.name}</th>
                    <th>{item.email}</th>
                    <th>{item.title}</th>
                    <th>{item.message}</th>
                    <th>{item.created_at}</th>
                    <th>{item.updated_at}</th>
                    <th><button onClick={ (e) => deleteMessage(e,item.id) } className="btn btn-danger"><i class="far fa-trash-alt"></i></button></th>
                </tr>

            );

         });


    }

        

        return(
            <div className="container p-5 ">
                <h1 class="mt-4">Messages</h1>
                        <ol class="breadcrumb mb-2">
                            <li class="breadcrumb-item"><Link to="/admin/Dashboard">Dashboard</Link></li>
                            <li class="breadcrumb-item active">Messages List</li>
                        </ol>
                        <hr style={{color:'#e67e22',height:'3px',width:'200px'}} />
                <br/>
                <form className="d-flex" align="center">
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
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Sujet</th>
                                <th scope="col">Message</th>
                                <th scope="col">Updated_at</th>
                                <th scope="col">Created_at</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messageslist_HTML}
                        </tbody>
                    </table>
                </div>
            </div>
        );

}


export default Message;