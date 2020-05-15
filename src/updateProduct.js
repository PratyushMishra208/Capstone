import React, { Component } from 'react'
import { connect } from 'react-redux'
// import axios from 'axios';
// import uuid4 from 'uuid4';
// import axios from 'axios';
import {
    Link,
    // NavLink
} from "react-router-dom";
import { ProductUpdate } from './Actions'
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            productName: '',
            price: '',
            quantity: '',
            Description: '',
            manufacturer:'',
            productNameError
                : '',
            priceError: '',
            quantityError: '',
            DescriptionError: '',
            manufacturerError:''

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

    handlemanufacturerChange = event => {
        this.setState({
            manufacturer: event.target.value,
            manufacturerError: ""
        })
    }

    validate = (() => {

        if (this.state.quantity.length === 0 && this.state.productName.length === 0 && this.state.price.length === 0 && this.state.Description.length === 0 && this.state.manufacturer.length === 0) {
            this.setState({
                productNameError: "Product Name Required",
                priceError: " Price Required",
                quantityError: "Quantity Required",
                DescriptionError: "Description Required",
                manufacturerError: " manufacturer Required"
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
        if (this.state.Description.length === 50) {
            this.setState({
                DescriptionError: "Description Required"
            })
            return false
        }

        if (this.state.manufacturer.length === 0) {
            this.setState({
                manufacturerError: "Manufacturer Required"
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
            this.props.ProductUpdate([this.state.id, this.state.productName, this.state.price, this.state.quantity, this.state.Description, this.state.manufacturer])
            this.setState({
                productName: "", price: "",
                quantity: "", Description: "",
                manufacturer:"",
                id: ""
            })

        }


    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.productDetailForUpdate[0] !== undefined) {
                this.setState({
                    id: this.props.productDetailForUpdate[0].id,
                    productName: this.props.productDetailForUpdate[0].title,
                    price: this.props.productDetailForUpdate[0].price,
                    quantity: this.props.productDetailForUpdate[0].quantity,
                    manufacturer: this.props.productDetailForUpdate[0].manufacturer,
                    
                })
            }
        }, 1000)
    }

    componentWillMount() {

    }
    render() {
        const { productName, price, quantity, Description,manufacturer, id } = this.state
        return (

            <div className="container ">
                {this.props.UserId.length <= 0
                    ?

                    <div className="row mt-5 mb-2">
                        <div className="offset-lg-2  offset-md-2 col-md-8 col-lg-8 col-sm-10 text-center  signup-text">
                            <div className="jumbotron bg-danger text-white">
                                <h1 className="display-4 ">Soory....!</h1>
                                <p className="lead">You have no enought Permisson to acces this Page</p>
                                <hr className="my-4" />
                                <p>Please Login First</p>
                                <Link class="btn btn-success btn-lg" to="/SignIn" >Sign In</Link>
                            </div>
                        </div>
                    </div>

                    :
                    <div>
                        {this.props.Message !== "" ?
                            <div class="alert alert-success alert-dismissible fade show mt-2" role="alert">
                                <strong></strong> {this.props.Message}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            :
                            ""
                        }

                        <div className="row mt-5 mb-2">
                            <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 text-center  signup-text">
                                Update Product
                         </div>
                        </div>
                        <div className="row ">
                            {this.props.productDetailForUpdate[0] !== undefined ?
                                <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 ">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            {/* {this.setState({id:this.props.productDetailForUpdate[0].id})} */}
                                            <label htmlFor="productName">Product Name</label>
                                            <input type="text" class="form-control" id="ProductName" aria-describedby="name"
                                                value={productName}
                                                onChange={this.handleproductNameChange}
                                                placeholder="Enter the product Name"
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
                                         
                                        <div className="form-group">
                                        <label htmlFor="Manufacturer">Manufacturer</label>
                                        <input className="form-control" id="Manufacturer"
                                            type="text"
                                            
                                            value={manufacturer}
                                            onChange={this.handlemanufacturerChange}
                                            placeholder="Manufacturer"
                                            
                                        />
                                        <p className="errorText">{this.state.manufacturerError}</p>
                                    </div>

                                        <button type="submit" class="btn btn-primary mt-2 mb-5">Update </button>
                                    </form>
                                    <hr />
                                </div>
                                :
                                ""
                            }
                        </div>
                    </div>
                }

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        UserId: state.UserId,
        productDetailForUpdate: state.productDetailForUpdate,
        Message: state.Message

    }
}

export default connect(mapStateToProps, { ProductUpdate })(Form)