"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
    },
    body: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 240,
    },
    likes: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
    dislikes: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
    },
    author: {
        type: String,
        ref: "User",
        required: true,
    },
    comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
}, {
    timestamps: true,
});
exports.Post = (0, mongoose_1.model)("Post", postSchema);
