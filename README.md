# Angular Dashboard

Dashboard moderno em Angular 21 com Tailwind CSS, páginas de Showcase (UI, Forms, Interactive), layout responsivo, modo escuro e métricas de vendas/e-commerce. Ajustado para exibir valores em Metical (MT).

## Requisitos
- Node.js 20+ e npm 10+
- Angular CLI 21 (`npm i -g @angular/cli@21`)

## Instalação
- Instale dependências: `npm install`
- Execute em desenvolvimento: `npm run start` e acesse `http://localhost:4200/`

## Scripts
- `npm run start` — servidor de desenvolvimento
- `npm run build` — build de produção em `dist/`
- `npm run test` — testes com Vitest

## Estrutura
- `src/app/layout` — layout (sidebar/header/footer)
- `src/app/features` — dashboards e configurações
- `src/app/pages/showcase` — exemplos UI/Forms/Interativos
- `src/app/shared/components` — componentes reutilizáveis (botão, card, ícone)

## Modo Escuro
- Classes `dark:*` aplicadas nas páginas Showcase e layout, com contraste otimizado para texto, bordas e fundos.

## Moeda
- Dashboards usam `MT` com formatação numérica Angular (ex.: `{{ total | number:'1.2-2' }}`).

## Publicar no GitHub
1. Inicialize repositório: `git init`
2. Faça o primeiro commit: `git add -A && git commit -m "Initial commit"`
3. Defina a branch: `git branch -M main`
4. Adicione o remoto: `git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git`
5. Envie: `git push -u origin main`

## Boas Práticas
- Não versionar `node_modules/` e `dist/` (já no `.gitignore`)
- Evitar segredos em código; usar variáveis de ambiente quando necessário

## Licença
Distribuído sob licença MIT.
