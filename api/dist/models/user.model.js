"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});
exports.User = (0, mongoose_1.model)("User", userSchema);
