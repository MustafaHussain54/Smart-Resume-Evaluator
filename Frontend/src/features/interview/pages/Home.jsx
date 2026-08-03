// import React from "react";
// import "../styles/home.scss";
// import { useInterview } from "../hooks/useInterview.js";
// const Home = () => {
//      const { loading, generateReport,reports } = useInterview()
//     const [ jobDescription, setJobDescription ] = useState("")
//     const [ selfDescription, setSelfDescription ] = useState("")
//     const resumeInputRef = useRef()

//     const navigate = useNavigate()

//     const handleGenerateReport = async () => {
//         const resumeFile = resumeInputRef.current.files[ 0 ]
//         const data = await generateReport({ jobDescription, selfDescription, resumeFile })
//         navigate(`/interview/${data._id}`)
//     }

//     if (loading) {
//         return (
//             <main className='loading-screen'>
//                 <h1>Loading your interview plan...</h1>
//             </main>
//         )
//     }
//   return (


//     // <main className="home">
//     //   <div className="interview-input-group">
//     //     <div className="left">
//     //       <label htmlFor="jobDescription">Job Description</label>
//     //       <textarea
//     //         name="jobDescription"
//     //         id="jobDescription"
//     //         placeholder="Enter Job Description here..."
//     //       ></textarea>
//     //     </div>
//     //     <div className="right">
//     //       <div className="input-group">
//     //         <p>
//     //           Resume{" "}
//     //           <small className="highlight">
//     //             (Use Resume and self description together for best result)
//     //           </small>
//     //         </p>
//     //         <label className="file-label" htmlFor="resume">
//     //           Upload resume
//     //         </label>
//     //         <input
              
//     //           hidden
//     //           type="file"
//     //           name="resume"
//     //           id="resume"
//     //           accept=".pdf"
//     //         />
//     //       </div>
//     //       <div className="input-group">
//     //       <label htmlFor="selfDescription">Self Description</label>
//     //       <textarea
//     //         name="selfDescription"
//     //         id="selfDescription"
//     //         placeholder="Describe yourself in a few sentences..."
//     //       ></textarea>
//     //       <button className="button primary-button">
//     //         Generate interview Report
//     //       </button>
//     //     </div>
//     //     </div>

        
//     //   </div>
//     // </main>
//     <div className="home-container">
//       {/* Header Section */}
//       <header className="page-header">
//         <h1>
//           Create Your Custom <span className="highlight-text">Interview Plan</span>
//         </h1>
//         <p>Let our AI analyze the job requirements and your unique profile to build a winning strategy.</p>
//       </header>

//       {/* Main Card */}
//       <main className="interview-card">
//         <div className="card-body">
          
//           {/* Left Column: Job Description */}
//           <section className="column left-column">
//             <div className="section-header">
//               <div className="header-title">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 <h2>Target Job Description</h2>
//               </div>
//               <span className="badge badge-required">Required</span>
//             </div>

//             <div className="textarea-wrapper full-height">
//               <textarea
//               onChange={(e) => { setJobDescription(e.target.value) }}
//                 name="jobDescription"
//                 id="jobDescription"
//                 placeholder="Paste the full job description here...&#10;e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
//               ></textarea>
//               <div className="char-count">0 / 5000 chars</div>
//             </div>
//           </section>

//           {/* Right Column: Profile */}
//           <section className="column right-column">
//             <div className="section-header">
//               <div className="header-title">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//                 <h2>Your Profile</h2>
//               </div>
//             </div>

//             {/* Upload Resume Section */}
//             <div className="upload-section">
//               <div className="label-row">
//                 <label>Upload Resume</label>
//                 <span className="badge badge-recommended">(Best Results)</span>
//               </div>
//               <label htmlFor="resume-upload" className="dropzone">
//                 <div className="dropzone-content">
//                   <div className="upload-icon">
//                     <svg viewBox="0 0 24 24" fill="currentColor" className="icon-cloud">
//                       <path d="M11 14.9861C11 15.5384 11.4477 15.9861 12 15.9861C12.5523 15.9861 13 15.5384 13 14.9861V10.8284L14.5858 12.4142C14.9763 12.8047 15.6095 12.8047 16 12.4142C16.3905 12.0237 16.3905 11.3905 16 11L12.7071 7.70711C12.3166 7.31658 11.6834 7.31658 11.2929 7.70711L8 11C7.60948 11.3905 7.60948 12.0237 8 12.4142C8.39052 12.8047 9.02369 12.8047 9.41421 12.4142L11 10.8284V14.9861Z" />
//                       <path fillRule="evenodd" clipRule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C13.5685 4 15.8152 5.38171 17.0706 7.49581C19.8211 7.72898 22 10.0382 22 12.8571C22 15.6976 19.6976 18 16.8571 18H7.14286C3.75126 18 1 15.2487 1 11.8571C1 8.87445 3.1251 6.39209 5.96105 5.82343C6.34026 6.84073 6.94191 7.75549 7.71261 8.52619C7.30154 9.27892 7.05929 10.1254 7.00941 11.0264L7.00418 11.1215L6.90943 11.1278C5.28913 11.2361 4 12.5843 4 14.2381C4 15.9734 5.40748 17.3809 7.14286 17.3809H16.8571C19.3557 17.3809 21.3809 15.3557 21.3809 12.8571C21.3809 10.4287 19.4678 8.44685 17.068 8.3846L16.9247 8.38089L16.8485 8.25827C15.6416 6.31558 13.456 5 11 5C7.68629 5 5 7.68629 5 11L5.00004 11.0841L4.91616 11.0911C4.42846 11.1318 4 11.5398 4 12.0366V11Z" />
//                     </svg>
//                   </div>
//                   <p className="primary-text">Click to upload or drag & drop</p>
//                   <p className="secondary-text">PDF or DOCX (Max 5MB)</p>
//                 </div>
//                 <input ref={resumeInputRef} hidden type="file" hidden id="resume-upload" accept=".pdf,.docx" />
//               </label>
//             </div>

