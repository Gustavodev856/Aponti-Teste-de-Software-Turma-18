# Defeito 3 – Cadastro do Psicólogo

## Funcionalidade

Cadastro profissional.

## Cenário

Durante o cadastro de um psicólogo, foi informado um número de registro profissional (CRP) contendo apenas **quatro dígitos**.

O sistema aceitou o cadastro normalmente, mesmo com um número de registro inválido.

### Resultado Esperado

O sistema deve validar o formato do CRP antes de concluir o cadastro, aceitando apenas registros válidos.

### Resultado Obtido

O sistema permite o cadastro de profissionais com CRP inválido.

### Prioridade

**Média**

### Tipo de Defeito

Validação de entrada.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ser identificado nas seguintes etapas:

- **Análise de Requisitos:** definindo as regras de validação do CRP.
- **Testes Unitários:** verificando a função responsável pela validação do campo.
- **Testes Funcionais:** realizando cadastros com CRPs válidos e inválidos.
- **Testes de Aceitação:** validando se o sistema atende às regras estabelecidas pela clínica.

O ideal seria que esse problema fosse encontrado durante os testes unitários ou funcionais.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Cadastro de profissionais com informações incorretas.
- Dificuldade para localizar registros válidos.
- Possibilidade de erros administrativos.

### Impactos para o negócio

- Perda da confiabilidade dos dados cadastrados.
- Risco de manter profissionais com informações inválidas.
- Problemas em auditorias e processos administrativos.
- Necessidade de retrabalho para corrigir os cadastros.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

Caso o problema fosse identificado durante o desenvolvimento, bastaria ajustar a validação do campo CRP.

Se descoberto apenas após vários cadastros incorretos, seria necessário corrigir o sistema e revisar todos os registros cadastrados, aumentando o tempo e o custo da manutenção.

---

# Conclusão

Esse defeito é uma falha de validação de entrada que permite o cadastro de psicólogos com CRP inválido. Embora possua prioridade média, deve ser corrigido para garantir a integridade e a confiabilidade das informações armazenadas no sistema.

---

# Defeito 4 – Controle Financeiro

## Funcionalidade

Recebimento de pagamentos.

## Cenário

Uma consulta possui o valor de **R$ 200,00**.

Foi registrado um pagamento de **R$ -50,00**, e o sistema aceitou normalmente esse valor.

Como consequência, o saldo financeiro ficou incorreto.

### Resultado Esperado

O sistema deve impedir o registro de valores negativos em pagamentos.

### Resultado Obtido

O sistema aceita valores negativos, comprometendo o controle financeiro.

### Prioridade

**Alta**

### Tipo de Defeito

Validação de negócio.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ser encontrado em:

- **Análise de Requisitos:** definindo que pagamentos devem possuir valores positivos.
- **Testes Unitários:** validando a regra de negócio responsável pelo recebimento.
- **Testes de Integração:** verificando o impacto dos pagamentos no saldo financeiro.
- **Testes Funcionais:** simulando pagamentos válidos e inválidos.

O ideal seria identificá-lo durante os testes unitários ou funcionais.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Informações financeiras incorretas.
- Dificuldade para controlar pagamentos.
- Possibilidade de erros nos relatórios financeiros.

### Impactos para o negócio

- Saldo financeiro inconsistente.
- Prejuízos no fechamento de caixa.
- Relatórios contábeis incorretos.
- Possíveis perdas financeiras.
- Redução da confiabilidade do sistema.

Como envolve informações financeiras, esse defeito possui prioridade alta e deve ser corrigido rapidamente.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

Quanto mais cedo esse defeito for identificado, menor será o custo da correção.

Caso seja descoberto somente após diversos pagamentos registrados incorretamente, além da correção do código, será necessário revisar os lançamentos financeiros, corrigir relatórios e ajustar os saldos, aumentando significativamente o custo da manutenção.

---

# Conclusão

O defeito permite o registro de pagamentos com valores negativos, comprometendo a integridade do controle financeiro. Trata-se de uma falha de validação de negócio que poderia ter sido evitada por meio de testes adequados durante o desenvolvimento. Sua correção é essencial para garantir a confiabilidade das informações financeiras da clínica.
```