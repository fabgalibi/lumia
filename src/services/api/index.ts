/**
 * API Services - Exportação centralizada de todos os serviços
 */

export { apiClient } from './api-client';
export type { ApiResponse, ApiError } from './api-client';

export { authService } from './auth.service';
export type { LoginRequest, LoginResponse, User } from './auth.service';

export { adminMetricsService } from './admin-metrics.service';
export type { AdminMetricsResponse } from './admin-metrics.service';

export { adminStudentsService } from './admin-students.service';
export type { AdminStudentsResponse, Aluno, Paginacao, AdminStudentsParams } from './admin-students.service';

export { studentService } from './student.service';
export type { StudentData, StudentCompleteData, PlanoMestre, GeneratedPassword } from './student.service';

export { adminDisciplinesService } from './admin-disciplines.service';
export type { Disciplina, DisciplinasResponse } from './admin-disciplines.service';