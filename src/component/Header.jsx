import React, { useState } from 'react';
import './Header.css';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
const Header = () => {
  const [notifications, setNotifications] = useState([
    {
      title: "Maintenance (A-101)",
      time: "Tuesday 11:41 AM",
      message: "Evelyn Harper gave a Maintenance of 1000 rupees.",
      type: "notification2", // Matches the image file name
      actions: true,
      timestamp: "2 days ago",
    },
    {
      title: "Maintenance (A-101)",
      time: "Tuesday 11:41 AM",
      message: "Evelyn Harper gave a Maintenance of 1000 rupees.",
      type: "notification3",
      actions: true,
      timestamp: "2 days ago",
    },
    {
      title: "Ganesh Chaturthi (A-101)",
      time: "Saturday 11:41 AM",
      message: "Per Person Amount: ₹ 1,500",
      p: "The celebration of Ganesh Chaturthi involves the installation of clay idols of Lord Ganesha in Our Resident.",
      type: "notification4",
      actions: true,
      timestamp: "2 days ago",
    },
    {
      title: "Update Maintenance",
      time: "32 Minutes ago",
      message: "Maintenance Amount: ₹ 1,500\nMaintenance Penalty: ₹ 350",
      type: "notification3",
      actions: false,
      timestamp: "32 Minutes ago",
    },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setShowNotifications(false);
  };

  return (
    <>
      <div className="header">
        <nav className="navbar  bg-white">
          <div className="container">
            <div className="d-flex align-items-center">
              <input
                className="form-control me-2"

                type="search"
                placeholder="Search Here"
                aria-label="Search"
              />
            </div>
            <div className="d-flex align-items-center">
              {/* Notification Icon */}
              <button
                className="btn position-relative me-3"
                onClick={toggleNotifications}
              >
                <img
                  src="src/Images/Notification.png"
                  alt="Notifications"
                  width="40"
                  height="40"
                  className="img-fluid"
                />
                {notifications.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* Notification Popup */}
              {showNotifications && (
                <div
                  className="notification-dropdown position-absolute bg-white border rounded shadow p-3"
                  style={{
                    right: "60px",
                    top: "60px",
                    width: "500px",
                    zIndex: 1000,
                    maxHeight: "600px", // Set maximum height
                    overflowY: "auto",  // Enable vertical scrollbar
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Notification</h6>
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={clearNotifications}
                    >
                      Clear All
                    </button>
                  </div>
                  <ul className="list-unstyled ">
                    {notifications.length > 0 ? (
                      notifications.map((notification, index) => (
                        <li key={index} className="notification-item  py-3 border-bottom ">
                          <div className="d-flex align-items-start">
                            {/* Use the notification2.png image */}
                            <img
                              src={`src/Images/${notification.type}.png`} // Points to notification2.png
                              alt={notification.type}
                              className="rounded-circle me-3"
                              width="40"
                              height="40"
                            />
                            <div className="flex-grow-1">
                              <h6 className="mb-1" >{notification.title}</h6>
                              <small className="text-muted d-block" style={{ fontSize: "12px" }}>{notification.time}</small>
                              <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>{notification.message}</p>
                              <p className="mb-1 text-muted" style={{ fontSize: "14px" }}>{notification.p}</p>
                              {notification.actions && (
                                <div className="d-flex gap-2">
                                  <button className="btn border text-decoration-none text-dark btn-sm">Accept</button>
                                  <button className="btn border text-decoration-none text-white btn-sm" style={{ backgroundColor: " #5678E9" }}>Decline</button>
                                </div>
                              )}
                            </div>
                          </div>
                          <small className="text-muted float-end " style={{ marginTop: "-8px" }}>{notification.timestamp}<IoCheckmarkDoneOutline className='ms-1' />
                          </small>
                        </li>
                      ))
                    ) : (
                      <li className="text-muted">No new notifications</li>
                    )}
                  </ul>

                </div>
              )}


              {/* User Profile */}
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="src/Images/image.png"
                    alt="User"
                    className="rounded-circle me-2 img-fluid"
                    width="40"
                    height="40"
                  />
                  <div>
                    <span>Moni Roy</span>
                    <br />
                    <small className="text-muted">Admin</small>
                  </div>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a className="dropdown-item" href="#/profile">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/settings">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
