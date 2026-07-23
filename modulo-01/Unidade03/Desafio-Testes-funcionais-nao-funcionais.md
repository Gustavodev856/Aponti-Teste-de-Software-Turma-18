# Parte 1 — Testes Funcionais

## Exercício 1 — Identificação das funcionalidades

---

## Funcionalidade: Cadastrar paciente

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir o cadastro de um novo paciente no sistema da clínica para que suas informações possam ser utilizadas em consultas e atendimentos. |
| **Usuário** | Recepcionista. |
| **Dados necessários** | Nome completo, CPF, telefone e e-mail. |
| **Resultado esperado** | O paciente é cadastrado com sucesso e seus dados ficam disponíveis para consulta pelos psicólogos e pela recepção. |
| **Possíveis condições de erro** | Durante os testes foi observado que o sistema aceita CPF com quantidade incorreta de caracteres, e-mails inválidos (sem o símbolo "@") e telefones com quantidade incorreta de dígitos. A ausência dessas validações pode resultar no cadastro de informações incorretas, dificultando a identificação e o contato com o paciente pelos profissionais da clínica. |

---

## Funcionalidade: Cadastrar psicólogo

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir o cadastro de novos psicólogos para que possam ser vinculados aos atendimentos realizados na clínica. |
| **Usuário** | Administrador. |
| **Dados necessários** | Nome completo, CRP, especialidade e telefone. |
| **Resultado esperado** | O psicólogo é cadastrado com sucesso e suas informações ficam disponíveis para utilização no sistema, como no agendamento de consultas. |
| **Possíveis condições de erro** | Durante os testes foi observado que o sistema aceita CRP sem validação de formato, permitindo letras, números e qualquer quantidade de caracteres. O campo de especialidade também não possui validação, e o telefone aceita qualquer quantidade de caracteres. A ausência dessas validações pode resultar no cadastro de informações incorretas, comprometendo a identificação do profissional e a qualidade dos dados armazenados no sistema. |

---

## Funcionalidade: Agendar consulta

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir o registro de novos agendamentos de consultas entre pacientes e psicólogos, organizando os atendimentos da clínica. |
| **Usuário** | Recepcionista ou Psicólogo. |
| **Dados necessários** | Nome completo do paciente, nome do psicólogo, data, horário e status da consulta (pendente, confirmado, entre outros). |
| **Resultado esperado** | O agendamento é salvo com sucesso e fica disponível para consulta pelos profissionais envolvidos no atendimento. |
| **Possíveis condições de erro** | Durante os testes foi observado que os campos de data e horário não possuem validação adequada, permitindo a inserção de formatos incorretos, como textos (strings), além de não apresentarem limite ou padrão definido. O campo de status também aceita valores sem validação. A ausência dessas regras pode gerar agendamentos com informações incorretas, causando problemas na organização da agenda da clínica. |

---

## Funcionalidade: Visualizar consultas

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir que usuários da clínica consultem os atendimentos agendados, facilitando o acompanhamento da agenda de pacientes e psicólogos. |
| **Usuário** | Recepcionista e Psicólogo. |
| **Dados necessários** | Data da consulta, nome do paciente, nome do psicólogo e status da consulta. |
| **Resultado esperado** | O sistema deve apresentar corretamente a lista de consultas cadastradas conforme os filtros informados pelo usuário. |
| **Possíveis condições de erro** | Durante os testes foi observado que, caso não existam consultas cadastradas ou os filtros informados não correspondam a nenhum registro, o sistema pode não apresentar informações adequadas ao usuário. Também podem ocorrer problemas caso os dados da consulta estejam incompletos ou haja falha no carregamento das informações. |

---

## Funcionalidade: Registrar atendimento

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir que o psicólogo registre informações da sessão realizada, mantendo o histórico de acompanhamento do paciente. |
| **Usuário** | Psicólogo. |
| **Dados necessários** | Nome do paciente, data do atendimento, observações da sessão e informações do acompanhamento psicológico. |
| **Resultado esperado** | O atendimento é salvo no sistema e fica disponível no histórico do paciente para futuras consultas. |
| **Possíveis condições de erro** | Durante os testes foi observado que o sistema pode permitir o salvamento de registros com informações incompletas caso não existam validações nos campos obrigatórios. Também podem ocorrer erros quando o paciente não está cadastrado ou quando há falha no armazenamento das informações. |

 -------------------------------------------------------------------------------------------------------------------------

 # Parte 1 — Testes Funcionais

## Exercício 1 — Identificação das funcionalidades

Este documento apresenta a análise das funcionalidades do sistema da clínica psicológica, identificando seus objetivos, usuários responsáveis, dados necessários, resultados esperados e possíveis falhas encontradas durante os testes funcionais.

---

# 1. Funcionalidade: Cadastro de Paciente

## Objetivo da funcionalidade
A funcionalidade de cadastro de paciente tem como objetivo permitir que a recepção registre novos pacientes no sistema, armazenando informações pessoais que serão utilizadas posteriormente em consultas e atendimentos realizados pela clínica.

## Usuário responsável
**Recepcionista**

## Dados necessários para cadastro
- Nome completo;
- CPF;
- Telefone;
- E-mail.

## Resultado esperado
Ao preencher corretamente todos os campos e realizar o cadastro, o sistema deve salvar as informações do paciente com sucesso. Após o cadastro, os dados devem ficar disponíveis para consulta pela recepção e pelos psicólogos responsáveis pelos atendimentos.

## Testes realizados e possíveis erros encontrados
Durante os testes foi identificado que o sistema não realiza validações adequadas nos campos de entrada:

