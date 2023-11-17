import React, { Component } from 'react';
import './App.css';

class EmployeeData extends Component 
{
  state = {
    data: [],
    sNo: '',
    fname: '',
    lname: '',
    email: '',
    salary: '',
    date: '',
    isEditing: false,
    editIndex: -1,
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddRow = () => {
    const newRow = {
        sNo: this.state.sNo,
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        salary: this.state.salary,
        date: this.state.date
      };
  
      this.setState((prevState) => ({
        data: [...prevState.data, newRow],
        sNo: prevState.sNo + 1,
        fname: '',
        lname: '',
        email: '',
        salary: '',
        date : ''
      }));
  };

  handleEditRow = (index) => {
    const newRow = {
        sNo: this.state.sNo,
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        salary: this.state.salary,
        date: this.state.date
      };
    
      this.setState((prevState) => ({
        data: [...prevState.data, newRow],
        sNo: prevState.sNo + 1,
        fname: '',
        lname: '',
        email: '',
        salary: '',
        date: ''
      }));
  };

  handleDeleteRow = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this row?');
    if (confirmDelete) {
      const updatedData = [...this.state.data];
      updatedData.splice(index, 1);
      this.setState({ data: updatedData });
    }
  };

  handleEditClick = (index) => {
    this.setState({
        isEditing: true,
        editIndex: index,
        sNo: this.state.data[index].sNo,
        fname: this.state.data[index].fname,
        lname: this.state.data[index].lname,
        email: this.state.data[index].email,
        salary: this.state.data[index].salary,
        date: this.state.data[index].date
      });
  };

  render() {
    return (
      <div className="container">
        <div className="left">
          <h1>Employee Data Table</h1>
          <table border={{}} style={{marginLeft:'180px'}}>
            <thead>
                <tr>
                  <th>Serial No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.sNo}</td>
                    <td>{row.fname}</td>
                    <td>{row.lname}</td>
                    <td>{row.email}</td>
                    <td>{row.salary}</td>
                    <td>{row.date}</td>
                    <td style={{width:'50'}}>
                      <button onClick={() => this.handleEditClick(index)}>Edit</button>
                      <button onClick={() => this.handleDeleteRow(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
        <div className="right" style={{marginTop:'100px'}}>
          <div>
            <label>S.No: </label>
            <input
              type="number"
              name="sNo"
              placeholder="Serial No"
              value={this.state.sNo}
              onChange={this.handleInputChange}
            />
            <br/>
            <label>First Name: </label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={this.state.fname}
              onChange={this.handleInputChange}
            />
            <br/>
            <label>Last Name: </label>
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={this.state.lname}
              onChange={this.handleInputChange}
            />
            <br/>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <br/>
            <label>Salary: </label>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={this.state.salary}
              onChange={this.handleInputChange}
            />
            <br/>
            <label>Date: </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
            <br/>
            {this.state.isEditing ? (
              <button onClick={() => this.handleEditRow(this.state.editIndex)}>Save Edit</button>
            ) : (
              <button onClick={this.handleAddRow}>Add Row</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeData;
