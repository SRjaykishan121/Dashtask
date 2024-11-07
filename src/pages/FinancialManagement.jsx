import React, { useState } from 'react';
import './FinancialManagement.css';

const NoteCard = ({ note, isOpen, onToggleDropdown }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card note-card">
        <div className="card">
          <div
            className="d-flex justify-content-between align-items-center rounded-top p-2"
            style={{ backgroundColor: "#5678e9" }}
          >
            <h5 className="card-title" style={{ fontSize: "16px" }}>{note.title}</h5>

            {/* Dropdown trigger image */}
            <img
              src="src/Images/menu.png"
              role="button"
              tabIndex="0"
              alt="Menu"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={onToggleDropdown}
            />

            {/* Dropdown menu */}
            {isOpen && (
              <div className="dropdown-menu show" style={{ position: 'absolute', top: '40px', right: '10px' }}>
                <button className="dropdown-item">Edit</button>
              </div>
            )}
          </div>
          <div className="m-2">
            <h6 className="card-subtitle mb-1  text-muted fw-normal" style={{ fontSize: "14px" }}>Description</h6>
            <p className="card-text"  style={{ fontSize: "12px" }}>{note.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FinancialManagement = () => {
  const notes = [
    { title: 'Rent or Mortgage', description: 'A visual representation of your spending categories visual representation.' },
    { title: 'Housing Costs', description: 'A visual representation of your spending categories visual representation.' },
    { title: 'Property Taxes', description: 'A visual representation of your spending categories visual representation.' },
    { title: 'Maintenance Fees', description: 'A visual representation of your spending categories visual representation.' },
    { title: 'Rent or Transportation', description: 'A visual representation of your spending categories visual representation.' },
    { title: 'Breakdown', description: 'A visual representation of your spending categories visual representation.' },
    { title: 'Expense Tracker', description: 'A visual representation of your spending categories visual representation.' },
    { title: 'Personal Expenses', description: 'A visual representation of your spending categories visual representation.' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <div className="container-fluid   pt-3 mt-3 financial-management">
      <div className="d-flex justify-content-between align-items-center mb-3 text-dark">
        <h2 style={{fontSize:"20px"}}>Note</h2>
        <button className="btn btn-primary create-note-btn" onClick={handleShowModal}>Create Note</button>
      </div>
      <div className="row">
        {notes.map((note, index) => (
          <NoteCard 
            key={index}
            note={note}
            isOpen={dropdownIndex === index}
            onToggleDropdown={() => toggleDropdown(index)}
          />
        ))}
      </div>

      {/* Background Overlay */}
      {showModal && <div className="modal-backdrop"></div>}

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ width: "430px" }}>
              <div className="modal-header">
                <h5 className="modal-title">Add Note</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label className="form-label">Title<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter title" required />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Description<span className="text-danger">*</span></label>
                    <textarea className="form-control" placeholder="Enter description" rows="3" required></textarea>
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Date<span className="text-danger">*</span></label>
                    <input type="date" className="form-control" required />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" style={{ width: "48%" }} onClick={handleCloseModal}>Cancel</button>
                <button type="button" className="btn btn-primary save-btn" style={{ width: "48%" }}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialManagement;
