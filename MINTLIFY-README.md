# DropWiki — Migração para Mintlify

Este branch contém a **migração de 56 páginas** da Wiki oficial do DropMC (GitBook) para o formato Markdown/MDX compatível com Mintlify.

## Arquivos

- `docs.json`: configurações, navegação, cores e links do site.
- `index.mdx`: página inicial da Wiki.
- `wiki/`: 56 páginas com títulos, conteúdo e links preparados para Mintlify.
- `media-manifest.json`: 48 mídias hospedadas originalmente no GitBook, com metadados e URLs.
- `download_media.py`: script auxiliar para baixar as mídias originais.

## Publicação

Acesse o Mintlify e conecte o repositório `jvictorxsd-cyber/wikipedia` usando o branch `dropwiki-mintlify-2026-11-04` (ou mescle este branch no repositório de documentação da implantação Mintlify).

**Atenção:** imagens/GIFs são referenciados por URLs originais, ainda não foram copiadas para armazenamento próprio do Mintlify. Isso é parte restante de uma migração de mídias independente.

As páginas permanecem disponíveis para edição e importação no Mintlify. O GitBook original e o website Vercel não foram apagados nem alterados por esta migração.
