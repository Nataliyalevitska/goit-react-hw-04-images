import React from "react";
import s from "./Modal.module.css";

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.handleEscape);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.handleEscape);
  }

  render() {
    const { src } = this.props;
    return (
      <div className={s.Overlay} onClick={this.props.backDrop}>
        <div className={s.Modal}>
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}