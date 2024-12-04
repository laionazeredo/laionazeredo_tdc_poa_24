---
marp: true
theme: cybertopia-laion
class: invert
paginate: true
header: 'I.A. Full Cycle com TypeScript'
footer: 'Laion Azeredo - 2024'

export_to_pdf: npx @marp-team/marp-cli --theme ./themes/cybertopia-laion.css ia_fullcycle_com_typescript.md -o ia_fullcycle_com_typescript.pdf --allow-local-files
---

# I.A. Full Cycle com TypeScript

Isso mesmo: tipos, *console.log()* e código com chaves!

TDC POA — 2024

---

![bg right](https://avatars.githubusercontent.com/u/57836931?v=4)

##### Quem sou eu

**Laion Azeredo**

webdev 12 yrs+

lead dev @ ADP

<br><br><br>

<p class='footnote'>
  <strong>
    !(Especialista em  I.A.)
  </strong>
</p>

---

##### Agenda

- Porque Python domina o campo de I.A.
- JS/TS e I.A.: O Ecossistema atual
- *Talk is cheap, show me the code!*
  - *Data wrangling* com Jupyter, Deno e Danfo.js
  - Machine Learning com TensorFlow.js
  - Webapp com Deno Fresh e TensorFlow.js
  - Deploy com Deno Deploy

---

##### Uma breve história de Python ♥️ IA (1)

- Python surge em 1991 como um ['projeto de natal' de Guido Van Rossum](https://pt.wikipedia.org/wiki/Guido_van_Rossum#:~:text=H%C3%A1%20mais%20de,%5B6%5D);
- A ideia era criar uma linguagem ['tão fácil de ler quanto o inglês'](https://pt.wikipedia.org/wiki/Guido_van_Rossum#:~:text=c%C3%B3digo%20que%20fosse%20t%C3%A3o%20intelig%C3%ADvel%20quanto%20ingl%C3%AAs) e que fosse de uso prático para tarefas simples do dia a dia;

---

##### Uma breve história de Python ♥️ IA (2)

- Principalmente após a publicação do Python 2.0, a linguagem começa a se tornar bastante popular entre a comunidade Linux, em especial para a programação de utilitários;
- Mas a *virada de chave* para a adoção do Python no ramo científico foi o lançamento do [**Numpy**](https://numpy.org/) em 2005;

---

##### Uma breve história de Python ♥️ IA (3)

- O Numpy traz para o jogo estruturas de dados novas para lidar de modo eficiente com arrays multidimensionais e operações matemáticas complexas;
- Com um *backend* em **C** (para a maioria das operações com arrays) e **Fortran** (para a parte de Algebra Linear, em especial), o desempenho do Numpy, associado com a simplicidade do Python, fizeram o ecossistema crescer exponencialmente na comunidade científica;

---

##### Uma breve história de Python ♥️ IA (4)

  Na esteira do Numpy e do crescimento do Python para fora da comunidade *hacker* do Linux, vieram ao mundo diversas bibliotecas que compõem a base do ecossistema e sua força atual;

---

##### Uma breve história de Python ♥️ IA (5)

- Ainda em 2005, o **SciPy** consolida sua infraestrutura em torno do Numpy;
- Em 2007 temos o lançamento do **scikit-learn**, trazendo diversos algoritmos de *machine learning* com uma interface amigável e eficiente;
- Em 2008 chega o **Pandas** e seu *Dataframe* para lidar com dados tabulares;
- Entre 2015 e 2016 temos **TensorFlow** e **PyTorch** que trazem *deep learning* de modo acessível para a comunidade;

---

##### Mas o Python não está sozinho...

| <p>Ecossistema</p> | <p>Curva</p> | <p><i>Libs</i></p> | <p>Comunidade</p> | <p>Performance</p> |
| ------------------ | ------------ | ----------- | ----------------- | ------------------ |
| Python             | ⬇️            | ⬆️           | ⬆️                 | ⬇️                  |
| Julia              | ⬇️            | ⬆️           | ⬇️                 | ⏺️                  |
| Mojo               | ⬇️            | ⬆️           | ⬇️                 | ⬆️                  |
| R                  | ⏺️           | ⏺️           | ⏺️                | ⏺️                 |
| Rust               | ⬆️            | ⬇️           | ⬇️                 | ⬆️                  |

---

##### Ou seja...

A combinação de um ecossistema de *libs* grande e abrangente, com uma comunidade numerosa, pujante e uma barreira de entrada na linguagem baixa (sintaxe simples, linguagem interpretada, etc.) **fazem do python o principal ecossistema para desenvolvimento de IA atualmente.**

Mesmo considerando suas fragilidades, como baixa de segurança de *runtime*, baixo desempenho e não ser nativa da *Web.*

---

# Conclusão

#### Para entrar no mundo de IA eu preciso saber Python.

#### Ponto final!

---

# Obrigado!

---

# E o ecossistema JS/TS?

---

##### Dá para fazer *machine learning* com JavaScript?

Não apenas dá como temos um ecossistema cada vez mais completo e abrangente no que tange às tarefas para analisar dados, treinar modelos e entregar *data apps*.

---

##### Machine Learning/ Deep Learning

- **[TensorFlow.js](https://www.tensorflow.org/js?hl=pt-br)**: dispensa apresentações. Portado diretamente do Python, pode inclusive converter modelos compilados em Python para rodar em JS. É acelerado por WebGPU e pode rodar no *browser*;
- **[WebDNN](https://mil-tokyo.github.io/webdnn/)**: biblioteca para executar redes neurais pré-compiladas diretamente no *browser*, com performance próxima a do servidor. Isso mesmo: exporte sua DNN do Keras ou qualquer outro *framework* e execute diretamente em um *React*, por exemplo;

---

##### Gráficos e Plotagem

- **[Plotly JS](https://plotly.com/javascript/)**: talvez uma das *lib* de visualização de dados mais populares no mundo Python tem seu *porting* para JavaScript;
- **[D3.js](https://d3js.org/)**: a *lib* *de facto* quando se pensa em visualização de dados no mundo JS. É a base para diversas outras (inclusive o Plotly) e oferece diversidade e customização quase infinitas;

---

##### Matemática e Estatística

- **[Math.js](https://mathjs.org/index.html)**: biblioteca de matemática avançada com um *parser* de expressões bastante flexível. É praticamente um **Wolfram Alpha** dentro do seu código;
- **[Numjs](https://github.com/grimmer0125/numjs?tab=readme-ov-file)**: é o Numpy em JS. Faça de tudo um pouco com `NdArrays`;

---

##### Processamento de Linguagem Natural

- **[Natural](https://naturalnode.github.io/natural/)**: biblioteca com diversos utilitários para se trabalhar com linguagem natural, como tokenização, TF-IDS, N-gramas, distâncias entre *strings* e análise de sentimento;
- **[Compromise](https://github.com/spencermountain/compromise)**: biblioteca incrível para manipulação e tratamento de texto, com uma interface intuitiva e *blaaazing-faaast*;

---

##### Dataframes e Data Wrangling

- **[Danfo.js](https://danfo.jsdata.org/)**: imagine que Pandas, Matplotlib e TensorFlow tem um filho: esse é o Danfo. É uma *lib* de alta performance para manipulação de dataframes e tensores e plotagem básica de dados;
- **[Arquero](https://idl.uw.edu/arquero/)**: *lib* bastante interessante para manipulação de dataframes, com uma sintaxe intuitiva e diversos utilitários que aumentam bastante a produtividade;
- **[Pandas.js](https://stratodem.github.io/pandas.js-docs/#introduction)**: bom, o nome já diz tudo!

---

##### Diferenciais do ecossistema JS/TS

O JS/TS traz features bastante interessantes para o jogo quando se pensa em desenvolvimento de aplicações de inteligência ou intensiva em dados:

- **Desempenho**: com WebGPU e WebAssembly, temos acesso a performance quase nativa;
- **Abrangência**: js é a linguagem mais popular do mundo. Em geral, é mais fácil ensinar um *framework* para uma pessoa que ensinar uma linguagem do zero;
- **Portabilidade**: Roda literalmente em qualquer lugar!

---

##### Uma stack possível

- Deno com Jupyter Notebooks para análise de dados, data wrangling, aquisição de dados e treinamento do modelo.
- Deno com Fresh para criação de aplicações *web* intensivas em dados rápidas e fácies de manter.
- Deno Deploy para publicar a aplicação na Edge para maximizar a experiência do usuário.

---

##### WTF is [Deno](https://deno.com/)?

![width:300px](./assets/Deno_Logo_2024.svg.png)

Deno rainha! Node nadinha!

---

##### Desafios

- Ecossistema insipiente;
- Comunidade pequena;
- Imagem não ser associada com essa categoria de problema;

---

#### Vamos para a prática?

- *Data wrangling* com Jupyter, Deno e Danfo.js
- Machine Learning com TensorFlow.js
- Webapp com Deno Fresh e TensorFlow.js
- Deploy com Deno Deploy

---
# Link do Repo

![width:400](./assets/TDC_POA_24_QR_Code.svg)

---

# Obrigado

- [linkedin.com/in/laion-azeredo](https://www.linkedin.com/in/laion-azeredo/)
- [https://github.com/laionazeredo](https://github.com/laionazeredo)
