#language: pt
#Author: Fernando Toledo Moreira
Funcionalidade: teste

@Web
  Esquema do Cenario: teste
    Dado que esteja no site seu barriga "<Link>"
    Quando inserir "<palavra>"
    Entao palavra inserida com sucesso
    
    Exemplos: 
   	| Link 													       | palavra | 
   	| https://seubarriga.wcaquino.me/login | teste   |