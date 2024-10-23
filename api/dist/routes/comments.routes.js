"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const express_1 = require("express");
const comments_controller_1 = require("../controllers/comments.controller");
const entity_validator_middleware_1 = require("../middlewares/entity-validator.middleware");
exports.commentsRouter = (0, express_1.Router)();
exports.commentsRouter.post("/", (0, entity_validator_middleware_1.entityValidator)(entity_validator_middleware_1.createCommentSchema), comments_controller_1.CommentsController.createComment);
exports.commentsRouter.get("/user", comments_controller_1.CommentsController.getCommentsByUser);
