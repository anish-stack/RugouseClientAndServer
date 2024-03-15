import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchData = createAsyncThunk('product/fetchData',async()=>{
    try {
        const res=  await axios.get('https://www.api.rughouzz.in/api/v1/all-product')
        console.log(res.data.data)
        return res.data
    } catch (error) {
        console.log(error)
        throw error; 
    }
})

const fetchSlice = createSlice({
    name:'Product',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
      },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
})

export default fetchSlice.reducer;