import { styled } from "@mui/material";
// import { color } from "@mui/system";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    gap: "1rem",
    borderRadius: "0.9rem",
    padding: "1rem 1rem",
    width: "100%",
    border: `0.3rem solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: "#35d8e3",
      color: "black",
      transform: "scale(1.1)",
      borderRadius: "1rem",
    },
  }));

  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default StyledButton;
