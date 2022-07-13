import { AppBar, Toolbar} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {NavLink} from 'react-router-dom'
import './NavBar.css'
const useStyle = makeStyles({
    header: {
        background: '#111111',
    },
    // tabs: {
    //     color: '#fffff',
    //     textDecoration: 'none',
    //     marginRight: '20'
    // }
})
const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position='static'>
            <Toolbar className={classes.header}>
                <NavLink to="/"component='h4' className="tabs"> My App </NavLink>
                <NavLink to="/all-users" component='h4' className="tabs"> All Users </NavLink>
                <NavLink to="/add-users" component='h4' className="tabs"> Add Users + </NavLink>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;