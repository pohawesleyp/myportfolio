import { styled } from "@mui/material";
import type { ReactNode } from "react";
import React from "react";

interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonRoot = styled("button")(({ theme }) => ({
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
    backgroundColor: `${theme.palette.secondary.main}`,
    color: "black",
    transform: "scale(1.1)",
    borderRadius: "1rem",
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <>
      <ButtonRoot onClick={onClick} {...rest}>
        {children}
      </ButtonRoot>
    </>
  );
};

export default StyledButton;
