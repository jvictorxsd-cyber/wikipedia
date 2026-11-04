---
title: "Clãs"
description: "Documentação oficial do DropMC"
---

Esta página reúne os comandos disponíveis para criar, administrar e participar de clãs no DropMC. Argumentos entre `< >` devem ser substituídos pelas informações correspondentes; argumentos entre `[ ]` são opcionais.

## Criação e gerenciamento

| Comando                           | Função                                              |
| --------------------------------- | --------------------------------------------------- |
| `/clan criar <tag do clã> <nome>` | Cria um novo clã com a tag e o nome informados.     |
| `/clan convidar <jogador>`        | Convida um jogador para seu clã.                    |
| `/clan aceitar [convite]`         | Aceita um convite para entrar em um clã.            |
| `/clan sair`                      | Sai do clã atual.                                   |
| `/clan expulsar <jogador>`        | Expulsa um integrante do clã.                       |
| `/clan promover <jogador>`        | Promove um integrante do clã.                       |
| `/clan rebaixar <jogador>`        | Rebaixa um integrante do clã.                       |
| `/clan transferir <jogador>`      | Transfere a liderança do clã para outro integrante. |
| `/clan dissolver`                 | Dissolve seu clã permanentemente.                   |
| `/clan dissolver <tag>`           | Dissolve um clã pela tag, de forma forçada.         |

## Informações e consulta

| Comando               | Função                                           |
| --------------------- | ------------------------------------------------ |
| `/clan`               | Exibe informações sobre seu clã.                 |
| `/clan info [tag]`    | Exibe informações de um clã.                     |
| `/clan inspect <tag>` | Exibe informações detalhadas de um clã pela tag. |
| `/clan listar`        | Lista os clãs do servidor.                       |
| `/clans`              | Lista os clãs do servidor.                       |
| `/clan perfil [alvo]` | Exibe o perfil de clã de um jogador.             |

## Comunicação entre integrantes

| Comando                 | Função                                 |
| ----------------------- | -------------------------------------- |
| `/clan chat`            | Liga ou desliga o modo de chat do clã. |
| `/clan chat <mensagem>` | Envia uma mensagem no chat do clã.     |
| `/.`                    | Liga ou desliga o modo de chat do clã. |
| `/. <mensagem>`         | Envia uma mensagem no chat do clã.     |
| `/cc`                   | Liga ou desliga o modo de chat do clã. |
| `/cc <mensagem>`        | Envia uma mensagem no chat do clã.     |

## Alianças e rivalidades

| Comando                        | Função                                     |
| ------------------------------ | ------------------------------------------ |
| `/clan aliado adicionar <tag>` | Envia um pedido de aliança para outro clã. |
| `/clan aliado remover <tag>`   | Remove a aliança com outro clã.            |
| `/clan rival adicionar <tag>`  | Declara rivalidade com outro clã.          |
| `/clan rival remover <tag>`    | Remove a rivalidade com outro clã.         |

## Base, personalização e outras opções

| Comando           | Função                                                   |
| ----------------- | -------------------------------------------------------- |
| `/clan sethome`   | Define a base do clã na localização atual.               |
| `/clan home`      | Teleporta para a base do clã.                            |
| `/clan bandeira`  | Recebe uma bandeira do seu clã.                          |
| `/clan cor`       | Abre o menu de cores do nome e da tag do clã.            |
| `/clan fogoamigo` | Ativa ou desativa o fogo amigo entre integrantes do clã. |

## Como começar

Para formar um grupo, use `/clan criar <tag do clã> <nome>`. Depois, convide os jogadores com `/clan convidar <jogador>`. Quem receber o convite poderá aceitá-lo com `/clan aceitar [convite]`.

Cada clã pode ter até **10 integrantes**. Para ver o passo a passo, consulte [Como criar um clã](/wiki/guias-e-tutoriais/como-criar-um-cla).

> Alguns comandos de administração, como transferência de liderança ou dissolução, podem exigir cargos ou permissões específicas. Use-os com atenção.
