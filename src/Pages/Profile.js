import { useEffect } from "react";
import { Link, Route, Routes, useNavigate, matchPath } from "react-router-dom";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";

const Profile=({ login }) =>{
    const  history = useNavigate
    useEffect(()=>{
        if(login){
            history.push('/');
        }

    }, [login,history]);

    const {path, url}=matchPath()
    return(
        <>
        
        <h1>Profile Page</h1>
        <ul>
            <li>
            <Link to ={`${url}/viewprofile`}>View Profile</Link>
        
            </li>

            <li>
            <Link to ={ `${url}/editprofile`}>Edit Profile</Link>
        
            </li>
        
        
        </ul>

        <Routes>
            <Route path={`${path}/viewprofile`} element={ViewProfile} />
            <Route path={`${path}/editprofile`} element={EditProfile}/>
        </Routes>
        </> 
        
    );
    
};

export default Profile;