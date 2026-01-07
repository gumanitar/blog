import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "../styles/navButton.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface NavButtonProps {
  to: string;
  label: string;
  arrow?: "left" | "right";
}

export default function NavButton({
  to,
  label,
  arrow = "right",
}: NavButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      className={styles.navButton}
      onClick={() => navigate(to)}
      startIcon={arrow === "left" ? <ArrowBackIcon /> : null}
      endIcon={arrow === "right" ? <ArrowForwardIcon /> : null}
    >
      {label}
    </Button>
  );
}
