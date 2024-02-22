import React from "react";
import "./footer.css";
import Copyright from "../copyright/Copyright";
function Footer(props) {
  return (
    <div>
      <footer>
        <ul>
          <li>Regulamin</li>
          <li>FAQ</li>
          <li>O nas</li>
          <li>
            Contact: {props.contactEmail},{props.companyData.city}
          </li>
        </ul>
        <Copyright year="2024" />
      </footer>
    </div>
  );
}
export default Footer;
