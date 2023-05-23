import React, { useEffect, useState } from 'react';


function ApiProfe() {
    const[ApiProfe, setApiProfe] = useState([{}])
    useEffect(() =>{
        const getApi = async ()=> {
            const res = await fetch("https://musicpro.bemtorres.win/api/v1/test/saldo");
            const getdata = await res.json();
            setApiProfe(getdata);
            console.log(getdata);
            
        }
        getApi();
    },[]);    
        
    return (
        <div className="container">
        <h2>ApiProfe</h2>
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Message</th>
                <th scope="col">Saldo</th>
                <th scope="col">saldo raw</th>
                </tr>
            </thead>
            <tbody>       
                <tr> 
                <td>{ApiProfe.message}</td>
                <td>{ApiProfe.saldo}</td>
                <td>{ApiProfe.saldo_raw}</td>
                </tr>         
            </tbody>
            </table>
        </div>
    </div>

    );
}

export default ApiProfe