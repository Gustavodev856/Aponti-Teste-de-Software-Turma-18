# Defeito 7 – Pesquisa de Pacientes

## Funcionalidade

Pesquisa de pacientes.

## Cenário

Ao pesquisar pelo nome **"José"**, o sistema retorna os resultados corretamente.

Entretanto, ao pesquisar por **"josé"** (utilizando letras minúsculas), nenhum resultado é encontrado.

### Resultado Esperado

O sistema deve realizar a pesquisa sem diferenciar letras maiúsculas e minúsculas, retornando os mesmos resultados independentemente da forma como o nome foi digitado.

### Resultado Obtido

A busca é sensível ao uso de letras maiúsculas e minúsculas, tornando a pesquisa inconsistente.

### Prioridade

**Baixa**

### Tipo de Defeito

Usabilidade.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ser identificado nas seguintes etapas:

- **Análise de Requisitos:** definindo que a pesquisa deve ser flexível e facilitar a localização dos pacientes.
- **Testes Unitários:** verificando o funcionamento da função de busca.
- **Testes Funcionais:** realizando pesquisas com diferentes combinações de letras maiúsculas e minúsculas.
- **Testes de Usabilidade:** avaliando a experiência do usuário durante a utilização da pesquisa.

O ideal seria identificar esse problema durante os testes funcionais ou de usabilidade.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Dificuldade para localizar pacientes cadastrados.
- Necessidade de repetir a pesquisa utilizando diferentes formas de escrita.
- Perda de tempo durante o atendimento.
- Experiência de uso menos intuitiva.

### Impactos para o negócio

- Redução da produtividade da equipe.
- Aumento do tempo de atendimento aos pacientes.
- Sensação de baixa qualidade do sistema.
- Possível insatisfação dos usuários.

Embora seja um defeito de prioridade baixa, ele afeta diretamente a experiência de uso e a eficiência do sistema.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

Se esse defeito fosse identificado durante o desenvolvimento ou nos testes de usabilidade, a correção seria simples, bastando ajustar a lógica da pesquisa para ignorar diferenças entre letras maiúsculas e minúsculas.

Caso fosse descoberto apenas após a implantação do sistema, seria necessário realizar manutenção no mecanismo de busca e disponibilizar uma atualização para os usuários, aumentando o custo da correção.

---

# Conclusão

O defeito consiste em uma falha de usabilidade, pois a pesquisa diferencia letras maiúsculas e minúsculas, dificultando a localização dos pacientes. Apesar de possuir prioridade baixa, sua correção melhora significativamente a experiência do usuário e torna o sistema mais intuitivo e eficiente.
```