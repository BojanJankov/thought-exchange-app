"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const entity_validator_middleware_1 = require("../middlewares/entity-validator.middleware");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/register", (0, entity_validator_middleware_1.entityValidator)(entity_validator_middleware_1.userSchema), auth_controller_1.AuthController.registerUser);
exports.authRouter.post("/login", auth_controller_1.AuthController.loginUser);
exports.authRouter.get("/logout", auth_controller_1.AuthController.logoutUser);