#language: pt
#Author: Fernando Toledo Moreira
Funcionalidade: teste

@testeWeb
  Esquema do Cenario: teste login
    Dado que esteja no site seu barriga "<Link>"
    Quando inserir email com "<email>"
    E inserir senha com "<senha>"
    Entao sistema apresenta "<Bem vindo, teste!>"
    
    Exemplos: 
   	| Link 													       | email                        | senha |
   	| https://seubarriga.wcaquino.me/login | automacao_teste@teste.com.br | 1234  |