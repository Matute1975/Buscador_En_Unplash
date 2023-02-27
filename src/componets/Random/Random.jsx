import React, { useEffect,useState,useRef } from 'react'
import axios from 'axios'
import './Random.css'



//const urlBasePhoto=`https://api.unsplash.com/photos/?page=${page}&per_page=30&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` //maserrano
//const urlBasePhoto=`https://api.unsplash.com/photos/random/?count=30&w=250&max-h=250fit=crop&orientation=landscape&w=250&max-h=250fit=crop&client_id=ghOVJdvH73_snz5IugwQ8FOLFsFmjceRTlo38dH6nqM` //matute1975
const urlBasePhoto=`https://api.unsplash.com/photos/random/?count=30&w=250&max-h=250fit=crop&orientation=landscape&w=250&max-h=250fit=crop&client_id=tH1HMuBk-P-MztRQtyLP_kD7Rak7C6rSJcNAMCCq7wU` //maserrano

const Random = () => { 
    const [fotos,setFotos]=useState([])
    const [servidor,setServidor]=useState(-1000)
    const ultimaFotoRef=useRef(null)
    const [siguiente,setSiguiente]=useState(0)
  
    useEffect(()=>{
    const obtenerFotos=async () =>{
      const response=await axios.get(`${urlBasePhoto}`) 
      console.log(response)
      setServidor(response.status)
      //console.log(response.data)
      setFotos(response.data)
      //.finally(()=>console.log('Finalizo la conexion a la API.'))
  }
    obtenerFotos()
    },[siguiente])
  
  
  
    useEffect(()=>{
        if (fotos.length >0){
        
        const fotosEnPantalla=document.querySelectorAll('#root .divRandom')
        ultimaFotoRef.current = fotosEnPantalla[fotos.length -1]
        //console.log('Esto tiene fondoDePantalla',fotosEnPantalla)
        //console.log('Esto tiene current',ultimaFotoRef.current)
        }
        if(ultimaFotoRef.current){
            let vigia = new IntersectionObserver((entries)=>{
                entries.forEach(entries=>{
                    if(entries.isIntersecting){
                        setSiguiente(currentState=>(currentState+1))
                        vigia.unobserve(ultimaFotoRef.current)
                    }
                })
            },{
                rootMargin:'0px 0px 200px 0px',
                threshold:1.0
            })
            vigia.observe(ultimaFotoRef.current)
        }
    },[fotos])

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
        if(servidor === -1000){
            return(
                    <div>
                        <h4>Ups! ocurrio un error.</h4>
                    </div>
                 )
        }         
    }
   
}
export {Random}