const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likepost = async (req, res) =>{
    try{
        const {post, user} = req.body ;
        const like = new Like(
            {
                post, user,
            }
        )
        const savedLike = await like.save();

        // update post collection basis on savedLike
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes: savedLike._id}}, {new: true})
                            .populate("likes")
                            .exec();

        res.json(
            {
                post : updatedPost,
            }
        )
    }

    catch(error){
        res.json(
            {
                error : `liked failed ${error}`
            }
        )
    }
}


//----------------------------------------
// unlike post

exports.unlikePost = async(req, res) =>{
    try{
        const {post, like} = req.body ;
        // find and delete from likeModel
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        // update the post collection
        const updatedPost =await Post.findByIdAndUpdate(post, {$pull : {likes: deletedLike._id}}, {new: true});

        res.json({
            post : updatedPost,
        })

    }
    catch(error){
        res.json(
            {
                error : `UNliked failed ${error}`
            }
        )
    }
}
