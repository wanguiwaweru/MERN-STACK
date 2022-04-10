import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Link } from 'react-router-dom'


export default function CustomerList() {
    const [customerList, showCustomerList] = useState([]);
    const deleteCustomer = (id) => {
        axios.delete(`http://localhost:5000/customers/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/customers").then((allCustomers) => {
            showCustomerList(allCustomers.data);
        });
    }, []);

    return (
        <>
            <h1 style={{ margin:"20px 0 20px 50px" }}>All Customers</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" fontWeight="bold">
                                Name
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                Email
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                Phone Number
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                Location
                            </TableCell>
                            <TableCell align="center" fontWeight="bold">
                                Subscription Package
                            </TableCell>
                            <TableCell align="center" fontWeight="bold" colSpan={2}>
                                Action
                            </TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customerList.map((customer, key) => (
                            <TableRow key={customer.key}>
                                <TableCell align="center" component="th" scope="row">{customer.name}</TableCell>
                                <TableCell align="center">{customer.email}</TableCell>
                                <TableCell align="center">{customer.phoneNumber}</TableCell>
                                <TableCell align="center">{customer.location}</TableCell>
                                <TableCell align="center">{customer.subscribedToPackage}</TableCell>
                                <TableCell align="center" style={{ color: "blue", cursor: "pointer" }} component={Link} to={`/edit/${customer._id}`} > Edit</TableCell>
                                <TableCell align="center" style={{ color: "blue", cursor: "pointer" }} onClick={() => deleteCustomer(customer._id)} > Delete</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}