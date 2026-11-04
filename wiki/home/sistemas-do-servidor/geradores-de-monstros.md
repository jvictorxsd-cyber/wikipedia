---
cover: https://i.imgur.com/wXuwISd.png
coverY: 0
---

# Geradores de monstros

Os **geradores de monstros (spawners)** fazem parte da economia e da progressão do DropMC. Eles permitem gerar mobs para obter **itens e experiência**, organizar farms e desenvolver suas atividades no Survival.

Os geradores são divididos em cinco raridades: **comum, incomum, raro, épico e lendário**.

## Como obter geradores

Você pode adquirir geradores pela **`/loja`** ou encontrar **spawners naturais** durante a exploração dos mundos.

**Atenção:** para recolher um spawner encontrado naturalmente, é necessário possuir o **VIP exigido para a raridade** daquele gerador. Caso seu rank não seja suficiente, o servidor informa a exigência correspondente.

Consulte os [VIPs da loja oficial](https://loja.dropmc.gg/) para conhecer os benefícios disponíveis.

## Onde os spawners funcionam?

**Todo spawner precisa estar dentro de um terreno protegido para funcionar.** Não é possível colocar novos geradores fora de terrenos. Caso exista um gerador antigo fora de uma área protegida, ele permanecerá inativo até que seja colocado em um terreno ou que a área ao redor seja protegida.

Os geradores também são contabilizados nos limites aplicáveis ao proprietário e ao terreno onde estão instalados.

## Pilhas de spawners

O funcionamento atual não utiliza mais o antigo limite de **64 geradores por pilha** nem a separação obrigatória entre pilhas após esse número.

* É permitida **uma pilha ativa de spawners por tipo de mob em cada terreno**.
* Ao adicionar outro gerador do mesmo tipo no terreno, ele é somado à pilha existente, mesmo que esteja em outra parte da área.
* **A pilha de spawners não possui um tamanho máximo próprio.** Entretanto, cada gerador continua contando para os limites dos jogadores envolvidos.
* Se houver várias pilhas antigas do mesmo mob, você pode abrir o menu de uma pilha parada e selecionar **“Juntar à pilha ativa”**. Os geradores e os drops armazenados são transferidos para a pilha ativa.

Pilhas antigas incompatíveis com as regras novas não são apagadas automaticamente: podem ficar paradas, e o holograma indica o motivo. Os itens guardados continuam disponíveis e, ao quebrar, os spawners são devolvidos.

## Limite de geradores por jogador

O limite inicial é de **20 spawners por jogador**, considerando todos os tipos de gerador. Ele pode ser aumentado por meio da habilidade **Domínio de Geradores**, da árvore de **Caçador**:

<table><thead><tr><th width="343">Nível da habilidade</th><th>Limite total de spawners</th></tr></thead><tbody><tr><td>Sem a habilidade</td><td><strong>20</strong></td></tr><tr><td>Nível 1</td><td><strong>30</strong></td></tr><tr><td>Nível 2</td><td><strong>45</strong></td></tr><tr><td>Nível 3</td><td><strong>60</strong></td></tr><tr><td>Nível 4</td><td><strong>80</strong></td></tr><tr><td>Nível 5</td><td><strong>100</strong></td></tr></tbody></table>

A habilidade é a **única forma de aumentar esse limite** e requer pontos de habilidade: não é possível comprar a expansão com coins ou Cash.

O limite contabiliza os geradores de sua propriedade, inclusive os colocados nos terrenos de outras pessoas, e os geradores presentes nos seus próprios terrenos. **Se você instalar um spawner no terreno de um amigo, ele será contabilizado no limite dos dois jogadores.**

O menu de terrenos também apresenta a quantidade de spawners e o limite aplicável.

## Pilhas de mobs e funcionamento da farm

As regras de geração e acúmulo de monstros foram alteradas:

* Cada spawner mantém **uma única pilha de mobs**, sem limite máximo de tamanho informado na atualização.
* O antigo limite de **três pilhas com até 512 mobs** foi removido.
* **Uma pilha de mobs desaparece após 10 minutos sem receber golpes de um jogador.** Esse tempo é contado a partir do último golpe.

Essas mudanças são importantes ao planejar farms e estimar a produção de itens.

## Permissões e configurações

O proprietário pode configurar quem tem permissão para **quebrar o spawner, recolher os drops e matar os mobs gerados**. A verificação de permissão para atacar os mobs vale tanto para golpes corpo a corpo quanto para **flechas e tridentes**.

Também é possível escolher se os drops **caem no chão** ou ficam **armazenados dentro do gerador**.

Para adicionar ou remover um jogador, olhe para o spawner e utilize:

* `/spawner amigo adicionar <nick>`
* `/spawner amigo remover <nick>`

Outra opção é clicar no gerador e realizar a configuração pelo menu.

### Drops armazenados

Quando o armazenamento está ativado, você pode abrir o menu do spawner e utilizar **“Coletar tudo”**. A coleta retira apenas os itens que cabem no seu inventário.

**Atenção ao `/vendertudo`:** esse comando vende itens do inventário, mas **não vende diretamente os drops armazenados dentro dos spawners**. Primeiro, colete-os pelo menu do gerador.

## Continue aprendendo

Veja o tutorial [Como utilizar geradores](../guias-e-tutoriais/como-utilizar-geradores.md) e a documentação de [Caçador](trabalhos/cacador.md), que contém as demais habilidades da profissão.

Se encontrar uma pilha inativa, confira o holograma, o limite de spawners e a proteção do terreno antes de procurar ajuda no [Discord oficial](https://discord.gg/dropmc).
