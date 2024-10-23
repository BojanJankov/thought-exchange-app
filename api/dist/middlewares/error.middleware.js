"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const error_const_1 = require("../const/error.const");
const errorHandler = (err, req, res, next) => {
    console.log("error handler hit");
    if (err instanceof error_const_1.GeneralError) {
        res.status(err.getCode()).json({
            status: "Error",
            message: err.message,
        });
        return;
    }
    res.status(500).send({
        status: "Error",
        message: err.message,
    });
};
exports.errorHandler = errorHandler;
