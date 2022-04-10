import React, { useEffect,useState } from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function EditCustomer(props) {
    const paperStyle = { padding: '30px 20px', height: '500px', width: '500px', margin: "20px auto" }
    const headerStyle = { margin: 0, fontWeight: "800" }
    const marginTop = { marginTop: 15 }
    const [customer, showCustomer] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/customers/${id}`).then((customer) => {
            showCustomer(customer.data);

        })
    })

    const updateCustomer = () => {
        axios.patch((`http://localhost:5000/customers/${id}`), customer).then((customer) => {
            showCustomer(customer.data)
            window.alert('Successfully Edited')
            //window.location.reload(false);
        })
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Update Customer Details</h2>
                    <Typography variant='caption' gutterBottom>Edit the details below.</Typography>
                </Grid>
                <form>
                    <TextField style={marginTop} id="name" value={customer.name} onChange={(e) => showCustomer({ ...customer, name: e.target.value })}
                        fullWidth label='' placeholder="Enter your name" />
                    <TextField style={marginTop} id="email" value={customer.email} onChange={(e) => showCustomer({ ...customer, email: e.target.value })}
                        fullWidth label='' placeholder="Enter your email" />
                    <TextField style={marginTop} id="phoneNumber" value={customer.phoneNumber} onChange={(e) => showCustomer({ ...customer, phoneNumber: e.target.value })}
                        fullWidth label='' placeholder="Enter your phone number" />
                    <TextField style={marginTop} id="location" value={customer.location} onChange={(e) => showCustomer({ ...customer, location: e.target.value })}
                        fullWidth label='' />
                    <TextField style={marginTop} id="location" value={customer.subscribedToPackage} onChange={(e) => showCustomer({ ...customer, subscribedToPackage: e.target.value })}
                        fullWidth label='' />
        
                    <Button type='submit' variant='contained' color='primary' style={marginTop} onClick={updateCustomer}>Update</Button>
                </form>
            </Paper>
        </Grid>
    )
}
