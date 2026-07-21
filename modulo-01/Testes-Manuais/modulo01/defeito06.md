# Defeito 6 – Exclusão de Paciente

## Funcionalidade

Exclusão de paciente.

## Cenário

Foi realizada a exclusão de um paciente que possuía diversas consultas registradas no sistema.

Após a exclusão, as consultas permaneceram na agenda, porém sem nenhum paciente associado, gerando inconsistência nos dados.

### Resultado Esperado

O sistema deve impedir a exclusão de pacientes que possuem consultas vinculadas ou remover corretamente os vínculos, mantendo a integridade dos dados.

### Resultado Obtido

O sistema exclui o paciente, mas mantém consultas órfãs na agenda, causando inconsistência no banco de dados.

### Prioridade

**Alta**

### Tipo de Defeito

Integridade de banco de dados.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ser identificado nas seguintes etapas:

- **Modelagem do Banco de Dados:** definindo corretamente os relacionamentos e restrições entre pacientes e consultas.
- **Testes de Integração:** verificando o comportamento do sistema ao excluir registros relacionados.
- **Testes Funcionais:** simulando a exclusão de pacientes com consultas cadastradas.
- **Testes de Aceitação:** validando se o sistema mantém a consistência das informações após operações de exclusão.

O ideal seria identificar esse problema durante a modelagem do banco de dados e nos testes de integração.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Consultas sem paciente identificado.
- Dificuldade para localizar informações corretas.
- Possíveis erros no atendimento e no gerenciamento da agenda.

### Impactos para o negócio

- Inconsistência nas informações armazenadas.
- Comprometimento da confiabilidade do sistema.
- Necessidade de correções manuais no banco de dados.
- Risco de perda de histórico dos pacientes.
- Aumento do tempo e dos custos de manutenção.

Como afeta diretamente a integridade dos dados, esse defeito possui prioridade alta e deve ser corrigido imediatamente.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

Esse defeito está diretamente relacionado ao gráfico do custo de correção de bugs. Caso fosse identificado durante a modelagem do banco de dados ou nos testes internos, a correção teria baixo custo.

Se fosse descoberto apenas após o sistema estar em produção, seria necessário corrigir as regras de exclusão, reparar registros inconsistentes no banco de dados e garantir que novas inconsistências não ocorram, aumentando significativamente o custo da manutenção.

---

# Conclusão

O defeito ocorre porque o sistema permite excluir pacientes que possuem consultas vinculadas, deixando registros inconsistentes no banco de dados. Esse problema compromete a integridade das informações e pode afetar o funcionamento da agenda da clínica. A implementação de regras de integridade referencial e testes adequados durante o desenvolvimento evitaria esse tipo de falha.
```