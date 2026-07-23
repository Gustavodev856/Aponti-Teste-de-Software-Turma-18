# Parte 1 — Testes Funcionais

## Exercício 1 — Identificação das funcionalidades

### Funcionalidade: Cadastrar paciente

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir o cadastro de um novo paciente no sistema da clínica para que suas informações possam ser utilizadas em consultas e atendimentos. |
| **Usuário** | Recepcionista. |
| **Dados necessários** | Nome completo, CPF, telefone e e-mail. |
| **Resultado esperado** | O paciente é cadastrado com sucesso e seus dados ficam disponíveis para consulta pelos psicólogos e pela recepção. |
| **Possíveis condições de erro** | Durante os testes foi observado que o sistema aceita CPF com quantidade incorreta de caracteres, e-mails inválidos (sem o símbolo "@") e telefones com quantidade incorreta de dígitos. A ausência dessas validações pode resultar no cadastro de informações incorretas, dificultando a identificação e o contato com o paciente pelos profissionais da clínica. |

---

### Funcionalidade: Cadastrar psicólogo

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir o cadastro de novos psicólogos para que possam ser vinculados aos atendimentos realizados na clínica. |
| **Usuário** | Administrador. |
| **Dados necessários** | Nome completo, CRP, especialidade e telefone. |
| **Resultado esperado** | O psicólogo é cadastrado com sucesso e suas informações ficam disponíveis para utilização no sistema, como no agendamento de consultas. |
| **Possíveis condições de erro** | Durante os testes foi observado que o sistema aceita CRP sem validação de formato, permitindo letras, números e qualquer quantidade de caracteres. O campo de especialidade também não possui validação, e o telefone aceita qualquer quantidade de caracteres. A ausência dessas validações pode resultar no cadastro de informações incorretas, comprometendo a identificação do profissional e a qualidade dos dados armazenados no sistema. |

---

### Funcionalidade: Agendar consulta

| Campo | Descrição |
|-------|-----------|
| **Objetivo da funcionalidade** | Permitir o registro de novos agendamentos de consultas entre pacientes e psicólogos, organizando os atendimentos da clínica. |
| **Usuário** | Recepcionista ou Psicólogo. |
| **Dados necessários** | Nome completo do paciente, nome do psicólogo, data, horário e status da consulta (pendente, confirmado, entre outros). |
| **Resultado esperado** | O agendamento é salvo com sucesso e fica disponível para consulta pelos profissionais envolvidos no atendimento. |
| **Possíveis condições de erro** | Durante os testes foi observado que os campos de data e horário não possuem validação adequada, permitindo a inserção de formatos incorretos, como textos (strings), além de não apresentarem limite ou padrão definido. O campo de status também aceita valores sem validação. A ausência dessas regras pode gerar agendamentos com informações incorretas, causando problemas na organização da agenda da clínica. |