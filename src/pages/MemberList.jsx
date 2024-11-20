import React from 'react'
import { FaUser } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import { MdPayment } from "react-icons/md";

function MemberList() {
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
            <div className="bg-white rounded bg-light  p-3 shadow-sm">
                <h6 className="mb-3" style={{fontSize:"20px"}}>Ganesh Chaturthi Participator Member List</h6>
                <div className="table-responsive mt-2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <table className="table rounded-table">
                        <thead className="bg-light">
                            <tr>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Unit Number</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Payment Date</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Tnant/Owner Status</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Phone Number</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Amount</th>
                                <th style={{ backgroundColor: "#a3b4ec", fontSize: "14px" }}>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <span className="status open" style={{ fontSize: "14px" }}>A</span>
                                        <span className="text-dark" style={{ fontSize: "14px" }}>{item.unitNumber}</span>
                                    </td>
                                    <td>{item.date}</td>
                                    <td>
                                        <span className={`badge1 ${item.status === 'Owner' ? 'Owner' : 'Tenant'}`} style={{ fontSize: "14px" }}>
                                            <FaUser className="mb-1" />
                                            {item.status}
                                        </span>
                                    </td>
                                    <td style={{ fontSize: "14px" }}>{item.phoneNumber}</td>
                                    <td className="text-success" style={{ fontSize: "14px" }}>{item.amount}</td>
                                    <td>
                                        <span className={`badge1 ${item.paymentMethod === 'Cash' ? 'Cash' : 'Online'}`} style={{ fontSize: "14px" }}>
                                            <MdPayment className="mb-1" />
                                            {item.paymentMethod}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default MemberList
