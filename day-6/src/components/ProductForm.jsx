import React, { useState } from 'react'
import "../App.css"

function ProductForm({handle,handleSubmit,handleblur,handlefocus,obj}) {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="img" id=""  placeholder='Img URL' onChange={handle} onBlur={handleblur} onFocus={handlefocus} />
        {

        }
        <input type="text" name="title" id="" placeholder='Title' onChange={handle}  onBlur={handleblur} onFocus={handlefocus} />
        {

        }
        <input type="text" name="price" id="" placeholder='Price' onChange={handle}  onBlur={handleblur} onFocus={handlefocus}/>
        {

        }
        <input type="submit" name="" id="" />
      </form>
    </div>
  )
}

export default ProductForm