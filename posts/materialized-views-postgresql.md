---
title: "Materialized Views no PostgreSQL"
date: "2023-08-27"
description: "Materialized Views podem alternativas mais performáticas, porém mais caras, para suas views que estejam sobrecarregando seu banco de dados."
cover: "sobre-curriculos.jpeg"
---

# Materialized View

## O que são?

### Contexto:

Views: tabela lógica criada para facilitar acesso à algumas informações

**Materialized views**: usa a mesma regra de sistema das views, porém os dados são persistidos. Isso implica em uma maior utilização da quantidade de dados para storage, tendo em visto que a tabela se torna "materializada".

**Materialized Views** precisam de atualizações para que os dados persistidos nessa tabela recebam, também, as atualizações.

## Exemplos:

**Postgres**:

Para a **criação de uma Materialized View** utilizando **POSTGRES**

```SQL
CREATE MATERIALIZED VIEW minha_materialized_view AS
SELECT
    tabela1.a,
    tabela1.b,
    tabela2.c
FROM tabela1
    JOIN tabela 2
    ON tabela2.tabela1_id = tabela1.id;
```

Para inferir **atualizações na sua Materialized View**:

```SQL
REFRESH MATERIALIZED VIEW sales_summary;
```

Para mais informações leia a documentação do próprio PostgreSQL:

https://www.postgresql.org/docs/current/rules-materializedviews.html
