import React, { useState } from 'react'
import './ComplaintTracking.css'
import { FiX } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";
function RequestTracking() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleShowViewModal = () => setShowViewModal(true);
  const handleCloseViewModal = () => setShowViewModal(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" >
            <div className="border rounded complaint-list p-3 mt-3 mb-3 bg-white"style={{ height: '600px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3 text-dark">
                <h2 style={{ fontSize: "20px" }}>Create Complaint</h2>
                <button className="btn btn-primary create-note-btn" onClick={handleShowCreateModal} >Create Request</button>
              </div>
              <div className="table-responsive mt-2">
                <table className="table  rounded-table">
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Requester Name</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Request Name</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Description</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Request Date</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Unit Number</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Priority</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Complain Status</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody style={{fontSize:"13PX"}}>
                    <tr>
                      <td className="complainer d-flex align-items-center">
                        <img
                          src="src/Images/image.png"
                          alt="Complainer"
                          className="complainer-image mb-2  me-2"
                        />
                        Evelyn Harper
                      </td>
                      <td>Unethical Behavior</td>
                      <td>Providing false information or deliberately.</td>
                      <td>10/02/2024</td>
                      <td><span className="status open">A</span> 1001</td>
                      <td><span className="badge badge-medium">Medium</span></td>
                      <td><span className="status pending">Pending</span></td>
                      <td className="actions d-flex ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action" onClick={handleShowViewModal}>
                          <img src="src/Images/view.png" alt="View" />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        EstherHoward
                      </td>
                      <td>Preventive Measures</td>
                      <td>Regular waste collection services.</td>
                      <td>11/02/2024</td>
                      <td><span className="status open">B</span> 1002</td>
                      <td><span className="badge badge-low">Low</span></td>
                      <td><span className="status solve">solve</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        Jenny Wilson
                      </td>
                      <td>Unethical Behavior</td>
                      <td>Providing false information or deliberately.</td>
                      <td>12/02/2024</td>
                      <td><span className="status open">C</span> 1003</td>
                      <td><span className="badge badge-high">High</span></td>
                      <td><span className="status open">Open</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        Guy Hawkins
                      </td>
                      <td>Preventive Measures</td>
                      <td>Regular waste collection services.</td>
                      <td>13/02/2024</td>
                      <td><span className="status open">D</span> 1004</td>
                      <td><span className="badge badge-medium">Medium</span></td>
                      <td><span className="status pending">Pending</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        Robert Fox
                      </td>
                      <td>Unethical Behavior</td>
                      <td>Providing false information or deliberately.</td>
                      <td>14/02/2024</td>
                      <td><span className="status open">E</span> 1005</td>
                      <td><span className="badge badge-low">Low</span></td>
                      <td><span className="status solve">Solve</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        Jacob Jones
                      </td>
                      <td>Preventive Measures</td>
                      <td>Regular waste collection services.</td>
                      <td>15/02/2024</td>
                      <td><span className="status open">F</span> 1006</td>
                      <td><span className="badge badge-high">High</span></td>
                      <td><span className="status open">Open</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        Cody Fisher
                      </td>
                      <td>Unethical Behavior</td>
                      <td>Event hosting and recreational activities.</td>
                      <td>16/02/2024</td>
                      <td><span className="status open">G</span> 1007</td>
                      <td><span className="badge badge-medium">Medium</span></td>
                      <td><span className="status pending">Pending</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        BessieCooper
                      </td>
                      <td>PreventiveMeasures</td>
                      <td>Regular waste collection services.</td>
                      <td>17/02/2024</td>
                      <td><span className="status open">H</span> 1009</td>
                      <td><span className="badge badge-low">Low</span></td>
                      <td><span className="status solve">Solve</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        Albert Flores
                      </td>
                      <td>Unethical Behavior</td>
                      <td>Providing false information or deliberately.</td>
                      <td>18/02/2024</td>
                      <td><span className="status open">I</span> 2001</td>
                      <td><span className="badge badge-high">High</span></td>
                      <td><span className="status open">Open</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="complainer">
                        <img src="src/Images/image.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                        Floyd Miles
                      </td>
                      <td>PreventiveMeasures</td>
                      <td>preferences by categorizing organizing you</td>
                      <td>19/02/2024</td>
                      <td><span className="status open">J</span> 2002</td>
                      <td><span className="badge badge-medium">Medium</span></td>
                      <td><span className="status pending">Pending</span></td>
                      <td className="actions ">
                        <button className="btn-action mb-2">
                          <img
                            className="edit-Complaint"
                            src="src/Images/edit.png"
                            alt="Edit"
                            onClick={handleShowEditModal}
                          />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                        </button>
                        <button className="btn-action">
                          <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Create Complaint Modal */}
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
                            <label htmlFor="complainerName" className="form-label">Requester Name<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complainerName" defaultValue="Evelyn Harper" required />
                          </div>
                          <div className="mb-1">
                            <label htmlFor="complaintName" className="form-label">Request Name<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complaintName" defaultValue="Unethical Behavior" required />
                          </div>
                          <div className="mb-1">
                          <label className="form-label"> Request Date<span className='text-danger'>*</span></label>
                                    <div className="input-group">
                                        <input type="date" className="form-control" />
                                        <span className="input-group-text">
                                            <FaCalendarAlt />
                                        </span>
                                    </div>
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

            {/* View Complaint Modal */}
            {showViewModal && (
              <>
                <div className="modal-backdrop show"></div>
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <div className="modal-dialog">
                    <div className="modal-content" style={{ width: '400px',marginTop:"200px" }}>
                      <div className="modal-header">
                        <h5 className="modal-title">View Request</h5>
                        <button type="button" className="btn-close" onClick={handleCloseViewModal} > <FiX /></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src="src/Images/image.png"
                            alt="Complainer"
                            className="rounded-circle me-3"
                            style={{ width: '50px', height: '50px' }}
                          />
                          <div>
                            <h6 className="mb-0">Evelyn Harper</h6>
                            <small className="text-muted">Aug 5, 2024</small>
                          </div>
                        </div>
                        <div className="mb-2">
                          <strong>Request Name</strong>
                          <p>Unethical Behavior</p>
                        </div>
                        <div className="mb-3">
                          <strong>Description</strong>
                          <p>
                            Offering, giving, receiving, or soliciting of value to influence the actions of an individual.
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="badge bg-light text-dark px-3 py-1">Wing A</span>
                          <span className="badge bg-light text-dark px-3 py-1">Unit 1002</span>
                          <span className="badge bg-primary text-white px-3 py-1">Medium</span>
                          <span className="badge bg-info text-dark px-3 py-1">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Edit Complaint Modal */}
            {showEditModal && (
              <>
                <div className="modal-backdrop show"></div>
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{ width: "400px" }}>
                      <div className="modal-header">
                        <h5 className="modal-title">Edit Request</h5>
                        <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-1">
                            <label htmlFor="complainerName" className="form-label">Requester Name<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complainerName" defaultValue="Evelyn Harper" required />
                          </div>
                          <div className="mb-1">
                            <label htmlFor="complaintName" className="form-label"> Request Name<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="complaintName" defaultValue="Unethical Behavior" required />
                          </div>
                          <div className="mb-1">
                          <label className="form-label"> Request Date<span className='text-danger'>*</span></label>
                                    <div className="input-group">
                                        <input type="date" className="form-control" />
                                        <span className="input-group-text">
                                            <FaCalendarAlt />
                                        </span>
                                    </div>
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
                        <button type="button" className="btn btn-secondary" style={{ width: "46%" }} onClick={handleCloseEditModal}>Cancel</button>
                        <button type="button" className="btn-primary btn" style={{ width: "46%" }}>Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>           
            )}
            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
              <>
                <div className="modal-backdrop show"></div>
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <div className="modal-dialog" >
                    <div className="modal-content" style={{marginTop:"200px"}}>
                      <div className="modal-header">
                        <h5 className="modal-title">Delete Request?</h5>
                        <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
                      </div>
                      <div className="modal-body">
                        <p>Are you sure you want to delate this Request?</p>
                      </div>
                      <div className="modal-footer d-flex justify-content-between">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          style={{ width: "45%" }}
                          onClick={handleCloseDeleteModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{ width: "45%" }}
                          onClick={() => {
                            // Add your delete logic here
                            handleCloseDeleteModal();
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestTracking
