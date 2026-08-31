[
  {
    question:
      "Can you start by walking us through your experience at ABC Technologies and describing the architecture of the web applications you developed there?",
    expected_answer:
      "The candidate should describe their role in the MERN stack environment, explaining how they used React for the UI, Node/Express for the backend logic, and MongoDB for data storage. They should mention their contribution to the full development lifecycle from frontend-backend integration to API development.",
    category: "Experience",
  },
  {
    question:
      "You mentioned optimizing API response times by 30%. What specific techniques did you use to achieve this improvement?",
    expected_answer:
      "The candidate should discuss methods such as database indexing, optimizing MongoDB queries, implementing caching mechanisms (like Redis), minimizing payload sizes, or using asynchronous processing for non-critical tasks.",
    category: "Performance Optimization",
  },
  {
    question:
      "How do you implement JWT authentication and role-based authorization in an Express.js application?",
    expected_answer:
      "The candidate should explain the process of generating a token upon login, sending it to the client, and then validating that token using middleware for protected routes. For role-based authorization, they should describe how user roles are stored in the database and checked against the required permissions for specific endpoints.",
    category: "Security",
  },
  {
    question:
      "In your E-Commerce project, how did you handle the integration of the payment gateway and manage the shopping cart state?",
    expected_answer:
      "They should explain the flow between the frontend, backend, and the third-party payment provider (e.g., Stripe, Razorpay). For the cart, they should discuss using React State, Context API, or Redux for client-side persistence and syncing it with the database for logged-in users.",
    category: "Project Specific",
  },
  {
    question:
      "What is your approach to database design in MongoDB, especially when dealing with relationships between different data entities like Users and Tasks?",
    expected_answer:
      "The candidate should discuss the trade-offs between embedding documents (denormalization) for performance and referencing documents (normalization) for data consistency, applying these concepts to their Task Manager project.",
    category: "Database",
  },
  {
    question:
      "How do you ensure your React components are reusable and maintainable as the application scales?",
    expected_answer:
      "The candidate should mention functional components, custom hooks for shared logic, prop-types or TypeScript for type checking, and following a clear folder structure or design pattern like Atomic Design.",
    category: "Frontend Development",
  },
  {
    question:
      "For your Task Manager project, you implemented real-time notifications. How did you achieve this, and what were the challenges?",
    expected_answer:
      "The candidate should ideally mention WebSockets (Socket.io) or Server-Sent Events (SSE). They should discuss handling connection stability and ensuring notifications are delivered to the correct user sessions.",
    category: "Backend Development",
  },
  {
    question:
      "The Job Description mentions Docker and AWS as preferred skills. Have you had any exposure to containerization or cloud deployment, or how would you go about learning them?",
    expected_answer:
      "As these are preferred but not in the resume, the candidate should demonstrate a willingness to learn or mention basic knowledge of deploying MERN apps using platforms like Heroku, Vercel, or AWS Amplify.",
    category: "Preferred Skills",
  },
  {
    question:
      "Describe your workflow for collaborating with a team using Git. How do you handle merge conflicts?",
    expected_answer:
      "The candidate should describe using feature branches, pull requests, code reviews, and tools like 'git merge' or 'git rebase' to resolve conflicts by communicating with team members.",
    category: "Collaboration",
  },
];
