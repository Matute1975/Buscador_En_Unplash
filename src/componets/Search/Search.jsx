import React, { useEffect,useState } from 'react'
import './Search.css'
import axios from 'axios'
import { Header } from '../Header/Header'

const Search = ({buscar}) => {
    
    //console.log('Esto tiene buscarrrrr en Search:',buscar)
    const [encontrado,setEncontrado]=useState([])
    const [results,setResults]=useState([])
    let [count,setCount]=useState(0)
    

    useEffect(()=>{
     console.log('Esto tiene buscar en Search:',buscar)
         
            const urlSearchFotos=`https://api.unsplash.com/search/photos/?&w=250&max-h=250fit=crop&per_page=30&lang:es&query=${buscar}&orientation=squarish&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` 
            const searchFotos=async () =>{
            const resultado=await axios.get(`${urlSearchFotos}`) 
            console.log(resultado)
            setEncontrado(resultado.data)
            setResults(resultado.data.results)
            }
        searchFotos()
        //console.log(encontrado)
        
    },[buscar])

    const descargarImagen = (id, url) => { 
        console.log('Esto trae desc:',id,', ',url)
        //GET /photos/:id/download (como se debe ejecutar segun unplash)
        var origen = `/get /'url:'+id+'/download'`
        origen.href=origen;
        origen.download = true;
      
    }

    if (buscar !='' && encontrado.total > 0) {       
        return(
            <section className="padreSearch">
                <div>
                    <h2>Su busqueda <i>{buscar}</i> obtuvo {encontrado.total} resultados.</h2>
                </div>
                <div className="contenedorSearch">
                  {results.map((elemento)=>
                  <div className="divSearch" key={elemento.id}>
                    <a href={elemento.urls.regular} target="_blank"><img className="imagenesSearch" src={elemento.urls.regular} alt={elemento.alt_description} onClick={descargarImagen(elemento.id,elemento.urls.regular)} /></a>
                    <div className="etiquetasSearch">
                        <button><a href={elemento.user.links.html} target="_blank">{elemento.user.name}</a></button>
                        {elemento.user.location && <button>{elemento.user.location}</button>} 
                        <button>{elemento.tags[0].title}</button>
                        <button>{elemento.tags[1].title}</button>
                        <button>{elemento.tags[2].title}</button>
                        <button>Imagen {count+=1}/{encontrado.total}</button>
                        <a href={elemento.urls.regular} target='_blank' download><button title='Descargar' className='descargarSearch'><i className="bi bi-download descargar"></i></button></a>
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
                <h2>Lo sentimos, su busqueda <i>{buscar}</i> obtuvo {encontrado.total} coincidencias.</h2>
            )
        }    
    }          
}
export {Search}