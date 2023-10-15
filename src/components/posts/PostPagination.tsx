"use client";
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { colors } from "@/app/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface PostPaginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary_300,
    },
  },
});

const PostPagination = ({ setCurrentPage, currentPage, totalPages }: PostPaginationProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="flex flex-col items-center justify-center min-h-[4rem]">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            color={"primary"}
            boundaryCount={3}
          />
        </Stack>
      </div>
    </ThemeProvider>
  );
};

export default PostPagination;