//             <div className="divider">
//               <span>OR</span>
//             </div>

//             {/* Quick Self-Description Section */}
//             <div className="description-section">
//               <label htmlFor="selfDescription">Quick Self-Description</label>
//               <div className="textarea-wrapper">
//                 <textarea
//                 onChange={(e) => { setSelfDescription(e.target.value) }}
//                   name="selfDescription"
//                   id="selfDescription"
//                   placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
//                 ></textarea>
//               </div>
//             </div>

//             {/* Info Alert Box */}
//             <div className="info-alert">
//               <div className="indicator-dot"></div>
//               <p>Either a <strong>Resume</strong> or a <strong>Self Description</strong> is required to generate a personalized plan.</p>
//             </div>
//           </section>
//         </div>

//         {/* Card Footer */}
//         <div className="card-footer">
//           <span className="footer-text">AI-Powered Strategy Generation • Approx 30s</span>
//           <button
//           onClick={handleGenerateReport}
//            className="primary-button">
//             <svg viewBox="0 0 24 24" fill="currentColor" className="icon-sparkle">
//               <path d="M11.602 13.7599L13.014 17.1519C13.264 17.7519 14.116 17.7479 14.364 17.1479L15.748 13.7919C15.932 13.3479 16.276 12.9919 16.716 12.7959L20.048 11.3159C20.636 11.0559 20.628 10.2239 20.032 9.97599L16.72 8.59999C16.284 8.41999 15.944 8.07599 15.76 7.64399L14.348 4.25199C14.096 3.65199 13.244 3.65599 12.996 4.25599L11.612 7.61199C11.428 8.05599 11.084 8.41199 10.644 8.60799L7.312 10.088C6.724 10.348 6.732 11.18 7.328 11.428L10.64 12.804C11.076 12.984 11.416 13.328 11.602 13.7599Z" />
//               <path d="M4.148 16.484L4.856 18.188C4.984 18.488 5.408 18.488 5.536 18.188L6.244 16.484C6.336 16.264 6.508 16.088 6.728 15.996L8.432 15.288C8.732 15.16 8.732 14.736 8.432 14.608L6.728 13.9C6.508 13.808 6.336 13.636 6.244 13.416L5.536 11.712C5.408 11.412 4.984 11.412 4.856 11.712L4.148 13.416C4.056 13.636 3.884 13.808 3.664 13.9L1.96 14.608C1.66 14.736 1.66 15.16 1.96 15.288L3.664 15.996C3.884 16.088 4.056 16.264 4.148 16.484Z" />
//             </svg>
//             Generate My Interview Strategy
//           </button>
//         </div>
//       </main>
//        {/* Recent Reports List */}
//             {reports.length > 0 && (
//                 <section className='recent-reports'>
//                     <h2>My Recent Interview Plans</h2>
//                     <ul className='reports-list'>
//                         {reports.map(report => (
//                             <li key={report._id} className='report-item' onClick={() => navigate(`/interview/${report._id}`)}>
//                                 <h3>{report.title || 'Untitled Position'}</h3>
//                                 <p className='report-meta'>Generated on {new Date(report.createdAt).toLocaleDateString()}</p>
//                                 <p className={`match-score ${report.matchScore >= 80 ? 'score--high' : report.matchScore >= 60 ? 'score--mid' : 'score--low'}`}>Match Score: {report.matchScore}%</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </section>
//             )}

