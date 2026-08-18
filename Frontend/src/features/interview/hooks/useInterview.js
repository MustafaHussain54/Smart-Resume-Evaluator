// import { getAllInterviewReports, generateInterviewReport, getInterviewReportById, generateResumePdf } from "../services/interview.api"
// import { useContext, useEffect } from "react"
// import { InterviewContext } from "../interview.context"
// import { useParams } from "react-router"


// export const useInterview = () => {

//     const context = useContext(InterviewContext)
//     const { interviewId } = useParams()

//     if (!context) {
//         throw new Error("useInterview must be used within an InterviewProvider")
//     }

//     const { loading, setLoading, report, setReport, reports, setReports } = context

//     const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
//             //setReport(response.interviewReport)
//             if (response?.interviewReport) {
//     setReport(response.interviewReport);
// }
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReport
//     }

//     const getReportById = async (interviewId) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await getInterviewReportById(interviewId)
//             setReport(response.interviewReport)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//         return response.interviewReport
//     }

//     const getReports = async () => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await getAllInterviewReports()
//            // setReports(response.interviewReports)

//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReports
//     }

//     // const getResumePdf = async (interviewReportId) => {
//     //     setLoading(true)
//     //     let response = null
//     //     try {
//     //         response = await generateResumePdf({ interviewReportId })
//     //         const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
//     //         const link = document.createElement("a")
//     //         link.href = url
//     //         link.setAttribute("download", `resume_${interviewReportId}.pdf`)
//     //         document.body.appendChild(link)
//     //         link.click()
//     //     }
//     //     catch (error) {
//     //         console.log(error)
//     //     } finally {
//     //         setLoading(false)
//     //     }
//     // }
//     setReports(response?.interviewReports ?? []);
//     const getReportById = async (interviewId) => {
//     setLoading(true);

//     try {
//         const response = await getInterviewReportById(interviewId);

//         if (!response || !response.interviewReport) {
//             console.error("Interview report not found", response);

//             setReport({
//                 matchScore: 0,
//                 technicalQuestions: [],
//                 behavioralQuestions: [],
//                 preparationPlan: [],
//                 skillGaps: []
//             });

//             return null;
//         }

//         setReport(response.interviewReport);

//         return response.interviewReport;

//     } catch (error) {
//         console.error(error);

//         setReport({
//             matchScore: 0,
//             technicalQuestions: [],
//             behavioralQuestions: [],
//             preparationPlan: [],
//             skillGaps: []
//         });

//         return null;
//     } finally {
//         setLoading(false);
//     }
// };

//     useEffect(() => {
//         if (interviewId) {
//             getReportById(interviewId)
//         } else {
//             getReports()
//         }
//     }, [ interviewId ])

//     return { loading, report, reports, generateReport, getReportById, getReports, getResumePdf }

// }



// import { getAllInterviewReports, generateInterviewReport, getInterviewReportById, generateResumePdf } from "../services/interview.api"
// import { useContext, useEffect } from "react"
// import { InterviewContext } from "../interview.context"
// import { useParams } from "react-router"


// export const useInterview = () => {

//     const context = useContext(InterviewContext)
//     const { interviewId } = useParams()

//     if (!context) {
//         throw new Error("useInterview must be used within an InterviewProvider")
//     }

//     const { loading, setLoading, report, setReport, reports, setReports } = context

//     const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
//             setReport(response.interviewReport)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReport
//     }

//     const getReportById = async (interviewId) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await getInterviewReportById(interviewId)
//             setReport(response.interviewReport)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//         return response.interviewReport
//     }

//     const getReports = async () => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await getAllInterviewReports()
//             setReports(response.interviewReports)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReports
//     }

//     const getResumePdf = async (interviewReportId) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await generateResumePdf({ interviewReportId })
//             const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
//             const link = document.createElement("a")
//             link.href = url
//             link.setAttribute("download", `resume_${interviewReportId}.pdf`)
//             document.body.appendChild(link)
//             link.click()
//         }
//         catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         if (interviewId) {
//             getReportById(interviewId)
//         } else {
//             getReports()
//         }
//     }, [ interviewId ])

//     return { loading, report, reports, generateReport, getReportById, getReports, getResumePdf }

// }

import {
    getAllInterviewReports,
    generateInterviewReport,
    getInterviewReportById,
    generateResumePdf,
} from "../services/interview.api";

import { useCallback, useContext, useEffect } from "react";
import { InterviewContext } from "../interview.context";
import { useParams } from "react-router";

export const useInterview = () => {

    const context = useContext(InterviewContext);
    const { interviewId } = useParams();

    if (!context) {
        throw new Error(
            "useInterview must be used within an InterviewProvider"
        );
    }

    const {
        loading,
        setLoading,
        report,
        setReport,
        reports,
        setReports,
    } = context;


    // Generate a new interview report
    const generateReport = useCallback(
        async ({ jobDescription, selfDescription, resumeFile }) => {

            setLoading(true);

            try {

                const response = await generateInterviewReport({
                    jobDescription,
                    selfDescription,
                    resumeFile,
                });

                setReport(response.interviewReport);

                return response.interviewReport;

            } catch (error) {

                console.error(
                    "Error generating interview report:",
                    error
                );

                return null;

            } finally {

                setLoading(false);

            }
        },
        [setLoading, setReport]
    );


    // Get a single interview report
    const getReportById = useCallback(
        async (interviewId) => {

            if (!interviewId) return null;

            setLoading(true);

            try {

                const response =
                    await getInterviewReportById(interviewId);

                setReport(response.interviewReport);

                return response.interviewReport;

            } catch (error) {

                console.error(
                    "Error fetching interview report:",
                    error
                );

                return null;

            } finally {

                setLoading(false);

            }
        },
        [setLoading, setReport]
    );


    // Get all interview reports
    const getReports = useCallback(
        async () => {

            setLoading(true);

            try {

                const response =
                    await getAllInterviewReports();

                setReports(response.interviewReports);

                return response.interviewReports;

            } catch (error) {

                console.error(
                    "Error fetching interview reports:",
                    error
                );

                return [];

            } finally {

                setLoading(false);

            }
        },
        [setLoading, setReports]
    );


    // Generate / download resume PDF
    const getResumePdf = useCallback(
        async (interviewReportId) => {

            if (!interviewReportId) return;

            setLoading(true);

            try {

                const response =
                    await generateResumePdf({
                        interviewReportId,
                    });

                // Create Blob
                const blob = new Blob(
                    [response],
                    { type: "application/pdf" }
                );

                // Create temporary URL
                const url =
                    window.URL.createObjectURL(blob);

                // Create download link
                const link =
                    document.createElement("a");

                link.href = url;

                link.setAttribute(
                    "download",
                    `resume_${interviewReportId}.pdf`
                );

                document.body.appendChild(link);

                // Trigger download
                link.click();

                // Cleanup
                link.remove();
                window.URL.revokeObjectURL(url);

            } catch (error) {

                console.error(
                    "Error generating resume PDF:",
                    error
                );

            } finally {

                setLoading(false);

            }
        },
        [setLoading]
    );


    // Load reports when interviewId changes
    useEffect(() => {

        if (interviewId) {

            getReportById(interviewId);

        } else {

            getReports();

        }

    }, [
        interviewId,
        getReportById,
        getReports,
    ]);


    return {
        loading,
        report,
        reports,
        generateReport,
        getReportById,
        getReports,
        getResumePdf,
    };
};