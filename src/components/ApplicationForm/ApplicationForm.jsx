import { Component } from "react";
import style from "./ApplicationForm.module.css";

class ApplicationForm extends Component {
  render() {
    const { company, position, salary, status, onChange, onSubmit } = this.props;

    return (
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.heading}>
          <h2>Add Application</h2>
          <p>Track a new job opportunity</p>
        </div>

        <label className={style.label}>
          Company
          <input
            className={style.input}
            type="text"
            name="company"
            placeholder="e.g. Google"
            value={company}
            onChange={onChange}
          />
        </label>

        <label className={style.label}>
          Position
          <input
            className={style.input}
            type="text"
            name="position"
            placeholder="e.g. Frontend Developer"
            value={position}
            onChange={onChange}
          />
        </label>

        <label className={style.label}>
          Salary ($)
          <input
            className={style.input}
            type="number"
            name="salary"
            placeholder="e.g. 1200"
            min="0"
            value={salary}
            onChange={onChange}
          />
        </label>

        <label className={style.label}>
          Status
          <select
            className={style.select}
            name="status"
            value={status}
            onChange={onChange}
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>

        <button className={style.submitButton} type="submit">
          Save Application
        </button>
      </form>
    );
  }
}

export default ApplicationForm;