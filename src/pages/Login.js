import "./../components/Auth/auth.css"
import { useState } from "react"
import { LoginService } from "../services/authService"
import { useAuth } from "../context/auth-context"
import { Link, useNavigate } from "react-router-dom"
const Login = () => {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState({
        email: '', password: ''
    })
    const loginHandler = async (e) => {
        e.preventDefault()
        const data = await LoginService(loggedIn.email, loggedIn.password)
        if (data) {
            localStorage.setItem("token", data.encodedToken)
            localStorage.setItem("isAuthenticated", true)
            localStorage.setItem("userName", data.foundUser.name)
            setAuth({ ...auth, token: data.encodedToken, isAuthenticated: true })
            navigate("/")
        }


    }
    return (
        <main>
            <div className="form-container">
                <h1 className="text-2xl fw-xbold text-brown text-center">Log In Here</h1>
                <form onSubmit={loginHandler}>
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="email" className="text-brown">
                                Email
                            </label>
                            <input onChange={(e) => setLoggedIn({ ...loggedIn, email: e.target.value })} type="email" name="email" placeholder="test.js@gmail.com" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="password" className="text-brown">
                                Password
                            </label>
                            <input onChange={(e) => setLoggedIn({ ...loggedIn, password: e.target.value })} type="password" name="password" placeholder="*********" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <button type="submit" className="form-btn bg-brown">
                            Login
                        </button>
                    </div>

                </form>
                <div className="form-actions">
                    <p className="text-center text-brown"><a className="text-brown" href="">Forgot Password</a></p>
                    <p className="text-center text-brown">Need an account? <Link to="/signup" className="text-brown" >Sign Up Here</Link> </p>
                </div>
            </div>
        </main>
    )
}

export { Login }
