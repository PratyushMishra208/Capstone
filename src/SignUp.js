import React, { useState } from 'react'
import './myCss.css'
import{UserSignUp} from './Actions'
import { connect } from 'react-redux'
import {
    useHistory
  } from "react-router-dom";

function SignUp(props) {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const [mobilenumber, setMobilenumber] = useState('')
    const [passwordError, setPasswordError] = useState('')
    let History = useHistory()

    const handleSubmit = event => {
        event.preventDefault();
        console.log('running')
        console.log(firstname, lastname, email, password, location, mobilenumber )
        if (password === password) {
            props.UserSignUp([firstname, lastname,email,password,location,mobilenumber])
            setPasswordError('')
            setFirstname('')
            setLastname('')
            setEmail('')
            setPassword('')
            setLocation('')
            setMobilenumber('')
           

            // SetconfirmPassword('')
           History.push("/SignIn")
            //dispatch the action

        }
        else {
            setPasswordError('Your password is not match')
        }
    }

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
                 Capstone Account
               </div>
            </div>
            <div className="row ">
                <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 ">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputFirstname">First Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputFirstname"
                                name="firstname"
                                value={firstname}
                                required
                                onChange={event => setFirstname(event.target.value)}
                            />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputLaststname">Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputLastname"
                                name="lastname"
                                value={lastname}
                                required
                                onChange={event => setLastname(event.target.value)}
                            />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputLocation">Location</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputLocation"
                                name="location"
                                value={location}
                                required
                                onChange={event => setLocation(event.target.value)}
                            />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputMobilenumber">Mobile Number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputMobilenumber"
                                name="mobilenumber"
                                value={mobilenumber}
                                required
                                onChange={event => setMobilenumber(event.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email ID</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                required
                                value={email}
                                name="email"
                                onChange={e => setEmail(e.target.value)} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="Password"
                                required
                                value={password}
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                                <p className="errorText">{passwordError}</p>
                        </div>

                        {/* <div class="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="confirmPassword"
                                required
                                value={confirmPassword}
                                name="confirmPassoword"
                                onChange={e => SetconfirmPassword(e.target.value)}
                            />
                            <p className="errorText">{passwordError}</p>

                        </div> */}
                        {/* <div class="form-group form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1"
                                required
                                name="checkBox" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            <small id="emailHelp" class="form-text text-muted">By Check this, you accepts all terms and conditions.</small>
                        </div> */}
                        <button type="submit" class="btn btn-primary mt-2 mb-5">Create Capstone Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        Message: state.Message

    }
}

export default connect(mapStateToProps,{UserSignUp})(SignUp)