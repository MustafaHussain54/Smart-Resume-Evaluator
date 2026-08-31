import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login,register, logout, getMe } from "../services/auth.api";
export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;
  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try{
      const data = await login({ email, password });
    setUser(data.user);
    }catch(err){
       
    }finally{
 setLoading(false);
    }
    
   
  };
  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    try{
       const data = await register({ username, email, password });
    setUser(data.user);
    }catch(err){

    }
    finally{
        setLoading(false);
    }
  
  };
  const handelLogout = async () => {
    setLoading(true);
    try{
const data = await logout();
    setUser(null);
    }
    catch(err){

    }
    finally{
       setLoading(false);
    }
   
  };


const getResumePdf = async (interviewReportId) => {
        setLoading(true)
        let response = null
        try {
            response = await generateResumePdf({ interviewReportId })
            const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewReportId}.pdf`)
            document.body.appendChild(link)
            link.click()
        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }



  useEffect(()=>{

   const getAndSetUser = async()=>{
    try{
 const data = await getMe();
    setUser(data.user)
    }catch(err){

    }finally{
      setLoading(false);
    }
   
   
   }
   getAndSetUser()

  },[])
//   useEffect(() => {
//   const getAndSetUser = async () => {
//     try {
//       const data = await getMe();

//       if (data?.user) {
//         setUser(data.user);
//       } else {
//         setUser(null);
//       }
//     } catch (err) {
//       console.error(err);
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   getAndSetUser();
// }, []);
  return {user ,loading,handleRegister,handleLogin,handelLogout}
};
