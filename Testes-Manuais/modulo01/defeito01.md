# Atividade Avaliativa – Análise de Defeito de Software

## Sistema

**PsicoCare – Sistema de Gestão para Clínica de Psicologia**

### Descrição

O PsicoCare é um sistema web utilizado por uma clínica de psicologia para gerenciar pacientes, psicólogos, consultas e processos administrativos.

### Módulos do Sistema

- Cadastro de Pacientes (Ficha de Anamnese)
- Agenda de Consultas
- Cadastro de Psicólogos
- Controle Financeiro
- Controle de Estoque

---

# Defeito 1 – Ficha de Anamnese

## Funcionalidade

Cadastro de pacientes.

## Cenário

Uma recepcionista realizou o cadastro de um novo paciente preenchendo todos os campos obrigatórios da ficha de anamnese. Após clicar no botão **Salvar**, o sistema exibiu a mensagem:

> Cadastro realizado com sucesso.

Porém, ao pesquisar o paciente posteriormente, nenhum cadastro foi encontrado.

### Resultado Esperado

O sistema deve salvar corretamente todas as informações da ficha de anamnese e permitir sua consulta posteriormente.

### Resultado Obtido

O sistema informa que o cadastro foi realizado com sucesso, porém os dados não são gravados no banco de dados.

### Prioridade

**Alta**

### Tipo de Defeito

Erro de persistência de dados.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ser identificado em diferentes etapas do desenvolvimento:

- **Testes Unitários:** verificando se o método responsável por salvar o paciente realmente grava os dados no banco de dados.
- **Testes de Integração:** validando a comunicação entre a aplicação e o banco de dados.
- **Testes Funcionais (Sistema):** executando o fluxo completo de cadastro e pesquisa do paciente.
- **Testes de Aceitação:** durante a validação realizada pelos usuários antes da implantação.

O ideal seria detectar esse problema durante os testes de integração ou testes funcionais, evitando que ele chegasse ao ambiente de produção.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Perda das informações cadastradas.
- Necessidade de realizar o cadastro novamente.
- Aumento do tempo de atendimento.
- Possíveis atrasos nas consultas.
- Perda de confiança no sistema.

### Impactos para o negócio

- Redução da produtividade da equipe.
- Risco de perda de dados importantes dos pacientes.
- Insatisfação dos clientes.
- Custos adicionais para suporte e correção.
- Danos à imagem e credibilidade da clínica.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

Esse defeito está diretamente relacionado ao gráfico do custo de correção de bugs, que demonstra que quanto mais tarde um erro é encontrado, maior será o custo para corrigi-lo.

Se fosse identificado durante o desenvolvimento ou nos testes internos, a correção teria baixo custo.

Caso fosse descoberto somente após a implantação do sistema, além da correção do código, seria necessário prestar suporte aos usuários, recuperar informações perdidas (quando possível) e minimizar os impactos causados na rotina da clínica.

Isso aumenta significativamente o tempo, o esforço e o custo da manutenção.

---

# Conclusão

O defeito analisado é considerado crítico, pois impede o armazenamento das informações dos pacientes mesmo exibindo uma mensagem de sucesso ao usuário.

Esse problema poderia ter sido identificado nas fases de testes unitários, integração ou testes funcionais. Caso chegasse ao ambiente de produção, causaria prejuízos tanto para os usuários quanto para a clínica, além de elevar significativamente o custo de correção.

Esse cenário reforça a importância da realização de testes durante todo o ciclo de desenvolvimento de software, garantindo maior qualidade e confiabilidade do sistema.