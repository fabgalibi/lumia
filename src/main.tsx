import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomeScreen } from "@/pages/home-screen";
import { LoginScreen } from "@/pages/login-screen";
import { AdminLoginScreen } from "@/pages/admin-login-screen";
import { AdminDashboardScreen } from "@/pages/admin-dashboard-screen";
import { AdminDisciplinesScreen } from "@/pages/admin-disciplines-screen";
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
import { TimerProvider } from "@/contexts/timer-context";
import { ProtectedRoute, AdminProtectedRoute } from "@/components/auth";
import { TokenExpiredProvider } from "@/components/providers/token-expired-provider";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <TimerProvider>
                <BrowserRouter>
                    <TokenExpiredProvider>
                    <RouteProvider>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/admin/login" element={<AdminLoginScreen />} />
                        <Route path="/admin/dashboard" element={<AdminProtectedRoute><AdminDashboardScreen /></AdminProtectedRoute>} />
                        <Route path="/admin/students" element={<AdminProtectedRoute><AdminDashboardScreen /></AdminProtectedRoute>} />
                        <Route path="/admin/disciplines" element={<AdminProtectedRoute><AdminDisciplinesScreen /></AdminProtectedRoute>} />
                        <Route path="/admin/plans" element={<AdminProtectedRoute><AdminDashboardScreen /></AdminProtectedRoute>} />
                        <Route path="/admin/sprints" element={<AdminProtectedRoute><AdminDashboardScreen /></AdminProtectedRoute>} />
                        <Route path="/admin/permissions" element={<AdminProtectedRoute><AdminDashboardScreen /></AdminProtectedRoute>} />
                        <Route path="/admin/settings" element={<AdminProtectedRoute><AdminDashboardScreen /></AdminProtectedRoute>} />
                        <Route path="/admin/settings/*" element={<AdminProtectedRoute><AdminDashboardScreen /></AdminProtectedRoute>} />
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
                        <Route path="/sprints" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        <Route path="/sprints/proximas" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        <Route path="/sprints/:sprintId" element={<ProtectedRoute><HomeScreen /></ProtectedRoute>} />
                        
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
                    </TokenExpiredProvider>
            </BrowserRouter>
                </TimerProvider>
            </AuthProvider>
        </ThemeProvider>
    </StrictMode>,
);
