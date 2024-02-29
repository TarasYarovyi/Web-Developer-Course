import React from "react";
import "./copyright.css";
import styles from "./styles.module.css";
import "./sassStyles.scss";

class Copyright extends React.Component {
  render() {
    return (
      <div className="copyrightBox">
        <span className={styles.info}>
          Copyright &copy;
          {this.props.year} example.com All rights reserved
        </span>
      </div>
    );
  }
}
export default Copyright;
