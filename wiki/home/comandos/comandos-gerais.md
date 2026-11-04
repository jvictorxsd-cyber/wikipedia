---
cover: https://i.imgur.com/VKqxkK0.png
coverY: 0
---

# Comandos gerais

Esta página reúne os principais comandos disponíveis no **DropMC**, separados por função para facilitar a consulta. Argumentos entre `< >` representam informações que você deve substituir; os que aparecem entre `[ ]` são opcionais.

## Economia

| Comando                          | Função                                      |
| -------------------------------- | ------------------------------------------- |
| `/money`                         | Exibe seu saldo de coins.                   |
| `/money <jogador>`               | Mostra o saldo de coins de outro jogador.   |
| `/money pay <jogador> <quantia>` | Transfere coins para outro jogador.         |
| `/money top`                     | Mostra os jogadores mais ricos do servidor. |

## Cash

| Comando           | Função                                     |
| ----------------- | ------------------------------------------ |
| `/cash`           | Exibe seu saldo de Cash.                   |
| `/cash <jogador>` | Consulta o saldo de Cash de outro jogador. |

## Passe de Batalha

| Comando  | Função                           |
| -------- | -------------------------------- |
| `/passe` | Abre o menu do Passe de Batalha. |

## Correios

| Comando                                 | Função                                              |
| --------------------------------------- | --------------------------------------------------- |
| `/correios [página]`                    | Abre o menu de correios.                            |
| `/correios enviar <jogador> <mensagem>` | Envia uma mensagem pelo correio para outro jogador. |

## Pets

| Comando                  | Função                                          |
| ------------------------ | ----------------------------------------------- |
| `/pet`                   | Abre o menu dos seus pets.                      |
| `/pet guardar [jogador]` | Guarda o pet ativo.                             |
| `/pet menu [pet]`        | Abre as ações do pet ativo.                     |
| `/pet montar`            | Monta no pet ativo.                             |
| `/pet nome`              | Solicita no chat um novo nome para o pet ativo. |
| `/pet nome <nome>`       | Renomeia o pet ativo.                           |

## Mundos, warps e teleportes

| Comando        | Função                                            |
| -------------- | ------------------------------------------------- |
| `/farm`        | Teleporta para o mundo de farm.                   |
| `/mundos`      | Abre o menu de mundos.                            |
| `/nether`      | Teleporta para o Nether.                          |
| `/principal`   | Teleporta para o mundo principal.                 |
| `/recursos`    | Teleporta para o Mundo de Recursos.               |
| `/rtp`         | Teleporta para um local aleatório do mundo atual. |
| `/spawn`       | Teleporta para o spawn.                           |
| `/warp`        | Abre o menu de warps.                             |
| `/warp <nome>` | Teleporta para a warp informada.                  |
| `/warps`       | Abre o menu de warps.                             |

## Bazar

| Comando       | Função                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| `/vender`     | Abre o menu de venda em massa do bazar.                                                                     |
| `/vendertudo` | Vende ao bazar os itens do inventário aceitos para venda. Exige confirmação digitando o comando duas vezes. |

## Chat

| Comando                      | Função                                                                |
| ---------------------------- | --------------------------------------------------------------------- |
| `/anunciar <mensagem>`       | Envia um anúncio para os jogadores online mediante um custo em coins. |
| `/g <mensagem>`              | Envia uma mensagem ao chat global.                                    |
| `/tell <jogador> <mensagem>` | Envia uma mensagem privada para outro jogador.                        |
| `/r <mensagem>`              | Responde à última mensagem privada recebida.                          |

## Mercado

| Comando                   | Função                                               |
| ------------------------- | ---------------------------------------------------- |
| `/mercado`                | Abre o mercado.                                      |
| `/mercado vender <preço>` | Anuncia por um preço o item que você está segurando. |
| `/mercado remove <id>`    | Remove uma listagem do mercado pelo ID.              |

## Lojas de jogadores

