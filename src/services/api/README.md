# API Services

Estrutura de serviços para integração com o backend da Lumia.

## 📁 Estrutura

```
src/services/api/
├── api-client.ts      # Cliente HTTP base com interceptors
├── auth.service.ts    # Serviço de autenticação
└── index.ts          # Exportações centralizadas
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://dev.lumia-app.com.br
```

## 🚀 Uso

### 1. API Client

Cliente HTTP genérico para todas as requisições:

```typescript
import { apiClient } from '@/services/api';

// GET
const response = await apiClient.get('/endpoint');

// POST
const response = await apiClient.post('/endpoint', { data });

// PUT
const response = await apiClient.put('/endpoint', { data });

// DELETE
const response = await apiClient.delete('/endpoint');
```

### 2. Auth Service

Serviço específico de autenticação:

```typescript
import { authService } from '@/services/api';

// Login
await authService.login({ email, password });

// Logout
authService.logout();

// Verificar autenticação
const isAuth = authService.isAuthenticated();

// Obter token
const token = authService.getToken();

// Obter usuário
const user = authService.getUser();
```

### 3. Auth Context

Hook React para gerenciar estado de autenticação:

```typescript
import { useAuth } from '@/contexts/auth-context';

function MyComponent() {
  const { user, isAuthenticated, isLoading, login, logout, error } = useAuth();

  const handleLogin = async () => {
    try {
      await login({ email: 'user@example.com', password: '123456' });
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Bem-vindo, {user?.name}!</p>
      ) : (
        <button onClick={handleLogin} disabled={isLoading}>
          {isLoading ? 'Entrando...' : 'Login'}
        </button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
```

## 🔐 Autenticação

### Token Storage

O token é armazenado no `localStorage`:

```typescript
localStorage.setItem('auth_token', token);
```

### Headers Automáticos

O `apiClient` adiciona automaticamente o header `Authorization`:

```typescript
Authorization: Bearer {token}
```

### Interceptors

- **Request**: Adiciona token automaticamente
- **Response**: Trata erros HTTP
- **Error**: Captura erros de rede

## 📝 Tipos

### LoginRequest

```typescript
interface LoginRequest {
  email: string;
  password: string;
}
```

### LoginResponse

```typescript
interface LoginResponse {
  access_token: string;
  token_type?: string;
  expires_in?: number;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}
```

### ApiError

```typescript
interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}
```

## 🎯 Próximos Serviços

Para adicionar novos serviços, siga o padrão:

```typescript
// src/services/api/users.service.ts
import { apiClient } from './api-client';

class UsersService {
  async getProfile() {
    return apiClient.get('/users/profile');
  }

  async updateProfile(data: any) {
    return apiClient.put('/users/profile', data);
  }
}

export const usersService = new UsersService();
```

Depois exporte em `index.ts`:

```typescript
export { usersService } from './users.service';
```
