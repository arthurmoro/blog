---
title: "Submódulos Git como Alternativa a Pacotes Privados (NodeJS) para Times em Crescimento"
date: "2024-12-10"
description: "Melhorando o fluxo de trabalho com submodulos do git. Aplicando seus conhecimentos de git para uma solução simples e elegante para o seu dia-a-dia."
cover: "git-submodules.png"
---

# Submódulos Git como Alternativa a Pacotes Privados (NodeJS) para Times em Crescimento

Ao longo do tempo, trabalhando em times em crescimento, percebi algumas dificuldades recorrentes ao lidar com pacotes internos no formato de NPM Packages. Frequentemente, para aplicar alterações, era necessário remover e reinstalar pacotes manualmente, o que comprometia a agilidade e a eficiência do time.

Pensando em uma solução para melhorar esse fluxo, fiz uma prova de conceito utilizando submódulos Git. Embora a configuração inicial tenha apresentado alguns desafios, ao me aprofundar no problema, cheguei a um modelo funcional e interessante. Gostaria de compartilhar essa abordagem com vocês!

---

## Por que usar submódulos Git?

Submódulos Git permitem que você inclua repositórios Git externos (ou internos) dentro de outro repositório. Isso significa que podemos tratar dependências internas como parte do repositório principal, mas ainda manter o código em repositórios separados, com controle de versão independente.

### Vantagens

- Alterações são injetadas diretamente, sem necessidade de publicar um novo pacote.
- Menor tempo de espera para equipes que dependem de atualizações constantes.
- Possibilidade de trabalhar com diferentes versões do submódulo diretamente.

---

## Passo a passo para configurar submódulos como dependências internas

### 1. Remova as dependências do NPM

Caso você já tenha os pacotes internos como dependências do NPM, remova-os do `node_modules` e do arquivo `package.json`:

```bash
npm uninstall @company/lib
```

### 2. Inicialize os submódulos (se ainda não o fez)

Se o seu repositório ainda não usa submódulos, você precisa inicializá-los:

```bash
git submodule init
```

### 3. Adicione o submódulo

Eu recomendo manter os submódulos em uma pasta na raiz do projeto para facilitar a manutenção:

```bash
git submodule add <url-do-submodulo> ./submodules/lib
```

### 4. Configure o `package.json` para usar o submódulo

No arquivo `package.json`, adicione o submódulo como uma dependência com base no exemplo:

```json
{
  "dependencies": {
    "@company/lib": "file:./submodules/lib"
  }
}
```

### 5. Instale as dependências

Após configurar o `package.json`, rode o comando para instalar todas as dependências:

```bash
npm install
```

---

## Como garantir consistência entre projetos?

Um ponto importante ao usar submódulos é garantir que todos os membros do time estejam sincronizados com as mesmas versões dos submódulos. Para isso:

- Certifique-se de rodar os seguintes comandos para atualizar seus módulos:

```bash
git submodule update --init --recursive
```

- Ao alterar algo no submódulo, lembre-se de **commitar e pushar** as alterações tanto no submódulo quanto no repositório principal.

---

## Clonando um repositório com submodulos (submodules)

```bash
git clone --recurse-submodules GIT_URL
```

## Considerações finais

Essa abordagem com submódulos Git pode ser especialmente útil para equipes que precisam de um fluxo mais dinâmico ao trabalhar com dependências internas. No entanto, é importante avaliar se essa solução faz sentido para o seu time e contexto, já que o uso de submódulos pode trazer complexidades adicionais, como a necessidade de comandos extras para atualizar ou sincronizar submódulos.

Se implementada corretamente, essa estratégia pode trazer mais agilidade e produtividade para o time, permitindo que as dependências internas sejam atualizadas de forma rápida e integrada ao fluxo de desenvolvimento.

Espero que esse guia tenha sido útil! Infelizmente não fiz uma area de comentários. Mas quem sabe hihihihi 🚀
