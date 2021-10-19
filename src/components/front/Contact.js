import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


function Contact(){

    const containerStyle = {
        width: '100%',
        height: '400px'
        };

    const center = {
        lat: 32.862655,
        lng: -6.568919
        };

    let history = useHistory();

    const [error,setError] = useState([]);
    const [messageInput,setMessage] = useState({
        name : '',
        email : '',
        title : '',
        message : '',
    });

    const handleInput = (e) => {

        e.persist();

        setMessage({...messageInput, [e.target.name] : e.target.value});
    }

    const messageSubmit = (e) => {

        e.preventDefault();

        const data = messageInput;

        axios.post('/api/store-message',data).then( res => {

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

    return(

        <div>
        <div className="card bg-dark text-white" style={{height:'630px'}}>
            <img src="/carousel/dior.jpg" style={{height:'630px'}} alt='' className="card-img" />
                <div className="card-img-overlay"  align="center" >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="card-title display-4">LR10-Fitness</h1>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <Link to="#sec-1" id="niggas" className="btn btn-outline-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="80" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </Link>
                </div>
        </div>
    <br/>
    <br/>
    <br/>
        <div className="container" id="sec-1"  >
                <div align="center" >
                    <h5 className="section-title h1">Contact US</h5>
                    <hr  style={{color:'black',height:'3px',width:'300px'}}/>
                </div>
            <br/>
            <br/>
                <div className="row g-2"  >
                    <div className="col-sm-6">
                        <div align="center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" style={{color:'grey'}} fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <br/>
                            <br/>
                            <h3 className="display-6">Adresse</h3>
                            <br/>
                            <h6>Boulevard Mohammed V, N°200  Oued-Zem.</h6>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div align="center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" style={{color:'grey'}} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <br/>
                            <br/>
                            <h3 className="display-6">Téléphone</h3>
                            <br/>
                            <h6>+(212) 6 23793548  / +(212) 6 23793548</h6>
                        </div>
                    </div>
                </div>
            <br/>
            <br/>
            <br/>
                <div className="row g-2">
                    <div className="col-sm-6">
                        <div align="center">
                            <h4 className="display-6">Leave A Note</h4>
                            <hr style={{height:'3px',width:'200px'}}  />
                            <form >
                        
                                <div  className="row g-2">
                                    <div className="col-6">
                                        <label  className="form-label">Full Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={messageInput.name} className="form-control" id="control" placeholder="Enter The Full Name"/>
                                        <span style={{color:'red'}}>{error.name}</span>
                                    </div>
                                    <div className="col-6">
                                        <label  className="form-label">email</label>
                                        <input type="email" name="email" onChange={handleInput} value={messageInput.email}  className="form-control" id="control" placeholder="Enter Email"/>
                                        <span style={{color:'red'}}>{error.email}</span>
                                    </div>
                                    <div className="col-12">
                                        <label  className="form-label">Sujet</label>
                                        <input type="text" name="title" onChange={handleInput} value={messageInput.title} className="form-control" id="control" placeholder="Enter Le Sujet"/>
                                        <span style={{color:'red'}}>{error.title}</span>
                                    </div>
                                    <div className="col-12">
                                        <label  className="form-label">Message</label>
                                        <textarea type="text" name="message" onChange={handleInput} value={messageInput.message} className="form-control" id="control" placeholder="Enter Le Message"></textarea>
                                        <span style={{color:'red'}}>{error.message}</span>
                                    </div>
                                    <div className="col-12" align="center">
                                        <br/>
                                        <button  type="submit" onClick={messageSubmit} style={{borderRadius:'0%',width:'150px'}} className="btn btn-outline-secondary">Submit
                                        </button>
                                    </div>
                                </div>
        
                            </form>
                        </div>
                    </div>
                            <div className="col-sm-6">
                                <LoadScript
                                    googleMapsApiKey="AIzaSyADKWEHgOPv4XbA2vCjhmvNEkgn_VpqDfk"
                                >
                                    <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={16}
                                    >
                                    { /* Child components, such as markers, info windows, etc. */ }
                                    <></>
                                </GoogleMap>
                            </LoadScript>
                            </div>
                </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
            <div className="container">
                <div align="center">
                    <h5 className="section-title h1">Our Services</h5>
                    <hr  style={{color:'black',height:'3px',width:'300px'}}/>
                    <br/>
                    <section id="team" className="pb-5">
                        <div className="container">
                            <br/>
                            <div className="row">
                            
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" id="imgrad" src="/carousel/qqqq.jpg" /></p>
                                                        <h4 className="card-title">Piscine</h4>
                                                        <p className="card-text">Aqua Zumba, Aqua Combat, Aqua Bike, Aqua Step</p>
                                                        <Link to="" className="btn btn-outline-secondary btn-sm"><i className="fa fa-plus"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Piscine</h4>
                                                        <p className="card-text">
                                                            Excellent moyen d’allier l’aspect détente/ plaisir de la piscine et les bienfaits d’une activité sportive.
                                                        </p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-facebook"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-twitter"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-skype"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-google"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" >
                                        <div className="mainflip flip-0">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" id="imgrad" src="/carousel/rrr.jpg" /></p>
                                                        <h4 className="card-title">Studio RPM</h4>
                                                        <p className="card-text">Sprint, TRIP, Chaâbi Bike</p>
                                                        <Link to="" className="btn btn-outline-secondary btn-sm"><i className="fa fa-plus"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Studio RPM</h4>
                                                        <p className="card-text">
                                                            Un studio d’une 50aine de vélos pour brûler le maximum de calories dans une ambiance combinant travail d’endurance, simplicité et efficacité.
                                                        </p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-facebook"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-twitter"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-skype"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-google"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                        <div className="mainflip">
                                            <div className="frontside">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <p><img className=" img-fluid" id="imgrad" src="/carousel/aeae.jpg" /></p>
                                                        <h4 className="card-title">Salle de Fitness</h4>
                                                        <p className="card-text">BodyCombat, BodyPump, BodyAttack, BodyBalance et cours traditionnels</p>
                                                        <Link to="" className="btn btn-outline-secondary btn-sm"><i className="fa fa-plus"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="backside">
                                                <div className="card">
                                                    <div className="card-body text-center mt-4">
                                                        <h4 className="card-title">Salle de Fitness</h4>
                                                        <p className="card-text">
                                                            Cours énergisants, cours de force, cours zen, cours de fun; tout pour atteindre vos objectifs et vous faire plaisir.
                                                        </p>
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-facebook"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-twitter"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-skype"></i>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link className="social-icon text-xs-center"  to="">
                                                                    <i className="fab fa-google"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    );

}

export default Contact;
