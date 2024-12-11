import useStyles from './style'
import {Card,CardActions,CardMedia,CardContent ,Button,Typography} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment'
import { deletePostAction, likePostAction } from '../../../actions/posts';
import { useDispatch } from 'react-redux';
const Post = ({post,setCurrentId})=>{
    const classes = useStyles();
    const handleDelete = (id)=>{
        setCurrentId(0)
        dispatch(deletePostAction(id,post)) ;
    }
    const handleLike = (id) =>{
        setCurrentId(0)
        dispatch(likePostAction(id));
    }
   
    const dispatch = useDispatch()
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size='small' onClick={()=>{setCurrentId(post._id)}}>
                        <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>
                    {Array.isArray(post.tags) ? post.tags.map((tag) => `#${tag} `): ''}
                </Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>

            <CardContent>
                <Typography  variant='body2' color='textSecondary'>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => handleLike(post._id)}><ThumbUpAltIcon fontSize="small" /> Like &nbsp; {post.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => handleDelete(post._id)}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    )
}
 export default Post ;