import { FormControl, InputLabel, Input, FormGroup, Button, Typography, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser, editUser, getUsers } from '../Service/api';

const initialValue = {
    name: '',
    email: '',
    phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})
const EditUser = () => {
    const [user, setUser] = useState(initialValue)
    const {name, email, phone} = user;
    const { id } = useParams();
    const navigate = useNavigate();
    const classes = useStyles();
    useEffect(() => {
        loadUserdata()
    },[])
    const loadUserdata = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }
    const onChangeValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const editUserDetails = async () => {
        debugger
        await editUser(id, user);
        navigate('/all-users');
    }
    return (
        <div className="container">
            <FormGroup className={classes.container}>
                <Typography variant='h4'>Edit Users</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onChangeValue(e)} name='name' value={name}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onChangeValue(e)} name='email' value={email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onChangeValue(e)} name='phone' value={phone}/>
                </FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit</Button>
            </FormGroup>
        </div>
    )
}
export default EditUser;