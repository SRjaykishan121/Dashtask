import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaTh, FaUser, FaDollarSign, FaBuilding, FaExclamationCircle, FaShieldAlt, FaBullhorn, FaSignOutAlt } from "react-icons/fa";

const SideBar = () => {
  const [showOffcanvas] = useState(true); // Always show the offcanvas by default

  return (
    <div className="">
      {/* Offcanvas */}
      <div
        className={` offcanvas offcanvas-start ${showOffcanvas ? "show" : ""} `}
        tabIndex="-1"
        style={{ visibility: "visible", width: "300px" }}
        aria-labelledby="offcanvasExampleLabel"
        data-bs-backdrop="false" // Disable backdrop
      >
        {/* Header */}
        <div className="offcanvas-header justify-content-center">
          <h1 className="offcanvas-title mainColor mx-5" id="offcanvasExampleLabel">
            Dash<span className="text-dark">Stack</span>
          </h1>
        </div> 
        <hr />

        {/* Offcanvas Body */}
        <div className="offcanvas-body p-0">
          <ul className="list-unstyled">
            {/* Dashboard */}
            <li className="p-3 mainColor2 rounded ">
  <Link to="/" className="d-flex align-items-center " style={{ textDecoration: "none", color: "black" }}>
    <FaTh className="me-3" />  {/* Dashboard Icon */}
    <span className="text-dark">Dashboard</span>
  </Link>
</li>

            {/* Menu Items */}
            <li className="p-3">
              <Link to="/residentmanagement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaUser className="me-3" />
                <span>Resident Management</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/financialmanagement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaDollarSign className="me-3" />
                <span>Financial Management</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/facilitymanagement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaBuilding className="me-3" />
                <span>Facility Management</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/complainttracking" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaExclamationCircle className="me-3" />
                <span>Complaint Tracking</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/FinancialManagementIncome" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaShieldAlt className="me-3" />
                <span>FinancialManagementIncome</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/RequestTracking" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaShieldAlt className="me-3" />
                <span>RequestTracking</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/announcement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaBullhorn className="me-3" />
                <span>Announcement</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/Complaint" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaBuilding className="me-3" />
                <span>@ Resident Complaint</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/SecurityProtocols" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaBuilding className="me-3" />
                <span>@ Resident Security Protocols</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/PersonalDetail" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaBuilding className="me-3" />
                <span>@ Resident PersonalDetail</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/MaintenanceInvoices" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaBuilding className="me-3" />
                <span>@ Resident MaintenanceInvoices</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/OtherIncomeInvoice" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <FaBuilding className="me-3" />
                <span>@ Resident Other Income Invoice</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/VisitorTracking" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <span>@ Security Visitor Tracking</span>
              </Link>
            </li>
            <li className="p-3">
              <Link to="/EmergencyManagement" className="d-flex align-items-center text-dark" style={{ textDecoration: "none" }}>
                <span>@ Security Emergency Management</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr />

        {/* Logout */}
        <div className="p-3">
          <Link to="/logout" className="d-flex align-items-center text-danger" style={{ textDecoration: "none" }}>
            <FaSignOutAlt className="me-3" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
