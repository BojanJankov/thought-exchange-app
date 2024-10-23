"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    body: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 140,
    },
    author: {
        type: String,
        ref: "User",
        required: true,
    },
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
}, { timestamps: true });
exports.Comment = (0, mongoose_1.model)("Comment", commentSchema);
