import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
const NavBar = () => {
    const classes = useStyles();
    const login = () => {

    }
    return (
        <AppBar className={classes.appBar} position="static" style={{backgroundColor: "#f57e42"}}>
            <Toolbar>
                <Typography className={classes.title} variant="h6">CEN3031</Typography>
                <Button className={classes.button}  href="/projects">Projects</Button>
                <Button className={classes.button}  href="/teampairing">Team Pairing</Button>
                <Button className={classes.button}  href="/resources">Resources</Button>
                <Button align="right" className={classes.loginButton} href="/teampairing" onClick={login}>Login</Button>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
