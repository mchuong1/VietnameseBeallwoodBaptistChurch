import {
  AppBar, Toolbar, useMediaQuery, useTheme,
  IconButton,
  Menu,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
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

  const handleClick = () => {
    console.log('works');
  }

  return (
    <AppBar classes={{ root: styles.appBar }} position='sticky'>
      <Toolbar>
        {
          isDesktop
          ? (
            <div>
              <div>Vietnamese Beallwood Baptist Church</div>
              <span onClick={() => handleNavigate('/')} aria-hidden='true'>Home</span>
            </div>
          ) : (
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleClick}
            >
              <MenuIcon style={{ color: 'white' }}/>
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