import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./Components/footer/Footer";
import Heading from "./Components/heading/Heading";
const root = ReactDOM.createRoot(document.getElementById("root"));
const companyData = {
  email: "contact@example.com",
  city: "Wroclaw",
  street: "Magnoliowa 16",
};
root.render(
  <React.StrictMode>
    <Heading headerTitle="Welcome on page" />
    <App />
    <Footer companyData={companyData} contactEmail="admin@example.com" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
