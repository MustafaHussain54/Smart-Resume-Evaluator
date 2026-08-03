// const mongoose = require("mongoose");
// /**
//  * -job description
//  * -resume text
//  * -self desciption
//  * *
//  * -Technical questions:
//  *      [{
//  *           questoins:"",
//  *           intention:"
//  *           answer:""
//  * }]
//  * -Behavirol queston:"
//  * [{
//  *      questoins:"",
//  *      intention:"
//  *      answer:""
//  * }]
//  * intention:"",
//  * answer:""
//  *  -skill gap:[{
//  *              skill:""
//  * severity: :{
//  * type:string
//  * enum:["low,"midium","high"]
//  * }
//  *       }]
//  *
//  * -preparatoin plan ;[{
//  *     day:number,
//  * focus :string,
//  * task:[string]
//  *
//  * }]
//  */
// const technicalQuestionSchema = new mongoose.Schema(
//   {
//     question: {
//       type: String,
//       required: [true, "Technical question required"],
//     },
//     intention: {
//       type: String,
//       required: [true, "Intention is required"],
//     },
//     answer: {
//       type: String,
//       required: [true, "Intention is required"],
//     },
//   },
//   {
//     _id: false,
//   },
// );

// const behavirolQuestoinSchema = new mongoose.Schema(
//   {
//     question: {
//       type: String,
//       required: [true, "Technical question required"],
//     },
//     intention: {
//       type: String,
//       required: [true, "Intention is required"],
//     },
//     answer: {
//       type: String,
//       required: [true, "Intention is required"],
//     },
//   },
//   {
//     _id: false,
//   },
// );

// const skillGapSchema = new mongoose.Schema(
//   {
//     skill: {
//       type: String,
//       enum: ["low", "medium", "high"],
//       required: [true, "Severity is required"],
//     },
//   },
//   {
//     _id: false,
//   },
// );

// const preparationPlanSchema = new mongoose.Schema({
//   day: {
//     type: Number,
//     required: [true, "Day is required"],
//   },
//   focus: {
//     type: String,
//     required: [true, "Focus is required"],
//   },
//   tasks: [
//     {
//       type: String,
//       required: [true, "Task is required"],
//     },
//   ],
// });

// const interviewReportSchema = new mongoose.Schema({
//   jobDescription: {
//     type: String,
//     required: [true, "Job description is required"],
//   },
//   resume: {
//     type: String,
//   },
//   selfDesciption: {
//     type: String,
//   },
//   matchScore: {
//     type: Number,
//     min: 0,
//     max: 100,
//   },
//   technicalQuestions:[technicalQuestionSchema],
//   behavirolQuestoins:[behavirolQuestoinSchema],
//   skillGaps:[skillGapSchema],
//   preparationPlan:[preparationPlanSchema],
//   user:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"users"
//   },
//   title: {
//         type: String,
//         required: [ true, "Job title is required" ]
//     }


// },{
//     timestamps:true
// });

// const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

// module.exports = interviewReportModel;  


const mongoose = require('mongoose');


const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [ true, "Technical question is required" ]
    },
    intention: {
        type: String,
        required: [ true, "Intention is required" ]
    },
    answer: {
        type: String,
        required: [ true, "Answer is required" ]
    }
}, {
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [ true, "Technical question is required" ]
    },
    intention: {
        type: String,
        required: [ true, "Intention is required" ]
    },
    answer: {
        type: String,
        required: [ true, "Answer is required" ]
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [ true, "Skill is required" ]
    },
    severity: {
        type: String,
        enum: [ "low", "medium", "high" ],
        required: [ true, "Severity is required" ]
    }
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [ true, "Day is required" ]
    },
    focus: {
        type: String,
        required: [ true, "Focus is required" ]
    },
    tasks: [ {
        type: String,
        required: [ true, "Task is required" ]
    } ]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [ true, "Job description is required" ]
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [ technicalQuestionSchema ],
    behavioralQuestions: [ behavioralQuestionSchema ],
    skillGaps: [ skillGapSchema ],
    preparationPlan: [ preparationPlanSchema ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
        required: [ true, "Job title is required" ]
    }
}, {
    timestamps: true
})


const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;  