import React, { useEffect,useState } from 'react'
import './Search.css'
import axios from 'axios'
import { Header } from '../Header/Header'



const Search = ({buscar}) => {
    
    console.log('Esto tiene buscarrrrr en Search:',buscar)
    const [encontrado,setEncontrado]=useState([])
    const [results,setResults]=useState([])
    const urlSearchFotos=`https://api.unsplash.com/search/photos/?&w=250&max-h=250fit=crop&per_page=30&query=${buscar}&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` //fit=crop&w=300&min-h=300

    
    useEffect(()=>{
        const searchFotos=async () =>{
            const resultado=await axios.get(`${urlSearchFotos}`) 
            console.log(resultado)
            //console.log(resultado.headers.x-per-page)
            //console.log(resultado.data)
            setEncontrado(resultado.data)
            setResults(resultado.data.results)
            
            
            
            //console.log(datosResultado)

            }
        searchFotos()
        //console.log(encontrado)

    },[buscar])

    const Click = () => { 
        console.log('Hizo click en la foto.')
        

    }

    if (buscar !='' && encontrado.total > 0) {       
        return(
            
            <section className="padreSearch">
                <div>
                    <h2>Su busqueda <i>{buscar}</i> tiene {encontrado.total} resultados.</h2>
                </div>
                
                <div className="contenedorSearch">
                  {results.map((elemento)=>
                  <div className="divSearch" key={elemento.id}>
                    <a><img className="imagenesSearch" onClick={Click} src={elemento.urls.regular} alt={elemento.alt_description}/></a>
                    <div className="texto">
                        <button><a href={elemento.user.links.html} target="_blank">{elemento.user.name}</a></button>
                        {elemento.user.location && <button>{elemento.user.location}</button>} 
                        <button>{elemento.tags[0].title}</button>
                        <button> {elemento.tags[1].title}</button>
                        <button> {elemento.tags[2].title}</button>
                        {/* {elemento.alt_description && <button>{elemento.alt_description}</button>} */}
                    </div>
                  </div>
                
                )}        
                </div>       
            </section>
        )}
    else{
        if(buscar!='' && encontrado.total === 0){
            return(
                <h2>Lo sentimos, su busqueda <i>{buscar}</i> encontro {encontrado.total} coincidencias.</h2>
            )
        }    
    }          
}
export {Search}