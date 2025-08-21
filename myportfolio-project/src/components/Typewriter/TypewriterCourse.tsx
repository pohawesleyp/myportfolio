import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import type { TypographyProps } from "@mui/material";
import React from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  variant?: TypographyProps["variant"];
  color?: string;
  fontWeight?: string;
}

const TypewriterCourse: React.FC<TypewriterProps> = ({
  text,
  delay = 100,
  variant = "body1",
  color = "text.primary",
  fontWeight = "",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrenteIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrenteIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, delay, text]);

  return (
    <Typography
      variant={variant}
      color={color}
      textAlign="center"
      fontWeight={fontWeight}
    >
      {currentText}
    </Typography>
  );
};

export default TypewriterCourse;
