import React from 'react';
import {useRef} from 'react';
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";




const Login = () => {
//     const [username, setusername] = useState("");
//     const [password, setpassword] = useState("");
//     const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
//     const users = [{ username: "Jane", password: "testpassword" }];
//     const handleSubmit = (e) => {
//     e.preventDefault()
//     const account = users.find((user) => user.username === username);
//     if (account && account.password === password) {
//         setauthenticated(true)
//         localStorage.setItem("authenticated", true);
//         navigate("/Home")
//     }
//   };
    const navigate = useNavigate();
    const inputUsuario = useRef("");
    const inputContrasena = useRef("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const  handleClick = async (e) => {
        if (inputUsuario.current.value === "") {
            return alert("ingrese usuario");
        }
        if (inputContrasena.current.value === "") {
            return alert("ingrese contraseña")
        }
        e.preventDefault()
        const usuario = inputUsuario.current.value
        const contrasena = inputContrasena.current.value
        const  login = await fetch(`http://localhost:5000/login?usuario=${inputUsuario.current.value}&contrasena=${inputContrasena.current.value}`)
        const loginData = await login.json()
        const id_usuario = loginData[0].id
        if (login.status === 200) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            navigate(`/Tarjeta?id=${id_usuario}`)
        }else {
            alert("Usuario y/o contraseña incorretos")
        }      
    }
    return (
        <form>
            <div class="form-outline mb-4">
                <input type="text" id="Usuario" class="form-control"  ref={inputUsuario}/>
                <label class="form-label" for="Usuario">Usuario</label>
            </div>    
            <div class="form-outline mb-4">
                <input type="password" id="Contrasena" class="form-control" ref={inputContrasena}/>
                <label class="form-label" for="Contrasena">Contraseña</label>
            </div>
            <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleClick}>Ingresar</button>
        </form>       
    );
}


export default Login