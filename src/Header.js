import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import { signOut,searchQuery } from './Actions'
import { connect } from 'react-redux'



function Header(props) {

    const [query, setQuery] = useState('')
    const HandleSignOut = (e) => {
        e.preventDefault()
        props.signOut()

    }
    const SearchQueryHandle = (e) => {
        e.preventDefault()
        console.log(query)
        props.searchQuery(query)
    }

    const { UserId } = props
    return (
        <div className="container-fulid mt-2">
            <div className="row ">
                <div className="col-12">
                    <nav style={{backgroundColor:"green"}} className="navbar navbar-expand-lg navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand text-success" to="/"><strong className="text-white">Capstone</strong></Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
                                <li className="nav-item ">
                                    <Link to="/" className="nav-link  text-white">Home<span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/AboutUs" className="nav-link text-white">About </Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link to="/ProductList" className="nav-link text-white">Product List</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/Add Product" className="nav-link text-white">Add Product</Link>
                                </li>
                               
                                {UserId.length <= 0
                                    ?
                                    <li className="nav-item">
                                        <Link className="nav-link  " to="/SignIn"><span className="badge badge-success py-2 px-3 rounded-5">LogIn</span></Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        {/* <Link className="nav-link" to="">SignOut</Link> */}
                                        <Link className="nav-link" onClick={HandleSignOut} ><span className="badge badge-success py-2 px-3 rounded-5">SignOut</span></Link>
                                    </li>

                                }

                            </ul>
                            <form className="form-inline my-2 my-lg-0" onSubmit={SearchQueryHandle}>
                                <input className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)} />
                                <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        UserId: state.UserId
    }
}

export default connect(mapStateToProps, { signOut,searchQuery })(Header)
