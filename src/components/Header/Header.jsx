import { Component } from "react";
import style from "./Header.module.css";

class Header extends Component {
  render() {
    const {onToggleModal} = this.props
    return (
      <header className={style.header}>
        <div>
          <h1 className={style.title}>JobTrack</h1>
          <p className={style.subtitle}>
            Track your job applications
          </p>
        </div>

        <button onClick={onToggleModal} type="button" className={style.addButton}>
          + Add Application
        </button>
      </header>
    );
  }
}

export default Header;