
import { useState } from 'react';
import './Complaint.css';

function Complaint() {
    const [activeTab, setActiveTab] = useState('Complaint');
    

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    

    return (
        <div className="container-fluid p-4" style={{ backgroundColor: '#F4F6F8' }}>
           
            {/* Tabs Section */}
            <div className="container mt-3">
                <ul className="nav nav-tabs border-0">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'Complaint' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Complaint')}
                            style={{
                                background: activeTab === 'Complaint' ? 'linear-gradient(90deg, #FF5722, #FF9800)' : 'white',
                                color: activeTab === 'Complaint' ? 'white' : 'black',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                border: 'none',
                                padding: '10px 20px'
                            }}
                        >
                            Complaint Submission
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'Request' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Request')}
                            style={{
                                background: activeTab === 'Request' ? 'linear-gradient(90deg, #FF5722, #FF9800)' : 'white',
                                color: activeTab === 'Request' ? 'white' : 'black',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                border: 'none',
                                padding: '10px 20px'
                            }}
                        >
                            Request Submission    
                       </button>
                    </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content border border-top-0 p-3 bg-white rounded-bottom">
                    {activeTab === 'Complaint' && <ComplaintSubmission />}
                    {activeTab === 'Request' && <RequestSubmission />}
                </div>
            </div>
        </div>
    );
}

