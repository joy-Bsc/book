import React, { useState } from 'react';
   







const RegistrationBook = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dept_name,setDept]=useState('')
    const [book,setBook]=useState('')
    const [author,setAuthor]=useState('')
    const [book_title,setBookTitle]=useState('')
    const [publisherName,setPublisherName]=useState('')
    const [bookData,setBookData]=useState({})
    const [image, setImage] = useState(null)

    console.log(bookData)

    // const handleBlur=(e)=>{
    //     const field = e.target.name;
    //     const value = e.target.value
    //     const newData = { ...bookData };
    //     newData[field] = value
    //     setBookData(newData)
    // }



    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(bookData)
        // fetch('http://localhost:5000/books',{
        //     method:'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(bookData )
        // }).then(res=>res.json())
        // .then(data=>{
        //     alert(data)
        // })

        if (!image) {
            alert('image select please!')
            return
        }
        const formData = new FormData();
        formData.append('name', name);
       
        formData.append('email', email)
        formData.append('dept_name', dept_name);
        formData.append('book', book);
        formData.append('author', author);
        formData.append('book_title', book_title);
        formData.append('publisherName', publisherName);
        formData.append('image', image)
        fetch('http://localhost:5000/books', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                   alert(data)
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    
    return (
        <div className='container'>
            <div className='row bg-light mt-5'>
                <div className='col-md-4 m-auto'>
                <form onSubmit={handleSubmit}>
                <label>name:</label>
              
                <input className='form-control' onBlur={(e)=>setName(e.target.value)} type="text" name="name" placeholder='Enter Name'/>
               
                <label>email:</label>
              
                <input className='form-control' onBlur={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder='Enter email'/>
               
                <label>Dept:</label>
           
                <input className='form-control' onBlur={(e)=>setDept(e.target.value)} type="text" name="dept_name" placeholder='Enter Dept-name'/>
               
                                <label>Enter book Name</label>
                                <br/>
                <textarea className='form-control' onBlur={(e)=>setBook(e.target.value)} placeholder="Enter Books" name="book"/> 
            
            <label>Author Name:</label>
            <input className='form-control' onBlur={(e)=>setAuthor(e.target.value)} type="text" name="author_name" placeholder='Enter Author-name'/>
            <label>Book-Title</label>
            <input className='form-control' onBlur={(e)=>setBookTitle(e.target.value)} type="text" name="book_title" placeholder='Enter Book-Title'/>
            <label>publisher-Name</label>
            <input className='form-control' onBlur={(e)=>setPublisherName(e.target.value)} type="text" name="publisher" placeholder='Enter Book-Publisher'/>
            <label>Add-Book-pic</label>
            <br/>
            <input sx={{ width: '40%' }} accept="image/*" onChange={(e) => setImage(e.target.files[0])} type="file" />
                <br />
            <input className='btn btn-success form-control' type="submit" value="Book share"/>
            </form>
                </div>
            </div>
            
        </div>
    );
};

export default RegistrationBook;
    