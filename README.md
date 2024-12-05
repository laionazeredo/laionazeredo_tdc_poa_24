# laionazeredo_tdc_poa_24
Repository to store all information related to my participation on TDC POA 2024


## Escopo

Este repositório concentra o material usado na palestra `IA full cycle com TypeScript: Como treinar e 'deployar' modelos de IA na web com Deno` apresentada no TDC POA 2024 no dia 5/12/24.

O material principal consiste em uma apresentação em PDF e uma demonstracão usando o Jupyter Notebooks.

### Pré-requisitos
- [Deno instalado](https://docs.deno.com/runtime/)
- [Deno Jupyter instalado](https://docs.deno.com/runtime/reference/cli/jupyter/)
- VSCode ou outro editor de texto
- Conhecimento básico de JavaScript
- Conhecimento básico de Redes Neurais
- Conhecimento básico de TensorFlow.js
- Conhecimento básico de Git
- Conhecimento básico de Terminal

### Apresentação

A apresentação usada no evento está disponível em `./presentation/ia_fullcycle_com_typescript.pdf`

### Demonstração

#### Dados

Os dados que usaremos são dados de mais de 800 pessoas que morreram no Titanic, com informações como idade, sexo, classe do navio em que estava e quanto pagou de passagem. É um *dataset* bastante conhecido e que foi compilado pela Universidade de Stanford.

#### Objetivo

Nosso objetivo é treinar um modelo preditivo em que, passando um perfil de pessoa, o modelo calcule a probabilidade de sobrevivência à tragédia do Titanic.


#### Ferramentas

Usaremos o TensorFlow.js para nos ajudar a criar uma Rede Neural simples e treinaremos ela com nossos dados.


#### Como usar a Demo

1. Clone o repositório
2. vá para a raiz do projeto
3. Execute o comando `deno install` no seu terminal
4. Execute `deno task backward` no terminal algumas vezes até que no terminal indique que você está no `commit`marcado como início da demo
5. Abra o jupyter notebook localizado em `./data_analysis_and_model/titanic_model.ipynb`
6. No seu terminal vá executando `deno task forward` e veja o notebook ir se completando.
