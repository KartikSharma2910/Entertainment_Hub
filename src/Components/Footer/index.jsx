import styles from "./styles";
import { Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>© 2022 Entertainment Hub </Box>
      <Box sx={styles.icons}>
        <FacebookOutlinedIcon sx={styles.facebookIcon} className="facebook" />
        <YouTubeIcon sx={styles.youtubeIcon} className="icon" />
        <InstagramIcon sx={styles.instagramIcon} className="icon" />
      </Box>
    </Box>
  );
};

export default Footer;
