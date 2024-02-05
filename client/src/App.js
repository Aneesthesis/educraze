import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmissionForm from "./pages/SubmissionForm";
import NotFound from "./pages/NotFound";
import PreviewSubmissions from "./pages/PreviewSubmissions";

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
          <Route path="/" element={<SubmissionForm />}></Route>
          <Route path="/submissions" element={<PreviewSubmissions />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
