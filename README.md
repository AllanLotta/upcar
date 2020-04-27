# Upcar

Um joguinho de carro simples feito com React js

## Instruções para instação

###### .Clone o repositório

###### .Vá para a pasta do projeto

##### Rode o comando:

`yarn install` ou `npm install`

##### Agora você está pronto para da Start no servidor com o comando:

`yarn start` ou `npm start`

##### VOILA! O joguinho deve estar rodando:

http://localhost:3000

## Estratégia

Para montar esse simples joguinho apenas com a manipulação dos elementos do DOM sem utilizar libs como o canvas, foi preciso driblar alguns desafios:

#### Movimentação do carro

Para movimentar o carro ele foi posicionado ao bottom da div main do jogo e sua posição alterava de com base na margem do carro ao limite esquerdo da tela.

#### Obstáculos

Para gerar os obstáculos(CONES) e identificar as colisões foi renderizados divs no centro do cenário com animações que fazem as divs irem do centro ao bottom, simulando assim a aproximação do carro ao obstáculo. Ao término da animação é verificado se o carro se encontra na mesma posição do cone, se sim, é contabilizado um colisão.

## Ferramentas

Lista de "ferramentas" utilizadas para construir o joguinho:

###### .React js

###### .React Hooks

###### .Styled Components

###### .E um pouco de gambiarra do bem
