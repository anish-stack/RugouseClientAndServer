import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast'

const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error('Error loading state from sessionStorage:', error);
        return [];
    }
};


const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('cart', serializedState);
    } catch (error) {
        console.error('Error saving state to sessionStorage:', error);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadState(),
    reducers: {
        add: (state, action) => {
            const Productid = action.payload.id || ' '
            const existProduct = state.find(item => item.id === Productid)
            if (existProduct) {
                alert('Already Have This Product')
            } else {
                state.push(action.payload)
                toast.success("Product Add SuccessFully")
            };
            saveState(state)
        },
        remove: (state, action) => {
            const { id, index } = action.payload;
        
            const newState = state.filter((item, i) => i !== index || item.payload._id !== id);
            saveState(newState);
            toast.success("Product Removed Successfully");
        
            return newState;
        },
        
    }
 



}
);

export const { add, remove, } = cartSlice.actions;
export default cartSlice.reducer;