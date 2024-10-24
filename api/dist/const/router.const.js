"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalRouter = void 0;
const express_1 = require("express");
const posts_routes_1 = require("../routes/posts.routes");
const auth_routes_1 = require("../routes/auth.routes");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const comments_routes_1 = require("../routes/comments.routes");
exports.globalRouter = (0, express_1.Router)();
exports.globalRouter.use("/auth", auth_routes_1.authRouter);
exports.globalRouter.use("/posts", auth_middleware_1.authValidator, posts_routes_1.postsRouter);
exports.globalRouter.use("/comments", auth_middleware_1.authValidator, comments_routes_1.commentsRouter);
