import * as api from '../api/index'
import { fetchAll,createPost,updatePost,deletePost,likePost } from '../store'
export const getAllPostsAction = () => async(dispatch)=>{
    try{
        console.log("getall posts")
        const posts = await api.fetchPosts();
        console.log("all posts is", posts)
        dispatch(fetchAll(posts.data))
    }catch(err){
        console.log("error in fetching all posts is ",err.message)
    }
}
export const createPostAction = (post) =>async(dispatch)=>{
    try{
        const {data} = await api.createPost(post);
        dispatch(createPost(data))
    }catch(err){
        console.log("error in creating post is ",err.message)
    }
}
export const updatePostAction = (post) => async(dispatch) =>{
        try{
            // console.log("inside updatePostAction")
            const {data} = await api.updatePost(post);
            // console.log("after api call ",data)
            dispatch(updatePost(data))
        }catch(err){
            console.log("error while updating post ",err.message)
        }
}
export const likePostAction = (id) => async(dispatch)=>{
    try{
        const {data} = await api.likePost(id)
        dispatch(likePost(data))
    }catch(err){
        console.log(err)
    }
}
export const deletePostAction = (currentId,post) =>async(dispatch) =>{
    try{
        const {data} = await api.deletePost(currentId);
        dispatch(deletePost(post))
    }catch(err){
        console.log(err);
    }
}