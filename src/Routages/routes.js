//Admin Components
import Dashboard from '../components/admin/Dashboard';
import AddFacture from '../components/admin/AddFacture';
import AddMember from '../components/admin/AddMember';
import UpdateMember from '../components/admin/UpdateMember';
import UpdateFacture from '../components/admin/UpdateFacture';
import Factures from '../components/admin/Factures';
import Member from '../components/admin/Member';
import Message from '../components/admin/Message';
import Users from '../components/admin/Users';
import UpdateUser from '../components/admin/UpdateUser';

//front Components
import Home from '../components/front/Home';
import Contact from '../components/front/Contact';
import Profile from '../components/front/Profile';


//Authorization

import Login from '../components/front/auth/Login';
import Register from '../components/front/auth/Register';



const routes = [

        //Auth

        { path:'/Login' , exact:true , name:'Login', component:Login },
        { path:'/Register' , exact:true , name:'Register' , component:Register },

        //Admin

        { path:'/admin' , exact:true , name:'admin' },
        { path:'/admin/Dashboard' , exact:true , name:'Dashboard' , component:Dashboard },
        { path:'/admin/AddFacture' , exact:true , name:'AddFacture' , component:AddFacture },
        { path:'/admin/AddMember' , exact:true , name:'AddMember' , component:AddMember },
        { path:'/admin/UpdateMember/:id' , exact:true , name:'UpdateMember' , component:UpdateMember },
        { path:'/admin/UpdateFacture/:id' , exact:true , name:'UpdateFacture' , component:UpdateFacture },
        
        { path:'/admin/UpdateUser/:id' , exact:true , name:'UpdateUser' , component:UpdateUser },
        { path:'/admin/Factures' , exact:true , name:'Factures' , component:Factures },
        { path:'/admin/Member' , exact:true , name:'Member' , component:Member },
        { path:'/admin/Message' , exact:true , name:'Message' , component:Message },
        { path:'/admin/Users' , exact:true , name:'Users' , component:Users },

        //front

        { path:'/' , exact:true , name:'/' , component:Home },
        { path:'/TownClub' , exact:true , name:'TownClub' },
        { path:'/TownClub/Home' , exact:true , name:'Home' , component:Home },
        { path:'/TownClub/Contact' , exact:true , name:'Contact' , component:Contact },
        { path:'/TownClub/Profile/:id' , exact:true , name:'Profile' , component:Profile },

];

export default routes;