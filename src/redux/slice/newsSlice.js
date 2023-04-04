import { createSlice } from '@reduxjs/toolkit'

const initialState = {
storedNews: []
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    STORE_NEWS(state, action){
        state.storedNews=action.payload;
    },
  }
});

export const {STORE_NEWS} = newsSlice.actions
export const selectNews=(state)=>state.news.storedNews
export default newsSlice.reducer