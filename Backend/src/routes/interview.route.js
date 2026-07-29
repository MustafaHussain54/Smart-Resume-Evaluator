const express = require("express");
const interviewRouter = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const interviewController = require("../controllers/interview.controller");
const generateInterviewReport = require("../services/ai.service");
const upload = require("../middlewares/file.middelware");
/** 
*@route post/api/intreview
*@decription generate new interview report om the basis of user self description resume pd fand job description
*@access private

*/
interviewRouter.post(
  "/",
  authMiddleware.authUser,
  upload.single("resume"),
  interviewController.generateInterviewReportController,
);
// console.log("authMiddleware:", authMiddleware);
// console.log("authUser:", typeof authMiddleware.authUser);

// console.log("upload:", upload);
// console.log("upload.single:", typeof upload.single);

// console.log("interviewController:", interviewController);
// console.log(
//   "generateInterviewReportController:",
//   typeof interviewController.generateInterviewReportController
// );

module.exports = interviewRouter;
