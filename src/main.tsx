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
import { AuthProvider } from "@/contexts/auth-context";
import { ProtectedRoute } from "@/components/auth";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <BrowserRouter>
                    <RouteProvider>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/welcome" element={<WelcomeScreen />} />
                        
                        {/* Authenticated Routes */}
                        <Route path="/home" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        <Route path="/conclusion" element={<ProtectedRoute><ConclusionScreen /></ProtectedRoute>} />
                        
                        {/* Nested routes dentro de HomeScreen */}
                        <Route path="/account-settings/*" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        <Route path="/ranking" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        <Route path="/tutorials" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        <Route path="/messages" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        <Route path="/mentorias" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        
                        {/* Profile Setup Flow - Hierarchical Structure */}
                        <Route path="/profile-setup/*" element={
                            <ProtectedRoute>
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
                            </ProtectedRoute>
                        } />
                        
                        {/* Fallback */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>,
);
