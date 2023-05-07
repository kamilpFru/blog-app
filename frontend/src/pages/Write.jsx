import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('')
  const categories = ['Food', 'Home', 'Style', 'Art', 'Pop Culture']

  return (
    <div className='add'>
      <div className="content">
        <input className='title' type="text" placeholder='Title'/>
          <ReactQuill className='writing' theme="snow" value={value} onChange={setValue} />          
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b>Status: </b> Draft </span>
          <span><b>Visibility: </b> Public</span>
          <input style={{display: "none"}} type="file" id='file'/>
          <label className='upload'  htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {categories.map((categorie) => (
            <div>
              <input className='radio' type="radio" name='cat' value={categorie} id={categorie}/>
              <label htmlFor={categorie}>  {categorie}</label> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Write

