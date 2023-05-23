import React, { useEffect, useState } from 'react';


function Tarjeta() {
    const[Tarjeta, setTarjeta] = useState([{}])
    useEffect(() =>{
        const getTarjeta = async ()=> {
            const res = await fetch("http://localhost:5000/Tarjeta");
            const getdata = await res.json();
            setTarjeta(getdata);
            console.log(getdata);
        }
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
                <th scope="col">Pin</th>
                <th scope="col">Saldo</th>
                </tr>
            </thead>
            <tbody>
                {
                    Tarjeta.map( (getTarjeta) =>(
                       <tr> 
                        <td>{ getTarjeta.nro}</td>
                        <td>{ getTarjeta.pin}</td>
                        <td>{ getTarjeta.saldo}</td>
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