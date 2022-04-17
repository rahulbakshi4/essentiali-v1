import "./../components/Auth/auth.css"
import { useState } from "react"
import { LoginService } from "../services/authService"
import { useAuth } from "../context/auth-context"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Alert } from "../components/Alert/Alert"

const Login = () => {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [loggedIn, setLoggedIn] = useState({
        email: '', password: ''
    })
    const [error, setError] = useState(false)
    const loginHandler = async (e) => {
        e.preventDefault()
        const data = await LoginService(loggedIn.email, loggedIn.password)
        if (data) {
            localStorage.setItem("token", data.encodedToken)
            localStorage.setItem("isAuthenticated", true)
            localStorage.setItem("userName", data.foundUser.name)
            setAuth({ ...auth, token: data.encodedToken, isAuthenticated: true })
            navigate(location.state?.from?.pathname || '/products', { replace: true })
        }
        else {
            setError(true)
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
                            <input onChange={(e) => setLoggedIn({ ...loggedIn, email: e.target.value })} value={loggedIn.email} type="email" name="email" placeholder="test.js@gmail.com" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="password" className="text-brown">
                                Password
                            </label>
                            <input onChange={(e) => setLoggedIn({ ...loggedIn, password: e.target.value })} value={loggedIn.password} type="password" name="password" placeholder="*********" required ></input>
                        </div>
                    </div>
                    {error && <div className="form-content">
                        <div className="label-container">
                            <Alert message={"Invalid Email or Password"} variant={'error'} />
                        </div>
                    </div>}
                    <div className="form-content">
                        <button type="submit" className="form-btn bg-brown">
                            Login
                        </button>
                    </div>
                    <div className="form-content">
                        <button onClick={() => setLoggedIn({ email: "test.js@gmail.com", password: "test123" })}
                            type="submit" className="form-btn bg-brown">
                            Login as Test User
                        </button>
                    </div>
                </form>
                <div className="form-actions">
                    <p className="text-center text-brown">Need an account? <Link to="/signup" className="text-brown" >Sign Up Here</Link> </p>
                </div>
            </div>
        </main>
    )
}

export { Login }
