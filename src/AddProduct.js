import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import uuid4 from 'uuid4';
// import axios from 'axios';
import {
    Link,
    // NavLink
} from "react-router-dom";
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            price: '',
            quantity: '',
            Description: '',
            productNameError
                : '',
            priceError: '',
            quantityError: '',
            DescriptionError: ''
        }
    }
    handleproductNameChange = event => {
        this.setState({
            productName: event.target.value,
            productNameError: ""
        })
    }
    handlepriceChange = event => {
        this.setState({
            price: event.target.value,
            priceError: ""
        })
    }

    handlequantityChange = event => {
        this.setState({
            quantity: event.target.value,
            quantityError: ""
        })
    }
    handleDescriptionChange = event => {
        this.setState({
            Description: event.target.value,
            DescriptionError: ""
        })
    }

    validate = (() => {

        if (this.state.quantity.length === 0 && this.state.productName.length === 0 && this.state.price.length === 0 && this.state.Description.length <= 50) {
            this.setState({
                productNameError: "Product Name Required",
                priceError: " Price Required",
                quantityError: "Quantity Required",
                DescriptionError: "Atleast 50 words Description"
            })
            return false
        }
        if (this.state.price.length === 0 && this.state.quantity.length === 0) {
            this.setState({
                priceError: " Price Required",
                quantityError: "Quantity Required"
            })
            return false
        }
        if (this.state.quantity.length === 0) {
            this.setState({
                quantityError: "Quantity Required"
            })
            return false
        }
        if (this.state.Description.length <= 50) {
            this.setState({
                DescriptionError: "Atleast 50 words Description"
            })
            return false
        }
        return true
    })

    handleSubmit = event => {
        console.log('running')
        event.preventDefault()
        const isvalid = this.validate()

        if (isvalid) {
            alert(`Are you sure to Add This Product..`)
            let insertObject = {
                "id": uuid4(),
                "title": this.state.productName,
                "quantity": this.state.quantity,
                "price": this.state.price,
                "description": this.state.Description
            };
            axios.post("http://localhost:4000/products", insertObject)
                .then(result => {
                    console.log(result)
                    // setProductData(result.data)
                })
            this.setState({
                productName: "", price: "",
                quantity: "", Description: ""
            })

        }


    }

    render() {
        const { productName, price, quantity, Description } = this.state
        return (

            <div className="container ">
                {this.props.UserId.length <= 0
                    ?

                    <div className="row mt-5 mb-2">
                        <div className="offset-lg-2  offset-md-2 col-md-8 col-lg-8 col-sm-10 text-center  signup-text">
                        <div className="jumbotron bg-danger text-white">
                                <h1 className="display-4 ">Soory....!</h1>
                                <p className="lead">You have no enought Permisson to acces this Page</p>
                                <hr className="my-4"/>
                                    <p>Please Login First</p>
                                    <Link class="btn btn-success btn-lg" to="/SignIn" >Sign In</Link>
                            </div>
                         </div>
                    </div>

                    :
                    <div>
                        <div className="row mt-5 mb-2">
                            <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 text-center  signup-text">
                                Add Product
                         </div>
                        </div>
                        <div className="row ">
                            <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 ">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="productName">Product Name</label>
                                        <input type="text" class="form-control" id="ProductName" aria-describedby="name"
                                            value={productName}
                                            onChange={this.handleproductNameChange}
                                            placeholder="Enter Product Name"
                                        />
                                        <p className="errorText">{this.state.productNameError}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Quantity">Quantity</label>
                                        <input className="form-control" id="Quantity"
                                            type="text"
                                            value={quantity}
                                            onChange={this.handlequantityChange}
                                            placeholder="Enter Quantity"
                                            
                                        />
                                        <p className="errorText">{this.state.quantityError}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Price">Price</label>
                                        <input className="form-control" id="Price"
                                            type="text"
                                            value={price}
                                            onChange={this.handlepriceChange}
                                            placeholder="Enter Price"
                                        />
                                        <p className="errorText">{this.state.priceError}</p>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Description">Description</label>
                                        <input className="form-control" id="Description"
                                            type="text"
                                            
                                            value={Description}
                                            onChange={this.handleDescriptionChange}
                                            placeholder="Description"
                                            
                                        />
                                        <p className="errorText">{this.state.DescriptionError}</p>
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-2 mb-5">Add </button>
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                }

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        UserId :state.UserId,
       
    }
}

export default connect(mapStateToProps, null)(Form)