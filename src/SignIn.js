import React, { useState,useEffect } from 'react'
import './myCss.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {UserSignIn} from './Actions'
import{ useHistory} from 'react-router-dom'

function SignIn(props) {
    const [email,   setEmail] = useState('');
    const [password, setPassword] = useState('');
    let History = useHistory()
    const {UserId}=props
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password)
        props.UserSignIn([email,password])
        setEmail('')
        setPassword('')
    }
    useEffect(()=>{
        if(UserId!==""){
            History.push("/ProductList")
        }

    },[UserId,History])

    return (
        <div className="container ">
            {props.Message !== "" ?
                            <div class="alert alert-success alert-dismissible fade show mt-2" role="alert">
                                <strong></strong> {props.Message}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            :
                            ""
                        }
            <div className="row mt-5 mb-2">
                <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 text-center  signup-text">
                    Log In
               </div>
            </div>
            <div className="row ">
                <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 ">
                    <form onSubmit={submitHandler}>
                        <div class="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={email}
                                required
                                //  onChange={event => setUsername(event.target.value)}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="Password1">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="Password1"
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary mt-2 mb-5">LogIn</button>
                    </form>
                    <hr />
                    <div style={{ textAlign: "right" }}>
                        <Link to="/SignUp" >Create a Account</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        Message: state.Message,
        UserId:state.UserId
        
    }
}
export default connect(mapStateToProps,{UserSignIn})(SignIn)
