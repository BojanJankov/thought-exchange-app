"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const posts_service_1 = require("../services/posts.service");
class PostsController {
    //1. Get all posts
    static getAllPosts = async (req, res, next) => {
        try {
            const posts = await posts_service_1.PostsService.getAllPosts();
            res.json(posts);
        }
        catch (error) {
            next(error);
        }
    };
    //2. Create a post
    static createPost = async (req, res, next) => {
        try {
            const post = await posts_service_1.PostsService.createPost(req.userId, req.body);
            res.status(201).json(post);
        }
        catch (error) {
            next(error);
        }
    };
    //3. Get post by id
    static getPostById = async (req, res, next) => {
        try {
            const postId = req.params.id;
            const foundPost = await posts_service_1.PostsService.getPostById(postId);
            res.json(foundPost);
        }
        catch (error) {
            next(error);
        }
    };
    //4. Update post
    static updatePost = async (req, res, next) => {
        try {
            const updateData = req.body;
            await posts_service_1.PostsService.updatePost(req.userId, req.params.id, updateData);
            res.sendStatus(204);
        }
        catch (error) {
            next(error);
        }
    };
    //5. Delete psot
    static deletePost = async (req, res, next) => {
        try {
            await posts_service_1.PostsService.deletePost(req.userId, req.params.id);
            res.sendStatus(204);
        }
        catch (error) {
            next(error);
        }
    };
    //6. Like Post
    static likePost = async (req, res, next) => {
        try {
            const response = await posts_service_1.PostsService.likePost(req.userId, req.params.id);
            res.send(response);
        }
        catch (error) {
            next(error);
        }
    };
    //7. Dislike Post
    static dislikePost = async (req, res, next) => {
        try {
            const response = await posts_service_1.PostsService.dislikePost(req.userId, req.params.id);
            res.send(response);
        }
        catch (error) {
            next(error);
        }
    };
    //8. Get posts by user
    static getPostsByUser = async (req, res, next) => {
        try {
            const userPosts = await posts_service_1.PostsService.getPostsByUser(req.userId);
            res.json(userPosts);
        }
        catch (error) {
            next(error);
        }
    };
}
exports.PostsController = PostsController;
