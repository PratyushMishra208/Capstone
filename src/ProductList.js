import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, DeleteProduct, ProductDetail, GetProductForUpdate } from './Actions';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom'

function ProductList(props) {
    const handleDelete = (productid) => {
        props.DeleteProduct(productid)
    }

    const viewProductDetail = (productid) => {
        props.ProductDetail(productid)
    }

    const handleUpdate = (productid) => {
        props.GetProductForUpdate(productid)
    }

    const { getAllProducts, ProductList } = props
    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className="container">
            <div className="row mt-2 mb-0 mx-3 " >
                <div className="col-12 text-center">
                    <h3 >PRODUCT LIST</h3> </div>
            </div>
            <hr className="m-0" />
            <div className="row">
                {console.log(ProductList.length)}
                {ProductList.length < 1 ?
                    <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 text-center ">
                        <ReactLoading type="cylon" color="#42de7cc7" width="auto" />
                    </div>

                    :
                    <div className="col-10 offset-1 text-center">
                        <table className="table table-hover">
                            <thead>
                                <tr >
                                    <th scope="col">S.no</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Desription</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ProductList.map((Product, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{parseInt(index) + 1}</th>
                                            <td onClick={() => { viewProductDetail(Product.id) }}> <Link to="/ProductDetail">{Product.title}</Link></td>
                                            <td>{(Product.description).slice(0, 100)}....</td>
                                            <td>{Product.quantity}</td>
                                            <td>{Product.price}</td>
                                            {props.UserId.length > 5
                                                &&
                                                <>
                                                    <td onClick={() => handleUpdate(Product.id)} ><Link className="text-warning" to="/Update Product">Update</Link></td>
                                                    <td onClick={() => handleDelete(Product.id)} className="text-danger btn btn-link">Delete</td>
                                                </>
                                            }

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <Link to="/Add Product" className="card-link">Add Product</Link>
                    </div>
                }


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ProductList: state.AllProductlist,
        UserId: state.UserId
    }
}

export default connect(mapStateToProps, { getAllProducts, DeleteProduct, ProductDetail, GetProductForUpdate })(ProductList)
