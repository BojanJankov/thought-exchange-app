"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    static registerUser = async (req, res, next) => {
        try {
            const userData = req.body;
            await auth_service_1.AuthService.registerUser(userData);
            res.status(201).json({ msg: "User registered successfully!" });
        }
        catch (error) {
            next(error);
        }
    };
    static loginUser = async (req, res, next) => {
        try {
            const credentials = req.body;
            const userData = await auth_service_1.AuthService.loginUser(credentials.email, credentials.password);
            res.json(userData);
        }
        catch (error) {
            next(error);
        }
    };
    static logoutUser = async (req, res, next) => {
        try {
            await auth_service_1.AuthService.logoutUser();
            res.sendStatus(204);
        }
        catch (error) {
            next(error);
        }
    };
}
exports.AuthController = AuthController;
