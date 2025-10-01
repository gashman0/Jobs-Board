import React from "react";

const Footer2 = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1E3A8A",
        // width: "100vw",
        color: "#fff",
        padding: "40px 20px",
        // marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        //   maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* About */}
        <div style={{ flex: "1 1 250px", marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>About Us</h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            We help empoloyers locate their employees <br /> and employees locate their employers.

          </p>
        </div>

        {/* Links */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "6px" }}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Contact Us
              </a>
            </li>
           
          </ul>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>Contact</h3>
          <p style={{ margin: "6px 0", fontSize: "14px" }}>
            📍 123 Main Street, City
          </p>
          <p style={{ margin: "6px 0", fontSize: "14px" }}>
            📞 08140894435
          </p>
          <p style={{ margin: "6px 0", fontSize: "14px" }}>
            ✉️ gashman878@gmail.com
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.3)",
          marginTop: "20px",
          paddingTop: "10px",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        &copy; {new Date().getFullYear()} Jobs Boards. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
