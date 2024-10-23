"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const auth_1 = require("firebase/auth");
const user_model_1 = require("../models/user.model");
const error_const_1 = require("../const/error.const");
class AuthService {
    static registerUser = async (registerReq) => {
        const auth = (0, auth_1.getAuth)();
        try {
            //1. Create a user in firebase
            const res = await (0, auth_1.createUserWithEmailAndPassword)(auth, registerReq.email, registerReq.password);
            //2. Save user document in db
            const newUser = new user_model_1.User({
                _id: res.user.uid,
                email: res.user.email,
                username: registerReq.username,
            });
            await newUser.save();
        }
        catch (error) {
            auth.currentUser?.delete();
            console.log(error);
            throw new error_const_1.BadRequest("Can't create user");
        }
    };
    static loginUser = async (email, password) => {
        try {
            const auth = (0, auth_1.getAuth)();
            const userCredential = await (0, auth_1.signInWithEmailAndPassword)(auth, email, password);
            const userData = await user_model_1.User.findById(userCredential.user.uid);
            return userData;
        }
        catch (error) {
            console.log(error);
            throw new error_const_1.Unauthorized("Invalid Credentials");
        }
    };
    static logoutUser = async () => {
        try {
            const auth = (0, auth_1.getAuth)();
            await auth.signOut();
        }
        catch (error) {
            throw new error_const_1.GeneralError("Something went wrong");
        }
    };
}
exports.AuthService = AuthService;
