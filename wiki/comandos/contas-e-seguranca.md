<!-- GitBook revision 8HFl7L6HUH9aEjZl8Pe8 | page a2mKLfgYYpz8PA9thUWU -->

# Contas e segurança

Os comandos de contas e segurança permitem **cadastrar e alterar senhas, configurar a autenticação em duas etapas (OTP) e vincular ou desvincular a conta do Minecraft ao Discord**.

Esses recursos ajudam a proteger o acesso à sua conta no DropMC.

## Cadastro e alteração de senha

| Comando                                   | Função                                                              |
| ----------------------------------------- | ------------------------------------------------------------------- |
| `/register <senha> <repetir_senha>`       | Cadastra uma senha de acesso à conta.                               |
| `/trocarsenha <senha atual> <senha nova>` | Altera a senha cadastrada, informando a senha atual e a nova senha. |

### /register

O cadastro de senha é **obrigatório para contas não oficiais do Minecraft Java**. Nesses casos, o registro é feito na tela exibida antes de entrar no servidor pela primeira vez.

Para jogadores com **Minecraft Java original ou Bedrock**, o cadastro de senha é **opcional**, como recurso adicional de segurança, e pode ser realizado pelo comando:

`/register <senha> <repetir_senha>`

Os dois campos devem conter a mesma senha.

### /trocarsenha

Se você já possui uma senha cadastrada e deseja alterá-la, utilize:

`/trocarsenha <senha atual> <senha nova>`

Substitua os campos pela senha em uso e pela nova senha desejada. **Não compartilhe sua senha com ninguém.**

## Autenticação em duas etapas (OTP)

O OTP acrescenta uma camada de proteção à conta por meio de códigos temporários gerados em um aplicativo autenticador.

Os comandos apresentados pelo sistema de autenticação são:

| Comando                         | Função                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| `/twofactor ativar`             | Inicia a ativação da autenticação em duas etapas.                                                |
| `/twofactor desativar <codigo>` | Desativa o OTP mediante a informação do código solicitado.                                       |
| `/twofactor codigos <codigo>`   | Acessa a função de códigos do sistema OTP, informando o código solicitado.                       |
| `/twofactor esquecer`           | Acessa a opção **Esquecer** do sistema de autenticação; siga as instruções apresentadas no jogo. |

O comando `/otp ativar` também é utilizado na documentação do DropMC para iniciar a ativação. A lista acima reproduz a sintaxe exibida pelo próprio sistema como `/twofactor`.

### Como ativar a autenticação

1. No servidor, digite `/otp ativar` ou utilize `/twofactor ativar`, conforme a opção apresentada no jogo.
2. O servidor exibirá um **QR Code**.
3. Abra um aplicativo autenticador, como Google Authenticator ou Authy, e escaneie o código.
4. O aplicativo gerará códigos temporários, renovados a cada **30 segundos**.
5. Informe o código solicitado na tela do Minecraft e confirme a ativação.

**Importante:** não compartilhe os códigos temporários nem o QR Code de configuração. Se perder o acesso ao autenticador, procure o suporte oficial para receber orientações.

Para o passo a passo completo, consulte [Proteção da conta](../contas-e-seguranca/protecao-da-conta.md).

## Vinculação ao Discord

| Comando        | Função                                                            |
| -------------- | ----------------------------------------------------------------- |
| `/vincular`    | Inicia o processo de vinculação da conta do Minecraft ao Discord. |
| `/desvincular` | Desvincula a conta do Minecraft do Discord associado.             |

### /vincular

Use `/vincular` dentro do DropMC e siga as orientações exibidas no jogo para associar sua conta ao Discord.

Essa vinculação é importante para a **verificação de titularidade e a recuperação de senha**. De acordo com os procedimentos do DropMC, a conta precisa estar vinculada ao Discord para que seja possível solicitar a recuperação de senha.

### /desvincular

Para remover a associação existente entre sua conta do Minecraft e o Discord, utilize:

`/desvincular`

**Atenção:** a desvinculação pode impedir o procedimento de recuperação de senha até que uma nova vinculação seja realizada. Considere isso antes de remover a associação.

## Precisa de ajuda?

Caso enfrente problemas com senhas, OTP, vinculação ou acesso à conta, entre em contato com a equipe por meio de um ticket no [Discord oficial do DropMC](https://discord.gg/dropmc).

Acesse também a [Central de suporte](../comunidade-e-novidades/central-de-suporte.md) ou consulte a página [Proteção da conta](../contas-e-seguranca/protecao-da-conta.md) para mais orientações.
