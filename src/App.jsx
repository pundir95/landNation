import { Suspense, useState } from "react";
import { route } from "./router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import PrivateLayout from "./layout/PrivateLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<>Loading.......</>}>
        <Router>
          <Routes>
            {route?.map((item, index) =>
              item.private ? (
                <Route key={index} element={<PrivateLayout />}>
                  <Route path={item.path} element={item.element} />
                </Route>
              ) : (
                <Route key={index} element={<PublicLayout />}>
                  <Route path={item.path} element={item.element} />
                </Route>
              )
            )}
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
