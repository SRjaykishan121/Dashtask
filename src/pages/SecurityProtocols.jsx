import React, { useState } from 'react'
import './SecurityProtocols.css'

function RequestTracking() {

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" >
            <div className="border rounded complaint-list p-3 mt-3 mb-3 bg-white"style={{ height: '600px' }}>
              <div className="d-flex justify-content-between mb-3 text-dark">
                <h2 style={{ fontSize: "20px" }}>Security Protocols</h2>
              </div>
              <div className="table-responsive mt-2">
                <table className="table rounded-table1 ">
                  <thead >
                    <tr>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "16px" }}>Title</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "16px" }}>Description</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "16px" }}> Date</th>
                      <th style={{ backgroundColor: "#a3b4ec", fontSize: "16px" }}>Time</th>
                    </tr>
                  </thead>
                   

                  <tbody style={{fontSize:"16PX"}}>
                    <tr>
                      <td className="complainer ">
                      Cameron Williamson
                      </td>
                      <td>A visual representation your spending categories.</td>
                      <td>11/02/2024</td>
                      <td>2:45 PM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Darrell Steward
                      </td>
                      <td>Securing critica government systems.</td>
                      <td>12/02/2024</td>
                      <td>3:00 PM</td> 
                    </tr>
                    <tr>
                      <td className="complainer">
                      Courtney Henry
                      </td>
                      <td>Implementing surveillan public spaces.</td>
                      <td>13/02/2024</td>
                      <td>4:30 AM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Kathryn Murphy
                      </td>
                      <td>Tailor the dashboard to your unique financial.</td>
                      <td>14/02/2024</td>
                      <td>6:45AM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Kathryn Murphy
                      </td>
                      <td> Expenses will becomea way that makes sense.</td>
                      <td>15/02/2024</td>
                      <td>2:45 PM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Arlene McCoy
                      </td>
                      <td>Helping you identify where your money  going</td>
                      <td>16/02/2024</td>
                      <td>5:45 PM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Eleanor Pena
                      </td>
                      <td>Simply navigate through the different sections.</td>
                      <td>17/02/2024</td>
                      <td>4:45 AM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Brooklyn Simmons
                      </td>
                      <td> Expenses will becomea way that makes sense.</td>
                      <td>18/02/2024</td>
                      <td>3:45 PM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Wade Warren
                      </td>
                      <td>Implementing surveillan public spaces.</td>
                      <td>19/02/2024</td>
                      <td>9:45 AM</td>
                    </tr>
                    <tr className='aling-center'>
                      <td className="complainer">
                      Jane Cooper
                      </td>
                      <td> Expenses will becomea way that makes sense.</td>
                      <td>20/02/2024</td>
                      <td>3:45 PM</td>
                    </tr>
                    <tr>
                      <td className="complainer ">
                      Cameron Williamson
                      </td>
                      <td>A visual representation your spending categories.</td>
                      <td>11/02/2024</td>
                      <td>2:45 PM</td>
                    </tr>
                    <tr>
                      <td className="complainer">
                      Darrell Steward
                      </td>
                      <td>Securing critica government systems.</td>
                      <td>12/02/2024</td>
                      <td>3:00 PM</td> 
                    </tr>
                    <tr>
                      <td className="complainer">
                      Courtney Henry
                      </td>
                      <td>Implementing surveillan public spaces.</td>
                      <td>13/02/2024</td>
                      <td>4:30 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestTracking
