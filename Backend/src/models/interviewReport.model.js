const mongoose = require("mongoose");
/**
 * -job description
 * -resume text
 * -self desciption
 * *
 * -Technical questions:
 *      [{
 *           questoins:"",
 *           intention:"
 *           answer:""
 * }]
 * -Behavirol queston:"
 * [{
 *      questoins:"",
 *      intention:"
 *      answer:""
 * }]
 * intention:"",
 * answer:""
 *  -skill gap:[{
 *              skill:""
 * severity: :{
 * type:string
 * enum:["low,"midium","high"]
 * }
 *       }]
 *
 * -preparatoin plan ;[{
 *     day:number,
 * focus :string,
 * task:[string]
 *
 * }]
 */
const technicalQuestionSchema = new mongoose(
  {
    question: {
      type: String,
      required: [true, "Technical question required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Intention is required"],
    },
  },
  {
    _id: false,
  },
);

const behavirolQuestoinSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Intention is required"],
    },
  },
  {
    _id: false,
  },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  },
);

const preparationPlanSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: [true, "Day is required"],
  },
  focus: {
    type: String,
    required: [true, "Focus is required"],
  },
  tasks: [
    {
      type: String,
      required: [true, "Task is required"],
    },
  ],
});

const interviewReportSchema = new mongoose.Schema({
  jobDescription: {
    type: String,
    required: [true, "Job description is required"],
  },
  resume: {
    type: String,
  },
  selfDesciption: {
    type: String,
  },
  matchScore: {
    type: Number,
    min: 0,
    max: 100,
  },
  technicalQuestions:{technicalQuestionSchema},
  behavirolQuestoins:{behavirolQuestoinSchema},
  skillGaps:{skillGapSchema},
  preparationPlan:{preparationPlanSchema}




});
