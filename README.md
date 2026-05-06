# Teste Técnico — Desenvolvedor(a) Plataforma de Delivery

Olá! Obrigado(a) pelo interesse na vaga.

Este teste simula o tipo de trabalho do dia a dia aqui: manutenção de um sistema real, corrigir bugs que aparecem em produção e implementar features novas.

**Antes de começar:** rode o projeto, use o app, tente fazer um pedido do início ao fim. Isso vai te ajudar muito mais do que sair lendo o código.

---

## Setup

Requisitos mínimos

Antes de rodar o projeto, verifique se você possui:

Node.js >= 18.x

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## O que precisa ser feito

### Parte 1 — Correção de bugs (obrigatório)

Existem **3 bugs** no código. Encontre, reproduza no navegador e corrija cada um.

No seu e-meial de retorno, para cada bug escreva:
- Onde está (arquivo e linha)
- O que você viu de errado
- Por que acontece
- O que você fez para corrigir

> **Dica:** os 3 bugs aparecem no fluxo de adicionar produtos e finalizar pedido. Faça esse caminho completo prestando atenção nos valores e no comportamento do carrinho.

---

### Parte 2 — Feature: cupom de desconto (obrigatório)

Adicione a funcionalidade de **cupom de desconto** na página de checkout.

**Cupons válidos:**
- `BEMVINDO10` → 10% de desconto no total
- `FRETE20` → R$ 20,00 de desconto fixo

**O que precisa funcionar:**
- Campo para digitar o cupom
- Mostrar o desconto no resumo (ex: "Desconto: − R$ 5,00")
- Mensagem de erro se o cupom for inválido
- O total enviado para a API deve refletir o desconto

**Bonus (não obrigatório):** e se o desconto for maior que o valor do pedido? Como você trataria isso?

---

### Parte 3 — Olhar crítico (obrigatório)

Crie um arquivo `RESPOSTAS.md` e responda:

> Além dos 3 bugs que você corrigiu, o que mais você notou no projeto que parece errado, incompleto ou que poderia melhorar? Lista o que encontrar — não precisa corrigir, só identificar.

Pode ser qualquer coisa: código, UX, lógica, comportamento estranho. Sem quantidade mínima — escreva o que realmente enxergou.

---

### Parte 4 — Melhoria livre (opcional, mas valorizado)

Se quiser e tiver tempo, escolha **uma coisa** da Parte 3 e implemente. No `RESPOSTAS.md`, explique em poucas linhas por que escolheu essa melhoria.

---

## Como será avaliado

| Critério | Peso |
|---|---|
| Encontrou e corrigiu os 3 bugs, com boa descrição | 35% |
| Feature de cupom funciona | 25% |
| Qualidade do código (organização, TypeScript básico) | 20% |
| O que você enxergou além do que foi pedido (Parte 3) | 15% |
| Clareza e organização do PR | 5% |

A Parte 4 não tem peso fixo, mas conta muito na decisão final.

---

## Entrega

1. Faça um **clone** deste repositório
2. Crie um repositório público no seu GitHub
3. Suba o seu código para esse repositório
4. Envie o link do projeto do seu GitHub para **[inserir e-mail]** com assunto: `Teste Técnico — {Seu Nome}`

---

## Regras

- ✅ Pode consultar documentação, Stack Overflow, artigos
- ✅ Pode usar IA para tirar dúvidas pontuais de conceito
- ❌ Não pode pedir ajuda a outras pessoas
- ❌ Não pode usar IA para escrever o código por você
- ❌ Não altere `data/products.ts` nem a estrutura da API

**Prazo:** 3 dias corridos.

Dúvidas? Entre em contato, sem problema nenhum.

Boa sorte! 🚀
