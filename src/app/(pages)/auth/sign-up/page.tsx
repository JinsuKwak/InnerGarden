"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "@/app/colors";
import { AlertColor } from "@mui/material/Alert";

const INNERGARDEN_API = process.env.NEXT_PUBLIC_INNERGARDEN_API;
//const INNERGARDEN_API = "http://localhost:7071";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://InnerGardenEdu.com/">
        Inner Garden Education
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary_300,
    },
    secondary: {
      main: colors.primary_300,
    },
  },
});

export default function SignUp() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("success");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    try {
      const response = await fetch(INNERGARDEN_API+`/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: data.get("email"),
          userPassword: data.get("password"),
          userFirstName: data.get("firstName"),
          userLastName: data.get("lastName"),
        }),
      });
  
      if (response.ok) {

        const result = await response.json();
        setSnackbarMessage("Sign up successful!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
  
        setTimeout(() => {
          window.location.href = "/auth/sign-in";
        }, 2000);
      } else {
 
        const errorData = await response.json();
  
        if (response.status === 409) {
          setSnackbarMessage(errorData.detail || "User already exists. Please use a different email.");
        } else if (response.status === 500) {
          setSnackbarMessage(errorData.detail || "Internal server error. Please try again later.");
        } else {
          setSnackbarMessage(errorData.detail || "Sign up failed. Please try again.");
        }
  
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("An unexpected error occurred. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            my: 8,
            mx: 2,
            marginTop: 16,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.light", 
                  },
                }}
              >
                Sign Up
              </Button>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
