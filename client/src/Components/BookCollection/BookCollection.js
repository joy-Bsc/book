import React, { useEffect, useState } from 'react';
import BookCollections from './BookCollections';

const BookCollection = () => {
    const [books,setBooks]=useState([])
    const [search,setSearch]=useState('')
    //console.log(books)
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBooks(data);
        })
    },[])
    return (
        <div className='container'>
        <div className='row'>
            <h2 className='text-center'>Book Collections</h2>
            <form className='mb-5'>
            <input type="search" onChange={(e)=>setSearch(e.target.value)} name="search" placeholder='Enter Book'/>
            </form>
            
           {
            books?.filter((val)=>{
                if(search==="")
                {
                    return val
                }
                else if(val?.book.toLowerCase().includes(search.toLowerCase()))
                {
                    return val
                }
            })
            .map((data)=>{
                return <BookCollections data={data} />
            })
           }
            
        </div>
        </div>
    );
};

export default BookCollection;