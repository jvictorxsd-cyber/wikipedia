# DropWiki — hospedagem gratuita
A documentação original está na pasta `wiki/`. O site usa VitePress e mantém uma navegação próxima ao GitBook.

## Instalação
```bash
npm install
npm run docs:dev
```
Para compilar: `npm run docs:build` — saída `wiki/.vitepress/dist`.

## Vercel
- Framework: VitePress
- Build command: `npm run docs:build`
- Output directory: `wiki/.vitepress/dist`

## Domínio
Em Vercel > Project Settings > Domains adicione `wiki.dropmc.gg`. Depois configure o CNAME fornecido pela Vercel no gerenciador DNS do seu domínio.

## Conteúdo
Edição: `wiki/**/*.md`. Navegação manual: `wiki/.vitepress/config.ts`. As imagens mantêm URLs originais do GitBook; para uma migração independente, transfira os arquivos indicados em `media-manifest.json` para `wiki/public/` e atualize os links.

Este projeto foi preparado a partir do backup de 04/11/2026 da Wiki DropMC, sem alterar o projeto barzinho-filmes.
