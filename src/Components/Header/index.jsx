import { Box } from "@mui/material";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const navigator = useNavigate();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading} onClick={() => navigator("/")}>
        <span className="logo">E</span>ntertainment{" "}
        <span className="logo">H</span>ub
      </Box>
      <Box sx={styles.rightHeading}>
        Hey Kartik!
        <AccountCircleIcon sx={styles.icon} />
      </Box>
    </Box>
  );
};

export default Header;
