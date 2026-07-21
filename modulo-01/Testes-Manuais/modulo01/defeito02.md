# Defeito 2 – Agenda de Consultas

## Funcionalidade

Agendamento de consultas.

## Cenário

Um paciente já possuía uma consulta agendada para as **15:00** com determinado psicólogo. Em seguida, foi realizado um novo agendamento para o **mesmo psicólogo**, no **mesmo dia e horário**.

O sistema aceitou os dois agendamentos, gerando conflito na agenda.

### Resultado Esperado

O sistema deve validar a disponibilidade do psicólogo e impedir o agendamento de duas consultas no mesmo horário.

### Resultado Obtido

O sistema permitiu dois agendamentos para o mesmo psicólogo no mesmo dia e horário.

### Prioridade

**Urgente**

### Tipo de Defeito

Regra de negócio.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ter sido identificado nas seguintes etapas:

- **Análise de Requisitos:** a regra de negócio deveria especificar que um psicólogo não pode atender dois pacientes ao mesmo tempo.
- **Testes Unitários:** verificando a lógica responsável por validar a disponibilidade da agenda.
- **Testes de Integração:** garantindo que o sistema consulte corretamente os horários já cadastrados antes de salvar um novo agendamento.
- **Testes Funcionais:** simulando tentativas de agendar duas consultas para o mesmo profissional no mesmo horário.
- **Testes de Aceitação:** validando o comportamento do sistema junto aos usuários da clínica.

O ideal seria identificar esse defeito ainda na fase de análise de requisitos ou durante os testes funcionais.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Conflito de horários entre pacientes.
- Atrasos no atendimento.
- Cancelamento ou remarcação de consultas.
- Insatisfação dos pacientes.
- Perda de confiança na organização da clínica.

### Impactos para o negócio

- Problemas na gestão da agenda dos psicólogos.
- Redução da qualidade do atendimento.
- Possíveis perdas financeiras devido a cancelamentos.
- Sobrecarga da equipe administrativa para reorganizar os horários.
- Danos à reputação da clínica.

Como o agendamento é uma das principais funcionalidades do sistema, esse defeito possui prioridade urgente e deve ser corrigido imediatamente.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

Esse defeito possui relação direta com o gráfico do custo de correção de bugs. Caso fosse identificado durante a fase de levantamento de requisitos ou nos testes internos, sua correção teria baixo custo.

Entretanto, se fosse descoberto apenas após o sistema entrar em produção, seria necessário corrigir a regra de negócio, reorganizar consultas já agendadas, prestar suporte aos pacientes afetados e lidar com possíveis prejuízos financeiros e de imagem da clínica.

Quanto mais tarde esse problema fosse encontrado, maior seria o custo para corrigi-lo.

---

# Conclusão

O defeito consiste na ausência da validação que impede dois agendamentos para o mesmo psicólogo no mesmo horário. Trata-se de uma falha de regra de negócio que poderia ter sido identificada durante a análise de requisitos, nos testes unitários ou nos testes funcionais. Caso chegasse ao ambiente de produção, causaria conflitos na agenda, prejuízos operacionais e insatisfação dos pacientes, além de aumentar significativamente o custo de correção.
```