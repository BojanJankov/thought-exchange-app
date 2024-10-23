"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidator = void 0;
const auth_1 = require("firebase/auth");
const authValidator = (req, res, next) => {
    const auth = (0, auth_1.getAuth)();
    if (!auth.currentUser) {
        res.sendStatus(403);
        return;
    }
    req.userId = auth.currentUser.uid;
    next();
};
exports.authValidator = authValidator;
