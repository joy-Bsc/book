import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContactUs } from '../Email/Email';

const BookHire = () => {
    const [bookinfo,setBookInfo]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/bookdata/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setBookInfo(data)
        })
    },[])
    return (
        <div className='container'>
        <div className="row">
            <div className='col-md-6'>
            <h2>{bookinfo.name}</h2>
            <p>{bookinfo.email}</p>
            <p>{bookinfo.book}</p>
        <button className='btn btn-success'>Contact with Him</button>
            </div>
            <div className='col-md-6'>
                <ContactUs/>
                </div>
        </div>
          
            
        </div>
    );
};

export default BookHire;