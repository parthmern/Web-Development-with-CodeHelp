const express = require("express");
const router  = express.Router();

const {createComment} = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likepost, unlikePost } = require("../controllers/likeController");

router.post("/comments/create", createComment)
.post("/posts/create", createPost)
.get("/posts", getAllPosts)
.post("/likes/post", likepost)
.delete("/likes/unlike", unlikePost);

module.exports = router ;