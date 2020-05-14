import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {CountViews} from "./Actions"

function ProductDetail(props) {
    const { singleProductDetail } = props
     
    const ViewCount=(ProductDetailArray)=>{
    props.CountViews(ProductDetailArray)

    }

    return (
        <div>
            {console.log(singleProductDetail)}
            {/* {console.log(singleProductDetail[0].)} */}
            {singleProductDetail[0] !== undefined ?
                <div className="row ">
                    {ViewCount(singleProductDetail[0])}
                    <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 ">
                        <div className="card" style={{ width: "28rem", marginTop: 30 }}>
                            <div className="card-body">
                                <h5 className="card-title">{singleProductDetail[0].title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                                <p className="card-text">{singleProductDetail[0].description}</p>
                                <p className="card-text"><strong>Price : </strong>{singleProductDetail[0].price}</p>
                                <p className="card-text"><strong>Available Quantity : </strong>{singleProductDetail[0].quantity}</p>
                                <p className="card-text"><strong>No. of Views : </strong>{singleProductDetail[0].views+1}</p>
                                <Link to="/ProductList" className="card-link">Back</Link>
                                <Link to="/Add Product" className="card-link">Add Product</Link>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="row  mt-5">
                    <div className="offset-lg-3  offset-md-3 col-md-6 col-lg-6 col-sm-10 text-center  ">
                    <h3 className="mb-3">NO Data Found</h3>
                    <Link to="/ProductList" className="card-link ">Back</Link>
                    <Link to="/Add Product" className="card-link ">Add Product</Link>
                </div>
                </div>
            }


        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        singleProductDetail: state.singleProductDetail
    }
}
export default connect(mapStateToProps, {CountViews})(ProductDetail)