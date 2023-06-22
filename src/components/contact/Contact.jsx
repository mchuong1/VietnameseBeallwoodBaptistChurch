import { Paper } from '@mui/material';
import { Facebook, Mail, Map, Phone } from '@mui/icons-material';
import styles from './Contact.module.scss';

function Contact() {

  const goToSocial = (url) => {
    window.open(url, '_blank').focus();
  }
  return (
    <div>
      <h1>Contact Us!</h1>
      <Paper classes={{ root: styles.container }}>
        <div>
          <h2>Vietnamese Beallwood Baptist Church</h2>
          <p>4650 Veterans Parkway, Columbus, Georgia 31904</p>
          <p>The small church beside the big church.</p>
          <Map onClick={() => goToSocial('http://maps.google.com/?q=4650+Veterans+Parkway,+Columbus,+Georgia+31904')}/>
          <Phone onClick={() => goToSocial('tel:678.977.2075')} />
          <Mail onClick={() => goToSocial('mailto:ajchuong@gmaili.com')} />
          <Facebook onClick={() => goToSocial('https://www.facebook.com/profile.php?id=100063651069319&mibextid=LQQJ4d')} />

          <h2>Hours of Operation</h2>
          <p>Sunday School: 9:00AM - 9:45AM</p>
          <p>Worship: 10:00AM - 11:00AM</p>
        </div>
      </Paper>
    </div>
  )
}

export default Contact;