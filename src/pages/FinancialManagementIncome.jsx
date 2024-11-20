import React, { useEffect, useState } from 'react';
import './FinancialManagementIncome.css';
import { Link } from 'react-router-dom';

import { FaEye, FaCalendarAlt } from "react-icons/fa";


function FinancialManagementIncome() {
    const [activeTab, setActiveTab] = useState("maintenance");
    const [showMainModal, setShowMainModal] = useState(false);
    const [showAddMaintenanceModal, setShowAddMaintenanceModal] = useState(false);
    const [maintenanceAmount, setMaintenanceAmount] = useState("");
    const [penaltyAmount, setPenaltyAmount] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [penaltyDays, setPenaltyDays] = useState("");
    const [data, setData] = useState([
        {
            name: "Cody Fisher",
            unitNumber: "1001",
            date: "2024-02-10",
            status: "Tenant",
            phoneNumber: "92524 34522",
            amount: "₹ 2000",
            penalty: "₹ 500",
            paymentStatus: "Pending",
            paymentMethod: "Online",
        },
    ]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleContinue = () => {
        setShowMainModal(false);
        setShowAddMaintenanceModal(true);
    };

    const handleSaveMaintenance = () => {
        if (!maintenanceAmount || !dueDate) {
            alert("Please fill all required fields!");
            return;
        }

        const newRecord = {
            name: "John Doe",
            unitNumber: "101",
            date: dueDate,
            status: "Owner",
            phoneNumber: "12345 67890",
            amount: maintenanceAmount,
            penalty: penaltyAmount || "₹ 0",
            paymentStatus: "Pending",
            paymentMethod: "Cash",
        };

        setData((prevData) => [...prevData, newRecord]);

        setMaintenanceAmount("");
        setPenaltyAmount("");
        setDueDate("");
        setPenaltyDays("");
        setShowAddMaintenanceModal(false);
    };

    return (
        <div className="container-fluid p-4" style={{ backgroundColor: "#F4F6F8" }}>
            <div className="row mb-4 align-items-center">
                <div className="col-6 col-md-3">
                    <div className="balance-card balance-card-green">
                        <div className="balance-info">
                            <p className="mb-0 text-muted mt-3">Total Balance</p>
                            <p className="balance-amount text-success">₹ 0</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="balance-card balance-card-danger">
                        <div className="balance-info">
                            <p className="mb-0 text-muted mt-3">Total Balance</p>
                            <p className="balance-amount text-danger">₹ 0</p>
                        </div>
                    </div>
                </div>
                <div className="col text-end">
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => setShowMainModal(true)}
                    >
                        Set Maintenance
                    </button>
                </div>
            </div>

            {showMainModal && (
                <div className="modal d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ width: "430px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Set Maintenance</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowMainModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">
                                        Password<span className="text-danger">*</span>
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                        >
                                            <FaEye />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowMainModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        background: "linear-gradient(90deg, #FF5722, #FF9800)",
                                        color: "white",
                                    }}
                                    onClick={handleContinue}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showAddMaintenanceModal && (
                <div className="modal d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ width: "430px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Add Maintenance Detail</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowAddMaintenanceModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label">Maintenance Amount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="₹ 2000"
                                            value={maintenanceAmount}
                                            onChange={(e) => setMaintenanceAmount(e.target.value)}
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Penalty Amount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="₹ 500"
                                            value={penaltyAmount}
                                            onChange={(e) => setPenaltyAmount(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Maintenance Due Date</label>
                                    <div className="input-group">
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={dueDate}
                                            onChange={(e) => setDueDate(e.target.value)}
                                        />
                                        <span className="input-group-text">
                                            <FaCalendarAlt />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Penalty Applied After Day Selection
                                    </label>
                                    <select
                                        className="form-select"
                                        value={penaltyDays}
                                        onChange={(e) => setPenaltyDays(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Select days
                                        </option>
                                        <option value="1 Day">1 Day</option>
                                        <option value="2 Days">2 Days</option>
                                        <option value="3 Days">3 Days</option>
                                        <option value="4 Days">4 Days</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={() => setShowAddMaintenanceModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        background: "linear-gradient(90deg, #FF5722, #FF9800)",
                                        color: "white",
                                    }}
                                    onClick={handleSaveMaintenance}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabs Section */}
            <div className="container mt-3">
                <ul className="nav nav-tabs border-0">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'maintenance' ? 'active' : ''}`}
                            onClick={() => handleTabClick('maintenance')}
                            style={{
                                background: activeTab === 'maintenance' ? 'linear-gradient(90deg, #FF5722, #FF9800)' : 'white',
                                color: activeTab === 'maintenance' ? 'white' : 'black',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                border: 'none',
                                padding: '10px 20px'
                            }}
                        >
                            Maintenance
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'otherIncome' ? 'active' : ''}`}
                            onClick={() => handleTabClick('otherIncome')}
                            style={{
                                background: activeTab === 'otherIncome' ? 'linear-gradient(90deg, #FF5722, #FF9800)' : 'white',
                                color: activeTab === 'otherIncome' ? 'white' : 'black',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                border: 'none',
                                padding: '10px 20px'
                            }}
                        >
                            Other Income
                        </button>
                    </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content border border-top-0 p-3 bg-white rounded-bottom">
                    {activeTab === "maintenance" && <MaintenanceDetails data={data} />}
                    {activeTab === 'otherIncome' && <OtherIncome />}
                </div>
            </div>
        </div>

    );
}



function MaintenanceDetails({ data }) { // Accept data as prop
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleViewClick = (rowData) => {
        setSelectedData(rowData);
        setShowModal(true);
    };

    return (
        <div className="container-fluid mt-4">
            <div className="row pt-3">
                <div
                    className="table-responsive"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                            <tr>
                                <th>Name</th>
                                <th>Unit Number</th>
                                <th>Date</th>
                                <th>Phone Number</th>
                                <th>Amount</th>
                                <th>Penalty</th>
                                <th>Status</th>
                                <th>Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="d-flex align-items-center">
                                        <img
                                            src="src\Images\image.png"
                                            alt="Avatar"
                                            className="rounded-circle me-2"
                                            style={{ width: "35px", height: "35px" }}
                                        />
                                        {item.name}
                                    </td>
                                    <td>{item.unitNumber}</td>
                                    <td>{item.date}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td style={{ color: "green" }}>{item.amount}</td>
                                    <td
                                        style={{
                                            color: item.penalty === "--" ? "inherit" : "red",
                                        }}
                                    >
                                        {item.penalty}
                                    </td>
                                    <td>
                                        <span
                                            className={`badge ${item.paymentStatus === "Pending"
                                                    ? "bg-warning text-dark"
                                                    : "bg-success"
                                                }`}
                                        >
                                            {item.paymentStatus}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className={`badge ${item.paymentMethod === "Online"
                                                    ? "bg-primary"
                                                    : "bg-secondary"
                                                }`}
                                        >
                                            {item.paymentMethod}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-link text-primary"
                                            onClick={() => handleViewClick(item)}
                                        >
                                            <FaEye />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedData && (
                <div
                    className="modal d-block"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Maintenance Detail</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body text-center">
                                <img
                                    src="src/Images/image.png"
                                    alt="Maintenance"
                                    className="img-fluid mb-3"
                                />
                                <h6>Details for Unit: {selectedData.unitNumber}</h6>
                                <p>Name: {selectedData.name}</p>
                                <p>Amount: {selectedData.amount}</p>
                                <p>Status: {selectedData.paymentStatus}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// OtherIncome start

const OtherIncome = () => {
    const [notes, setNotes] = useState([
        { title: "Ganesh Chaturthi", description: "Celebration of Ganesh Chaturthi.", Date: "2024-01-07", amount: "1500", dueDate: "2024-01-10" },
        { title: "Navratri", description: "Navratri celebrations.", Date: "2024-02-15", amount: "1200", dueDate: "2024-02-20" },
    ]);
    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        Date: "",
        dueDate: "",
        amount: "",
    });
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [modalType, setModalType] = useState(""); // "create" or "edit"
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentNote, setCurrentNote] = useState(null);

    // Toggles the dropdown menu
    const toggleDropdown = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    // Handles form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Pre-fill form values when editing a note
    useEffect(() => {
        if (modalType === "edit" && currentNote) {
            setFormValues({
                title: currentNote.title || "",
                Date: currentNote.Date || "",
                dueDate: currentNote.dueDate || "",
                description: currentNote.description || "",
                amount: currentNote.amount || "",
            });
        }
    }, [modalType, currentNote]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if any required field is empty
        if (
            !formValues.title.trim() || 
            !formValues.description.trim() || 
            !formValues.Date || 
            !formValues.dueDate || 
            !formValues.amount.trim()
        ) {
            alert("Please fill in all fields."); // Notify the user
            return; // Exit the function
        }
    
        if (modalType === "create") {
            setNotes([...notes, formValues]); // Add new note
        } else if (modalType === "edit") {
            // Update the existing note
            setNotes(notes.map((note) => (note === currentNote ? formValues : note)));
        }
    
        // Close the modal and reset the form
        setShowModal(false);
        setFormValues({ title: "", description: "", Date: "", dueDate: "", amount: "" });
        setModalType("");
    };
    

    // Opens the Create Note modal
    const handleCreateClick = () => {
        setModalType("create");
        setShowModal(true);
    };

    // Opens the Edit Note modal
    const handleEditClick = (note) => {
        setCurrentNote(note);
        setModalType("edit");
        setShowModal(true);
    };

    // Closes the Create/Edit modal
    const handleCloseEditModal = () => {
        setShowModal(false);
        setModalType("");
        setCurrentNote(null);
    };

    // Opens the Delete Confirmation modal
    const handleDeleteClick = (note) => {
        setCurrentNote(note);
        setShowDeleteModal(true);
    };

    // Closes the Delete Confirmation modal
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setCurrentNote(null);
    };

    // Confirms the deletion of a note
    const handleConfirmDelete = () => {
        setNotes(notes.filter((note) => note !== currentNote)); // Delete the note
        handleCloseDeleteModal();
    };

    return (
        <div className="container-fluid pt-3 mt-3 financial-management">
            <div className="d-flex justify-content-between align-items-center mb-3 text-dark">
                <h2 style={{ fontSize: "20px" }}>Other Income </h2>
                <button className="btn btn-primary mb-3" onClick={handleCreateClick}>
                    Create Other Income
                </button>
            </div>

            {/* Notes Cards */}
            <div className="row">
                {notes.map((note, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card note-card shadow-sm bg-white">
                            <div
                                className="d-flex justify-content-between align-items-center rounded-top p-2"
                                style={{ backgroundColor: "#5678e9", color: "white" }}
                            >
                                <h5 className="card-title mb-0" style={{ fontSize: "16px" }}>
                                    {note.title}
                                </h5>
                                <img
                                    src="src/Images/menu.png"
                                    role="button"
                                    tabIndex="0"
                                    alt="Menu"
                                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                    onClick={() => toggleDropdown(index)}
                                />
                                {dropdownIndex === index && (
                                    <div
                                        className="dropdown-menu show"
                                        style={{ position: "absolute", top: "40px", right: "10px" }}
                                    >
                                        <button className="dropdown-item" onClick={() => handleEditClick(note)}>
                                            Edit
                                        </button>
                                        <button className="dropdown-item" onClick={() => handleDeleteClick(note)}>
                                            Delete
                                        </button>
                                        <Link to="/MemberList" className="dropdown-item">
                                            View
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className="card-body ">
                               <div className="d-flex justify-content-between mb-2">
                               <span className="text-muted" style={{ fontSize: "12px" }}> Amount: </span>
                               <span className='badge  text-primary' style={{  fontSize: "12px",
                                padding: "5px 10px",
                                borderRadius: "20px",
                                fontWeight: "bold", backgroundColor:"#ecf4ff" }}>₹ {note.amount} </span>
                               </div>
                               <div className="d-flex justify-content-between mb-2">
                               <span className="text-muted" style={{ fontSize: "12px" }}> Date: </span>
                               <span style={{ fontSize: "12px", fontWeight: "bold", }}> {note.Date} </span>
                               </div>
                               <div className=" d-flex justify-content-between mb-2">
                               <span className="text-muted" style={{ fontSize: "12px" }}>Due Date: </span>
                               <span style={{ fontSize: "12px", fontWeight: "bold", }}> {note.dueDate} </span>
                               </div>
                               <div>
                        <h6 className="text-muted mb-1" style={{ fontSize: "12px" }}  >
                            Description
                        </h6>
                        <p className="text-normal mb-0" style={{ fontSize: "12px" }}>{note.description} </p>
                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modals */}
            {showModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {modalType === "create" ? "Create Note" : `Edit ${currentNote?.title}`}
                                </h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    {/* Form Fields */}
                                    <div className="form-group mb-2">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            value={formValues.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Date</label>
                                        <input
                                            type="date"
                                            name="Date"
                                            className="form-control"
                                            value={formValues.Date}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Due Date</label>
                                        <input
                                            type="date"
                                            name="dueDate"
                                            className="form-control"
                                            value={formValues.dueDate}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Description</label>
                                        <textarea
                                            name="description"
                                            className="form-control"
                                            value={formValues.description}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Amount</label>
                                        <input
                                            type="text"
                                            name="amount"
                                            className="form-control"
                                            value={formValues.amount}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                    <button type="button" onClick={() => setShowModal(false)} className="btn btn-primary">
                                        cansel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <h5>Delete {currentNote?.title}?</h5>
                                <p>Are you sure you want to delete this note?</p>
                                <button
                                    type="button"
                                    className="btn btn-danger me-2"
                                    onClick={handleConfirmDelete}
                                >
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCloseDeleteModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default FinancialManagementIncome;
