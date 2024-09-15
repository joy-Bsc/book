import React from 'react';
import { Link } from 'react-router-dom';

const BookCollections = ({data}) => {
    console.log(data)
    return (
        <div className='col-md-3'>
            <div className='card bg-light'>
                <div className='card-body'>
                <img style={{ width: '200px' }} src={`data:image/jpeg;base64,${data.image}`} alt="" />
                    <p>name:{data.name}</p>
                    <p>email:{data.email}</p>
                    <p>dept:{data.dept_name}</p>
                    <p>book:{data.book}</p>
                    
                    
                   <Link to={`/bookcollection/${data._id}`}> <button className='btn btn-success'>Collect Book</button></Link>
                </div>
            </div>

            
        </div>
    );
};

export default BookCollections;