const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) =>{
    try{
        const {post, user, body} = req.body ;
        const comment = new Comment({post, user, body}) ;

        const savedComment = await comment.save();

        
        // find the post by ID,  add new comment to the array of post -- here {new: true} returns the updated doc (not old doc)
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new: true})
                            .populate("comments") // populate the comments array with comment documents
                            
        
        res.json({
            post : updatedPost ,
        })                   

        
    }
    catch(error){ 
        return res.status(500).json({
            error : `error while creating comment ${error}`
        })

    }
}