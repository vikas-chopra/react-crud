import { FormControl, InputLabel, Input, FormGroup, Button, Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { addUser } from '../Service/api';
import {useNavigate} from 'react-router-dom'
const current = new Date();
const initialValue = {
    name: '',
    email: '',
    phone: '',
    date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
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
const AddUsers = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [user, setUser] = useState(initialValue);
    const {name, email , phone} = user; 
    const onChangeValue = (e) => {
        // console.log("NAME---", e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        // console.log('seeuser',user);
    }
    const addUserDetails = async ()=>{
       await addUser(user);
       navigate('/all-users');
    }
    return (
        <div className="container">
            <FormGroup className={classes.container}>
                <Typography variant='h4'>Add Users</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onChangeValue(e)} name='name'/>
            </FormControl>
            <FormControl>
                <InputLabel>Email address</InputLabel>
                <Input onChange={(e) => onChangeValue(e)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onChangeValue(e)} name='phone'/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Save</Button>
            </FormGroup>
        </div>
    )
}
export default AddUsers;