import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.route.jsx'
import { AuthProvider } from './features/auth/auth.context.jsx'

function App() {
  

  return (
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>
    
  )
}
// import { RouterProvider } from "react-router";
// import { router } from "./app.route";

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
// function App() {
//   return (
//     <h1>Hello React</h1>
//   );
// }

export default App
