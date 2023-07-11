import { placeholder } from "@cloudinary/react";
import { churchLandingVideo } from "../../assets/photos";
import styles from './Landing.module.scss';
import { CLDVideo } from "../../components/cldvideo/CLDVideo";

function Landing () {
  return (
    <div id="landingpage">
      <div className={styles.videoContainer}>
        <CLDVideo
          cldVid={churchLandingVideo}
          muted
          // autoPlay
          preload
          loop
          plugins={[placeholder({ mode: 'blur' })]}
        />
      </div>
    </div>
  )
}

export default Landing;