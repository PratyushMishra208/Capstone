import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios';
import uuid4 from 'uuid4';
import { getProductSuccess, 
     UserSignInSuccess,
     SignErrorMsg,
     ProductDetailSuccess, 
     GetProductForUpdateSuccess,
     GetMessage
 } from '../Actions'
// import { connect } from 'react-redux';

const fetchProductList = async () => {
    const response = await axios.get("http://localhost:4000/products");
    const data = await response.data
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data
};

const createUser = async (payload) => {
    const insertObject = {
        "id": uuid4(),
        "firstname": payload[0],
        "lastname":payload[1],
        "email": payload[2],
        "password": payload[3],
        "location": payload[4],
        "mobilenumber": payload[5]
        // "comfirmPassword": payload[4]
    }
    const response = await axios.post("http://localhost:4000/UserData", insertObject);
    const data = await response.data
    return response
}

const SignIn = async (payload) => {
    // console.log(payload[0])
    const response = await axios.get("http://localhost:4000/UserData?email=" + payload[0]);
    const data = await response.data
    console.log(data)
    if (data.length > 0) {
        console.log(data[0].email, data[0].password)
        if (payload[0] === data[0].email && payload[1] === data[0].password) {
            return data[0].id
        }
        else {
            return "Password_Error"
        }
    }
    else {
        return "NO_User"
    }
}

const SearchResultFunc = async (payload) => {
    // console.log(payload)
    const response = await axios.get("http://localhost:4000/products?title=" + payload);
    const data = await response.data
    if (data.length <= 0) {
        const response = await axios.get("http://localhost:4000/products?description=" + payload);
        // console.log(response)
        const data = await response.data
        // console.log(data)
        return data
    }
    else {
        console.log(data)
        return data
    }
}

const DeleteProductfunc= async(payload)=>{
    
    const response=await axios.delete("http://localhost:4000/products/"+payload)
    if(response.status===200){
        const response = await axios.get("http://localhost:4000/products");
        const data = await response.data
        return data
    }  
}

const ProductDetailfunc=async(payload)=>{
    const response = await axios.get("http://localhost:4000/products?id=" + payload);
    const data = await response.data
    return data
}

const ProductUpdateFunc = async(payload)=>{
    // console.log(payload[0])
    const insertObject = {
        // "id": payload[0],
        "title": payload[1],
        "quantity": payload[2],
        "price": payload[3],
        "description": payload[4]
    }
    const response = await  axios.put("http://localhost:4000/products/"+payload[0], insertObject);
    
    return response
}

const CountViewFunc=async(payload)=>{
    // console.log(payload)
    let insertObject={}
    if(payload.views===undefined){
         insertObject = {
            "id": payload.id,
            "title": payload.title,
            "quantity": payload.quantity,
            "price": payload.price,
            "description": payload.description,
            "views":1
        }
    }
    else{
       const ProductViews=payload.views+1
         insertObject=
        {
            "id": payload.id,
            "title": payload.title,
            "quantity": payload.quantity,
            "price": payload.price,
            "description": payload.description,
            "views":ProductViews
        }
       
    }
    // console.log(insertObject)
    const response = await  axios.put("http://localhost:4000/products/"+payload.id, insertObject);
    // console.log(response)
}



function* getAllProduct() {
    const ProductList = yield call(fetchProductList)
    yield put(getProductSuccess(ProductList))
}

function* UserCreate({ payload }) {
    const response=yield call(createUser, payload)
    // console.log(response)
    if(response.status===201){
        yield put (GetMessage("Your Account is Successful Update"))
    }
    else{
        yield put (GetMessage("Your Account  is not Created ! Please Try again"))
    }
}

function* UserSignIn({ payload }) {
    console.log(payload)
    const UserID = yield call(SignIn, payload)
    if (UserID === "Password_Error" || UserID === "NO_User") {
        yield put(SignErrorMsg(UserID))
        yield put (GetMessage("Your Email Id or Password is not matched"))

    }
    else {
        yield put(UserSignInSuccess(UserID))
        yield put (GetMessage("you Successfully Sign in"))
    }

}

function* SearchQuery({ payload }) {
    const SearchResult = yield call(SearchResultFunc, payload)
    // console.log(SearchResult)
    yield put(getProductSuccess(SearchResult))
}

function* DeleteProduct({payload}){
    const ProductList=yield call(DeleteProductfunc,payload)
    yield put(getProductSuccess(ProductList))
}

function* ProductDetail({payload}){
    const ProductDetailResult=yield call(ProductDetailfunc,payload)
    // console.log(ProductDetailResult)
    yield put(ProductDetailSuccess(ProductDetailResult))
}

function* ProductUpdate({payload}){
    const response=yield call(ProductUpdateFunc,payload)
    if(response.status===201){
      yield put (GetMessage("Your Product is Successful Update"))
    }
    else{
      yield put(GetMessage("Your Product is Not Update"))
    }
}

function* GetProductForUpdate({payload}){
    // console.log(payload)
    const productDetial=yield call(ProductDetailfunc,payload)
    yield put(GetProductForUpdateSuccess(productDetial))
}

function* CountView({payload}){
    yield call(CountViewFunc,payload)

}

export const watchersaga = [
    takeEvery("GET_All_PRODUCTS", getAllProduct),
    takeEvery("USER_SIGN_UP", UserCreate),
    takeEvery("USER_SIGN_IN", UserSignIn),
    takeEvery("SEARCH_QUERY", SearchQuery),
    takeEvery("DELETE_PRODUCT",DeleteProduct),
    takeEvery("PRODUCT_DETAIL",ProductDetail),
    takeEvery("PRODUCT_UPDATE", ProductUpdate),
    takeEvery("GET_PRODUCT_FOR_UPDATE",GetProductForUpdate),
    takeEvery("COUNT_VIEWS",CountView)
]