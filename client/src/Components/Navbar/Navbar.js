import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Navbar = () => {
  const {users,logOut}=useFirebase()
  const [admin,setAdmin]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/admin')
    .then(res=>res.json())
    .then(data=>{
      setAdmin(data)
      //console.log(data)
    })
  },[])
  let s={}
  const data=admin.map(x=>{
    return s=x;
  })
  //console.log(users)
    return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><span className='m-5'><img style={{height:'45px'}}  src="https://mbstu.ac.bd/assets/images/logo.png"/></span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
            <Link className="nav-item nav-link active" to="/">Home </Link>
            <Link className="nav-item nav-link active" to="/registrationbook">BookRegistration </Link>
            <Link className="nav-item nav-link active" to="/bookcollection">Book-Collection </Link>
          
          
              {users.email ? <Link className="nav-item nav-link" to="/"> <span onClick={logOut}>Logout</span>  </Link>:''}
              {users.email ? <span className="nav-item nav-link" >  {users.displayName}  </span>:''}
          </div>
        </div>
      </nav>
    );
};

export default Navbar;