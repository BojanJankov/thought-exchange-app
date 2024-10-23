"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const error_const_1 = require("../const/error.const");
const post_model_1 = require("../models/post.model");
class PostsService {
    //1. Get all posts
    static async getAllPosts() {
        try {
            const posts = await post_model_1.Post.find({})
                .populate({
                path: "author",
                select: "username",
            })
                .sort("-createdAt");
            return posts;
        }
        catch (error) {
            console.log(error);
            throw new error_const_1.GeneralError(`Something went wrong  ${error}`);
        }
    }
    //2. Create a post
    static async createPost(userId, postData) {
        try {
            const { title, body } = postData;
            const post = new post_model_1.Post({ author: userId, title, body });
            const createdPost = await post.save();
            return createdPost;
        }
        catch (error) {
            throw new error_const_1.BadRequest(`Couldn't create post, ERROR: ${error}`);
        }
    }
    //3. Get post by id
    static async getPostById(postId) {
        try {
            const foundPost = await post_model_1.Post.findById(postId)
                .populate({
                path: "author",
                select: "username",
            })
                .populate({
                path: "comments",
                populate: {
                    path: "author",
                    select: "username",
                },
                options: {
                    sort: { createdAt: "desc" },
                },
            });
            if (!foundPost)
                throw "Post not found";
            return foundPost;
        }
        catch (error) {
            throw new error_const_1.NotFound(`Couldn't find post, ERROR: ${error}`);
        }
    }
    //4. Update post
    static async updatePost(userId, postId, updateData) {
        try {
            const post = await post_model_1.Post.findOne({ _id: postId, author: userId });
            if (!post)
                throw "Post not found";
            Object.assign(post, updateData);
            await post.save();
        }
        catch (error) {
            throw new error_const_1.BadRequest(`Couldn't update post, ERROR: ${error}`);
        }
    }
    //5. Delete post
    static async deletePost(userId, postId) {
        try {
            const response = await post_model_1.Post.findOneAndDelete({
                _id: postId,
                author: userId,
            });
            console.log(response);
            if (!response)
                throw "Post not found";
        }
        catch (error) {
            throw new error_const_1.NotFound(`Couldn't delete post, ERROR: ${error}`);
        }
    }
    //6. Like Post
    static async likePost(userId, postId) {
        try {
            const post = await post_model_1.Post.findById(postId);
            if (!post)
                throw "Post not found";
            if (post.author === userId)
                throw "Operation not permitted";
            post.likes += 1;
            const updatedPost = await post.save();
            return { likes: updatedPost.likes };
        }
        catch (error) {
            throw new error_const_1.BadRequest(`Couldn't like post, ERROR: ${error}`);
        }
    }
    //7. Dislike Post
    static async dislikePost(userId, postId) {
        try {
            const post = await post_model_1.Post.findById(postId);
            if (!post)
                throw "Post not found";
            if (post.author === userId)
                throw "Operation not permitted";
            post.dislikes += 1;
            const updatedPost = await post.save();
            return { dislikes: updatedPost.dislikes };
        }
        catch (error) {
            throw new error_const_1.BadRequest(`Couldn't dislike post, ERROR: ${error}`);
        }
    }
    //8. Get posts by user
    static async getPostsByUser(userId) {
        try {
            const posts = post_model_1.Post.find({ author: userId }).sort("-createdAt");
            return posts;
        }
        catch (error) {
            throw new error_const_1.NotFound(`Couldn't fetch user's posts, ERROR: ${error}`);
        }
    }
}
exports.PostsService = PostsService;
