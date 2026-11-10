import { Component } from "react";
import ApplicationItem from "../ApplicationItem/ApplicationItem";

class ApplicationList extends Component {
  render() {
    const { applications } = this.props;
    return (
      <ul>
        {applications.map((application) => (
          <ApplicationItem key={application.id} {...application} />
        ))}
      </ul>
    );
  }
}

export default ApplicationList;
