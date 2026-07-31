const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_KEY,
});
const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 1 nad 100 indicating how the candidates profile matches the job description",
    ),
  technicalQuestions: z   
    .array(
      z.object({
        question: z
          .string()
          .describe("The TEchnical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question,what points to cover ,what approach",
          ),
      }),
    )
    .describe(
      "Technical questions that can be asked in the interview along with their intention ",
    ),

  behavirolQuestion: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The TEchnical question can be asked in the interview"),
        intention: z
          .string()
          .describe("The intention behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question,what points to cover ,what approach",
          ),
      }),
    )
    .describe(
      "Behavirol questions that can be asked in the interview along with there intention",
    ),
  skillGaps: z
    .array(
      z.object({
        skill: z
          .string()
          .describe("The skill which the cantidate is lacking"),
        severity: z
          .enum(["low", "meduim", "high"])
          .describe("The severity of this skill gap ,i.e. "),
      }),
    )
    .describe(
      "List of skill gap in the candidate's profile along with their severity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe(
            "The day number in the preparation plan starting from 1",
          ),
        focus: z
          .string()
          .describe(
            "The main focus of this day in thr preparation plan,e.g. data structure ,system design ,mock interview etc.",
          ),
        tasks: z.array(
          z
            .string()
            .describe(
              "List of tasks to be done on this day to follow the preparation plan e.g. read specific book",
            ),
        ),
      }),
    )
    .describe(
      "A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively",
    ),
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `Generate an interview for a candidate wuth the following details:
   Resume:${resume}
   Self description :${selfDescription}
   Job Description : ${jobDescription}
   
   `;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(interviewReportSchema),
    },
  });
  
   return JSON.parse(response.text)
   console.log("hello")
   
}
console.log("hello")
module.exports = {generateInterviewReport}
