import { useState,useEffect } from 'react';
import useStyles from './styles'
import {TextField,Button,Typography,Paper} from "@mui/material"
import FileBase from 'react-file-base64'
import { useDispatch,useSelector } from 'react-redux';
import { createPostAction,updatePostAction } from '../../actions/posts';
const Form = ({currentId,setCurrentId})=>{
    const [postData,setPostData] = useState({
        creator:"",
        title:"",
        message:"",
        tags:[],
        selectedFile:''
    })
    const classes = useStyles();
    const dispatch =useDispatch();
    const post = useSelector((state) => {
        if (currentId) {
            return state.posts.find((p) => {
                return p._id === currentId;
            });
        } else {
            return null;
        }
    });
    
    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
          dispatch(createPostAction(postData));
          clear();
        } else {console.log("updatePostAction call")
          dispatch(updatePostAction(postData));
          clear();
        }
      };
    
    useEffect(()=>{
        if(post) setPostData(post);
    },[post])
    return(
        <Paper className='classes.paper'>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{(currentId)?"Editing":"Creating"} a Memory</Typography>
                <TextField name='creator'variant='outlined' label="Creator" value={postData.creator} fullWidth onChange={(e)=>{ setPostData({...postData,creator: e.target.value})}}/>
                <TextField name='title'variant='outlined' label="Title" value={postData.title} fullWidth onChange={(e)=>{ setPostData({...postData,title: e.target.value})}}/>
                <TextField name='message'variant='outlined' label="Message" value={postData.message} fullWidth onChange={(e)=>{ setPostData({...postData,message: e.target.value})}}/>
                <TextField name='tags'variant='outlined' label="Tags" value={postData.tags} fullWidth onChange={(e)=>{ setPostData({...postData,tags: e.target.value.split(',') })}}/>
                <div className='classes.fileInput'><FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,selectedFile:base64})}></FileBase></div>
                <Button className='classes.buttonSubmit' variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth>clear</Button>
            </form>
        </Paper>

    )
}
 export default Form ;