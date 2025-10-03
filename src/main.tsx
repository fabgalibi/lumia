import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomeScreen } from "@/pages/home-screen";
import { LoginScreen } from "@/pages/login-screen";
import { WelcomeScreen } from "@/pages/welcome-screen";
import { ProfileSetupScreen } from "@/pages/profile-setup-screen";
import { PreparationStepScreen } from "@/pages/preparation-step-screen";
import { AvailabilityStepScreen } from "@/pages/availability-step-screen";
import { TrajectoryStepScreen } from "@/pages/trajectory-step-screen";
import KnowledgeStepScreen from "@/pages/knowledge-step-screen";
import { FinalStepScreen } from "@/pages/final-step-screen";
import { ConclusionScreen } from "@/pages/conclusion-screen";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ProfileSetupProvider } from "@/contexts/profile-setup-context";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/welcome" element={<WelcomeScreen />} />
                        
                        {/* Authenticated Routes */}
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/conclusion" element={<ConclusionScreen />} />
                        
                        {/* Nested routes dentro de HomeScreen */}
                        <Route path="/account-settings/*" element={<HomeScreen />} />
                        <Route path="/ranking" element={<HomeScreen />} />
                        <Route path="/tutorials" element={<HomeScreen />} />
                        <Route path="/messages" element={<HomeScreen />} />
                        
                        {/* Profile Setup Flow - Hierarchical Structure */}
                        <Route path="/profile-setup/*" element={
                            <ProfileSetupProvider>
                                <Routes>
                                    <Route index element={<ProfileSetupScreen />} />
                                    <Route path="preparation" element={<PreparationStepScreen />} />
                                    <Route path="availability" element={<AvailabilityStepScreen />} />
                                    <Route path="trajectory" element={<TrajectoryStepScreen />} />
                                    <Route path="knowledge" element={<KnowledgeStepScreen />} />
                                    <Route path="final" element={<FinalStepScreen />} />
                                </Routes>
                            </ProfileSetupProvider>
                        } />
                        
                        {/* Fallback */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
