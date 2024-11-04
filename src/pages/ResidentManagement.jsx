import React from 'react';
import './ResidentManagement.css';
import BalanceChart from './BalanceChart';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const ResidentManagement = () => {
  return (
    <div className="container-fluid resident-management">
      {/* Top Balance Cards */}
      <div className="row ">
        <div className="col-lg-3 mb-3 ">
          <div className="balance-card balance-card-orange">
            <div className="balance-info">
              <p className="mb-0 text-muted mt-3">Total Balance</p>
              <p className="balance-amount">₹ 2,22,520</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group1.png" alt="Balance icon" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 ">
          <div className="balance-card balance-card-green">
            <div className="balance-info">
              <p className="mb-0 text-muted  mt-3">Total Income</p>
              <p className="balance-amount">₹ 55,000</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group2.png" alt="Income icon" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 ">
          <div className="balance-card balance-card-blue">
            <div className="balance-info">
              <p className="mb-0 text-muted  mt-3">Total Expense</p>
              <p className="balance-amount">₹ 20,550</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group3.png" alt="Expense icon" />
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="balance-card balance-card-pink">
            <div className="balance-info">
              <p className="mb-0 text-muted  mt-3">Total Unit</p>
              <p className="balance-amount">₹ 20,550</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group4.png" alt="Unit icon" />
            </div>
          </div>
        </div>
      </div>
      {/* Balance Chart and Sidebar Panels */}
      <div className="row mb-2">
        <div className="col-lg-6 ">
          <div className="card balance-chart">
            <BalanceChart />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row">
            {/* Important Numbers */}
            <div className="col-lg-6 ">
              <div className="card border rounded" style={{ height: "330px" }}>
                <div className="card-header d-flex justify-content-between align-items-center p-2">
                  <h5 style={{ fontSize: "20px" }}>Important Numbers</h5>
                  <button className="btn btn-primary">Add</button>
                </div>
                <div className="important-numbers scrollable-card">
                  <div className="m-2">
                    {/* Sample Contact Entry */}
                    {[...Array(6)].map((_, index) => (
                      <div className="border rounded mb-2 d-flex justify-content-between align-items-center" key={index}>
                        <div className='col-lg-8 p-2'>
                          <h5 style={{ fontSize: "13px" }}>Name: <span className="text-secondary fw-normal">Hanna Donin</span></h5>
                          <h5 style={{ fontSize: "12px" }}>Phone: <span className="text-secondary fw-normal">+91 99857 33657</span></h5>
                          <h5 style={{ fontSize: "13px" }}>Work: <span className="text-secondary fw-normal">Plumber</span></h5>
                        </div>
                        <div className="col-lg-4">
                          <img className='me-2' src="src/Images/delet.png" alt="delete" />
                          <img src="src/Images/edit.png" alt="edit" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Maintenances */}
            <div className="col-lg-6">
              <div className="card pending-maintenance" style={{ height: "330px" }}>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 style={{ fontSize: "17px" }}>Pending Maintenances</h5>
                  <span className='text-primary'>View all</span>
                </div>
                <div className="card-body scrollable-card">
                  {/* Sample Pending Maintenance Item */}
                  {[...Array(10)].map((_, index) => (
                    <div className="maintenance-item d-flex bd-highlight mt-1 align-items-center border-bottom" key={index}>
                      <div className="bd-highlight rounded  mb-1">
                        <img src="src\Images\image2.png" alt="maintenance" style={{ height: "40px", height: "40px" }} />
                      </div>
                      <div className="ps-2 bd-highlight">
                        <h5 style={{ fontSize: "13px" }}>Roger Lubin</h5>
                        <h5 style={{ fontSize: "12px" }} className='text-secondary fw-normal'>2 Month Pending</h5>
                      </div>
                      <div className="text-danger ms-auto p-2 bd-highlight">
                        <h2 style={{ fontSize: "12px" }}> <MdOutlineCurrencyRupee className='mb-1' />5000</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complaint List */}
      <div className="row">
        <div className="col-9">
          <div className="border rounded complaint-list p-3">
            <div className=" d-flex justify-content-between align-items-center">
              <h5>Complaint List</h5>
              <button className='btn border'>Month <FaAngleDown /></button>
            </div>
            <div className="table-responsive mt-2">
              <table className="table rounded-table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Complainer Name</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Complaint Name</th>
                    <th style={{ backgroundColor: "#a3b4ec" }} >Date</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Priority</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Complain Status</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Action</th>
                  </tr>
                </thead>
                <tbody >
                  {/* Sample Data */}
                  <tr>
                    <td className="complainer ">
                      <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2  me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-medium">Medium</span></td>
                    <td><span className="status open">Open</span></td>
                    <td className="actions">
                      <button className="btn-action">
                        <img src="src/Images/edit.png" alt="Edit" />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" />
                      </button>
                      <button className="btn-action  mb-2">
                        <img src="src\Images\delet.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2  me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-low">Low</span></td>
                    <td><span className="status pending">Pending</span></td>
                    <td className="actions">
                      <button className="btn-action">
                        <img src="src/Images/edit.png" alt="Edit" />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" />
                      </button>
                      <button className="btn-action  mb-2">
                        <img src="src\Images\delet.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2  me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-high">High</span></td>
                    <td><span className="status solve">Solve</span></td>
                    <td className="actions">
                      <button className="btn-action">
                        <img src="src/Images/edit.png" alt="Edit" />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" />
                      </button>
                      <button className="btn-action mb-2">
                        <img src="src\Images\delet.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2  me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-high">High</span></td>
                    <td><span className="status solve">Solve</span></td>
                    <td className="actions">
                      <button className="btn-action">
                        <img src="src/Images/edit.png" alt="Edit" />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" />
                      </button>
                      <button className="btn-action mb-2">
                        <img src="src\Images\delet.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="complainer">
                      <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2  me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-high">High</span></td>
                    <td><span className="status solve">Solve</span></td>
                    <td className="actions">
                      <button className="btn-action">
                        <img src="src/Images/edit.png" alt="Edit" />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" />
                      </button>
                      <button className="btn-action mb-2">
                        <img src="src\Images\delet.png" alt="Delete" />
                      </button>
                    </td>
                  </tr>



                  {/* Additional rows can be repeated similarly */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upcoming Activity */}
        <div className="col-lg-3">
          <div className="card upcoming-activity">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 style={{ fontSize: "16px" }}>Upcoming Activity</h5>
              <button className='btn border' style={{width:"90px", fontSize:"14px"}}>Month <FaAngleDown /></button>
            </div>
            <div className="card-body scrollable-card">
              {/* Sample Upcoming Activity Item */}

              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group5.png" alt="activity" style={{ height: "40px", height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Society Meeting</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group6.png" alt="activity" style={{ height: "40px", height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Holi Festival </h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}> 24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group7.png" alt="activity" style={{ height: "40px", height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Ganesh Chaturthi</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group8.png" alt="activity" style={{ height: "40px", height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Navratri Festival</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className=" bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group7.png" alt="activity" style={{ height: "40px", height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Ganesh Chaturthi</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group6.png" alt="activity" style={{ height: "40px", height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Holi Festival </h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}> 24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group5.png" alt="activity" style={{ height: "40px", height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Society Meeting</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentManagement;
