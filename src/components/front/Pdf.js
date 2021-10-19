import React,{useState,useEffect} from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';


function Pdf(props){

    let history = useHistory();
    const [loading,setLoading] = useState(true);
    const [factureInput,setFacture] = useState([]);

    const generatePdf = (e) => {

        e.preventDefault();
        var doc = new jsPDF('p','pt','a4');

        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("Facture.pdf");
            }
        });

    }

    useEffect(() => {

        const data = factureInput;
        const facture_id = props.match.params.id;
        axios.get('/api/facture-PDF/'+facture_id,data).then( res => {

            if(res.data.status === 200)
            {
                setFacture(res.data.pdf_data);
            }
            else if(res.data.status === 404)
            {
                swal("404",res.data.message,"error");
                history.push('/admin/Factures');
            }
            setLoading(false);
        });

    }, [props.match.params.id,loading]);

    var pdf_HTML = '';
    var pdf_HTML_1 = '';
    var pdf_ID = props.match.params.id;

    if(loading)
    {
        return <div style={{marginTop:'220px'}} align="center">
                    <img src="/login.png" width="60px" alt='' width="50px" height="50px" /><h1 style={{color:'grey'}}>Loading...</h1>
                </div>
    }
    else
    { 
        pdf_HTML =        
                <tr key={factureInput.id}>
                    <th>{factureInput.name}</th>
                    <th>{factureInput.cin}</th>
                    <th>{factureInput.member_id} </th>
                    <th>{factureInput.date_payment}</th>
                </tr>;
            
        pdf_HTML_1 = 
                <tr key={factureInput.id}>
                    <th>{factureInput.subscribe} DH's</th> 
                </tr>;
    
    }

    return (
        <div >
            <div id="content"  align="center">
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6" align="center">
                                        <br/>
                                        <img src="/login.png" style={{width:'100px',height:'100px'}} alt=""/>
                
                                        <h6 >LR10 Town-Club</h6>
                
                                        <h6>N° {pdf_ID}</h6>
                
                                        <br/>
                                    </div>
                                </div>
                                <br/>
                                <div className="col-6" style={{marginRight:'550px'}} >
                                    <table className="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <th>Full Name</th>
                                                <th>C.I.N</th>
                                                <th>Member ID </th>
                                                <th>Date Payment </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pdf_HTML}
                                        </tbody>

                                    </table>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th >Subscribe Price </th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pdf_HTML_1}
                                        </tbody>

                                    </table>
                                    <br/>
                                    <br/>
                                    <h5><img src="/map.png" style={{width:'50px',height:'40px'}} alt=""/> Adresse Boulevard Mohammed V N°200, OuedZem</h5>
                                </div>
                               
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <button  className="btn btn-primary" onClick={(e) => generatePdf(e)}>Generate Pdf</button>
        </div>
    );

}

export default Pdf;