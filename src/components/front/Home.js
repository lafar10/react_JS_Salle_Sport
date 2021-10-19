import React from 'react';
import {Link} from 'react-router-dom';


function Home(){

        if(!localStorage.getItem('token'))
        {
                var register = '';
                register = 
               (<Link to="/Register" className="btn btn-outline-dark" style={{color:'white',width:'180px',height:'40px'}} > Inscription
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                   </svg>
               </Link>);
        }

    return(

        <div>
                    <div className="card bg-dark text-white" style={{height:'630px'}}>
                        <img src="../carousel/o.jpg" style={{height:'630px'}} alt='' className="card-img" />
                        <div className="card-img-overlay" align="center" >
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <h1 className="card-title display-4">LR10-Fitness</h1>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                                {
                                  register
                                }
                                
                        </div>
                </div>
                        <br/>
                        <br/>
                        <div className="container">
                        <div align="center">
                                <h2>Fitness class</h2>
                                <hr id="hh"/>
                                <br/>
                                <div className="card text-white" id="cardd" >
                                <img src="../carousel/cc.jpg" style={{borderRadius:'0%'}} className="img-fluid" alt=''/>
                                        <div className="card-img-overlay">
                                        <h3 className="card-title">Abonnement</h3>
                                        <h4 >200 DH's Par Mois</h4>
                                        <br/>
                                                {
                                                        register
                                                }
                                        </div>
                                </div>
                        <br/>
                        <br/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <section className="pb-5">
                                <div className="container">
                                <div align="center">
                                        <h5 className="section-title h1">BodyBuildings Champions</h5>
                                        <hr  style={{color:'black',height:'3px',width:'280px'}}/>
                                </div>
                                <br/>
                                <div className="row">
                                        
                                        <div className="col-xs-12 col-sm-6 col-md-4">
                                        <div className="image-flip" >
                                                <div className="mainflip flip-0">
                                                <div className="frontside">
                                                        <div className="card">
                                                        <div className="card-body text-center">
                                                                <p><img className=" img-fluid" src="../carousel/ww.jpg" alt=''/></p>
                                                                <h4 className="card-title">Ronnie Coleman</h4>
                                                                <p className="card-text">Un Célébre Cultriste De Son Temps</p>
                                                                <Link to="" className="btn btn-outline-secondary btn-sm"><i className="fa fa-plus"></i></Link>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div className="backside">
                                                        <div className="card">
                                                        <div className="card-body text-center mt-4">
                                                                <h4 className="card-title">Ronnie Coleman</h4>
                                                                <p className="card-text">
                                                                Ronald Dean Coleman, plus connu sous le nom de Ronnie Coleman ou Ron Coleman, né le 13 mai 1964 à Monroe en Louisiane aux États-Unis, est un culturiste américain, un des plus titrés de la discipline avec 8 victoires consécutives au prestigieux concours de Mr. Olympia.
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
                                                                <p><img className=" img-fluid" src="../carousel/qqq.jpeg" alt=''/></p>
                                                                <h4 className="card-title">Kai Green</h4>
                                                                <p className="card-text">You Kai Greene – Super League</p>
                                                                <Link to="" className="btn btn-outline-secondary btn-sm"><i className="fa fa-plus"></i></Link>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div className="backside">
                                                        <div className="card">
                                                        <div className="card-body text-center mt-4">
                                                                <h4 className="card-title">Kai Green</h4>
                                                                <p className="card-text">
                                                                Traduit de l'anglais-Leslie Kai Greene, mieux connu sous le nom de Kai Greene ou Kai L. Greene, est un bodybuilder professionnel, entraîneur personnel, artiste et acteur américain à la retraite.
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
                                                                <p><img className=" img-fluid" src="../carousel/aaa.jpg" alt=''/></p>
                                                                <h4 className="card-title">Arnold Schwarzenegger</h4>
                                                                <p className="card-text">Arnold Schwarzenegger Champion BodyBuilder.</p>
                                                                <Link to="" className="btn btn-outline-secondary btn-sm"><i className="fa fa-plus"></i></Link>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div className="backside">
                                                        <div className="card">
                                                        <div className="card-body text-center mt-4">
                                                                <h4 className="card-title">Arnold Schwarzenegger</h4>
                                                                <p className="card-text">
                                                                Arnold Schwarzenegger est un acteur, réalisateur, producteur de cinéma, culturiste et homme politique austro-américain, né le 30 juillet 1947 à Thal, en Autriche.
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
                                                                        <Link className="social-icon text-xs-center" to="">
                                                                        <i className="fab fa-skype"></i>
                                                                        </Link>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                        <Link className="social-icon text-xs-center" to="">
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
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div align="center">
                                <h5 className="section-title h1">BodyBuildings Show</h5>
                                <hr  style={{color:'black',height:'3px',width:'320px'}}/>
                        <br/>
                        <br/>
                        <div className="row">
                                <div className="col-sm-6" style={{backgroundColor:'rgb(250, 245, 245)'}}>
                                <br/><br/>
                                <h6 className="display-6" style={{color:'rgba(185, 184, 184, 0.7)'}}>  Motivation</h6>
                                <br/>
                                <p>Le nombre dépend de l’espace. Les consignes sont visuelles ou verbales. Le coach est tout à fait en mesure de vous donner des consignes de placement spécifiques, ainsi que des options d’entrainement.</p>
                                </div>
                                <div className="col-sm-6" >
                                <iframe width="345px" height="420px" src="https://www.youtube.com/embed/v1cL-ljboag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
                                </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div align="center">
                                <h5 className="section-title h1">Coaching</h5>
                                <hr  style={{color:'black',height:'3px',width:'200px'}}/>
                                <br/>
                                <div className="row">
                                        <div className="col-sm-6" >
                                                <img src="../carousel/jj.jpg" className="img-fluid" alt='' />
                                        </div>
                                        <div className="col-sm-6" style={{backgroundColor:'rgb(247, 242, 242)'}}>
                                                <h6 className="display-6" style={{color:'rgba(104, 105, 105, 0.7)'}}> 1. Cours Collectifs</h6>
                                                <p>Le nombre dépend de l’espace. Les consignes sont visuelles ou verbales. Le coach est tout à fait en mesure de vous donner des consignes de placement spécifiques, ainsi que des options d’entrainement.</p>
                                                <br/>
                                                <h6 className="display-6" style={{color:'rgba(104, 105, 105, 0.7)'}}> 2. Personnel Training</h6>
                                                <p>LR10-Fitness vous propose un accompagnement sur mesure dans une démarche de changement physique et mental durable. Un coach uniquement pour vous. Il s’adapte à 100% à vos besoins et vos objectifs.

                                                Que vous ayez envie ou besoin de mincir, redécouvrir votre silhouette après une grossesse, retrouver l’énergie, évacuer le stress et ressentir le bien-être, le coaching personnel est pour vous.</p>

                                        </div>
                                </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
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
                                                                        <p><img className="img-fluid" id="imgrad" src="../carousel/qqqq.jpg" alt=''/></p>
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
                                                                        <p><img className=" img-fluid" id="imgrad" src="../carousel/rrr.jpg" alt=''/></p>
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
                                                                                <Link className="social-icon text-xs-center" to="">
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
                                                                        <p><img className="img-fluid" id="imgrad" src="../carousel/aeae.jpg" alt=''/></p>
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
                                                                                <Link className="social-icon text-xs-center" to="">
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
                        <br/>
                        </div>

                        <br/>
                        <br/>
                        <br/>
                </div>

    );

}

export default Home;