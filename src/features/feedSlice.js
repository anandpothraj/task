import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading : false,
    feeds : [],
    error : ''
}

export const fetchFeeds = createAsyncThunk('feed/fetchFeeds', (pageNo) => {
    return axios.get(`https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io/jptest?page=${pageNo}`)
    .then((response) => response.data);
})

const feedSlice = createSlice({
    name : 'feed',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchFeeds.pending, (state) => {
            state.loading = true
        }) 
        builder.addCase(fetchFeeds.fulfilled, (state, action) => {
            state.loading = false
            state.feeds = action.payload
            state.error = ''
        })
        builder.addCase(fetchFeeds.rejected, (state, action) => {
            state.loading = false
            state.feeds = []
            state.error = action.error.message
        })
    }
});

export default feedSlice.reducer;