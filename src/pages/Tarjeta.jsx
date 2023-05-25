import React, { useEffect, useState , useRef} from 'react';



function Tarjeta() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const inputSaldo = useRef("")
    const id_usuario = urlParams.get('id')
    console.log(id_usuario)
    const[Tarjeta, setTarjeta] = useState([{}])
    const handleClick = (e) => {
        if (id_usuario === ""){
            return alert("Inicie sesion para revisar su tarjeta")
        }else{
        const saldo = inputSaldo.current.value
        fetch(`http://localhost:5000/TarjetaSaldo?monto=${saldo}&id_usuario='${id_usuario}'`)
        .then( response => {window.location.reload()})
        
        e.preventDefault()
        }
    }
    useEffect(() =>{
        
        const getTarjeta = async ()=> {
            if (id_usuario === ""){
                return alert("Inicie sesion para revisar su tarjeta")
            }else{
            const res = await fetch(`http://localhost:5000/Tarjeta?id_usuario='${id_usuario}'`);
            const getdata = await res.json();
            setTarjeta(getdata);
            }
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
    </div>

    );
}

export default Tarjeta