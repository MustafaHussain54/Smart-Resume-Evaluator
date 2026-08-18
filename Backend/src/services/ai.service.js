// const { GoogleGenAI } = require("@google/genai");
// const { z } = require("zod");
// const { zodToJsonSchema } = require("zod-to-json-schema");

// const ai = new GoogleGenAI({
//   apiKey: process.env.GOOGLE_GENAI_KEY,
// });
// const interviewReportSchema = z.object({
//   matchScore: z
//     .number()
//     .describe(
//       "A score between 0 and 100 indicating how the candidates profile matches the job description",
//     ),
//   technicalQuestions: z   
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The TEchnical question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention behind asking this question"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this question,what points to cover ,what approach",
//           ),
//       }),
//     )
//     .describe(
//       "Technical questions that can be asked in the interview along with their intention ",
//     ),

//   behavirolQuestion: z
//     .array(
//       z.object({
//         question: z
//           .string()
//           .describe("The TEchnical question can be asked in the interview"),
//         intention: z
//           .string()
//           .describe("The intention behind asking this question"),
//         answer: z
//           .string()
//           .describe(
//             "How to answer this question,what points to cover ,what approach",
//           ),
//       }),
//     )
//     .describe(
//       "Behavirol questions that can be asked in the interview along with there intention",
//     ),
//   skillGaps: z
//     .array(
//       z.object({
//         skill: z
//           .string()
//           .describe("The skill which the cantidate is lacking"),
//         severity: z
//           .enum(["low", "meduim", "high"])
//           .describe("The severity of this skill gap ,i.e. "),
//       }),
//     )
//     .describe(
//       "List of skill gap in the candidate's profile along with their severity",
//     ),
//   preparationPlan: z
//     .array(
//       z.object({
//         day: z
//           .number()
//           .describe(
//             "The day number in the preparation plan starting from 1",
//           ),
//         focus: z
//           .string()
//           .describe(
//             "The main focus of this day in thr preparation plan,e.g. data structure ,system design ,mock interview etc.",
//           ),
//         tasks: z.array(
//           z
//             .string()
//             .describe(
//               "List of tasks to be done on this day to follow the preparation plan e.g. read specific book",
//             ),
//         ),
//       }),
//     )
//     .describe(
//       "A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively",
//     ),
//      title: z.string().describe("The title of the job for which the interview report is generated"),
// });



// const interviewReportSchema = z.object({
//     matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
//     technicalQuestions: z.array(z.object({
//         question: z.string().describe("The technical question can be asked in the interview"),
//         intention: z.string().describe("The intention of interviewer behind asking this question"),
//         answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//     })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
//     behavioralQuestions: z.array(z.object({
//         question: z.string().describe("The technical question can be asked in the interview"),
//         intention: z.string().describe("The intention of interviewer behind asking this question"),
//         answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//     })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
//     skillGaps: z.array(z.object({
//         skill: z.string().describe("The skill which the candidate is lacking"),
//         severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
//     })).describe("List of skill gaps in the candidate's profile along with their severity"),
//     preparationPlan: z.array(z.object({
//         day: z.number().describe("The day number in the preparation plan, starting from 1"),
//         focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
//         tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
//     })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
//     title: z.string().describe("The title of the job for which the interview report is generated"),
// })

// async function generateInterviewReport({
//   resume,
//   selfDescription,
//   jobDescription,
// }) {
//   const prompt = `Generate an interview for a candidate with the following details:
//    Resume:${resume}
//    Self description :${selfDescription}
//    Job Description : ${jobDescription}
   
//    `;
   
//   const response = await ai.models.generateContent({
//    /// model: "gemini-3-flash-preview",
//    model: "gemini-3.1-flash-lite",
//   //model: "gemini-2.5-flash",
//     contents: prompt,
//     config: {
//       responseMimeType: "application/json",
//       responseSchema: zodToJsonSchema(interviewReportSchema),
//     },
//   });
//   console
//    return JSON.parse(response.text)
   
   
// }
// console.log("hello")
// module.exports = {generateInterviewReport}



// const { GoogleGenAI } = require("@google/genai")
// const { z } = require("zod")
// const { zodToJsonSchema } = require("zod-to-json-schema")
// const puppeteer = require("puppeteer")

// const ai = new GoogleGenAI({
//     apiKey: process.env.GOOGLE_GENAI_API_KEY
// })


