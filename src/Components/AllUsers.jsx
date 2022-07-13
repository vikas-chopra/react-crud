import { Button, Table, TableBody, TableCell, TableHead, TableRow, makeStyles } from '@material-ui/core';
import { useState } from "react";
import { useEffect } from "react";
import { deleteUserApi, getUsers } from "../Service/api";
import './AllUsers.css';
import { useNavigate, Link   } from "react-router-dom";

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllUsers = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const classes = useStyles();
    useEffect(() => {
        getAllUsers();
    },[])

    const getAllUsers = async () => {
        const response = await getUsers();
        // console.log('USERSALL--->>', response)
        setUser(response.data);
        // console.log('DATA', user)
    }
    const deleteUser = async (id) => {
        const response = await deleteUserApi(id)
        getAllUsers();
    }
    return (
        <Table className={classes.table} >
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.date}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" to={`/edit-user/${user.id}`} style={{marginRight: '12px'}} component={Link}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={()=> deleteUser(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default AllUsers;