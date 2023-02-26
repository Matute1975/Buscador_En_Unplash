import React, { useState } from 'react'
import './Header.css'




const Header = ( {capturaBusqueda,setInput,input} ) => { 
        
  return(
        
        <header>
             <div className='buscador'>

                <input type='text' name='input' onChange={event=>
                    {setInput(event.target.value.toLocaleLowerCase())}} value={input} className='input' placeholder='Ej. paisajes' autoFocus />
                <a href="#"><i onClick={capturaBusqueda} className='bi bi-search iconoLupa'></i></a> 
                
            </div>
        </header>
    )
}
export {Header}