import React, { useEffect, useState , useRef} from 'react';
import { useNavigate } from "react-router-dom";


function Tarjeta() {
    const navigateTransferencia = () => {
        navigate(`/Transferencia?id=${id_usuario}`);
      };
    const navigate = useNavigate();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const inputSaldo = useRef("")
    const id_usuario = urlParams.get('id')
    console.log(id_usuario)
    const[Tarjeta, setTarjeta] = useState([{}])
    const[Historial, setHistorial] = useState([{}])
    const handleClick = (e) => {
        const saldo = inputSaldo.current.value
        fetch(`http://localhost:5000/TarjetaSaldo?monto=${saldo}&id_usuario='${id_usuario}'`)
        .then( response => {window.location.reload()})      
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
            setTarjeta(getdata);
            }
        }
        const getHistorial = async ()=> {
            if (id_usuario === ""){
                navigate("/login")
                return alert("Inicie sesion para revisar su tarjeta")
            }else{
            const res = await fetch(`http://localhost:5000/Historial?id_usuario='${id_usuario}'`);
            const getdata = await res.json();
            setHistorial(getdata);
            }
        }
        getHistorial()
        getTarjeta();
    },[]);    
        
    return (
    <div className="container">
        <h2>Tarjeta</h2>
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Numero Tarjeta</th>
                <th scope="col">Saldo</th>
                </tr>
            </thead>
            <tbody>
                {
                    Tarjeta.map( (getTarjeta) =>(
                       <tr> 
                        <td>{ getTarjeta.nro}</td>
                        <td>{ getTarjeta.saldo}</td>
                        </tr>
                    )
                    )
                }
            </tbody>
            </table>
        </div>
        <div>
            <h2>Agregar Saldo</h2>
            <input type="text" id="Saldo" class="form-control" ref={inputSaldo}/>
            <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClick}>Agregar</button>
        </div>
        <div>
            <button type="button" class="btn btn-primary btn-block mb-4"onClick={navigateTransferencia}>Transferencia</button>
        </div>
        <div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id Transferencia</th>
                <th scope="col">Tarjeta Destino</th>
                <th scope="col">Comentario</th>
                <th scope="col">Monto</th>
                </tr>
            </thead>
            <tbody>
                {
                    Historial.map( (getHistorial) =>(
                       <tr> 
                        <td>{ getHistorial.id_transferencia}</td>
                        <td>{ getHistorial.tarjeta_destino}</td>
                        <td>{ getHistorial.comentario}</td>
                        <td>{ getHistorial.monto}</td>
                        </tr>
                    )
                    )
                }
            </tbody>
            </table>
        </div>
    </div>

    );
}

export default Tarjeta