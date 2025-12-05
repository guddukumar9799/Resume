import React from "react";
import { Accordion, Container, Card } from "react-bootstrap";

const AccordionSection = () => {
  // Styles for headings and text (only font/style, no color changes)
  const headingStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontWeight: 700,
    textShadow: "1px 1px 2px #ccc",
  };

  const textStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "1.7",
  };

  const tableStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 500,
  };

  return (
    <Container className="mt-5 mb-5">
      <h3 className="text-center mb-3 text-primary" style={headingStyle}>
        Know More About Me
      </h3>
      <p className="text-center text-muted mb-4" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px" }}>
        Find answers to common queries about my background and education.
      </p>

      <Accordion alwaysOpen>

        {/* Personal Info */}
        <Card className="mb-3 shadow-sm border border-primary">
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>Personal Information</strong></Accordion.Header>
            <Accordion.Body>
              <p style={textStyle}>
                <strong>DOB:</strong> 28 March XXXX <br />
                <strong>Caste:</strong> Kushwaha <br />
                <strong>Education:</strong> Pursuing B.Tech
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* Education Details */}
        <Card className="mb-3 shadow-sm border border-success">
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>Education Details</strong></Accordion.Header>
            <Accordion.Body>
              <div style={{ overflowX: "auto" }}>
                <table className="table table-hover table-striped table-bordered text-center align-middle mt-3" style={tableStyle}>
                  <thead className="table-dark">
                    <tr>
                      <th>Level</th>
                      <th>Board / University</th>
                      <th>Passing Year</th>
                      <th>Percentage / CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10th</td>
                      <td>BSEB</td>
                      <td>2020</td>
                      <td>69%</td>
                    </tr>
                    <tr>
                      <td>12th</td>
                      <td>BSEB</td>
                      <td>2022</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>B.Tech</td>
                      <td>AKTU</td>
                      <td>2026</td>
                      <td>7.98 CGPA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* Family Details */}
        <Card className="mb-3 shadow-sm border border-warning">
          <Accordion.Item eventKey="2">
            <Accordion.Header><strong>Family Details</strong></Accordion.Header>
            <Accordion.Body>
              <p style={textStyle}>
                <strong>Father's Name:</strong> Jitendra Mahto <br />
                <strong>Occupation:</strong> Pacs Chairman <br />
                <strong>Mother's Name:</strong> Hina Devi <br />
                <strong>Occupation:</strong> Home Maker <br />
                <strong>Sibling:</strong> <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Puja Kumari (Married) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;• Arti Kumari
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* Address */}
        <Card className="mb-3 shadow-sm border border-danger">
          <Accordion.Item eventKey="3">
            <Accordion.Header><strong>Address</strong></Accordion.Header>
            <Accordion.Body>
              <p style={textStyle}>
                <strong>Vill:</strong> Bagras <br />
                <strong>PO:</strong> Bagras <br />
                <strong>PS:</strong> Bakhri <br />
                <strong>District:</strong> Begusarai <br />
                <strong>PIN:</strong> 848201
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Card>

      </Accordion>
    </Container>
  );
};

export default AccordionSection;
