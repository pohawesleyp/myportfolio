import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `0.3rem solid ${theme.palette.primary.contrastText}`,
    borderRadius: "0.9rem",
    padding: "1rem 1rem",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default StyledButton;
