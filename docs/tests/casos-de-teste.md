# Casos de Teste - Velô Sprint (Configurador de Veículo Elétrico)

Este documento contém a especificação dos casos de teste funcionais (caixa preta) para o sistema **Velô Sprint - Configurador de Veículo Elétrico**, conforme as diretrizes estabelecidas.

---

## Índice dos Casos de Teste

### Módulo: Landing Page
* [CT01 - Visualização e navegação a partir da Landing Page](#ct01---visualizacao-e-navegacao-a-partir-da-landing-page)
* [CT02 - Responsividade e menu móvel na Landing Page](#ct02---responsividade-e-menu-movel-na-landing-page)

### Módulo: Configurador de Veículo
* [CT03 - Configuração padrão do veículo e cálculo de preço básico](#ct03---configuracao-padrao-do-veiculo-e-calculo-de-preco-basico)
* [CT04 - Alteração da cor externa e visualização do veículo](#ct04---alteracao-da-cor-externa-e-visualizacao-do-veiculo)
* [CT05 - Seleção de rodas esportivas com acréscimo de valor](#ct05---selecao-de-rodas-esportivas-com-acrescimo-de-valor)
* [CT06 - Seleção de itens opcionais e cálculo dinâmico](#ct06---selecao-de-itens-opcionais-e-calculo-dinamico)
* [CT07 - Desmarcar opcionais e atualização de preços](#ct07---desmarcar-opcionais-e-atualizacao-de-precos)
* [CT08 - Navegação para finalização do pedido](#ct08---navegacao-para-finalizacao-do-pedido)

### Módulo: Checkout / Pedido (Formulário e Validações)
* [CT09 - Finalização de pedido com pagamento À Vista (Fluxo Feliz)](#ct09---finalizacao-de-pedido-com-pagamento-a-vista-fluxo-feliz)
* [CT10 - Validação de campos obrigatórios vazios no Checkout](#ct10---validacao-de-campos-obrigatorios-vazios-no-checkout)
* [CT11 - Validação de formatos e limites de caracteres no Checkout](#ct11---validacao-de-formatos-e-limites-de-caracteres-no-checkout)
* [CT12 - Validação de envio sem aceitar os Termos de Uso](#ct12---validacao-de-envio-sem-aceitar-os-termos-de-uso)
* [CT13 - Simulação de Financiamento sem valor de entrada](#ct13---simulacao-de-financiamento-sem-valor-de-entrada)
* [CT14 - Simulação de Financiamento com entrada válida](#ct14---simulacao-de-financiamento-com-entrada-valida)
* [CT15 - Validação de valor de entrada acima do preço total](#ct15---validacao-de-valor-de-entrada-acima-do-preco-total)
* [CT16 - Cancelamento do pedido e retorno ao configurador](#ct16---cancelamento-do-pedido-e-retorno-ao-configurador)

### Módulo: Análise de Crédito Automática
* [CT17 - Financiamento aprovado automaticamente por Score Alto (> 700)](#ct17---financiamento-aprovado-automaticamente-por-score-alto-700)
* [CT18 - Financiamento encaminhado para análise por Score Médio (501 a 700)](#ct18---financiamento-encaminhado-para-analise-por-score-medio-501-a-700)
* [CT19 - Financiamento reprovado por Score Baixo (<= 500)](#ct19---financiamento-reprovado-por-score-baixo-500)
* [CT20 - Financiamento aprovado automaticamente por Entrada Alta (>= 50%)](#ct20---financiamento-aprovado-automaticamente-por-entrada-alta-50)
* [CT21 - Falha técnica na API de análise de crédito](#ct21---falha-tecnica-na-api-de-analise-de-credito)

### Módulo: Confirmação
* [CT22 - Exibição de tela de sucesso para pedido Aprovado](#ct22---exibicao-de-tela-de-sucesso-para-pedido-aprovado)
* [CT23 - Exibição de tela de insucesso para pedido Reprovado](#ct23---exibicao-de-tela-de-insucesso-para-pedido-reprovado)

### Módulo: Consulta de Pedidos
* [CT24 - Consulta de pedido existente com código válido](#ct24---consulta-de-pedido-existente-com-codigo-valido)
* [CT25 - Consulta de pedido com código inexistente](#ct25---consulta-de-pedido-com-codigo-inexistente)
* [CT26 - Tentativa de busca com campo de consulta vazio](#ct26---tentativa-de-busca-com-campo-de-consulta-vazio)

---

## Detalhamento dos Casos de Teste

### CT01 - Visualização e navegação a partir da Landing Page

#### Objetivo
Garantir que a Landing Page do Velô Sprint carrega corretamente e permite a navegação para a tela de configuração tanto pelo menu quanto pela seção de destaque (Hero/CTA).

#### Pré-Condições
- O navegador do usuário está aberto na página inicial do sistema (`/`).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Acessar a URL principal do sistema (`/`) | A Landing Page é exibida corretamente contendo o logotipo "Velô", o menu de navegação, a seção de especificações (Specs), a seção de CTA e as perguntas frequentes (FAQ). |
| 2  | Clicar no botão "Configure o Seu" localizado no menu de navegação superior (Header CTA) | O sistema redireciona o usuário para a página de configuração de veículo (`/configure`). |
| 3  | Clicar no logotipo "Velô" no cabeçalho | O sistema retorna o usuário para a Landing Page (`/`). |
| 4  | Rolar a página até a seção de CTA (chamada para ação) e clicar no botão "Configure o Seu" | O sistema redireciona o usuário para a página de configuração de veículo (`/configure`). |

#### Resultados Esperados
- O usuário consegue navegar livremente entre a Landing Page e o Configurador utilizando os botões de ação e o logotipo de retorno.

#### Critérios de Aceitação
- Todos os links e botões de chamada na página principal devem levar à rota `/configure`.
- O logotipo deve sempre retornar à raiz `/`.

---

### CT02 - Responsividade e menu móvel na Landing Page

#### Objetivo
Validar que a Landing Page se adapta a dispositivos móveis e que o menu hambúrguer funciona adequadamente para navegação.

#### Pré-Condições
- O navegador do usuário está aberto na página inicial do sistema (`/`).
- A largura da tela do navegador é reduzida para menos de 768px (resolução mobile).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Redimensionar o navegador para uma resolução de 375x812 (mobile) | O menu de navegação padrão (desktop) é ocultado e o botão do menu hambúrguer é exibido no canto superior direito. |
| 2  | Clicar no botão do menu hambúrguer | O menu móvel se expande de forma suave, exibindo os links "Consultar Pedido" e o botão "Configure o Seu". |
| 3  | Clicar no botão "Configure o Seu" dentro do menu móvel | O menu se fecha e o usuário é redirecionado para a rota `/configure`. |

#### Resultados Esperados
- O layout se adapta perfeitamente em telas pequenas e o menu hambúrguer abre e fecha corretamente, permitindo navegação mobile completa.

#### Critérios de Aceitação
- O menu de navegação móvel não deve apresentar sobreposição de textos.
- A navegação a partir do menu móvel deve funcionar exatamente como no desktop.

---

### CT03 - Configuração padrão do veículo e cálculo de preço básico

#### Objetivo
Verificar que ao abrir o configurador do veículo, as opções básicas padrão estão selecionadas e o preço base está correto.

#### Pré-Condições
- O usuário está na tela de configuração de veículo (`/configure`).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Observar a cor selecionada por padrão na seção "Cor" | A opção "Glacier Blue" está selecionada como padrão. |
| 2  | Observar a roda selecionada por padrão na seção "Rodas" | A opção "Aero Wheels" está selecionada como padrão. |
| 3  | Verificar o status das caixas de seleção da seção "Opcionais" | Ambas as caixas de seleção "Precision Park" e "Flux Capacitor" estão desmarcadas. |
| 4  | Verificar o preço de venda exibido no rodapé do painel | O valor exibido é o preço base: "R$ 40.000,00". |

#### Resultados Esperados
- A configuração padrão deve carregar com a cor "Glacier Blue", rodas "Aero Wheels", nenhum opcional ativo e preço de R$ 40.000,00.

#### Critérios de Aceitação
- O preço inicial exibido deve ser rigorosamente "R$ 40.000,00".
- O botão "Monte o Seu" (Checkout) deve estar ativo.

---

### CT04 - Alteração da cor externa e visualização do veículo

#### Objetivo
Validar que a troca de cores externas atualiza a visualização do veículo e mantém o preço inalterado (já que a alteração de cor não possui custo adicional).

#### Pré-Condições
- O usuário está na tela de configuração de veículo (`/configure`).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Clicar na cor "Midnight Black" na seção "Cor" | O mostrador visual (Car Stage) atualiza para exibir a renderização do veículo na cor Midnight Black. O preço base permanece "R$ 40.000,00". |
| 2  | Clicar na cor "Lunar White" na seção "Cor" | O mostrador visual (Car Stage) atualiza para exibir o veículo na cor Lunar White. O preço base permanece "R$ 40.000,00". |
| 3  | Clicar de volta na cor "Glacier Blue" na seção "Cor" | O mostrador visual (Car Stage) retorna para exibir o veículo na cor Glacier Blue. O preço base permanece "R$ 40.000,00". |

#### Resultados Esperados
- As renderizações do carro são alteradas dinamicamente de acordo com a cor escolhida e o preço final não sofre nenhuma alteração.

#### Critérios de Aceitação
- A imagem do veículo exibida no lado esquerdo da tela deve corresponder à cor selecionada no painel.

---

### CT05 - Seleção de rodas esportivas com acréscimo de valor

#### Objetivo
Confirmar que a seleção de rodas "Sport Wheels" adiciona R$ 2.000,00 ao preço total do veículo e altera visualmente as rodas do carro exibido.

#### Pré-Condições
- O usuário está na tela de configuração de veículo (`/configure`) com o modelo base ativo (R$ 40.000,00).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Clicar na opção "Sport Wheels" na seção "Rodas" | O veículo na visualização é atualizado com as rodas esportivas. O preço de venda é alterado de "R$ 40.000,00" para "R$ 42.000,00". |
| 2  | Clicar na opção "Aero Wheels" na seção "Rodas" | O veículo volta a exibir as rodas Aero e o preço de venda retorna para "R$ 40.000,00". |

#### Resultados Esperados
- A seleção e desmarcação das rodas "Sport" alteram dinamicamente a soma do preço em +R$ 2.000,00 ou R$ 0,00, respectivamente, e atualizam a imagem do veículo.

#### Critérios de Aceitação
- O valor final de R$ 42.000,00 deve refletir na tela imediatamente após clicar em "Sport Wheels".

---

### CT06 - Seleção de itens opcionais e cálculo dinâmico

#### Objetivo
Validar que a inclusão de opcionais (Precision Park e Flux Capacitor) atualiza dinamicamente o valor do carro.

#### Pré-Condições
- O usuário está na tela de configuração de veículo (`/configure`) com o veículo base selecionado (R$ 40.000,00).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Marcar o checkbox correspondente a "Precision Park" | O preço total no rodapé passa a exibir "R$ 45.500,00" (+ R$ 5.500,00). |
| 2  | Marcar o checkbox correspondente a "Flux Capacitor" | O preço total no rodapé passa a exibir "R$ 50.500,00" (+ R$ 5.000,00). |
| 3  | Clicar na opção "Sport Wheels" na seção "Rodas" (com os dois opcionais ativos) | O preço de venda final do veículo no rodapé atualiza para "R$ 52.500,00" (R$ 40.000 + R$ 2.000 + R$ 5.500 + R$ 5.000). |

#### Resultados Esperados
- Cada item opcional adiciona seu valor correspondente ao preço final de forma imediata e cumulativa.

#### Critérios de Aceitação
- O preço total com todos os adicionais deve ser exatamente "R$ 52.500,00".

---

### CT07 - Desmarcar opcionais e atualização de preços

#### Objetivo
Garantir que ao desmarcar um opcional anteriormente selecionado, o preço é reduzido proporcionalmente.

#### Pré-Condições
- O usuário está na tela de configuração com "Precision Park" (R$ 5.500,00) e "Flux Capacitor" (R$ 5.000,00) selecionados. Preço total exibido: R$ 50.500,00.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Desmarcar a caixa de seleção de "Precision Park" | O preço total atualiza instantaneamente para "R$ 45.000,00". |
| 2  | Desmarcar a caixa de seleção de "Flux Capacitor" | O preço total atualiza instantaneamente para "R$ 40.000,00". |

#### Resultados Esperados
- A remoção de itens opcionais reduz o preço final exibido de maneira imediata.

#### Critérios de Aceitação
- A desmarcação dos opcionais remove a taxa correspondente sem erro de arredondamento.

---

### CT08 - Navegação para finalização do pedido

#### Objetivo
Validar que as configurações feitas pelo usuário são salvas e persistidas no estado do sistema e levadas para a página de checkout.

#### Pré-Condições
- O usuário configurou: Cor "Midnight Black", rodas "Sport Wheels" e opcional "Flux Capacitor" (Preço: R$ 47.000,00).
- O usuário está na tela `/configure`.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Clicar no botão "Monte o Seu" no canto inferior direito | O sistema redireciona o usuário para a página de Checkout (`/order`). |
| 2  | Verificar a seção "Resumo" na lateral direita da tela de checkout | O resumo exibe a renderização correta do veículo com a cor "Midnight Black", rodas "Sport Wheels" e o opcional "Flux Capacitor". O total exibido é "R$ 47.000,00". |

#### Resultados Esperados
- A configuração do veículo e o preço total são transferidos perfeitamente do configurador para a página de checkout do pedido.

#### Critérios de Aceitação
- A rota atual deve ser `/order`.
- A imagem e os detalhes exibidos no resumo do pedido em `/order` devem bater exatamente com as seleções efetuadas em `/configure`.

---

### CT09 - Finalização de pedido com pagamento À Vista (Fluxo Feliz)

#### Objetivo
Validar a submissão bem-sucedida de um pedido utilizando a forma de pagamento À Vista, informando todos os dados obrigatórios válidos.

#### Pré-Condições
- O usuário configurou um veículo e está na página de checkout (`/order`).
- O método de pagamento está selecionado como "À Vista" (padrão).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Preencher o campo "Nome" com "João" | O campo aceita a entrada sem erros. |
| 2  | Preencher o campo "Sobrenome" com "Silva" | O campo aceita a entrada sem erros. |
| 3  | Preencher o campo "Email" com "joao.silva@exemplo.com" | O campo aceita a entrada sem erros. |
| 4  | Preencher o campo "Telefone" com "(11) 98765-4321" | A máscara é aplicada corretamente. |
| 5  | Preencher o campo "CPF" com "123.456.789-00" | A máscara é aplicada corretamente. |
| 6  | Selecionar a loja "Velô Paulista - Av. Paulista, 1000" no dropdown "Loja para Retirada" | A loja selecionada é exibida no campo do dropdown. |
| 7  | Marcar a caixa de seleção de aceitação dos Termos de Uso | A caixa de seleção fica marcada. |
| 8  | Clicar no botão "Confirmar Pedido" | O botão exibe um indicador de carregamento ("Processando...") e, logo em seguida, redireciona o usuário para a página de sucesso (`/success`). |

#### Resultados Esperados
- O pedido é registrado no banco de dados e o usuário é redirecionado para a tela de confirmação apresentando o status do pedido como "APROVADO" (pois pagamentos à vista são aprovados diretamente).

#### Critérios de Aceitação
- O banco de dados (tabela `orders`) deve registrar uma nova linha contendo o CPF informado, o preço de venda correto, o método de pagamento "avista" e o status "APROVADO".
- O usuário deve ver o número do pedido gerado (ex: `VLO-XXXXXX`) na tela de sucesso.

---

### CT10 - Validação de campos obrigatórios vazios no Checkout

#### Objetivo
Confirmar que o sistema impede o envio do pedido se campos obrigatórios do formulário estiverem vazios, exibindo mensagens de validação apropriadas.

#### Pré-Condições
- O usuário está na tela de checkout (`/order`) com um veículo configurado.
- Os campos do formulário estão em branco.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Clicar diretamente no botão "Confirmar Pedido" | O formulário não é enviado. As mensagens de erro abaixo de cada campo inválido são exibidas em vermelho. |
| 2  | Analisar as mensagens de erro geradas na tela | Devem aparecer erros nos seguintes campos:<br>- Nome: "Nome deve ter pelo menos 2 caracteres"<br>- Sobrenome: "Sobrenome deve ter pelo menos 2 caracteres"<br>- Email: "Email inválido"<br>- Telefone: "Telefone inválido"<br>- CPF: "CPF inválido"<br>- Loja para Retirada: "Selecione uma loja"<br>- Termos de Uso: "Aceite os termos" |

#### Resultados Esperados
- O envio do formulário é bloqueado e todos os erros são listados abaixo de cada campo correspondente.

#### Critérios de Aceitação
- Nenhuma chamada de rede para criar o pedido ou analisar o crédito deve ser disparada antes que os erros de validação local sejam corrigidos.

---

### CT11 - Validação de formatos e limites de caracteres no Checkout

#### Objetivo
Validar que o formulário rejeita dados com formatação inválida (e-mail sem "@", CPF incompleto, nome/sobrenome muito curtos).

#### Pré-Condições
- O usuário está na tela de checkout (`/order`).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Digitar "A" no campo "Nome" e "B" no campo "Sobrenome" | As iniciais são inseridas. |
| 2  | Digitar "email_invalido" no campo "Email" | O texto é aceito pelo campo. |
| 3  | Digitar "119999" (incompleto) no campo "Telefone" | O campo retém o valor parcial com a máscara. |
| 4  | Digitar "123.45" (incompleto) no campo "CPF" | O campo retém o valor parcial com a máscara. |
| 5  | Selecionar uma loja e marcar a aceitação de termos | Os campos correspondentes são preenchidos corretamente. |
| 6  | Clicar no botão "Confirmar Pedido" | O envio é barrado. As mensagens de erro apropriadas aparecem na tela: "Nome deve ter pelo menos 2 caracteres", "Sobrenome deve ter pelo menos 2 caracteres", "Email inválido", "Telefone inválido" e "CPF inválido". |

#### Resultados Esperados
- O sistema intercepta as entradas inválidas de acordo com o esquema de validação do Zod, impedindo o envio de dados corrompidos.

#### Critérios de Aceitação
- Mensagens de erro correspondentes aos schemas definidos no código devem ser exibidas exatamente sob cada campo correspondente.

---

### CT12 - Validação de envio sem aceitar os Termos de Uso

#### Objetivo
Garantir que a aceitação dos termos de uso e política de privacidade é obrigatória para conclusão de qualquer pedido.

#### Pré-Condições
- O usuário está na tela de checkout (`/order`) com todos os campos de dados preenchidos corretamente (Nome, Sobrenome, E-mail, Telefone, CPF e Loja).
- O checkbox "Li e aceito os Termos de Uso" está desmarcado.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Clicar no botão "Confirmar Pedido" | O sistema bloqueia a submissão do formulário. A mensagem "Aceite os termos" é exibida em vermelho ao lado/abaixo do checkbox dos termos. |
| 2  | Marcar o checkbox dos termos e clicar novamente em "Confirmar Pedido" | O sistema processa o formulário normalmente e avança para a página de sucesso. |

#### Resultados Esperados
- O pedido não é criado enquanto a caixa de termos de uso não for expressamente aceita.

#### Critérios de Aceitação
- O checkbox de termos deve possuir validação obrigatória no frontend antes de disparar o fechamento do pedido.

---

### CT13 - Simulação de Financiamento sem valor de entrada

#### Objetivo
Validar os cálculos das parcelas de financiamento para o valor total do veículo (sem entrada).

#### Pré-Condições
- O usuário configurou o veículo padrão de R$ 40.000,00 e está na tela `/order`.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Na seção "Forma de Pagamento", clicar em "Financiamento" | O painel de financiamento se expande exibindo o campo de "Valor da Entrada" (iniciando em 0). |
| 2  | Verificar as informações financeiras exibidas no painel de resumo de financiamento | Os valores devem corresponder aos cálculos:<br>- Parcela (12x): "R$ 3.400,00" (Calculado como `(40000 / 12) * 1.02`)<br>- Valor a financiar: "R$ 40.000,00"<br>- Total financiado: "R$ 40.800,00" (Calculado como `3400 * 12`)<br>- Juros totais: "R$ 800,00" (Calculado como `40800 - 40000`) |
| 3  | Verificar o valor "Total" no Resumo do Pedido lateral | O valor total atualiza de "R$ 40.000,00" para "R$ 40.800,00". |

#### Resultados Esperados
- Ao selecionar financiamento sem entrada, os juros de 2% são aplicados sobre o valor total do veículo, e a exibição das parcelas de 12x de R$ 3.400,00 e o total financiado de R$ 40.800,00 são atualizados dinamicamente.

#### Critérios de Aceitação
- O valor da parcela mensal deve ser exibido como "12x de R$ 3.400,00" para o carro de R$ 40.000,00 sem entrada.

---

### CT14 - Simulação de Financiamento com entrada válida

#### Objetivo
Validar se o valor inserido no campo "Valor da Entrada" é subtraído corretamente do montante financiado e se o cálculo das parcelas do saldo devedor está correto.

#### Pré-Condições
- O usuário está no checkout (`/order`) com o veículo configurado em R$ 40.000,00.
- A opção de pagamento "Financiamento" está selecionada.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Digitar "10000" no campo "Valor da Entrada" | Os valores no painel de financiamento são atualizados dinamicamente:<br>- Valor a financiar: "R$ 30.000,00"<br>- Parcela (12x): "R$ 2.550,00" (Calculado como `(30000 / 12) * 1.02`)<br>- Total financiado: "R$ 30.600,00"<br>- Juros totais: "R$ 600,00" (Calculado como `30600 - 30000`) |
| 2  | Verificar o valor total no Resumo do Pedido lateral | O valor total é atualizado para "R$ 40.600,00" (Entrada de R$ 10.000,00 + Financiado de R$ 30.600,00). |

#### Resultados Esperados
- A entrada é deduzida do valor base, e o cálculo de financiamento calcula os juros apenas sobre o saldo devedor restante (R$ 30.000,00). O valor final acumulado (entrada + parcelas com juros) reflete no resumo lateral.

#### Critérios de Aceitação
- O valor da parcela exibida deve ser precisamente "R$ 2.550,00" para R$ 10.000,00 de entrada em um carro de R$ 40.000,00.

---

### CT15 - Validação de valor de entrada acima do preço total

#### Objetivo
Validar que o sistema limita ou rejeita valores de entrada superiores ao preço total do veículo.

#### Pré-Condições
- O usuário está na tela de checkout (`/order`) com um veículo de R$ 40.000,00.
- A opção de pagamento "Financiamento" está ativa.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Digitar "50000" no campo "Valor da Entrada" | O campo aceita a digitação, porém o valor a financiar é travado em "R$ 0,00" (devido ao `Math.max(0, totalPrice - entryValue)` no código). A parcela calculada é de "R$ 0,00". |
| 2  | Digitar uma entrada com o valor exato do carro: "40000" | O valor a financiar passa a ser "R$ 0,00". O valor das parcelas também fica zerado. |

#### Resultados Esperados
- O sistema lida de forma segura com valores de entrada que excedam o valor do veículo, garantindo que o saldo a financiar ou parcelas nunca fiquem negativos.

#### Critérios de Aceitação
- O valor a financiar não deve ficar negativo sob nenhuma hipótese.
- O campo de entrada possui uma dica visual indicando o limite máximo ("Máximo: R$ 40.000,00").

---

### CT16 - Cancelamento do pedido e retorno ao configurador

#### Objetivo
Confirmar que o usuário pode desistir do checkout e voltar à tela do configurador sem perder suas seleções originais.

#### Pré-Condições
- O usuário configurou um veículo (ex: Cor: Lunar White, Rodas: Sport, Opcionais: Precision Park).
- O usuário está na rota `/order`.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Clicar na seta de retorno à esquerda do título "Finalizar Pedido" (ou botão Voltar do cabeçalho) | O usuário é redirecionado de volta para `/configure`. |
| 2  | Verificar o painel de configuração e a imagem do carro na tela do configurador | A cor "Lunar White", rodas "Sport" e opcional "Precision Park" ainda estão devidamente selecionados, e o preço permanece R$ 47.500,00. |

#### Resultados Esperados
- A navegação reversa preserva o estado da customização do carro para que o usuário possa fazer alterações sem ter que reiniciar o processo do zero.

#### Critérios de Aceitação
- O estado da configuração contido no `useConfiguratorStore` não deve ser limpo caso o usuário simplesmente volte à tela anterior.

---

### CT17 - Financiamento aprovado automaticamente por Score Alto (> 700)

#### Objetivo
Validar que a análise automática de crédito gera o status "APROVADO" quando o CPF consultado possui score acima de 700.

#### Pré-Condições
- O usuário está no checkout (`/order`) com a opção "Financiamento" selecionada.
- O score do CPF simulado retorna um valor de score superior a 700 (ex: 750).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Preencher todos os dados do formulário com CPF associado ao score > 700 | Os dados são inseridos. |
| 2  | Clicar no botão "Confirmar Pedido" | O sistema chama a Edge Function de análise de crédito e avalia o retorno do score. Como score > 700, o pedido é criado com status "APROVADO" e o usuário é redirecionado à página de sucesso (`/success`). |
| 3  | Verificar o cabeçalho e mensagem na página `/success` | Exibe em destaque verde: "Pedido Aprovado!" e o número do pedido. |

#### Resultados Esperados
- A análise de crédito identifica o score elevado e aprova a compra de financiamento de forma automática.

#### Critérios de Aceitação
- O status da coluna `status` no banco de dados para a linha deste pedido deve ser "APROVADO".
- A tela de sucesso deve exibir visualmente o estilo de sucesso (verde/CheckCircle).

---

### CT18 - Financiamento encaminhado para análise por Score Médio (501 a 700)

#### Objetivo
Validar que pedidos com score de crédito entre 501 e 700 são registrados com o status "EM_ANALISE" (Em análise manual).

#### Pré-Condições
- O usuário está no checkout (`/order`) com a opção "Financiamento" selecionada.
- O CPF simulado na consulta retorna um score no intervalo entre 501 e 700 (ex: 600).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Preencher o formulário com o CPF associado a score entre 501 e 700 | Os dados são inseridos. |
| 2  | Clicar no botão "Confirmar Pedido" | O sistema chama a análise de crédito. Como o score está na faixa média, o pedido é criado com status "EM_ANALISE" no banco e o usuário é redirecionado à página de sucesso. |
| 3  | Verificar as informações do pedido na tela de sucesso | Na tela de sucesso, por padrão do código (`order.status !== 'APROVADO'`), o estado da tela de sucesso exibe o estilo de reprovado. |

#### Resultados Esperados
- O pedido é registrado com status "EM_ANALISE" no banco de dados e a resposta do sistema segue o fluxo alternativo para crédito não aprovado instantaneamente.

#### Critérios de Aceitação
- No banco de dados, o campo `status` do pedido criado deve conter a string exata "EM_ANALISE".

---

### CT19 - Financiamento reprovado por Score Baixo (<= 500)

#### Objetivo
Validar que a análise automática de crédito resulta em status "REPROVADO" se o CPF possuir score menor ou igual a 500.

#### Pré-Condições
- O usuário está no checkout (`/order`) com a opção "Financiamento" selecionada.
- O CPF simulado na consulta retorna score menor ou igual a 500 (ex: 350).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Preencher todos os dados do formulário informando o CPF com score <= 500 | Os dados são inseridos. |
| 2  | Clicar no botão "Confirmar Pedido" | A Edge Function avalia o score baixo e o pedido é inserido com o status "REPROVADO". O usuário é redirecionado para a tela de confirmação. |
| 3  | Analisar a tela de destino (`/success`) | O título em destaque vermelho exibe "Crédito Reprovado" e a mensagem de apoio orienta a tentar novamente com a opção de pagamento à vista. |

#### Resultados Esperados
- O crédito é recusado pelo score insatisfatório e o pedido é marcado como "REPROVADO" no banco de dados.

#### Critérios de Aceitação
- O banco de dados deve registrar a entrada com status "REPROVADO".
- A interface de sucesso deve exibir visualmente a mensagem de insucesso e a cor de destaque vermelha.

---

### CT20 - Financiamento aprovado automaticamente por Entrada Alta (>= 50%)

#### Objetivo
Validar a regra de negócio especial onde um pagamento de entrada maior ou igual a 50% do valor total do veículo garante aprovação imediata do financiamento, mesmo que o cliente tenha um score de crédito baixo (<= 500).

#### Pré-Condições
- O usuário configurou um veículo de R$ 40.000,00 e está na página `/order`.
- A opção de pagamento "Financiamento" está selecionada.
- O CPF informado possui score baixo simulado (ex: 300, que em condições normais reprovaria o pedido).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Preencher os campos pessoais com o CPF de score baixo | Os campos pessoais são preenchidos. |
| 2  | Inserir o valor de "20000" (50% do valor de R$ 40.000) no campo "Valor da Entrada" | Os cálculos de parcelas são realizados. |
| 3  | Clicar no botão "Confirmar Pedido" | A Edge Function retorna o score baixo (300). No entanto, o sistema valida a exceção da entrada (R$ 20.000 / R$ 40.000 = 50%). O pedido é registrado como "APROVADO". |
| 4  | Observar a tela de redirecionamento (`/success`) | A tela exibe a confirmação de aprovação com sucesso ("Pedido Aprovado!"). |

#### Resultados Esperados
- O pedido contorna a reprovação de crédito convencional por score baixo devido ao pagamento de sinal/entrada expressivo de 50% ou mais do valor do carro.

#### Critérios de Aceitação
- O banco de dados deve registrar o pedido com status "APROVADO", ignorando o score obtido na consulta.

---

### CT21 - Falha técnica na API de análise de crédito

#### Objetivo
Verificar o tratamento do sistema quando a API externa/Edge Function de análise de crédito falha, está inacessível ou retorna dados malformados.

#### Pré-Condições
- O usuário está no checkout (`/order`) configurando pagamento por "Financiamento".
- O simulador ou rede da Edge Function é configurado para simular uma falha (erro 500 ou queda de conexão).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Preencher as informações e clicar em "Confirmar Pedido" | A chamada à Edge Function falha. |
| 2  | Observar a resposta visual do sistema | O sistema interrompe o processamento, reativa o botão de envio e apresenta um aviso em destaque (Toast de Erro) com o título "Erro" e a mensagem: "Falha ao consultar análise de crédito. Verifique seus dados ou tente mais tarde." |
| 3  | Verificar se o pedido foi criado ou se houve redirecionamento | O usuário permanece na página `/order`, os dados preenchidos são mantidos e nenhum registro de pedido é criado no banco. |

#### Resultados Esperados
- Em caso de falha de rede/API, o sistema apresenta um aviso explicativo para o usuário e previne a criação de um pedido inválido sem status definido.

#### Critérios de Aceitação
- O toast de erro contendo o identificador `data-testid="toast-error"` deve ser exibido na tela.
- O formulário deve voltar a ficar interativo sem perda de dados.

---

### CT22 - Exibição de tela de sucesso para pedido Aprovado

#### Objetivo
Validar as informações e opções exibidas ao cliente após obter um pedido Aprovado.

#### Pré-Condições
- O usuário acaba de submeter um pedido com sucesso que foi qualificado como Aprovado.
- O sistema redireciona para a rota `/success`.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Verificar o cabeçalho principal da página | Exibe "Pedido Aprovado!" e um ícone de verificação verde (CheckCircle). |
| 2  | Verificar o número do pedido exibido na tela | O código do pedido (ex: `VLO-K3A9P2`) é exibido e corresponde ao id gerado no banco de dados. |
| 3  | Verificar as informações do veículo e valores do resumo | Os dados correspondem exatamente às seleções anteriores e exibem o valor total e parcelas correspondentes ao pagamento selecionado. |
| 4  | Clicar no botão "Consultar Pedido" | O usuário é redirecionado para a rota de consulta de pedidos `/lookup`. |

#### Resultados Esperados
- A tela de sucesso para pedidos aprovados deve ser exibida em verde e carregar todas as informações do resumo de compra juntamente com o número do pedido.

#### Critérios de Aceitação
- O elemento com `data-testid="success-status"` deve conter o texto "Pedido Aprovado!".
- O elemento com `data-testid="order-id"` deve conter o código gerado no formato `VLO-[A-Z0-9]{6}`.

---

### CT23 - Exibição de tela de insucesso para pedido Reprovado

#### Objetivo
Confirmar o layout, mensagens e links alternativos expostos ao cliente após um pedido com status de crédito reprovado (ou em análise).

#### Pré-Condições
- O usuário submeteu um pedido de financiamento que foi reprovado pela análise.
- O sistema redireciona para a rota `/success`.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Analisar o cabeçalho e cor da tela de confirmação | Apresenta a mensagem "Crédito Reprovado", com ícone vermelho de erro (XCircle). |
| 2  | Ler a instrução descritiva abaixo do título | Texto exibido: "Infelizmente seu crédito não foi aprovado. Tente novamente com pagamento à vista." |
| 3  | Clicar no botão "Configurar Outro" | O usuário é redirecionado para a tela `/configure` com as opções do configurador resetadas aos valores padrão para permitir uma nova simulação. |

#### Resultados Esperados
- A tela deve assumir tom vermelho e apresentar mensagem clara explicando o motivo do insucesso da análise financeira, fornecendo atalho de retorno ao configurador.

#### Critérios de Aceitação
- O cabeçalho deve conter o texto exato "Crédito Reprovado".
- O botão "Configurar Outro" deve limpar a configuração e levar à rota `/configure`.

---

### CT24 - Consulta de pedido existente com código válido

#### Objetivo
Validar a funcionalidade de rastreamento de pedidos pelo código exclusivo gerado na compra.

#### Pré-Condições
- Um pedido válido existe no banco de dados com o número de pedido `VLO-TEST99` e status "APROVADO" (ou qualquer outro status).
- O usuário acessa a tela de consulta (`/lookup`).

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Digitar o código "VLO-TEST99" no campo de entrada "Número do Pedido" | O código é digitado. |
| 2  | Clicar no botão "Buscar Pedido" | O sistema exibe um indicador visual de busca ("Buscando..."). Em seguida, o card de resultado contendo as informações completas do pedido é carregado logo abaixo. |
| 3  | Verificar os detalhes exibidos no card do resultado | O card apresenta:<br>- Status do pedido: "APROVADO"<br>- Imagem e detalhes do veículo configurado<br>- Dados de nome, email e loja selecionada do cliente<br>- Detalhes de pagamento e valor total. |

#### Resultados Esperados
- A busca recupera com precisão o registro do pedido associado no banco de dados e exibe seus detalhes de forma estruturada.

#### Critérios de Aceitação
- O card de resultado deve possuir o atributo `data-testid="order-result-VLO-TEST99"`.
- O status do pedido exibido no card de busca deve bater com o status atualizado no banco.

---

### CT25 - Consulta de pedido com código inexistente

#### Objetivo
Garantir que a consulta de pedidos lida adequadamente com códigos inválidos ou não cadastrados, exibindo mensagem de erro clara.

#### Pré-Condições
- O usuário está na tela de consulta (`/lookup`).
- Não existe nenhum pedido com o código `VLO-FAKE00` no banco de dados.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Digitar "VLO-FAKE00" no campo "Número do Pedido" | O texto é inserido. |
| 2  | Clicar no botão "Buscar Pedido" | O sistema realiza a busca. O card de resultado não é exibido. No lugar, uma mensagem de erro é exibida em caixa vermelha contendo a mensagem: "Pedido não encontrado - Verifique o número do pedido e tente novamente". |

#### Resultados Esperados
- O sistema exibe uma mensagem de insucesso de busca, mantendo a caixa de consulta disponível para nova tentativa.

#### Critérios de Aceitação
- A mensagem de "Pedido não encontrado" deve aparecer na tela e o card de detalhes do pedido não deve ser renderizado.

---

### CT26 - Tentativa de busca com campo de consulta vazio

#### Objetivo
Verificar que a pesquisa de pedidos não é disparada caso a entrada do código do pedido esteja em branco.

#### Pré-Condições
- O usuário está na tela de consulta (`/lookup`).
- O campo "Número do Pedido" está vazio.

#### Passos

| Id | Ação | Resultado Esperado |
|----|------|--------------------|
| 1  | Observar a interatividade do botão "Buscar Pedido" com o campo vazio | O botão "Buscar Pedido" é exibido como desabilitado (disabled). |
| 2  | Tentar clicar no botão "Buscar Pedido" | Nenhuma ação acontece e nenhuma chamada ao banco de dados é disparada. |
| 3  | Digitar apenas espaços em branco no campo de entrada | O botão permanece desabilitado. |

#### Resultados Esperados
- A interface impede que requisições de busca vazias sejam enviadas, desabilitando o controle de envio.

#### Critérios de Aceitação
- O elemento HTML correspondente ao botão de busca deve conter a propriedade `disabled` enquanto o input de busca (removendo os espaços em branco) estiver vazio.
