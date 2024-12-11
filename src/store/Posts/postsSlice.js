import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        fetchAll(state, action) {
            // Return the state as is (immutably)
            // console.log("fectching state inside postslice is " , JSON.stringify(state[0]))

            return action.payload;
        },
        createPost(state, action) {
            // Return a new array instead of mutating the existing state
            return [...state, action.payload];
        },
        updatePost(state,action){
            // console.log("the updated state inside postslice is " ,action.payload)
            return state.map((ele)=>(ele._id !== action.payload._id )?ele:action.payload)
        },
        deletePost(state,action){
            return state.filter((ele)=>(ele._id !== action.payload._id ))
        },
        likePost(state,action){
            return state.map((ele)=>(ele._id !== action.payload._id )?ele:action.payload)
        }
    }
});


const postSliceReducer = postSlice.reducer   
export default postSliceReducer //default
export const {fetchAll,createPost,updatePost,deletePost,likePost} = postSlice.actions //named
