"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar, Alert } from "@mui/material";
import { colors } from "@/app/colors";

const INNERGARDEN_API = process.env.NEXT_PUBLIC_INNERGARDEN_API;
//const INNERGARDEN_API = "http://localhost:7071";

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

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://InnerGardenEdu.com/">
        Inner Garden Education
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch(`${INNERGARDEN_API}/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: data.get("email"),
          userPassword: data.get("password"),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSnackbarMessage("Sign-in successful!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        localStorage.setItem("token", result.token);

        setTimeout(() => {
          window.location.href = "/"; 
        }, 2000);
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.detail || "Sign-in failed. Please check your credentials.");
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
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://cms.bbcearth.com/sites/default/files/factfiles/2024-04/Giraffe_BBC%20Earth%20Factfiles%205.jpg?imwidth=1920)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              marginTop: 16,
              marginBottom: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
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
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/auth/sign-up" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}