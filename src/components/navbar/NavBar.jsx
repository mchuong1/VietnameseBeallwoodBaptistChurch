import {
  AppBar, Toolbar, useMediaQuery, useTheme,
  IconButton,
  Menu,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import styles from './NavBar.module.scss';

function NavBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <AppBar classes={{ root: styles.appBar }} position='sticky'>
      <Toolbar>
        <div>Vietnamese Beallwood Baptist Church</div>
        {
          isDesktop
          ? (
            <div>
              <span onClick={() => handleNavigate('/')} aria-hidden='true'>Home</span>
            </div>
          ) : (
            <IconButton>
              <Menu style={{ color: 'black' }}/>
            </IconButton>
          )
        }
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
}

export default NavBar;