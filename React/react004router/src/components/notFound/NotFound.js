import React from "react";
import { Link } from "react-router-dom";

export default class extends React.Component {
  render() {
    return (
      <div>
        <p>
          <h3>404 - Page not found</h3>
          <Link to="/"> Home Page </Link>
        </p>
      </div>
    );
  }
}
