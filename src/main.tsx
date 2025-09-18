import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomeScreen } from "@/pages/home-screen";
import { LoginScreen } from "@/pages/login-screen";
import { WelcomeScreen } from "@/pages/welcome-screen";
import { ProfileSetupScreen } from "@/pages/profile-setup-screen";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                    <Routes>
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/welcome" element={<WelcomeScreen />} />
                        <Route path="/profile-setup" element={<ProfileSetupScreen />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
