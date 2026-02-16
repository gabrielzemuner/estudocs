---
title: Claude
---

# Comandos úteis

## Comando pra gerar arquivo .sql a partir das migrations

```bash
php generate-sql.php > database/schema/migrations.sql
```

## Comando pra rodar prettier em todos os arquivos de um projeto laravel para formatar o código

- obs: caso o plugin `prettier-plugin-organize-imports` esteja configurado no projeto, ele vai organizar os imports automaticamente e remover imports não utilizados

```bash
npm run format
```

## Laravel Wayfinder

O Wayfinder gera TypeScript a partir de duas coisas: as rotas nomeadas e os controllers.

```typescript
// Caminho 1: pela rota nomeada
import { store } from '@/routes/clinics';
// store() → { url: '/clinics', method: 'post' }

// Caminho 2: pelo controller
import { store } from '@/actions/App/Http/Controllers/ClinicController';
// store() → { url: '/clinics', method: 'post' }

// Os dois geram o mesmo resultado
```

E o `.form()`? Quando você habilita `formVariants: true` no plugin Vite do Wayfinder, ele gera uma variante extra em cada função. O `store()` retorna `{ url, method }` pra uso com `router.post()`. O `store.form()` retorna `{ action, method }` que é o formato que o `<Form>` do Inertia espera como props. É só um formato diferente do mesmo dado.