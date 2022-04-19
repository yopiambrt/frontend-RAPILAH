import React, { useState, useEffect } from 'react';
import mockup from '../images/mockup2.svg';
import { NavLink } from 'react-router-dom';
import '../styles/register.css';
import Navbar from '../inc/Navbar'

import { useAuth, useWindowSize } from '../../context/AppContext';
import { registerApi } from './dasbboarduser/Api';

function Register(props) {
    const { isLoggedIn } = useAuth()
    const { width } = useWindowSize()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [no_hp, setNo_hp] = useState("");
    const [errorMsgs, setErrorMsgs] = useState({
        username: [],
        email: [],
        password: [],
        no_hp: [],
        confirm_password: [],
    });

    const [message, setMessage] = useState(null)
    const [isMobile, setIsMobile] = React.useState(width <= 440 ? true : false)

    React.useEffect(() => {
        setIsMobile(width <= 440 ? true : false)
    }, [width])
    useEffect(() => {
        if(isLoggedIn()) {
            props.history.push('/dashboard')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMsgs({
            username: [],
            email: [],
            password: [],
            no_hp: [],
            confirm_password: [],
        })
        setMessage(null)
        registerApi({ email, password, username, no_hp, password_confirmation: confirm_password })
        .then(res => {
            setMessage('Anda berhasil daftar, silahkan login')
        })
        .catch(err => {
            if(err.error){
                setMessage(err.error)
            }
            if(err.errors){
                setErrorMsgs(err.errors)
            }
        })
    }

    return(
        <>
        <Navbar/>
        <div className="container-register">
            <div className="row justify-content-center">
                {!isMobile && (
                    <div className="col-md-8 position-relative">
                        <img src={mockup} alt="mockup" className="mockup" style={{marginTop : "5rem"}}/>
                    </div>
                )}
                <div className="col-md-4 col-sm-12">
                    <div className="card1 register-form" style={{marginTop : "7rem"}}>
                        <div className="card-body">
                            <h2 className="card-title-register text-center">Sign Up</h2>
                            <h6 className="card-subtitle-register text-center mb-4 mt-2">Daftar dan mulailah hidup bersih!</h6>
                            {message !== null && (
                                <div className="alert alert-info" role="alert">
                                    {message}
                                </div>
                            )}
                            <form>
                                <div className="input-field">
                                    <i className="bi bi-person-fill"></i>
                                    <input 
                                        type="username"
                                        value={username} 
                                        name="username" 
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Username"
                                        className={`form-control ${errorMsgs.username.length > 0 ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                <div className="input-field">
                                    <i className="bi bi-telephone-fill"></i>
                                    <input
                                        type="text"
                                        value={no_hp}
                                        onChange={(e) => setNo_hp(e.target.value)}
                                        name="no_hp"
                                        placeholder="No Telepon"
                                        className={`form-control ${errorMsgs.no_hp.length > 0 ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                <div className="input-field">
                                    <i className="bi bi-envelope-fill"></i>
                                    <input
                                        type="email"
                                        value={email} 
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className={`form-control ${errorMsgs.email.length > 0 ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                <div className="input-field">
                                    <i className="bi bi-lock-fill"></i>
                                    <input 
                                        type="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        name="password"
                                        placeholder="Password"
                                        className={`form-control ${errorMsgs.password.length > 0 ? 'is-invalid' : ''}`}
                                    />
                                </div>
                                <div className="input-field">
                                    <i className="bi bi-lock-fill"></i>
                                    <input
                                        type="password"
                                        placeholder="Ulangi Password"
                                        value={confirm_password}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className={`form-control ${errorMsgs?.confirm_password?.length > 0 ? 'is-invalid' : ''}`}
                                    />
                                </div>
                            
                                <div className="d-grid mt-2">
                                    <button onClick={handleSubmit} className="btn btn-login">Daftar</button>
                                </div>
                                <div className="mt-3 text-center">
                                    <label>Sudah punya akun ? <NavLink exact to="/login" className="link">Sign In</NavLink> </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Register;