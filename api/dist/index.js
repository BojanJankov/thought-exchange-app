"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./const/firebase");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_const_1 = require("./const/router.const");
const error_middleware_1 = require("./middlewares/error.middleware");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const PORT = (process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const { DB_USER, DB_PASS, DB_CLUSTER, DB_NAME } = process.env;
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
//Whitelist all the domains and ports for the frontend which will be our dev client: localhost:4200 and our prod client: unknown
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", router_const_1.globalRouter);
app.use(error_middleware_1.errorHandler);
app.listen(PORT, HOST, async () => {
    console.log(`Server is up at port ${PORT}`);
    await mongoose_1.default.connect(MONGO_URI);
    console.log("Connected to MongoDB");
});