//             {/* Page Footer */}
//             <footer className='page-footer'>
//                 <a href='#'>Privacy Policy</a>
//                 <a href='#'>Terms of Service</a>
//                 <a href='#'>Help Center</a>
//             </footer>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useRef } from 'react'
import "../styles/home.scss"
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate } from 'react-router'

const Home = () => {

    const { loading, generateReport,reports } = useInterview()
    const [ jobDescription, setJobDescription ] = useState("")
    const [ selfDescription, setSelfDescription ] = useState("")
    const resumeInputRef = useRef()

    const navigate = useNavigate()

    const handleGenerateReport = async () => {
        const resumeFile = resumeInputRef.current.files[ 0 ]
        const data = await generateReport({ jobDescription, selfDescription, resumeFile })
        navigate(`/interview/${data._id}`)
    }

    if (loading) {
        return (
            <main className='loading-screen'>
                <h1>Loading your interview plan...</h1>
            </main>
        )
    }

    return (
        <div className='home-page'>

            {/* Page Header */}
            <header className='page-header'>
                <h1>Create Your Custom <span className='highlight'>Interview Plan</span></h1>
                <p>Let our AI analyze the job requirements and your unique profile to build a winning strategy.</p>
            </header>

            {/* Main Card */}
            <div className='interview-card'>
                <div className='interview-card__body'>

                    {/* Left Panel - Job Description */}
                    <div className='panel panel--left'>
                        <div className='panel__header'>
                            <span className='panel__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                            </span>
                            <h2>Target Job Description</h2>
                            <span className='badge badge--required'>Required</span>
                        </div>
                        <textarea
                            onChange={(e) => { setJobDescription(e.target.value) }}
                            className='panel__textarea'
                            placeholder={`Paste the full job description here...\ne.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'`}
                            maxLength={5000}
                        />
                        <div className='char-counter'>0 / 5000 chars</div>
                    </div>

                    {/* Vertical Divider */}
                    <div className='panel-divider' />

                    {/* Right Panel - Profile */}
                    <div className='panel panel--right'>
                        <div className='panel__header'>
                            <span className='panel__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            </span>
                            <h2>Your Profile</h2>
                        </div>

                        {/* Upload Resume */}
                        <div className='upload-section'>
                            <label className='section-label'>
                                Upload Resume
                                <span className='badge badge--best'>Best Results</span>
                            </label>
                            <label className='dropzone' htmlFor='resume'>
                                <span className='dropzone__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" /></svg>
                                </span>
                                <p className='dropzone__title'>Click to upload or drag &amp; drop</p>
                                <p className='dropzone__subtitle'>PDF or DOCX (Max 5MB)</p>
                                <input ref={resumeInputRef} hidden type='file' id='resume' name='resume' accept='.pdf,.docx' />
                            </label>
                        </div>

                        {/* OR Divider */}
                        <div className='or-divider'><span>OR</span></div>

                        {/* Quick Self-Description */}
                        <div className='self-description'>
                            <label className='section-label' htmlFor='selfDescription'>Quick Self-Description</label>
                            <textarea
                                onChange={(e) => { setSelfDescription(e.target.value) }}
                                id='selfDescription'
                                name='selfDescription'
                                className='panel__textarea panel__textarea--short'
                                placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                            />
                        </div>

                        {/* Info Box */}
                        <div className='info-box'>
                            <span className='info-box__icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" stroke="#1a1f27" strokeWidth="2" /><line x1="12" y1="16" x2="12.01" y2="16" stroke="#1a1f27" strokeWidth="2" /></svg>
                            </span>
                            <p>Either a <strong>Resume</strong> or a <strong>Self Description</strong> is required to generate a personalized plan.</p>
                        </div>
                    </div>
                </div>

                {/* Card Footer */}
                <div className='interview-card__footer'>
                    <span className='footer-info'>AI-Powered Strategy Generation &bull; Approx 30s</span>
                    <button
                        onClick={handleGenerateReport}
                        className='generate-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
                        Generate My Interview Strategy
                    </button>
                </div>
            </div>

            {/* Recent Reports List */}
            {reports.length > 0 && (
                <section className='recent-reports'>
                    <h2>My Recent Interview Plans</h2>
                    <ul className='reports-list'>
                        {reports.map(report => (
                            <li key={report._id} className='report-item' onClick={() => navigate(`/interview/${report._id}`)}>
                                <h3>{report.title || 'Untitled Position'}</h3>
                                <p className='report-meta'>Generated on {new Date(report.createdAt).toLocaleDateString()}</p>
                                <p className={`match-score ${report.matchScore >= 80 ? 'score--high' : report.matchScore >= 60 ? 'score--mid' : 'score--low'}`}>Match Score: {report.matchScore}%</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Page Footer */}
            <footer className='page-footer'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Service</a>
                <a href='#'>Help Center</a>
            </footer>
        </div>
    )
}

export default Home