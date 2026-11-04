<!-- GitBook revision 8HFl7L6HUH9aEjZl8Pe8 | page wJstupAoUAiVACLoTLK4 -->

# Proteção da conta

A segurança da sua conta é fundamental para proteger seu progresso, construções e itens no **DropMC**. O servidor oferece recursos adicionais de proteção, como **autenticação em duas etapas (OTP)**, cadastro obrigatório de senha para contas não oficiais, com opção adicional para contas originais e Bedrock e **vinculação da conta do Minecraft ao Discord**.

Nesta página, você aprenderá para que serve cada recurso e como utilizá-lo.

## Autenticação em duas etapas (OTP)

O sistema de **OTP** acrescenta uma camada de segurança à sua conta por meio de códigos temporários gerados por um aplicativo autenticador.

### Como ativar o OTP

1. Entre no DropMC e digite o comando `/otp ativar`.
2. O servidor exibirá um **QR Code** na sua tela.
3. Abra um aplicativo de autenticação no celular, como **Google Authenticator** ou **Authy**, e utilize a opção de adicionar conta por QR Code.
4. Escaneie o código mostrado no Minecraft.
5. O aplicativo começará a gerar um **código temporário**, que muda a cada **30 segundos**.
6. Digite o código atual no local indicado na tela do Minecraft.
7. Selecione **Confirmar** para concluir a ativação.

Pronto! Sua conta estará com a **verificação em duas etapas** ativada.

**Importante:** se o código expirar antes da confirmação, utilize o código mais recente apresentado pelo aplicativo. Nunca compartilhe os códigos do autenticador ou o QR Code de configuração com outras pessoas.

### Cuidados com o autenticador

Mantenha o aplicativo autenticador protegido e verifique as opções de backup ou transferência de contas oferecidas por ele. Se você perder o celular ou o acesso ao autenticador, procure a equipe pelo Discord oficial para receber orientações. **Não há garantia de recuperação sem os procedimentos de verificação exigidos pelo servidor.**

## Cadastro de senha

O **cadastro de senha é obrigatório apenas para contas não oficiais** do Minecraft Java. Nesses casos, a tela de cadastro aparece **antes de entrar no servidor**, no primeiro acesso.

Para **contas originais do Minecraft e contas Bedrock**, cadastrar uma senha é **opcional** e funciona como uma proteção adicional.

Caso utilize uma conta original ou Bedrock e deseje cadastrar uma senha, use:

`/register <senha> <repetir_senha>`

Substitua os campos por uma senha de sua escolha e repita **exatamente a mesma senha** no segundo argumento.

**Exemplo de estrutura:** `/register suaSenha suaSenha` — utilize uma senha pessoal e segura, e não copie a senha deste exemplo.

Evite senhas fáceis de adivinhar, não reutilize a senha de outros serviços e não a compartilhe, nem mesmo com pessoas que afirmem fazer parte da equipe.

**Importante:** contas Java não oficiais realizam o cadastro obrigatório pela tela exibida antes da conexão, sem precisar usar `/register` no chat.

## Vinculação do Minecraft ao Discord

A **vinculação ao Discord** permite associar sua conta do Minecraft à sua identidade no Discord. Essa associação ajuda a equipe a confirmar que determinada conta realmente pertence ao jogador que está solicitando atendimento.

### Por que vincular a conta?

O principal benefício é a **recuperação de acesso em caso de perda de senha**. Segundo o procedimento do DropMC, a recuperação depende da vinculação da conta ao Discord.

Por isso, recomendamos realizar a vinculação **enquanto você ainda tem acesso normal à sua conta**, e não somente depois de esquecer a senha.

### Como vincular sua conta

1. Entre no DropMC com sua conta do Minecraft.
2. Abra o chat e digite `/vincular`.
3. Siga as instruções mostradas no jogo para associar sua conta ao Discord.

Para obter ajuda com a vinculação, procure a equipe no [Discord oficial do DropMC](https://discord.gg/dropmc).

**Importante:** vincular o Discord não substitui a necessidade de manter sua senha e seus fatores de autenticação seguros.

## Recomendações de segurança

* **Ative o OTP** para acrescentar uma camada de proteção à conta.
* **Vincule seu Minecraft ao Discord** para facilitar a verificação de titularidade e os procedimentos de recuperação.
* **Utilize uma senha exclusiva e segura**, especialmente ao criar uma senha com `/register`.
* **Não compartilhe senhas, códigos temporários ou QR Codes** com outros jogadores.
* **Tenha cuidado com links e mensagens suspeitas**, inclusive quando alguém se apresentar como membro da equipe.
* **Mantenha o acesso ao seu autenticador e Discord protegido**.

## Precisa de ajuda?

Se você estiver com dificuldades para ativar o OTP, criar uma senha ou vincular o Discord, entre no [Discord oficial do DropMC](https://discord.gg/dropmc) e procure os canais de suporte.

Para dúvidas sobre perda de acesso, consulte também [Recuperação de conta](recuperacao-de-conta.md).