const ComplaintSubmission = () => {
    const notes = [
        {
            title: "Unethical Behavior",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
        {
            title: "Preventive Measures",
            description: "Expenses will way sense for you.",
            Date: "01/07/2024",
        },
        {
            title: "Unethical Behavior",
            description: "Providing information deliberately.",
            Date: "01/07/2024",
        },
        {
            title: "Preventive Measures",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
        {
            title: "Unethical Behavior",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
        {
            title: "Preventive Measures",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
    ];

    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    const handleShowCreateModal = () => setShowCreateModal(true);
    const handleCloseCreateModal = () => setShowCreateModal(false);

    const handleDeleteClick = (note) => {
        setSelectedNote(note);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedNote(null);
    };

    const handleConfirmDelete = () => {
        console.log("Deleting:", selectedNote);
        handleCloseDeleteModal();
    };

    return (
        <div className="container-fluid pt-3 mt-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 style={{ fontSize: "20px" }}>Complaint</h2>
                <button className="btn btn-primary" onClick={handleShowCreateModal}>
                    Create Complaint
                </button>
            </div>
            <div className="row">
                {notes.map((note, index) => (
                    <NoteCard
                        key={index}
                        note={note}
                        isOpen={dropdownIndex === index}
                        onToggleDropdown={() => toggleDropdown(index)}
                        onDeleteClick={() => handleDeleteClick(note)}
                    />
                ))}
            </div>
             {/* Create Complaint Modal */}
             {showCreateModal && (
              <>
                <div className="modal-backdrop show"></div>
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ width: "400px" }}>
                      <div className="modal-header">
                        <h5 className="modal-title">Create Complaint</h5>
                        <button type="button" className="btn-close" onClick={handleCloseCreateModal}></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-1">
                            <label htmlFor="complainerName" className="form-label">Complainer Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complainerName" defaultValue="Evelyn Harper" required />
                          </div>
                          <div className="mb-1">
                            <label htmlFor="complaintName" className="form-label">Complaint Name<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complaintName" defaultValue="Unethical Behavior" required />
                          </div>
                          <div className="mb-1">
                            <label htmlFor="description" className="form-label">Description<span className='text-danger'>*</span></label>
                            <textarea className="form-control" id="description" rows="3" defaultValue="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident." required></textarea>
                          </div>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="wing" className="form-label">Wing<span className='text-danger'>*</span></label>
                              <input type="text" className="form-control" id="wing" defaultValue="A" required />
                            </div>
                            <div className="col">
                              <label htmlFor="unit" className="form-label">Unit<span className='text-danger'>*</span></label>
                              <input type="text" className="form-control" id="unit" defaultValue="1001" required />
                            </div>
                          </div>
                          <div className="my-1">
                          <label className="form-label">Priority<span className='text-danger'>*</span></label>
                          <div className="d-flex gap-2d-flex justify-content-evenly">
                            <div className="col-4 form-check border p-2 me-1 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">High</label>
                            </div>
                            <div className="col-4 form-check  border p-2 me-1 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Medium</label>
                            </div>
                            <div className="col-4 form-check  border p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Low</label>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <label className="form-label">Status<span className='text-danger'>*</span></label>
                          <div className="d-flex gap-2d-flex justify-content-evenly">
                            <div className="col-4 form-check border me-1 p-2 rounded text-center ">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Open</label>
                            </div>
                            <div className="col-4 form-check  border me-1 p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Pending</label>
                            </div>
                            <div className="col-4 form-check  border p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Solve</label>
                            </div>
                          </div>
                        </div>
                        </form>
                      </div>
                      <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-secondary" style={{ width: "46%" }} onClick={handleCloseCreateModal}>Cancel</button>
                        <button type="button" className="btn-primary btn" style={{ width: "46%" }}>Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <h5 className="modal-title mb-3">
                                    Delete {selectedNote?.title}?
                                </h5>
                                <p>Are you sure you want to delete this?</p>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="button"
                                        className="btn btn-secondary me-2"
                                        onClick={handleCloseDeleteModal}
                                        style={{ width: "48%" }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={handleConfirmDelete}
                                        style={{ width: "48%" }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const NoteCard = ({ note, isOpen, onToggleDropdown, onDeleteClick }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-0 note-card bg-white">
                {/* Card Header */}
                <div
                    className="d-flex justify-content-between align-items-center p-2 rounded-top"
                    style={{ backgroundColor: "#5678e9", color: "#fff" }}
                >
                    <h5
                        className="card-title mb-0"
                        style={{ fontSize: "14px"}}
                    >
                        {note.title}
                    </h5>
                    <img
                        src="src/Images/menu.png"
                        alt="Menu"
                        style={{ width: "20px", height: "20px", cursor: "pointer" }}
                        onClick={onToggleDropdown}
                    />
                    {isOpen && (
                        <div
                            className="dropdown-menu show"
                            style={{
                                position: "absolute",
                                top: "40px",
                                right: "10px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <button
                                className="dropdown-item"
                                onClick={() => onDeleteClick(note)}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>

                {/* Card Body */}
                <div className="card-body">
                    {/* Request Date */}
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted" style={{ fontSize: "12px" }}>
                            Request Date
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                            }}
                        >
                            {note.Date}
                        </span>
                    </div>

                    {/* Status */}
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted" style={{ fontSize: "12px" }}>
                            Status
                        </span>
                        <span
                            className="badge bg-light text-primary"
                            style={{
                                fontSize: "12px",
                                padding: "5px 10px",
                                borderRadius: "20px",
                                fontWeight: "bold",
                            }} > Open
                        </span>
                    </div>

                    {/* Description */}
                    <div>
                        <h6 className="text-muted mb-1" style={{ fontSize: "12px" }}  >
                            Description
                        </h6>
                        <p className="text-normal mb-0" style={{ fontSize: "12px" }}>{note.description} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



const RequestSubmission = () => {
    const notes = [
        {
            title: "Unethical Behavior",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
        {
            title: "Preventive Measures",
            description: "Expenses will way sense for you.",
            Date: "01/07/2024",
        },
        {
            title: "Unethical Behavior",
            description: "Providing information deliberately.",
            Date: "01/07/2024",
        },
        {
            title: "Preventive Measures",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
        {
            title: "Unethical Behavior",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
        {
            title: "Preventive Measures",
            description: "Regular waste collection services.",
            Date: "01/07/2024",
        },
    ];

   
    const [dropdownIndex, setDropdownIndex] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownIndex(dropdownIndex === index ? null : index);
    };

    const handleShowCreateModal = () => setShowCreateModal(true);
    const handleCloseCreateModal = () => setShowCreateModal(false);

    const handleDeleteClick = (note) => {
        setSelectedNote(note);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedNote(null);
    };

    const handleConfirmDelete = () => {
        console.log("Deleting:", selectedNote);
        handleCloseDeleteModal();
    };
    return (
        <div className="container-fluid pt-3 mt-3 financial-management">
            <div className="d-flex justify-content-between align-items-center mb-3 text-dark">
                <h2 style={{ fontSize: "20px" }}>Request</h2>
                <button className="btn btn-primary "  onClick={handleShowCreateModal}>Create Request</button>
            </div>
            <div className="row">
                {notes.map((note, index) => (
                    <NoteCard1
                        key={index}
                        note={note}
                        isOpen={dropdownIndex === index}
                        onToggleDropdown={() => toggleDropdown(index)}
                    
                        onDeleteClick={() => handleDeleteClick(note)}
                    />
                ))}
            </div>
             {/* Create Request Modal */}
             {showCreateModal && (
              <>
                <div className="modal-backdrop show"></div>
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ width: "400px" }}>
                      <div className="modal-header">
                        <h5 className="modal-title">Create Request</h5>
                        <button type="button" className="btn-close" onClick={handleCloseCreateModal}></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-1">
                            <label htmlFor="complainerName" className="form-label">Requester Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complainerName" defaultValue="Evelyn Harper" required />
                          </div>
                          <div className="mb-1">
                            <label htmlFor="complaintName" className="form-label"> Request Name<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complaintName" defaultValue="Unethical Behavior" required />
                          </div>
                          <div className="mb-1">
                            <label htmlFor="description" className="form-label">Request Date<span className='text-danger'>*</span></label>
                            <input type="date" className="form-control" id="complaintName" defaultValue="" required />
                          </div>
                          <div className="row">
                            <div className="col">
                              <label htmlFor="wing" className="form-label">Wing<span className='text-danger'>*</span></label>
                              <input type="text" className="form-control" id="wing" defaultValue="A" required />
                            </div>
                            <div className="col">
                              <label htmlFor="unit" className="form-label">Unit<span className='text-danger'>*</span></label>
                              <input type="text" className="form-control" id="unit" defaultValue="1001" required />
                            </div>
                          </div>
                          <div className="my-1">
                          <label className="form-label">Priority<span className='text-danger'>*</span></label>
                          <div className="d-flex gap-2d-flex justify-content-evenly">
                            <div className="col-4 form-check border p-2 me-1 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">High</label>
                            </div>
                            <div className="col-4 form-check  border p-2 me-1 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Medium</label>
                            </div>
                            <div className="col-4 form-check  border p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Low</label>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <label className="form-label">Status<span className='text-danger'>*</span></label>
                          <div className="d-flex gap-2d-flex justify-content-evenly">
                            <div className="col-4 form-check border me-1 p-2 rounded text-center ">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Open</label>
                            </div>
                            <div className="col-4 form-check  border me-1 p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Pending</label>
                            </div>
                            <div className="col-4 form-check  border p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Solve</label>
                            </div>
                          </div>
                        </div>
                        </form>
                      </div>
                      <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-secondary" style={{ width: "46%" }} onClick={handleCloseCreateModal}>Cancel</button>
                        <button type="button" className="btn-primary btn" style={{ width: "46%" }}>Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
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

const NoteCard1 = ({ note, isOpen, onToggleDropdown, onDeleteClick }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-0 note-card bg-white">
                {/* Card Header */}
                <div
                    className="d-flex justify-content-between align-items-center p-2 rounded-top"
                    style={{ backgroundColor: "#5678e9", color: "#fff" }}
                >
                    <h5
                        className="card-title mb-0"
                        style={{ fontSize: "14px"}}
                    >
                        {note.title}
                    </h5>
                    <img
                        src="src/Images/menu.png"
                        alt="Menu"
                        style={{ width: "20px", height: "20px", cursor: "pointer" }}
                        onClick={onToggleDropdown}
                    />
                    {isOpen && (
                        <div
                            className="dropdown-menu show"
                            style={{
                                position: "absolute",
                                top: "40px",
                                right: "10px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <button
                                className="dropdown-item"
                                onClick={() => onDeleteClick(note)}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>

                {/* Card Body */}
                <div className="card-body">
                    {/* Request Date */}
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted" style={{ fontSize: "12px" }}>
                            Request Date
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                            }}
                        >
                            {note.Date}
                        </span>
                    </div>

                    {/* Status */}
                    <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted" style={{ fontSize: "12px" }}>
                            Status
                        </span>
                        <span
                            className="badge bg-light text-primary"
                            style={{
                                fontSize: "12px",
                                padding: "5px 10px",
                                borderRadius: "20px",
                                fontWeight: "bold",
                            }} > Open
                        </span>
                    </div>

                    {/* Description */}
                    <div>
                        <h6 className="text-muted mb-1" style={{ fontSize: "12px" }}  >
                            Description
                        </h6>
                        <p className="text-normal mb-0" style={{ fontSize: "12px" }}>{note.description} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Complaint;
