# Aponti-Teste-de-Software-Turma-18

# Git e GitHub - Guia Completo de Comandos

Este repositório reúne os principais comandos do **Git** e do **GitHub**, organizados por categorias, com suas funções e exemplos de uso.

---

# O que é Git?

Git é um sistema de controle de versão distribuído que permite registrar alterações em arquivos, controlar versões de projetos e facilitar o trabalho em equipe.

## Vantagens

- Controle de versões
- Histórico completo de alterações
- Trabalho colaborativo
- Recuperação de versões antigas
- Desenvolvimento paralelo com branches
- Integração com GitHub

---

# O que é GitHub?

GitHub é uma plataforma de hospedagem de repositórios Git que permite armazenar projetos na nuvem, colaborar com outras pessoas e gerenciar o desenvolvimento de software.

---

# Configuração Inicial

## Verificar versão

```bash
git --version
```

## Configurar nome

```bash
git config --global user.name "Seu Nome"
```

## Configurar e-mail

```bash
git config --global user.email "seuemail@email.com"
```

## Listar configurações

```bash
git config --list
```

---

# Criando um Repositório

Criar pasta

```bash
mkdir projeto
```

Entrar na pasta

```bash
cd projeto
```

Inicializar Git

```bash
git init
```

---

# Verificando o Repositório

Mostrar status

```bash
git status
```

Mostrar histórico

```bash
git log
```

Mostrar histórico resumido

```bash
git log --oneline
```

Mostrar histórico em gráfico

```bash
git log --graph --oneline --all
```

---

# Adicionando Arquivos

Adicionar um arquivo

```bash
git add README.md
```

Adicionar todos os arquivos

```bash
git add .
```

---

# Criando Commits

Criar commit

```bash
git commit -m "Mensagem do commit"
```

Alterar último commit

```bash
git commit --amend
```

---

# Comparando Alterações

Mostrar diferenças

```bash
git diff
```

Mostrar diferenças da Staging Area

```bash
git diff --staged
```

---

# Trabalhando com Branches

Listar branches

```bash
git branch
```

Criar branch

```bash
git branch nova-branch
```

Criar e trocar de branch

```bash
git switch -c nova-branch
```

ou

```bash
git checkout -b nova-branch
```

Trocar de branch

```bash
git switch main
```

Excluir branch

```bash
git branch -d nova-branch
```

Forçar exclusão

```bash
git branch -D nova-branch
```

---

# Merge

Unir branch

```bash
git merge nova-branch
```

---

# Clonando Repositórios

```bash
git clone URL_DO_REPOSITORIO
```

Exemplo

```bash
git clone https://github.com/usuario/projeto.git
```

---

# Repositórios Remotos

Adicionar remoto

```bash
git remote add origin URL
```

Ver remotos

```bash
git remote -v
```

Alterar URL do remoto

```bash
git remote set-url origin NOVA_URL
```

Remover remoto

```bash
git remote remove origin
```

---

# Enviando Arquivos

Primeiro envio

```bash
git push -u origin main
```

Envios seguintes

```bash
git push
```

Enviar outra branch

```bash
git push origin minha-branch
```

---

# Atualizando o Projeto

Baixar alterações

```bash
git pull
```

Baixar sem fazer merge

```bash
git fetch
```

---

# Restaurando Arquivos

Descartar alterações

```bash
git restore arquivo.txt
```

Restaurar todos

```bash
git restore .
```

---

# Reset

Remover arquivo da Staging Area

```bash
git reset HEAD arquivo.txt
```

Desfazer último commit mantendo alterações

```bash
git reset --soft HEAD~1
```

Desfazer commit e alterações

```bash
git reset --hard HEAD~1
```

---

# Git Stash

Salvar alterações temporariamente

```bash
git stash
```

Listar stashes

```bash
git stash list
```

Recuperar alterações

```bash
git stash pop
```

Aplicar sem remover

```bash
git stash apply
```

Excluir stash

```bash
git stash drop
```

---

# Tags

Criar tag

```bash
git tag v1.0
```

Listar tags

```bash
git tag
```

Enviar tags

```bash
git push origin --tags
```

---

# Removendo Arquivos

Remover arquivo

```bash
git rm arquivo.txt
```

Remover pasta

```bash
git rm -r pasta
```

---

# Renomeando Arquivos

```bash
git mv antigo.txt novo.txt
```

---

# Ignorando Arquivos

Criar arquivo

```text
.gitignore
```

Exemplo

```text
node_modules/
.env
*.log
dist/
```

---

# Fluxo Básico

```bash
git init

git add .

git commit -m "Primeiro commit"

git remote add origin URL

git push -u origin main
```

---

# Fluxo de Desenvolvimento

```bash
git pull

git switch -c feature-login

git add .

git commit -m "Criando tela de login"

git push -u origin feature-login
```

Depois:

- Abrir Pull Request
- Revisar código
- Fazer Merge
- Atualizar a branch principal

```bash
git switch main

git pull
```

---

# Principais Conceitos

## Working Directory

Área onde os arquivos são editados.

## Staging Area

Área de preparação para o commit.

## Repository

Local onde o Git armazena o histórico do projeto.

## Commit

Registro permanente das alterações.

## Branch

Linha independente de desenvolvimento.

## Merge

União de duas branches.

## Remote

Repositório hospedado no GitHub.

## Origin

Nome padrão do repositório remoto.

## Pull Request

Solicitação de revisão e integração de código.

## Fork

Cópia de um repositório para sua conta no GitHub.

## Clone

Cópia completa de um repositório remoto para o computador.

---

# Boas Práticas

- Fazer commits pequenos e frequentes.
- Escrever mensagens claras nos commits.
- Utilizar branches para novas funcionalidades.
- Executar `git pull` antes de começar a trabalhar.
- Resolver conflitos com atenção.
- Não trabalhar diretamente na branch principal em projetos colaborativos.
- Utilizar `.gitignore` para arquivos que não devem ser versionados.

---

# Referência Rápida

| Comando | Função |
|----------|--------|
| git init | Inicializa um repositório |
| git clone | Clona um repositório |
| git status | Mostra o estado do projeto |
| git add | Adiciona arquivos ao Stage |
| git commit | Salva alterações |
| git push | Envia alterações ao GitHub |
| git pull | Atualiza o projeto |
| git fetch | Baixa alterações sem integrar |
| git diff | Mostra diferenças |
| git log | Histórico de commits |
| git branch | Gerencia branches |
| git switch | Troca de branch |
| git checkout | Cria ou troca de branch |
| git merge | Une branches |
| git restore | Desfaz alterações locais |
| git reset | Remove staging ou desfaz commits |
| git stash | Guarda alterações temporárias |
| git tag | Cria versões |
| git remote | Gerencia repositórios remotos |
| git rm | Remove arquivos |
| git mv | Renomeia arquivos |