// const interviewReportSchema = z.object({
//     matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
//     technicalQuestions: z.array(z.object({
//         question: z.string().describe("The technical question can be asked in the interview"),
//         intention: z.string().describe("The intention of interviewer behind asking this question"),
//         answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//     })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
//     behavioralQuestions: z.array(z.object({
//         question: z.string().describe("The technical question can be asked in the interview"),
//         intention: z.string().describe("The intention of interviewer behind asking this question"),
//         answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
//     })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
//     skillGaps: z.array(z.object({
//         skill: z.string().describe("The skill which the candidate is lacking"),
//         severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
//     })).describe("List of skill gaps in the candidate's profile along with their severity"),
//     preparationPlan: z.array(z.object({
//         day: z.number().describe("The day number in the preparation plan, starting from 1"),
//         focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
//         tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
//     })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively"),
//     title: z.string().describe("The title of the job for which the interview report is generated"),
// })

// async function generateInterviewReport({ resume, selfDescription, jobDescription }) {


//     const prompt = `Generate an interview report for a candidate with the following details:
//                         Resume: ${resume}
//                         Self Description: ${selfDescription}
//                         Job Description: ${jobDescription}
// `

//     const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: prompt,
//         config: {
//             responseMimeType: "application/json",
//             responseSchema: zodToJsonSchema(interviewReportSchema),
//         }
//     })

//     return JSON.parse(response.text)


// }



// async function generatePdfFromHtml(htmlContent) {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage();
//     await page.setContent(htmlContent, { waitUntil: "networkidle0" })

//     const pdfBuffer = await page.pdf({
//         format: "A4", margin: {
//             top: "20mm",
//             bottom: "20mm",
//             left: "15mm",
//             right: "15mm"
//         }
//     })

//     await browser.close()

//     return pdfBuffer
// }

// async function generateResumePdf({ resume, selfDescription, jobDescription }) {

//     const resumePdfSchema = z.object({
//         html: z.string().describe("The HTML content of the resume which can be converted to PDF using any library like puppeteer")
//     })

//     const prompt = `Generate resume for a candidate with the following details:
//                         Resume: ${resume}
//                         Self Description: ${selfDescription}
//                         Job Description: ${jobDescription}

//                         the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
//                         The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visually appealing.
//                         The content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
//                         you can highlight the content using some colors or different font styles but the overall design should be simple and professional.
//                         The content should be ATS friendly, i.e. it should be easily parsable by ATS systems without losing important information.
//                         The resume should not be so lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's chances of getting an interview call for the given job description.
//                     `

//     const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: prompt,
//         config: {
//             responseMimeType: "application/json",
//             responseSchema: zodToJsonSchema(resumePdfSchema),
//         }
//     })


//     const jsonContent = JSON.parse(response.text)

//     const pdfBuffer = await generatePdfFromHtml(jsonContent.html)

//     return pdfBuffer

// }

// module.exports = { generateInterviewReport, generateResumePdf }


const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_KEY,
});


// ======================================================
// 1. ZOD SCHEMA
// ======================================================

const interviewReportSchema = z.object({

    matchScore: z
        .number()
        .min(0)
        .max(100),

    technicalQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string()
        })
    ),

    behavioralQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string()
        })
    ),

    skillGaps: z.array(
        z.object({
            skill: z.string(),

            severity: z.enum([
                "low",
                "medium",
                "high"
            ])
        })
    ),

    preparationPlan: z.array(
        z.object({
            day: z
                .number()
                .int()
                .min(1),

            focus: z.string(),

            tasks: z.array(
                z.string()
            )
        })
    ),

    title: z.string()
});


// ======================================================
// 2. GEMINI JSON SCHEMA
// ======================================================

const interviewReportJsonSchema = {

    type: "object",

    properties: {

        matchScore: {
            type: "number",
            description:
                "Match score between 0 and 100"
        },

        technicalQuestions: {

            type: "array",

            items: {

                type: "object",

                properties: {

                    question: {
                        type: "string"
                    },

                    intention: {
                        type: "string"
                    },

                    answer: {
                        type: "string"
                    }
                },

                required: [
                    "question",
                    "intention",
                    "answer"
                ]
            }
        },


        behavioralQuestions: {

            type: "array",

            items: {

                type: "object",

                properties: {

                    question: {
                        type: "string"
                    },

                    intention: {
                        type: "string"
                    },

                    answer: {
                        type: "string"
                    }
                },

                required: [
                    "question",
                    "intention",
                    "answer"
                ]
            }
        },


        skillGaps: {

            type: "array",

            items: {

                type: "object",

                properties: {

                    skill: {
                        type: "string"
                    },

                    severity: {

                        type: "string",

                        enum: [
                            "low",
                            "medium",
                            "high"
                        ]
                    }
                },

                required: [
                    "skill",
                    "severity"
                ]
            }
        },


        preparationPlan: {

            type: "array",

            items: {

                type: "object",

                properties: {

                    day: {
                        type: "integer"
                    },

                    focus: {
                        type: "string"
                    },

                    tasks: {

                        type: "array",

                        items: {
                            type: "string"
                        }
                    }
                },

                required: [
                    "day",
                    "focus",
                    "tasks"
                ]
            }
        },


        title: {
            type: "string"
        }
    },


    required: [
        "matchScore",
        "technicalQuestions",
        "behavioralQuestions",
        "skillGaps",
        "preparationPlan",
        "title"
    ]
};


