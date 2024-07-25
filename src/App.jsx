import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CitiesProvider } from "./context/CitiesContext";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Missing from "./pages/Missing";
import AppLayout from "./pages/AppLayout";
import Cities from "./Cities";
import Countries from "./Countries";
import CityDetails from "./CityDetails";
import Form from "./Form";
import { Authprovider } from "./context/Authcontext";
import Protectedroute from "./pages/Protectedroute";
import { ThreeDots } from "react-loader-spinner";

// const Homepage = lazy(() => import("./pages/Homepage"));
// const Product = lazy(() => import("./pages/Product"));
// const Pricing = lazy(() => import("./pages/Pricing"));
// const AppLayout = lazy(() => import("./pages/AppLayout"));
// const Missing = lazy(() => import("./pages/Missing"));
// const Login = lazy(() => import("./pages/Login"));
function App() {
  return (
    <Authprovider>
      <CitiesProvider>
        <BrowserRouter>
          {/* <Suspense
            fallback={
             <div className="w-full h-[100vh] bg-[#2D3439] flex items-center justify-center"> */}

              {/* <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
                </div>
            }> */}
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product" element={<Product />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/app"
                element={
                  <Protectedroute>
                    <AppLayout />
                  </Protectedroute>
                }>
                <Route
                  index
                  element={<Navigate to="cities" replace={true} />}
                />

                <Route path="cities" element={<Cities />} />
                <Route path="cities/:id" element={<CityDetails />} />
                <Route path="countries" element={<Countries />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<Missing />} />
            </Routes>
          {/* </Suspense> */}
        </BrowserRouter>
      </CitiesProvider>
    </Authprovider>
  );
}

export default App;
