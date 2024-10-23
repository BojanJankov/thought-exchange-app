"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const error_const_1 = require("../const/error.const");
const comment_model_1 = require("../models/comment.model");
const posts_service_1 = require("./posts.service");
class CommentsService {
    static createComment = async (userId, postId, body) => {
        try {
            const foundPost = await posts_service_1.PostsService.getPostById(postId);
            console.log(userId, postId, body);
            const comment = new comment_model_1.Comment({
                author: userId,
                post: postId,
                body,
            });
            const createdComment = await comment.save();
            foundPost.comments.push(createdComment._id);
            await foundPost.save();
            return createdComment;
        }
        catch (error) {
            console.log(error);
            throw new error_const_1.BadRequest(`Couldn't create comment, ERROR: ${error}`);
        }
    };
    static getCommentsByUser = async (userId) => {
        try {
            const comments = await comment_model_1.Comment.find({
                author: userId,
            }).sort("-createdAt");
            return comments;
        }
        catch (error) {
            throw new error_const_1.GeneralError(`Couldn't fetch comments, ERROR: ${error}`);
        }
    };
}
exports.CommentsService = CommentsService;
