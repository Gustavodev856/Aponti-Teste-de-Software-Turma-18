# Atividade Avaliativa - Sistema de Gerenciamento de Pedidos (SGP)

## 1. Quais testes seriam Unitários ?

- **Cálculo automático do valor total do pedido**
  - **Justificativa:** Testa apenas a função que calcula o valor total com base no preço e na quantidade dos produtos.

- **Verificar se o pedido possui pelo menos um item**
  - **Justificativa:** Testa somente a regra de negócio que impede finalizar um pedido vazio.

- **Verificar se um pedido confirmado não pode ser alterado**
 - **Justificativa:** Testa apenas a lógica que bloqueia alterações após a confirmação do pedido.

---

## 2. Quais testes seriam de integração?

- **Integração com o banco de dados de produtos**
  - **Justificativa:** Verifica se o sistema consegue consultar corretamente os produtos cadastrados.

- **Integração com o serviço de autenticação**
  - **Justificativa:** Verifica se o login do usuário funciona corretamente com o serviço de autenticação.

- **Integração com o serviço de pedidos**
  - **Justificativa:** Verifica se os pedidos são enviados corretamente ao serviço responsável.

---

## 3. Quais testes seriam de sistema?

- **Cadastro e autenticação de usuários**
  - **Justificativa:** Testa todo o fluxo de cadastro e login na aplicação.

- **Consulta de produtos disponíveis**
  - **Justificativa:** Verifica se o usuário consegue visualizar corretamente os produtos.

- **Adição e remoção de itens no carrinho**
  - **Justificativa:** Testa o funcionamento completo do carrinho de compras.

- **Finalização do pedido com confirmação**
  - **Justificativa:** Verifica todo o processo de compra até a confirmação do pedido.

---

## 4. Quais testes seriam de aceitação?

- **Usuários não autenticados não podem finalizar pedidos**
  - **Justificativa:** Confirma que o sistema atende ao requisito definido pelo cliente.

- **O pedido deve conter pelo menos um item**
  - **Justificativa:** Garante que a regra de negócio foi implementada corretamente.

- **O valor total deve considerar quantidade e preço dos produtos**
  - **Justificativa:** Confirma que o cálculo atende ao requisito esperado.

- **Após a confirmação, o pedido não pode ser alterado**
  - **Justificativa:** Valida que o sistema cumpre essa regra de negócio.



