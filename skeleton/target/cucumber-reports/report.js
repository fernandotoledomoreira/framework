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
  "line": 8,
  "name": "inserir email com \"\u003cemail\u003e\"",
  "keyword": "Quando "
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
  "duration": 9351988530,
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
  "line": 8,
  "name": "inserir email com \"automacao_teste@teste.com.br\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
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
  "duration": 3429127354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automacao_teste@teste.com.br",
      "offset": 19
    }
  ],
  "location": "Steps.inserir_email_com(String)"
});
formatter.result({
  "duration": 257203698,
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
  "duration": 789071627,
  "status": "passed"
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
  "duration": 49595918,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[\u003cBem vindo, teste!\u003e]\u003e but was:\u003c[Bem vindo, teste!]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat pages.Screen.mensagemBemVindo(Screen.java:38)\r\n\tat steps.Steps.sistema_apresenta(Steps.java:32)\r\n\tat ✽.Entao sistema apresenta \"\u003cBem vindo, teste!\u003e\"(teste.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 45135,
  "status": "passed"
});
});