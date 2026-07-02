# Defeito 8 – Login

## Funcionalidade

Autenticação.

## Cenário

Um usuário realizou **cinco tentativas consecutivas de login com senha incorreta**.

Mesmo após essas tentativas, o sistema continuou permitindo novas tentativas ilimitadas, sem qualquer bloqueio ou proteção.

### Resultado Esperado

O sistema deve bloquear temporariamente o acesso ou aplicar uma medida de segurança após várias tentativas consecutivas de login incorretas, reduzindo o risco de ataques.

### Resultado Obtido

O sistema permite tentativas ilimitadas de autenticação, sem qualquer mecanismo de proteção.

### Prioridade

**Urgente**

### Tipo de Defeito

Segurança.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ser identificado nas seguintes etapas:

- **Análise de Requisitos:** definindo requisitos de segurança para autenticação e controle de tentativas de acesso.
- **Desenvolvimento:** implementando mecanismos de bloqueio temporário e monitoramento de tentativas de login.
- **Testes de Segurança:** verificando a resistência do sistema a ataques de força bruta.
- **Testes Funcionais:** validando o comportamento do sistema após várias tentativas consecutivas de login incorretas.
- **Testes de Aceitação:** confirmando que os requisitos de segurança foram atendidos.

O ideal seria detectar esse problema durante os testes de segurança, antes da implantação do sistema.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Maior risco de acesso não autorizado às contas.
- Possível exposição de informações pessoais e confidenciais.
- Perda de confiança na segurança do sistema.

### Impactos para o negócio

- Vulnerabilidade a ataques de força bruta.
- Possível vazamento de dados de pacientes e profissionais.
- Comprometimento da confidencialidade das informações.
- Danos à reputação da clínica.
- Possíveis prejuízos financeiros e problemas relacionados à conformidade com a legislação de proteção de dados.

Por envolver a segurança do sistema e dos dados dos usuários, esse defeito possui prioridade urgente.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

O gráfico do custo de correção de bugs demonstra que falhas encontradas nas fases iniciais do desenvolvimento possuem menor custo para correção.

Caso esse problema fosse identificado durante a definição dos requisitos ou nos testes de segurança, sua correção seria relativamente simples. Porém, se fosse descoberto apenas após a implantação, especialmente após um incidente de segurança, seria necessário corrigir o sistema, investigar o ocorrido, restaurar a confiança dos usuários e adotar medidas adicionais de proteção, aumentando significativamente o custo da correção.

---

# Conclusão

O defeito consiste na ausência de um mecanismo de proteção contra múltiplas tentativas de login incorretas, tornando o sistema vulnerável a ataques de força bruta. Trata-se de uma falha de segurança crítica que poderia ter sido identificada durante a definição dos requisitos e nos testes de segurança. Sua correção é essencial para proteger as informações dos usuários e garantir a confiabilidade do sistema.
```