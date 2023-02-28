import React, { useState } from 'react'
import './Header.css'




const Header = ( {capturaBusqueda,setInput,input} ) => { 

   

const pulsarEnter = (e) => { 
    if (e.keyCode===13){
        //console.log('Presiono enter')
        capturaBusqueda()
        }
}
        
  return(
        
        <header>
             <div className='buscador'>

                <input type='text' name='input' onChange={event=>
                    {setInput(event.target.value.toLocaleLowerCase())}} onKeyDown={pulsarEnter} value={input} className='input' placeholder='Ej. paisajes' autoFocus />
                <a href="#"><i onClick={capturaBusqueda} className='bi bi-search iconoLupa'></i></a> 
                
            </div>
        </header>
    )
}
export {Header}