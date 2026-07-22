const{Router} = require("express");
const authcontroller = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");



const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", authcontroller.registerUserController);

/*
@route POST /api/auth/login
@desc Login a user
@access Public
*/
authRouter.post("/login", authcontroller.loginUserController);

/**
 * @route get /api/auth/logout
 * @desc Logout a user
 * @access Public
 */
authRouter.post("/logout", authcontroller.logoutUserController);    

/**
 * @route GET /api/auth/get-me
 * @desc Get current user logged details
 * @access Private
 */
authRouter.get("/get-me", authMiddleware.authUser, authcontroller.getMeController);

module.exports = authRouter;