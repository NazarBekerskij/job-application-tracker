import { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {

  componentDidMount(){
    window.addEventListener("keydown", this.handleEscClose)
  }

  componentWillUnmount(){
    window.removeEventListener("keydown", this.handleEscClose)
  }

  handleEscClose = (e) => {
    if(e.code === "Escape"){
      this.props.onClose()
    }
  }


  handleBackdropClick = (e) => {
    if(e.target === e.currentTarget){
      this.props.onClose()
    }
  }

  render() {
    const { children, onClose } = this.props;

    return (
      <div 
      className={style.overlay}
      onClick={this.handleBackdropClick}
      >
        <div className={style.modal}>
          <button className={style.closeButton} type="button" onClick={onClose}>
            ×
          </button>

          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
