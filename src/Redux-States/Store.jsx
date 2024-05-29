import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./Cartslice"
const Store= configureStore({
    reducer:{
        cart:CartSlice
    }
})
export default Store;