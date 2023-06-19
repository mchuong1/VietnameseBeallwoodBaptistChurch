import { AppBar, Toolbar } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <AppBar classes={{ root: styles.appBar }}>
      <Toolbar>
        <div>Vietnamese Beallwood Baptist Church</div>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
}

export default NavBar;