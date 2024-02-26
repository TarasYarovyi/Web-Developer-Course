import React from "react";
import "./footer.css";
import Copyright from "../copyright/Copyright";

const elements1 = ["TOS", "About"];
const items = [];
const elements2 = ["contact", "legal"];

function Footer(props) {
  for (const [index, value] of elements1.entries()) {
    items.push(<li>{value}</li>);
  }

  let isLogged = true;
  let button;
  if (isLogged) {
    button = <button>Logout</button>;
  } else {
    button = <button>Log in</button>;
  }

  return (
    <div>
      <footer>
        <ul>
          {items}
          <li>
            Contact: {props.contactEmail},{props.companyData.city}
          </li>
          {elements2.map((value, index) => {
            return <li>{value}</li>;
          })}
        </ul>
        <Copyright year="2024" />
        {button}
        {isLogged === true && <div>Sprawdź pocztę</div>}
        {isLogged ? (
          <div>Zobacz notyfikacje</div>
        ) : (
          <div>Zaloguj się dla notyfikacji </div>
        )}
      </footer>
    </div>
  );
}
export default Footer;