- O campo CPF permite o cadastro com quantidade incorreta de caracteres.
- O campo de e-mail aceita formatos inválidos, como endereços sem o caractere obrigatório "@";
- O campo telefone não possui limite ou validação da quantidade correta de números.

A falta dessas validações pode permitir o armazenamento de dados incorretos, dificultando a identificação do paciente e a comunicação entre a clínica e o usuário cadastrado.

---

# 2. Funcionalidade: Cadastro de Psicólogo

## Objetivo da funcionalidade
A funcionalidade de cadastro de psicólogos tem como objetivo permitir que o administrador registre os profissionais da clínica, mantendo suas informações disponíveis para utilização no gerenciamento dos atendimentos.

## Usuário responsável
**Administrador**

## Dados necessários para cadastro
- Nome completo;
- CRP;
- Especialidade;
- Telefone.

## Resultado esperado
Após o preenchimento correto das informações, o sistema deve realizar o cadastro do psicólogo e disponibilizar seus dados para utilização em funcionalidades como agendamento de consultas.

## Testes realizados e possíveis erros encontrados
Durante os testes foram identificadas falhas relacionadas à validação dos campos:

- O campo CRP aceita letras e números sem restrição, além de não possuir limite definido de caracteres.
- O campo especialidade permite o preenchimento sem validação das informações inseridas.
- O campo telefone também não apresenta limite de caracteres ou validação de formato.

Essas falhas podem ocasionar o cadastro de profissionais com informações inválidas, prejudicando a organização dos dados da clínica e a identificação correta dos psicólogos cadastrados.

---

# 3. Funcionalidade: Agendamento de Consulta

## Objetivo da funcionalidade
A funcionalidade de agendamento tem como objetivo permitir o registro de consultas entre pacientes e psicólogos, organizando os horários disponíveis e mantendo o controle dos atendimentos realizados pela clínica.

## Usuário responsável
**Recepcionista ou Psicólogo**

## Dados necessários para cadastro
- Nome completo do paciente;
- Nome do psicólogo;
- Data da consulta;
- Horário;
- Status da consulta (pendente, confirmado, entre outros).

## Resultado esperado
Ao preencher os dados corretamente, o sistema deve salvar o agendamento e disponibilizar as informações para acompanhamento dos profissionais envolvidos no atendimento.

## Testes realizados e possíveis erros encontrados
Durante os testes foram identificadas falhas na validação dos campos:

- O campo de data permite valores em formatos inadequados, incluindo textos (strings), sem validação de formato ou limite de caracteres.
- O campo horário apresenta o mesmo problema, permitindo entradas que não correspondem a horários válidos.
- O campo status também não possui validação adequada, permitindo valores fora do padrão esperado.

A ausência dessas validações pode gerar registros de consultas incorretos, causando problemas na organização da agenda e no controle dos atendimentos da clínica.

---

# 4. Funcionalidade: Visualização de Consultas

## Objetivo da funcionalidade
A funcionalidade de visualização de consultas tem como objetivo permitir que os usuários da clínica consultem os agendamentos realizados, facilitando o acompanhamento da agenda de pacientes e psicólogos.

## Usuário responsável
**Recepcionista ou Psicólogo**

## Dados necessários para consulta
- Nome do paciente;
- Nome do psicólogo;
- Data da consulta;
- Horário;
- Status da consulta.

## Resultado esperado
Após realizar a busca, o sistema deve apresentar corretamente as consultas cadastradas de acordo com os filtros informados pelo usuário. As informações devem ser exibidas de forma organizada, permitindo o acompanhamento dos atendimentos agendados.

## Testes realizados e possíveis erros encontrados
Durante os testes foram identificadas possíveis falhas relacionadas à exibição e busca dos registros:

- O sistema pode não apresentar mensagens adequadas quando não existem consultas cadastradas.
- A pesquisa pode retornar resultados incorretos caso os filtros informados não sejam tratados corretamente.
- Informações incompletas de consultas podem ser exibidas sem aviso ao usuário.
- Pode ocorrer falha no carregamento dos dados caso haja problemas no armazenamento das informações.

A ausência de tratamentos para esses casos pode dificultar o acompanhamento da agenda da clínica e causar erros na organização dos atendimentos.

---

# 5. Funcionalidade: Registro de Atendimento

## Objetivo da funcionalidade
A funcionalidade de registro de atendimento tem como objetivo permitir que o psicólogo armazene informações referentes às sessões realizadas, criando um histórico de acompanhamento dos pacientes atendidos pela clínica.

## Usuário responsável
**Psicólogo**

## Dados necessários para registro
- Nome do paciente;
- Data do atendimento;
- Informações da sessão;
- Observações do psicólogo;
- Histórico do atendimento.

## Resultado esperado
Após preencher os dados corretamente e salvar o atendimento, o sistema deve armazenar as informações e disponibilizá-las posteriormente para consulta no histórico do paciente.

## Testes realizados e possíveis erros encontrados
Durante os testes foram identificadas possíveis falhas relacionadas ao preenchimento e armazenamento dos dados:

- O sistema pode permitir o salvamento de atendimentos sem o preenchimento de informações importantes.
- Campos de observação podem aceitar dados vazios ou inválidos.
- Pode ocorrer erro caso o paciente informado não esteja cadastrado no sistema.
- Falhas no armazenamento podem impedir que o histórico do atendimento seja salvo corretamente.

A falta de validações nesses campos pode comprometer o histórico dos pacientes e prejudicar o acompanhamento realizado pelos profissionais da clínica.

---