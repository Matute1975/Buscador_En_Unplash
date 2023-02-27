import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './Random.css'

const Random = () => { 

    //const urlBasePhoto=`https://api.unsplash.com/photos/?page=${page}&per_page=30&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` //maserrano
    //const urlBasePhoto=`https://api.unsplash.com/photos/random/?count=30&orientation=squarish&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` //maserrano
    //const urlBasePhoto=`https://api.unsplash.com/photos/random/?count=30&orientation=landscape&w=250&max-h=250fit=crop&client_id=ghOVJdvH73_snz5IugwQ8FOLFsFmjceRTlo38dH6nqM` //matute1975

    const [fotos,setFotos]=useState([])
    const [servidor,setServidor]=useState(-1000)
    //const [ultima,setUltima]=useState([])
    
    useEffect(()=>{
        const obtenerFotos=async () =>{
            const response=await axios.get(`${urlBasePhoto}`) 
            console.log(response)
            setServidor(response.status)
            //console.log(response.data)
            setFotos(response.data)
            //setUltima(response.data[29])
            //.finally(()=>console.log('Finalizo la conexion a la API.'))
            //console.log('La ultima foto es:', ultima)
            
        }
        obtenerFotos()
    },[]) 
               
    
    if(servidor===200){

        return(

            <section className="padreRandom">
                    {fotos.map((elemento)=> 
                    <div className="contenedorRandom"
                        key={elemento.id}>
                            <div className="divRandom">
                                <a href={elemento.urls.regular} target="_blank"><img className="imagenesRandom" src={elemento.urls.regular} alt={elemento.alt_description}/></a>
                                <div className="etiquetasRandom">
                                    {elemento.user.name && <button><a href={elemento.user.links.html} target="_blank">{elemento.user.name}</a></button>}
                                    {/* {elemento.user.location && <button>{elemento.user.location}</button>}  */}
                                    {elemento.location.city && <button>{elemento.location.city}</button>}
                                    {elemento.location.country && <button>{elemento.location.country}</button>}
                                    {elemento.location.name && <button>{elemento.location.name}</button>}
                                    {elemento.exif.name && <button>{elemento.exif.name}</button>}
                                    <a href={elemento.urls.regular} target='_blank' download><button title='Descargar'><i className="bi bi-download descargar"></i></button></a>
                                </div>  
                            </div> 
                    </div>
                    )}
            </section>
        )
    }else{
        if(servidor !=-1000){
            return(
                    <div>
                        <h4>Ups! ocurrio un error.</h4>
                    </div>
                 )
        }         
    }
}
export {Random}