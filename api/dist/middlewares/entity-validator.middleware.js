"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommentSchema = exports.updatePostSchema = exports.createPostSchema = exports.userSchema = exports.entityValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const entityValidator = schema => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).send({
                status: "Error",
                message: error.details[0].message,
            });
            return;
        }
        next();
    };
};
exports.entityValidator = entityValidator;
exports.userSchema = joi_1.default.object({
    username: joi_1.default.string().min(6).max(20).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).max(30),
});
exports.createPostSchema = joi_1.default.object({
    title: joi_1.default.string().min(3).max(40).required(),
    body: joi_1.default.string().min(3).max(240).required(),
});
exports.updatePostSchema = joi_1.default.object({
    title: joi_1.default.string().min(3).max(40).optional(),
    body: joi_1.default.string().min(3).max(240).optional(),
});
exports.createCommentSchema = joi_1.default.object({
    body: joi_1.default.string().min(3).max(140).required(),
    postId: joi_1.default.string().required(),
});
