
const pdfParse = require("pdf-parse");
const  generateInterviewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");

async function generateInterviewReportController(req, res) {
   console.log("req.file:", req.file);
    console.log("req.body:", req.body);
async function generateInterviewReportController(req, res) {
  console.log("req.file:", req.file);
  console.log("req.body:", req.body);

  if (!req.file) {
    return res.status(400).json({
      message: "Resume file is required",
    });
  }

  const resumeContent = await (
    new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))
  ).getText();

  // rest of your code...
}
  const resumeFile = req.file;
  console.log(req.file);
  const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
  const { selfDescription, jobDescription } = req.body;

  const interviewReportByAi = await generateInterviewReport({
    resume: resumeContent.text,
    selfDescription,
    jobDescription,
  });
  const interviewReport = await interviewReportModel.create({
    user : req.user.id,
    resume : resumeContent.text,
    selfDescription,
    jobDescription,
    ...interviewReportByAi
  })
 res.status(201).json({
    message:"Interview Report generate sucessfully"
 })
}
module.exports = {generateInterviewReportController};
