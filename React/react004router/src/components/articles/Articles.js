import React from "react";
import { Link } from "react-router-dom";

export default class Articles extends React.Component {
  render() {
    return (
      <div>
        <p>Komponent Articles</p>
        <ul>
          <li>
            <Link to="/article?title=hello-world&time=1">001</Link>
          </li>
          <li>
            <Link to="/article?title=second-article&time=100">002</Link>
          </li>
        </ul>
      </div>
    );
  }
}
