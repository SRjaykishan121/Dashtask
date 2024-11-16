import React, { useState } from 'react';
import './FinancialManagementIncome.css';
import { FaUser } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

function FinancialManagementIncome() {
    const [activeTab, setActiveTab] = useState('maintenance');
    const [showMainModal, setShowMainModal] = useState(false);
    const [showAddMaintenanceModal, setShowAddMaintenanceModal] = useState(false);
    const [maintenanceAmount, setMaintenanceAmount] = useState('');
    const [penaltyAmount, setPenaltyAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [penaltyDays, setPenaltyDays] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const handleContinue = () => {
        setShowMainModal(false);           // Close the Main Modal
        setShowAddMaintenanceModal(true);   // Open the Maintenance Detail Modal
    };


    return (
        <div className="container-fluid p-4" style={{ backgroundColor: '#F4F6F8' }}>
            {/* Header Row */}
            <div className="row mb-4 align-items-center">
                <div className="col-6 col-md-3">
                    <div className="balance-card balance-card-green">
                        <div className="balance-info">
                            <p className="mb-0 text-muted mt-3">Total Balance</p>
                            <p className="balance-amount text-success">₹ 0</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 ">
                    <div className="balance-card balance-card-dangere">
                        <div className="balance-info">
                            <p className="mb-0 text-muted mt-3">Total Balance</p>
                            <p className="balance-amount text-danger">₹ 0</p>
                        </div>
                    </div>
                </div>
                <div className="col text-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowMainModal(true)}
                    >
                        Set Maintenance
                    </button>
                </div>
            </div>

            {/* Main Modal */}
            {showMainModal && (
                <div className="modal d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ width: "430px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Set Maintenance</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
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
                                    style={{ width: "48%" }}
                                    onClick={() => setShowMainModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        background: 'linear-gradient(90deg, #FF5722, #FF9800)',
                                        color: 'white',
                                        border: 'none',
                                        width: "48%",
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

            {/* Add Maintenance Detail Modal */}
            {showAddMaintenanceModal && (
                <div className="modal d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ width: "430px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Add Maintenance Detail</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
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
                                            placeholder="₹ 2,000"
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
                                    <label className="form-label">Penalty Applied After Day Selection</label>
                                    <select
                                        className="form-select"
                                        value={penaltyDays}
                                        onChange={(e) => setPenaltyDays(e.target.value)}
                                    >
                                        <option value="" disabled>Select days</option>
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
                                    style={{ width: "48%" }}
                                    onClick={() => setShowAddMaintenanceModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        background: 'linear-gradient(90deg, #FF5722, #FF9800)',
                                        color: 'white',
                                        width: "48%",
                                        border: 'none',
                                    }}
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
                    {activeTab === 'maintenance' && <MaintenanceDetails />}
                    {activeTab === 'otherIncome' && <OtherIncome />}
                </div>
            </div>
        </div>
    );
}

function MaintenanceDetails() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleViewClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };
    const data = [
        {
            name: 'Cody Fisher',
            unitNumber: ' 1001',
            date: '10/02/2024',
            status: 'Tenant',
            phoneNumber: '92524 34522',
            amount: '₹ 1000',
            penalty: '--',
            paymentStatus: 'Pending',
            paymentMethod: 'Online'
        },
        {
            name: 'Esther Howard',
            unitNumber: ' 1002',
            date: '11/02/2024',
            status: 'Owner',
            phoneNumber: '92524 12365',
            amount: '₹ 1000',
            penalty: '250',
            paymentStatus: 'Done',
            paymentMethod: 'Cash'
        },
        {
            name: 'Jenny Wilson',
            unitNumber: ' 1003 ',
            date: '12/02/2024',
            status: 'Tenant',
            phoneNumber: '92524 34522',
            amount: '₹ 1000',
            penalty: '--',
            paymentStatus: 'Pending',
            paymentMethod: 'Online'
        },
        {
            name: 'Robert Fox',
            unitNumber: ' 1004',
            date: '13/02/2024',
            status: 'Owner',
            phoneNumber: '92524 12365',
            amount: '₹ 1000',
            penalty: '--',
            paymentStatus: 'Done',
            paymentMethod: 'Cash'
        },
        {
            name: 'Jacob Jones',
            unitNumber: ' 2001  ',
            date: '14/02/2024',
            status: 'Tenant',
            phoneNumber: '92333 34522',
            amount: '₹ 1000',
            penalty: '250',
            paymentStatus: 'Pending',
            paymentMethod: 'Online'
        },
        {
            name: 'Albert Flores',
            unitNumber: ' 2002 ',
            date: '15/02/2024',
            status: 'Owner',
            phoneNumber: '92524 34522',
            amount: '₹ 1000',
            penalty: '--',
            paymentStatus: 'Done',
            paymentMethod: 'Cash'
        },
        {
            name: 'Annette Black',
            unitNumber: ' 2003   ',
            date: '16/02/2024',
            status: 'Tenant',
            phoneNumber: '92258 34522',
            amount: '₹ 1000',
            penalty: '250',
            paymentStatus: 'Pending',
            paymentMethod: 'Online'
        },
        {
            name: 'Jerome Bell',
            unitNumber: ' 2004  ',
            date: '17/02/2024',
            status: 'Owner',
            phoneNumber: '92589 34522',
            amount: '₹ 1000',
            penalty: '--',
            paymentStatus: 'Done',
            paymentMethod: 'Cash'
        },
    ];

    return (
        <div className="container">
            <div className="row bg-white rounded  p-3 shadow-sm">
                <h6 className="mb-3">Maintenance Details</h6>
                <div className="table-responsive mt-2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <table className="table rounded-table">
                        <thead className="bg-light">
                            <tr>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Name</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Unit Number</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Date</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Status</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Phone Number</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Amount</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Penalty</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Status</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Payment</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src="src/Images/image.png" alt="avatar" className="rounded-circle me-2" />
                                        {item.name}
                                    </td>
                                    <td>
                                        <span className="status open" style={{ fontSize: "14px" }}>A</span>
                                        <span className="text-dark" style={{ fontSize: "14px" }}>{item.unitNumber}</span>
                                    </td>
                                    <td>{item.date}</td>
                                    <td>
                                        <span className={`badge ${item.status === 'Owner' ? 'Owner' : 'Tenant'}`} style={{ fontSize: "14px" }}>
                                            <FaUser className="mb-1" />
                                            {item.status}
                                        </span>
                                    </td>
                                    <td style={{ fontSize: "14px" }}>{item.phoneNumber}</td>
                                    <td className="text-success" style={{ fontSize: "14px" }}>{item.amount}</td>
                                    <td><span className="status open" style={{ fontSize: "14px" }}>{item.penalty}</span></td>
                                    <td>
                                        <span className={`badge ${item.paymentStatus === 'Done' ? 'Done' : 'Pending'}`} style={{ fontSize: "14px" }}>
                                            <MdTimer className="mb-1" />
                                            {item.paymentStatus}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge ${item.paymentMethod === 'Cash' ? 'Cash' : 'Online'}`} style={{ fontSize: "14px" }}>
                                            <MdPayment className="mb-1" />
                                            {item.paymentMethod}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn-action" onClick={() => handleViewClick(item)}>
                                            <img src="src/Images/view.png" alt="View" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal with Custom Backdrop */}
            {showModal && (
                <>
                    {/* Blurred Overlay */}
                    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 backdrop-blur"></div>

                    {/* Modal Content */}
                    <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content" style={{maxWidth:"400px"}}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitle">View Maintenance Details</h5>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}><FiX size={24} /></button>
                                </div>
                                <div className="modal-body">
                                    {selectedItem && (
                                        <>
                                            <div className="d-flex align-items-center mb-3">
                                                <img
                                                    src="src/Images/image.png"
                                                    alt="avatar"
                                                    className="rounded-circle"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <div className="ms-3">
                                                    <h5 className="mb-0">{selectedItem.name}</h5>
                                                    <p className="text-muted">{selectedItem.date}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between w-100">
                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                    <div>Wing:</div>
                                                    <span className="badge bg-primary" style={{ marginTop: "4px" }}>A</span>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                    <div>Unit:</div> 
                                                {selectedItem.unitNumber}</div>
                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                    <div>Status:</div>
                                                     <span className="badge bg-primary">{selectedItem.status}</span></div>
                                                <div>
                                                    <div>Amount:</div>
                                                     ₹{selectedItem.amount}</div>
                                            </div>

                                            <div className="d-flex justify-content-between w-100">
                                                <div  style={{ display: "flex", flexDirection: "column" }}>
                                                   <div> Penalty:</div>
                                                    {selectedItem.penalty}
                                                    </div>
                                                <div  style={{ display: "flex", flexDirection: "column" }}>
                                                   <div> Status:</div>
                                                    <span className="badge bg-warning">{selectedItem.paymentStatus}</span>
                                                    </div>
                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                    <div>Payment:</div>
                                                     <span className={`badge ${selectedItem.paymentMethod === 'Cash' ? 'bg-dark' : 'bg-info'}`}>{selectedItem.paymentMethod}</span></div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}


        </div>

    );
}

// OtherIncome start

const NoteCard = ({ note, isOpen, onToggleDropdown, onEditClick, onDeleteClick }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card note-card shadow-sm bg-white">
                <div className="d-flex justify-content-between align-items-center rounded-top p-2" style={{ backgroundColor: "#5678e9", color: "white" }}>
                    <h5 className="card-title mb-0" style={{ fontSize: "16px" }}>{note.title}</h5>
                    <img src="src/Images/menu.png" role="button" tabIndex="0" alt="Menu" style={{ width: "20px", height: "20px", cursor: "pointer" }} onClick={onToggleDropdown} />
                    {isOpen && (
                        <div className="dropdown-menu show" style={{ position: 'absolute', top: '40px', right: '10px' }}>
                            <button className="dropdown-item" onClick={() => onEditClick(note)}>Edit</button>
                            <button className="dropdown-item" onClick={() => onDeleteClick(note)} >Delete</button>
                            <Link to="/MemberList" className="dropdown-item" >View</Link>
                        </div>
                    )}
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted" style={{ fontSize: "12px" }}>Amount Per Member</span>
                        <span className="badge bg-light text-primary" style={{ fontSize: "14px", padding: "5px 10px", borderRadius: "15px" }}>₹ 1,500</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted" style={{ fontSize: "12px" }}>Total Member</span>
                        <span style={{ fontSize: "12px" }}>12</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted" style={{ fontSize: "12px" }}>Date</span>
                        <p style={{ fontSize: "12px", margin: "0" }}>{note.Date}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted" style={{ fontSize: "12px" }}>Due Date</span>
                        <p style={{ fontSize: "12px", margin: "0" }}>10/07/2024</p>
                    </div>
                    <div className="mb-2">
                        <h6 className="card-subtitle mb-1 text-muted fw-bold" style={{ fontSize: "14px" }}>Description</h6>
                        <p className="card-text" style={{ fontSize: "12px" }}>{note.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OtherIncome = () => {
    const notes = [
        { title: 'Ganesh Chaturthi', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Navratri', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Diwali', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
        { title: 'Christmas', description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in.', Date: '01/07/2024' },
    ];

    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(""); // Track modal type ("create" or "edit")
    const [currentNote, setCurrentNote] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    const handleCreateClick = () => {
        setModalType("create");
        setShowModal(true);
    };

    const handleEditClick = (note) => {
        setCurrentNote(note);
        setModalType("edit");
        setShowModal(true);
    };

    // Function to close the create/edit modal
    const handleCloseEditModal = () => {
        setShowModal(false);
        setModalType("");
        setCurrentNote(null);
    };

    // Function to open the delete confirmation modal
    const handleDeleteClick = (note) => {
        setSelectedNote(note);
        setShowDeleteModal(true);
    };

    // Function to close the delete confirmation modal
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedNote(null);
    };

    const handleConfirmDelete = () => {
        // Add delete logic here
        console.log("Deleting:", selectedNote);
        handleCloseDeleteModal();
    };

    return (
        <div className="container-fluid pt-3 mt-3 financial-management">
            <div className="d-flex justify-content-between align-items-center mb-3 text-dark">
                <h2 style={{ fontSize: "20px" }}>Other Income</h2>
                <button className="btn btn-primary create-note-btn" onClick={handleCreateClick}>Create Other Income</button>
            </div>
            <div className="row">
                {notes.map((note, index) => (
                    <NoteCard
                        key={index}
                        note={note}
                        isOpen={dropdownIndex === index}
                        onToggleDropdown={() => toggleDropdown(index)}
                        onEditClick={handleEditClick}
                        onDeleteClick={() => handleDeleteClick(note)}
                    />
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {modalType === "create" ? "Create Other Income" : `Edit ${currentNote.title}`}
                                </h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseEditModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    {modalType === "create" && (
                                        <>
                                            <div className="form-group mb-1">
                                                <label>Title*</label>
                                                <input type="text" className="form-control" placeholder="Enter title" />
                                            </div>
                                            <div className="form-row d-flex">
                                                <div className="form-group col-5 mb-1 me-4">
                                                    <label>Date*</label>
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <div className="form-group col-5 mb-1">
                                                    <label>Due Date*</label>
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group mb-1">
                                                <label>Description*</label>
                                                <textarea className="form-control" rows="3" placeholder="Enter description"></textarea>
                                            </div>
                                            <div className="form-group mb-1">
                                                <label>Amount*</label>
                                                <input type="text" className="form-control" placeholder="Enter amount" />
                                            </div>
                                        </>
                                    )}
                                    {modalType === "edit" && currentNote && (
                                        <>
                                            <div className="form-group mb-1">
                                                <label>Amount*</label>
                                                <input type="text" className="form-control" placeholder="₹ 1,500" value={currentNote.amount || ''} />
                                            </div>
                                            <div className="form-row d-flex">
                                                <div className="form-group col-5 mb-1 me-4">
                                                    <label>Date*</label>
                                                    <input type="date" className="form-control" defaultValue={currentNote.Date} />
                                                </div>
                                                <div className="form-group col-5 mb-1">
                                                    <label>Due Date*</label>
                                                    <input type="date" className="form-control" defaultValue="10/07/2024" />
                                                </div>
                                            </div>
                                            <div className="form-group mb-1">
                                                <label>Description*</label>
                                                <textarea className="form-control" rows="3" placeholder="Enter description" defaultValue={currentNote.description}></textarea>
                                            </div>
                                        </>
                                    )}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseEditModal} style={{ width: "48%" }}>Cancel</button>
                                <button type="button" className="btn btn-primary" style={{ width: "48%" }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <h5 className="modal-title mb-3">Delete {selectedNote?.title}?</h5>
                                <p>Are you sure you want to delete this?</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary me-2" onClick={handleCloseDeleteModal} style={{ width: "48%" }}>Cancel</button>
                                    <button type="button" className="btn btn-danger" onClick={handleConfirmDelete} style={{ width: "48%" }}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};



export default FinancialManagementIncome;
