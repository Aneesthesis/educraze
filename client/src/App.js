import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmissionFormPage from "./pages/SubmissionFormPage";
import PreviewSubmissionsPage from "./pages/PreviewSubmissionsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App  ">
      <BrowserRouter>
        <Header />
        <ToastContainer
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-md px-4"
          limit={1}
        />
        <Routes>
          <Route path="/" element={<SubmissionFormPage />}></Route>
          <Route
            path="/submissions"
            element={<PreviewSubmissionsPage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
