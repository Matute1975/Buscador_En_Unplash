import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './Random.css'

const Random = () => { 

    //const urlBasePhoto=`https://api.unsplash.com/photos/?page=${page}&per_page=30&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` //maserrano
    //const urlBasePhoto=`https://api.unsplash.com/photos/random/?count=30&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` //maserrano
    //const urlBasePhoto=`https://api.unsplash.com/photos/random/?count=20&client_id=ghOVJdvH73_snz5IugwQ8FOLFsFmjceRTlo38dH6nqM` //matute1975

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
            <div className="random">
                    {fotos.map((elemento)=> 
                    <div className="contenedor"
                        key={elemento.id}>
                        <img className="imagenes" src={elemento.urls.regular} alt={elemento.alt_description}/> 
                        {elemento.user.name && <p><a href={elemento.user.links.html} target="_blank">{elemento.user.name}</a></p>}
                        {elemento.location.city && <p>{elemento.location.city}</p>}
                        {elemento.location.country && <p>{elemento.location.country}</p>}
                        {elemento.exif.name && <p>{elemento.exif.name}</p>}
                        {elemento.alt_description && <p>{elemento.alt_description}</p>}
                    </div>
                    )}
            </div>
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