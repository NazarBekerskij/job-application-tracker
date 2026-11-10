import "./App.css";
import { Component } from "react";

import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import ApplicationList from "./components/ApplicationList/ApplicationList";
import { nanoid } from "nanoid";


class App extends Component {
  state = {
    applications: [],
    company: "",
    position: "",
    salary: "",
    status: "applied",
    search: "",
    editingId: null,
    isModalOpen: false,
  };


  componentDidMount(){
    const saveApplications = window.localStorage.getItem("applications")

    if(saveApplications){
      this.setState({
        applications: JSON.parse(saveApplications)
      })
    }
  }

  componentDidUpdate(_, prev){
    if(prev.applications !== this.state.applications){
      localStorage.setItem(
        "applications",
        JSON.stringify(this.state.applications)
      )
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { company, position, salary, status } = this.state;

    if (!company.trim() || !position.trim() || !salary.trim()) {
      return;
    }

    const newApplication = {
      id: nanoid(),
      company,
      position,
      salary,
      status,
    };

    this.setState((prev) => ({
      applications: [...prev.applications, newApplication],
      company: "",
      position: "",
      salary: "",
      status: "applied",
      isModalOpen: false,
    }));
  };

  handleToggleModal = () => {
    this.setState((prev) => ({
      isModalOpen: !prev.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen, applications } = this.state;
    return (
      <div>
        <Header onToggleModal={this.handleToggleModal} />
        <ApplicationList applications={applications} />
        {isModalOpen && (
          <Modal onClose={this.handleToggleModal}>
            <ApplicationForm
              company={this.state.company}
              position={this.state.position}
              salary={this.state.salary}
              status={this.state.status}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
