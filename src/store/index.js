import {configureStore,applyMiddleware,compose} from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"
import { fetchAll,createPost,updatePost,deletePost,likePost }  from "./Posts/postsSlice"
import postSliceReducer from './Posts/postsSlice'


const store = configureStore({
    reducer:{
        posts:postSliceReducer
    }
},compose(applyMiddleware(thunk)))

export {store}
export {fetchAll,createPost,updatePost,deletePost,likePost}