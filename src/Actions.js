
export function getAllProducts() {
    return{ type:"GET_All_PRODUCTS"}
}

export function getProductSuccess(value){
    return{
        type:"ALL_PRODUCT_SUCCESS",
        payload:value
    }
}
 
export function UserSignUp(value){
    // console.log(value)
    return{
        type:"USER_SIGN_UP",
        payload:value
    }
}

export function UserSignIn(value){
    return{
        type:"USER_SIGN_IN",
        payload:value
    }
}

export function UserSignInSuccess(value){
    console.log(value)
    return{
        type:"USER_SIGN_IN_SUCCESS",
        payload:value
    }
}

 export function SignErrorMsg(value){
     console.log(value)
     return{
         type:"SIGN_IN_ERROR",
         payload:value
     }
 }

 export function signOut(){
     return{
         type:"SIGN_OUT"
     }
 }

 export function searchQuery(value){
     return{
         type:"SEARCH_QUERY",
         payload:value
     }
 }

 export function searchQueryResult(value){
     return{
         type:"SERACH_QUERY_RESULT",
         payload:value
     }
 }

 export function DeleteProduct(value){
     return{
         type:"DELETE_PRODUCT",
         payload:value
     }
 }

 export function ProductDetail(value){
     console.log(value)
     return{
         type:"PRODUCT_DETAIL",
         payload:value
     }
 }

 export function ProductDetailSuccess(value){
     return{
         type:"PRODUCT_DETAIL_SUCCESS",
         payload:value
     }
 }

 export function GetProductForUpdate(value){
    return{
        type:"GET_PRODUCT_FOR_UPDATE",
        payload:value
    }
}

export function GetProductForUpdateSuccess(value){
    return{
        type:"GET_PRODUCT_FOR_UPDATE_SUCCESS",
        payload:value
    }
}

 export function ProductUpdate(value){
     return{
         type:"PRODUCT_UPDATE",
         payload:value
     }
 }

//  export function ShowMessage(){
//      return{
//          type:"SHOW_MESSAGE"

//      }
//  }
 export function GetMessage(value){
     console.log(value)
    return{
        type:"GET_MESSAGE",
        payload:value
        
    }
}
