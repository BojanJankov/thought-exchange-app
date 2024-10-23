"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = void 0;
const comments_service_1 = require("../services/comments.service");
class CommentsController {
    static createComment = async (req, res, next) => {
        try {
            const { postId, body } = req.body;
            const createdComment = await comments_service_1.CommentsService.createComment(req.userId, postId, body);
            res.status(201).json(createdComment);
        }
        catch (error) {
            next(error);
        }
    };
    static getCommentsByUser = async (req, res, next) => {
        try {
            const comments = await comments_service_1.CommentsService.getCommentsByUser(req.userId);
            res.json(comments);
        }
        catch (error) {
            next(error);
        }
    };
}
exports.CommentsController = CommentsController;
