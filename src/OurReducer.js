const iSTATE = {
  AllProductlist: [],
  UserId: "",
  SignError:"",
  singleProductDetail:[],
  productDetailForUpdate:[],
  Message:""


};
export default function reducer(state = iSTATE, action) {
  switch (action.type) {
    case "ALL_PRODUCT_SUCCESS":
      return {
        ...state,
        AllProductlist: action.payload,
        Message:""
      };
    case "USER_SIGN_IN_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        UserId: action.payload,
        SignError:""
      }
    
      case "SIGN_IN_ERROR":
        return{
          ...state,
          SignError:action.payload,
          UserId:""
        }
      
      case "SIGN_OUT":
        return{
          ...state,
          UserId:""
        }
      
        case "PRODUCT_DETAIL_SUCCESS":{
          return{
            ...state,
            singleProductDetail:action.payload
          }
        }

        case "GET_PRODUCT_FOR_UPDATE_SUCCESS":{
          return{
            ...state,
            productDetailForUpdate:action.payload
          }
        }
        case "GET_MESSAGE":
          return{
            ...state,
            Message:action.payload

          }


    default:
      return state;
  }
}