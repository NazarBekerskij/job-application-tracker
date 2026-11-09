import { Component } from "react";

class ApplicationForm extends Component {
  render() {
    const {company, position, salary, status, onChange, onSubmit} = this.props
    return (
      <form onSubmit={onSubmit}>
        <label>
          Company
          <input 
          type="text" 
          name="company" 
          value={company}
          onChange={onChange}
          />
        </label>

        <label>
          Position
          <input 
          type="text" 
          onChange={onChange}
          name="position" 
          value={position}
          />
        </label>

        <label>
          Salary
          <input 
          type="number" 
          onChange={onChange}
          name="salary" 
          value={salary}
          />
        </label>

        <label>
          Status
          <select 
          name="status"
          onChange={onChange}
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>

        <button type="submit">Save Application</button>
      </form>
    );
  }
}

export default ApplicationForm;
