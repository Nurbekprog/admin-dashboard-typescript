/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import NotFound from "./pages/NotFound";
import VerifyRoutes from "./routes/verifyRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path='/dashboard' />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route element={<NotFound />} path='*' />
            <Route element={<SignIn />} path='/sign-in' />
            <Route element={<SignUp />} path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