| Comando                        | Função                                                                    |
| ------------------------------ | ------------------------------------------------------------------------- |
| `/pwarps`                      | Abre a lista de lojas de jogadores.                                       |
| `/pwarp <jogador>`             | Visita a loja de outro jogador.                                           |
| `/pwarp abrir`                 | Reabre sua loja fechada.                                                  |
| `/pwarp criar`                 | Define o local da sua loja.                                               |
| `/pwarp descricao <descrição>` | Define a descrição exibida na lista de lojas.                             |
| `/pwarp fechar`                | Fecha temporariamente sua loja, retirando-a da lista e impedindo visitas. |
| `/pwarp listar [página]`       | Lista suas lojas criadas.                                                 |
| `/pwarp remover`               | Remove o local definido para sua loja.                                    |
| `/pwarp visitar`               | Abre a lista de lojas de outros jogadores.                                |
| `/pwarp visitar <loja>`        | Visita a loja informada.                                                  |

## Comandos diversos

| Comando                       | Função                                                         |
| ----------------------------- | -------------------------------------------------------------- |
| `/autoclick`                  | Ativa ou desativa o auto-clique disponibilizado pelo servidor. |
| `/back`                       | Volta à posição anterior ao último teleporte.                  |
| `/bancadas`                   | Abre o menu de mesas de trabalho.                              |
| `/bigorna`                    | Abre uma bigorna.                                              |
| `/cartografia`                | Abre uma mesa de cartografia.                                  |
| `/compactar`                  | Compacta itens compactáveis do inventário.                     |
| `/cortador`                   | Abre o cortador de pedra.                                      |
| `/craft`                      | Abre a mesa de trabalho.                                       |
| `/curar`                      | Cura completamente seu personagem.                             |
| `/curar <jogador>`            | Cura completamente o jogador indicado.                         |
| `/dados <quantidade> [canal]` | Rola dados e exibe o resultado no chat.                        |
| `/delhome <nome>`             | Remove a home indicada.                                        |
| `/derreter`                   | Derrete itens derretíveis do inventário.                       |
| `/encantar`                   | Abre a mesa de encantamentos.                                  |
| `/enderchest`                 | Abre seu Ender Chest.                                          |

## Homes e teleportes entre jogadores

| Comando           | Função                                           |
| ----------------- | ------------------------------------------------ |
| `/home`           | Abre o menu de homes.                            |
| `/home <nome>`    | Teleporta para uma home.                         |
| `/homes`          | Abre o menu de homes.                            |
| `/sethome <nome>` | Define uma home na posição atual.                |
| `/tpa <jogador>`  | Envia um pedido de teleporte para outro jogador. |
| `/tpaccept`       | Aceita um pedido de teleporte.                   |
| `/tpcancel`       | Cancela o pedido de teleporte enviado.           |
| `/tpdeny`         | Recusa um pedido de teleporte.                   |

## Trocas entre jogadores

| Comando                     | Função                                             |
| --------------------------- | -------------------------------------------------- |
| `/trocar <jogador>`         | Envia um pedido de troca para outro jogador.       |
| `/trocar aceitar [jogador]` | Aceita um pedido de troca.                         |
| `/trocar cancelar`          | Cancela o pedido de troca ou a troca em andamento. |
| `/trocar recusar [jogador]` | Recusa um pedido de troca.                         |

## Kits, tags e medalhas

| Comando              | Função                                         |
| -------------------- | ---------------------------------------------- |
| `/kit`               | Abre o menu de kits.                           |
| `/kit <kit>`         | Reivindica o kit informado.                    |
| `/tag [tag]`         | Mostra suas tags ou seleciona uma para usar.   |
| `/medalha [medalha]` | Mostra suas medalhas ou seleciona uma medalha. |
| `/medalha nenhuma`   | Remove a medalha em uso.                       |

## Outras utilidades

| Comando           | Função                                                      |
| ----------------- | ----------------------------------------------------------- |
| `/fly <jogador>`  | Ativa ou desativa o voo de outro jogador, quando permitido. |
| `/hat`            | Usa o item em mãos como capacete.                           |
| `/lixeira`        | Abre a lixeira para descartar itens.                        |
| `/ping`           | Exibe seu próprio ping.                                     |
| `/ping <jogador>` | Exibe o ping de outro jogador.                              |
| `/rebolo`         | Abre o rebolo.                                              |
| `/sentar`         | Senta no chão; use Shift para levantar.                     |
| `/tear`           | Abre o tear.                                                |
| `/tutorial`       | Entra no tutorial interativo.                               |

> Alguns comandos podem depender de permissões ou benefícios específicos. Confira as informações exibidas no servidor ao utilizá-los.

Para os comandos de proteção e geradores, consulte as páginas específicas na seção **Comandos**.
