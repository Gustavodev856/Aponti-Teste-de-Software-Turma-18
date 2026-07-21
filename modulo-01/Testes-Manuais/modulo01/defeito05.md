# Defeito 5 – Controle de Estoque

## Funcionalidade

Baixa de materiais.

## Cenário

O estoque possui **3 caixas de testes psicológicos** disponíveis.

Foi realizada uma baixa de **10 unidades**, e o sistema permitiu a operação.

Após a baixa, a quantidade em estoque ficou **-7**.

### Resultado Esperado

O sistema deve validar a quantidade disponível em estoque e impedir saídas que resultem em saldo negativo.

### Resultado Obtido

O sistema permitiu uma saída maior que a quantidade disponível, gerando estoque negativo.

### Prioridade

**Alta**

### Tipo de Defeito

Regra de negócio.

---

# Análise

## 1. Em que fase do ciclo de desenvolvimento esse defeito poderia ter sido encontrado?

Esse defeito poderia ter sido identificado nas seguintes etapas:

- **Análise de Requisitos:** definindo que não é permitido realizar saídas superiores à quantidade disponível em estoque.
- **Testes Unitários:** verificando a lógica responsável pela baixa de materiais.
- **Testes de Integração:** validando a atualização correta do estoque após cada movimentação.
- **Testes Funcionais:** simulando cenários de saída com quantidades maiores que o estoque disponível.
- **Testes de Aceitação:** confirmando que o sistema atende às regras de controle de estoque da clínica.

O ideal seria detectar esse problema durante os testes unitários ou funcionais, antes da implantação do sistema.

---

## 2. Impactos do defeito para o usuário e para o negócio

### Impactos para o usuário

- Informações incorretas sobre a quantidade de materiais disponíveis.
- Dificuldade no controle do estoque.
- Possibilidade de solicitar materiais inexistentes.

### Impactos para o negócio

- Estoque inconsistente.
- Erros no planejamento de compras.
- Falta de materiais para atendimento aos pacientes.
- Aumento dos custos operacionais devido a compras emergenciais.
- Redução da confiabilidade do sistema de gestão.

Como o controle de estoque influencia diretamente o funcionamento da clínica, esse defeito possui prioridade alta e deve ser corrigido rapidamente.

---

## 3. Existe relação com o gráfico do custo de correção de bugs?

Sim.

Esse defeito está relacionado ao gráfico do custo de correção de bugs, pois quanto mais tarde ele for identificado, maior será o custo para corrigi-lo.

Se fosse encontrado durante o desenvolvimento ou nos testes internos, bastaria corrigir a regra de negócio responsável pela validação do estoque.

Caso fosse descoberto apenas em produção, seria necessário corrigir o sistema, revisar movimentações incorretas, ajustar o estoque físico e atualizar os registros, aumentando o tempo e o custo da manutenção.

---

# Conclusão

O defeito consiste na ausência de uma regra de negócio que impeça a saída de materiais em quantidade superior ao estoque disponível. Isso permite a geração de estoque negativo, comprometendo a confiabilidade das informações e a gestão dos materiais da clínica. A correção deve ser realizada antes da implantação do sistema para evitar prejuízos operacionais e financeiros.
```