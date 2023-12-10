import React from "react";
import { Table, Button } from 'react-bootstrap';

export default class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const headerList = [
      "Id",
      "First Name",
      "Last Name",
      "Age",
      "Date Of Joining",
      "Title",
      "Department",
      "Employee Type",
      "Current Status",
      "Actions",
    ];

    const tableStyle = {
      width: "100%",
      borderCollapse: "collapse",
      margin: "auto",
    };

    const cellStyle = {
      border: "1px solid black",
      padding: "8px",
    };

    const containerStyle = {
      textAlign: "center",
    };

    const centeredTableStyle = {
      display: "inline-block",
      border: "2px solid green",
      padding: "10px",
    };

    const buttonStyle = {
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      padding: "8px 16px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "14px",
      margin: "4px 2px",
      cursor: "pointer",
      borderRadius: "4px",
    };

    return (
      <section style={containerStyle}>
        <h2 style={{ color: "green" }}>Employee List</h2>
        <div style={centeredTableStyle}>
          <Table striped bordered hover>
            <thead>
              <tr>
                {headerList.map((header, index) => (
                  <th key={index} style={cellStyle}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.props.employees &&
                this.props.employees.map((emp, index) => (
                  <tr key={index}>
                    <td style={cellStyle}>{emp && emp.id}</td>
                    <td style={cellStyle}>{emp && emp.FirstName}</td>
                    <td style={cellStyle}>{emp && emp.LastName}</td>
                    <td style={cellStyle}>{emp && emp.Age}</td>
                    <td style={cellStyle}>{emp && emp.DateOfJoining}</td>
                    <td style={cellStyle}>{emp && emp.Title}</td>
                    <td style={cellStyle}>{emp && emp.Department}</td>
                    <td style={cellStyle}>{emp && emp.EmployeeType}</td>
                    <td style={cellStyle}>{emp && emp.CurrentStatus}</td>
                    <td className="actions" style={cellStyle}>
                      <a href={`/empEdit/${emp && emp.id}`} className="icon">
                        <Button
                          className="update-btn"
                          style={{ ...buttonStyle, backgroundColor: "#2196F3" }}
                        >
                          Update
                        </Button>
                      </a>

                      <Button
                        onClick={() => this.props.onDeleteClick(emp.id)}
                        style={{ ...buttonStyle, backgroundColor: "#f44336" }}
                      >
                        Delete
                      </Button>
                      <a href={`/empDetail/${emp && emp.id}`} className="icon">
                        <Button
                          className="btn"
                          style={{ ...buttonStyle, backgroundColor: "#92A8D1" }}
                        >
                          View Details
                        </Button>
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </section>
    );
  }
}