// ======================================================
// 3. GENERATE INTERVIEW REPORT
// ======================================================

async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription
}) {

    try {

        // --------------------------------------------------
        // PROMPT
        // --------------------------------------------------

        const prompt = `

You are an expert technical interviewer and career evaluator.

Analyze the candidate's:

1. Resume
2. Self description
3. Job description

Then generate a COMPLETE interview preparation report.

==================================================
CANDIDATE RESUME
==================================================

${resume}


==================================================
CANDIDATE SELF DESCRIPTION
==================================================

${selfDescription}


==================================================
JOB DESCRIPTION
==================================================

${jobDescription}


==================================================
IMPORTANT OUTPUT RULES
==================================================

The root response MUST be a JSON OBJECT.

DO NOT return an array.

DO NOT return:

[
    {
        "interview_round": "...",
        "questions": [...]
    }
]

DO NOT use fields such as:

- interview_round
- questions
- interview_id
- candidate_name
- role

Instead, the response MUST contain exactly these fields:

- matchScore
- technicalQuestions
- behavioralQuestions
- skillGaps
- preparationPlan
- title


==================================================
TECHNICAL QUESTIONS
==================================================

Generate realistic technical interview questions based on:

- Candidate's resume
- Candidate's projects
- Candidate's skills
- Job description

Each technical question MUST contain:

question
intention
answer


==================================================
BEHAVIORAL QUESTIONS
==================================================

Generate realistic behavioral and situational questions based on:

- Candidate's projects
- Candidate's experience
- Candidate's self description
- Job requirements

Each behavioral question MUST contain:

question
intention
answer


==================================================
SKILL GAPS
==================================================

Compare the candidate's skills with the job description.

Identify skills that:

- are missing
- are weak
- require improvement

Each skill gap MUST contain:

skill
severity

Severity MUST be one of:

low
medium
high


==================================================
PREPARATION PLAN
==================================================

Create a practical day-wise interview preparation roadmap.

Each day MUST contain:

day
focus
tasks

The tasks should be specific and actionable.


==================================================
MATCH SCORE
==================================================

Calculate a realistic score between 0 and 100.

The score should be based on:

- Technical skills
- Required skills
- Projects
- Experience
- Education
- Job requirements


==================================================
FINAL INSTRUCTION
==================================================

Return ONLY JSON.

The response must follow the provided JSON schema.

Do NOT return explanations outside the JSON.

Do NOT return Markdown.

Do NOT return an array as the root response.

`;


        // --------------------------------------------------
        // GEMINI REQUEST
        // --------------------------------------------------

        const response = await ai.models.generateContent({

            model: "gemini-3.1-flash-lite",

            contents: prompt,

            config: {

                responseMimeType:
                    "application/json",

                responseJsonSchema:
                    interviewReportJsonSchema
            }
        });


        // --------------------------------------------------
        // CHECK RAW RESPONSE
        // --------------------------------------------------

        console.log(
            "\n========== RAW GEMINI RESPONSE ==========\n"
        );

        console.log(
            response.text
        );


        // --------------------------------------------------
        // PARSE JSON
        // --------------------------------------------------

        const parsedResponse =
            JSON.parse(response.text);


        // --------------------------------------------------
        // CHECK WHETHER RESPONSE IS ARRAY
        // --------------------------------------------------

        console.log(
            "\n========== RESPONSE TYPE ==========\n"
        );

        console.log(
            "Is Array:",
            Array.isArray(parsedResponse)
        );

        console.log(
            "Type:",
            typeof parsedResponse
        );


        // --------------------------------------------------
        // VALIDATE USING ZOD
        // --------------------------------------------------

        const validatedReport =
            interviewReportSchema.parse(
                parsedResponse
            );


        // --------------------------------------------------
        // FINAL RESULT
        // --------------------------------------------------

        console.log(
            "\n========== FINAL AI REPORT ==========\n"
        );

        console.log(
            JSON.stringify(
                validatedReport,
                null,
                2
            )
        );


        return validatedReport;


    } catch (error) {

        console.error(
            "\n========== AI SERVICE ERROR ==========\n"
        );

        console.error(error);

        throw error;
    }
}


module.exports = {
    generateInterviewReport
};
