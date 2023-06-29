import React, { useEffect, useState , useRef} from 'react';
import { useNavigate } from "react-router-dom";


function Transferencia() {
    const navigate = useNavigate();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const inputMonto = useRef("")
    const inputTarjeta = useRef("")
    const inputComentario = useRef("")
    const id_usuario = urlParams.get('id')
    const[Tarjeta, setTarjeta] = useState([{}])
    const handleClick = (e) => {
        const tarjetaDestino = inputTarjeta.current.value
        const monto = inputMonto.current.value
        
        fetch(`http://localhost:5000/TransferenciaExterno?monto=${monto}&tarjetaDestino=${tarjetaDestino}&idUsuario=${id_usuario}`)     
        e.preventDefault() 
    }
    useEffect(() =>{
        const getTarjeta = async ()=> {
            if (id_usuario === ""){
                navigate("/login")
                return alert("Inicie sesion para revisar su tarjeta")
            }else{
            const res = await fetch(`http://localhost:5000/Tarjeta?id_usuario='${id_usuario}'`);
            const getdata = await res.json();
            setTarjeta(getdata)
            }
        }
        getTarjeta();
    },[]);    
        
    return (

        <><h2>Transferir</h2>
        <div className='container'>
            <h3>Tarjeta Destino</h3>
            <input type="text" id="Saldo" class="form-control" ref={inputTarjeta} />
            <h3>Monto</h3>
            <input type="text" id="Saldo" class="form-control"  ref={inputMonto}/>
            <h3>Comentario</h3>
            <input type="text" id="Saldo" class="form-control"  ref={inputComentario}/>
            <div>
                <button type="button" class="btn btn-primary btn-block mb-4"onClick={handleClick}>Transferir</button>
            </div>
        </div></>

    );
}

export default Transferencia