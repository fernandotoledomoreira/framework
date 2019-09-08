$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("teste.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Fernando Toledo Moreira"
    }
  ],
  "line": 3,
  "name": "teste",
  "description": "",
  "id": "teste",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "teste login",
  "description": "",
  "id": "teste;teste-login",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@testeWeb"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que esteja no site seu barriga \"\u003cLink\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "inserir senha com \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "sistema apresenta \"\u003cBem vindo, teste!\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "teste;teste-login;",
  "rows": [
    {
      "cells": [
        "Link",
        "email",
        "senha"
      ],
      "line": 13,
      "id": "teste;teste-login;;1"
    },
    {
      "cells": [
        "https://seubarriga.wcaquino.me/login",
        "automacao_teste@teste.com.br",
        "1234"
      ],
      "line": 14,
      "id": "teste;teste-login;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2319784536,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "teste login",
  "description": "",
  "id": "teste;teste-login;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@testeWeb"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que esteja no site seu barriga \"https://seubarriga.wcaquino.me/login\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "inserir senha com \"1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "sistema apresenta \"\u003cBem vindo, teste!\u003e\"",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "https://seubarriga.wcaquino.me/login",
      "offset": 32
    }
  ],
  "location": "Steps.que_esteja_no_site_seu_barriga(String)"
});
formatter.result({
  "duration": 2146283723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 19
    }
  ],
  "location": "Steps.inserir_senha_com(String)"
});
formatter.result({
  "duration": 1302162,
  "error_message": "java.lang.NullPointerException\n\tat pages.Screen.preencherCampoSenha(Screen.java:42)\n\tat steps.Steps.inserir_senha_com(Steps.java:27)\n\tat ✽.E inserir senha com \"1234\"(teste.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cBem vindo, teste!\u003e",
      "offset": 19
    }
  ],
  "location": "Steps.sistema_apresenta(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 210526,
  "status": "passed"
});
});