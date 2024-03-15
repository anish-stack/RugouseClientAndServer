import { configureStore } from "@reduxjs/toolkit";
import Productreducer from './Slices/ProductSlices'
import SingleProductreducer from './Slices/ProductSlices'
import AddToCartReducer from './Slices/AddToCartSlice'
export const store = configureStore({
    reducer: {
        product: Productreducer,
        singleproduct:SingleProductreducer,
        cart:AddToCartReducer
    }
})