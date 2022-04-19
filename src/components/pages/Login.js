import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import mockup from '../images/mockup2.svg';
import google from '../images/google2.svg';
import Navbar from '../inc/Navbar'
import { useAuth, useWindowSize } from '../../context/AppContext';
import { loginApi } from './dasbboarduser/Api';


function Login({ history }) {
    const { isLoggedIn, persistUser } = useAuth()
    const { width } = useWindowSize()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsgs, setErrorMsgs] = useState({
        email: [],
        password: []
    });
    const [message, setMessage] = useState(null)

    const [isMobile, setIsMobile] = React.useState(width <= 440 ? true : false)

    React.useEffect(() => {
        setIsMobile(width <= 440 ? true : false)
    }, [width])

    useEffect(() => {
        if(isLoggedIn()) {
            history.push('/dashboard')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMsgs({
            email: [],
            password: []
        })
        setMessage(null)
        loginApi({ email, password})
        .then(res => {
            persistUser({
                token: res.token,
                user: res.user,
                address: res.address,
            })
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
        <div className="container-login mt-5">
            <div className="row justify-content-center">
                {!isMobile && (
                    <div className="col-md-8 position-relative">
                        <img src={mockup} alt="mockup" className="mockup mt-5"/>
                    </div>
                )}
                <div className="col-md-4 col-sm-12">
                    <div className="card1 form-login" style={{marginTop : "4rem"}}>
                        <div className="card-body">
                            <h2 className="card-title-login text-center">Sign In</h2>
                            <h6 className="card-subtitle-login text-center mb-5 mt-3">Mulai hidup bersih bersama Rapilah!</h6>
                            {message !== null && (
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            )}
                            <form>
                                <div className="input-field">
                                    <i className="bi bi-person-fill"></i>
                                    <input 
                                        type="email" 
                                        value={email} 
                                        name="email" 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className={`form-control ${errorMsgs.email.length > 0 ? 'is-invalid' : ''}`}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="input-field">
                                    <i className="bi bi-lock-fill"></i>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className={`form-control ${errorMsgs.password.length > 0 ? 'is-invalid' : ''}`}
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label check" htmlFor="exampleCheck1">Ingat saya</label>
                                    </div>
                                    <div>
                                        <Link to="#" className="link1">Lupa Password?</Link>
                                    </div>
                                </div>

                                <div className="d-grid mt-2">
                                    <button onClick={handleSubmit} className="btn btn-login">Login</button>
                                </div>
                                <div className="d-grid mt-3">
                                    <button onClick={handleSubmit} className="btn btn-light btn-gmail"><img src={google} className="img-google me-2" alt="Gmail"/>Login dengan Google</button>
                                </div>

                                <div className="mt-3 text-center">
                                    <label>Belum punya akun ? <Link to="/register" className="link">Sign Up</Link> </label>
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

export default Login;