import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import profileImage from '../Photo/profile.jpg';

const FormSection = () => {
  const blinkingStyle = {
    color: "#007bff",
    fontSize: "22px",
    fontWeight: 600,
    fontFamily: "'Courier New', Courier, monospace",
    animation: "blink 1s infinite",
    letterSpacing: "1px",
    marginBottom: "10px",
  };

  const nameStyle = {
    fontSize: "36px",
    fontWeight: 700,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#1a237e",
    marginBottom: "10px",
    textShadow: "1px 1px 2px #ccc",
  };

  const iconColors = {
    whatsapp: "#25D366",
    instagram: "#C13584",
    facebook: "#3b5998",
    linkedin: "#0077b5",
  };

  const iconStyle = {
    fontSize: "28px",
    marginRight: "15px",
    cursor: "pointer",
    transition: "transform 0.2s",
  };

  return (
    <Container className="mt-5 mb-5">
      <Card className="p-4 shadow-sm border-0">
        <style>
          {`
            @keyframes blink {
              0%, 50%, 100% { opacity: 1; }
              25%, 75% { opacity: 0; }
            }
            .social-icon:hover {
              transform: scale(1.2);
            }
          `}
        </style>

        <Row className="align-items-center">
          
          {/* Profile Photo */}
          <Col xs={12} md={6} className="text-center order-1 order-md-2 mb-3 mb-md-0">
            <img
              src={profileImage}
              alt="profile"
              className="img-thumbnail shadow-sm"
              style={{ width: "250px", height: "315px", objectFit: "cover", borderRadius: "10px" }}
            />
          </Col>

          {/* Name, Blinking Text & Social Icons */}
          <Col xs={12} md={6} className="text-start order-2 order-md-1">
            <h2 style={nameStyle}>GUDDU KUMAR</h2>
            <p>
              Computer Science student (B. Tech, 2026) with hands-on experience in full-stack development (Java, React.js, Node.js, MongoDB) and cloud platforms (GCP). Strong in DSA, OOP, and software engineering principles. Built REST APIs, responsive UIs, and scalable databases. Seeking Software Engineer role to deliver impactful solutions.
            </p>
            <p style={blinkingStyle}>MERN Developer</p>

            {/* Social Icons with Links */}
            <div className="d-flex">
              <a
                href=" https://wa.me/message/6TMIVL44MKJSB1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="social-icon" style={{ ...iconStyle, color: iconColors.whatsapp }} />
              </a>
              <a
                href="https://www.https://www.instagram.com/guddukumar9799?igsh=MWpyaGp1NG0zd3p0.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" style={{ ...iconStyle, color: iconColors.instagram }} />
              </a>
              <a
                href="https://www.facebook.com/https://www.facebook.com/share/1AD95bAUAN/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" style={{ ...iconStyle, color: iconColors.facebook }} />
              </a>
              <a
                href="https://www.linkedin.https://www.linkedin.com/in/guddu-kumar-3345b0340//in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" style={{ ...iconStyle, color: iconColors.linkedin }} />
              </a>
            </div>
          </Col>

        </Row>
      </Card>
    </Container>
  );
};

export default FormSection;
