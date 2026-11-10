import { Component } from "react";

class ApplicationItem extends Component {
  render() {
    const { company, position, salary, status } = this.props;
    return (
      <li>
        <h3>{company}</h3>
        <p>{position}</p>
        <p>{salary}</p>
        <span>{status}</span>
      </li>
    );
  }
}

export default ApplicationItem;
