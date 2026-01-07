import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
