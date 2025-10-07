# Configuração de Ambientes

Este projeto suporta 3 ambientes: **Development**, **Homologation** e **Production**.

## 📁 Arquivos de Ambiente

Crie os seguintes arquivos na raiz do projeto:

### `.env.dev` (Development - Backend Local)
```env
VITE_API_URL=http://localhost:3000
```

### `.env.hml` (Homologação - Dev Server)
```env
VITE_API_URL=https://dev.lumia-app.com.br
```

### `.env.prod` (Produção)
```env
VITE_API_URL=https://api.lumia-app.com.br
```

## 🚀 Como Usar

### Development (Local)
```bash
npm run dev
```
Usa `.env.dev` → `http://localhost:3000`

### Homologação
```bash
npm run dev:hml
```
Usa `.env.hml` → `https://dev.lumia-app.com.br`

### Build Production
```bash
npm run build
```
Usa `.env.prod` → `https://api.lumia-app.com.br`

### Build Homologação
```bash
npm run build:hml
```
Usa `.env.hml` → `https://dev.lumia-app.com.br`

## 📝 Scripts do Package.json

```json
{
  "scripts": {
    "dev": "vite --mode dev",
    "dev:hml": "vite --mode hml",
    "build": "tsc -b && vite build --mode prod",
    "build:hml": "tsc -b && vite build --mode hml",
    "preview": "vite preview"
  }
}
```

## 🔐 Segurança

- ⚠️ **NUNCA** commite arquivos `.env` no Git
- ✅ Use `.env.example` como template
- ✅ Arquivos `.env*` já estão no `.gitignore`

## 🎯 Ambiente Atual

O Vite detecta automaticamente o ambiente baseado no modo:
- `--mode dev` → `.env.dev`
- `--mode hml` → `.env.hml`
- `--mode prod` → `.env.prod`

## 📡 Como a API é Chamada

```typescript
// src/services/api/api-client.ts
const API_URL = import.meta.env.VITE_API_URL || 'https://dev.lumia-app.com.br';
```

O código usa a variável `VITE_API_URL` do arquivo `.env` correspondente ao modo atual.

## 📋 Checklist de Setup

1. ✅ Criar `.env.dev` com `VITE_API_URL=http://localhost:3000`
2. ✅ Criar `.env.hml` com `VITE_API_URL=https://dev.lumia-app.com.br`
3. ✅ Criar `.env.prod` com `VITE_API_URL=https://api.lumia-app.com.br`
4. ✅ Rodar `npm run dev` para development
5. ✅ Rodar `npm run dev:hml` para homologação
6. ✅ Rodar `npm run build` para produção