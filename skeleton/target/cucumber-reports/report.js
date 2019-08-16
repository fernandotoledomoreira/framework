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
  "name": "teste",
  "description": "",
  "id": "teste;teste",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
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
  "name": "inserir \"\u003cpalavra\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "palavra inserida com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "teste;teste;",
  "rows": [
    {
      "cells": [
        "Link",
        "palavra"
      ],
      "line": 12,
      "id": "teste;teste;;1"
    },
    {
      "cells": [
        "https://seubarriga.wcaquino.me/login",
        "teste"
      ],
      "line": 13,
      "id": "teste;teste;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 4921368009,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "teste",
  "description": "",
  "id": "teste;teste;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@Web"
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
  "name": "inserir \"teste\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "palavra inserida com sucesso",
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
  "duration": 1075606544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 9
    }
  ],
  "location": "Steps.inserir_palavra(String)"
});
formatter.result({
  "duration": 190402493,
  "status": "passed"
});
formatter.match({
  "location": "Steps.palavra_inserida_com_sucesso()"
});
formatter.result({
  "duration": 19042,
  "status": "passed"
});
formatter.after({
  "duration": 2000737320,
  "error_message": "java.lang.NullPointerException\r\n\tat atu.testrecorder.ATUTestRecorder.stop(ATUTestRecorder.java:441)\r\n\tat steps.Hooks.tearDown(Hooks.java:33)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat com.microsoft.java.test.runner.junit4.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat com.microsoft.java.test.runner.junit4.CustomizedJUnit4CoreRunner.run(CustomizedJUnit4CoreRunner.java:45)\r\n\tat com.microsoft.java.test.runner.junit4.JUnit4Launcher.execute(JUnit4Launcher.java:30)\r\n\tat com.microsoft.java.test.runner.Launcher.main(Launcher.java:56)\r\n",
  "status": "failed"
});
});