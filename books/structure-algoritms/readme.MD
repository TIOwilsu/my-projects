## Capitulo 01

### Exercício 1.1
Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado ?

*Resolução:*
``` javascript
x = log 128 na base 2
x = log 2 elevado a 7 na base 2
x = 7 x log 2 na base 2
x = 7 x 1
x = 7

// Resposta: O número máximo de etapas é 7
```

### Exercício 1.2
Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora ?

*Resolução:*
``` javascript
x = log 256 na base 2
x = log 2 elevado a 8 na base 2
x = 8 x log 2 na base 2
x = 8 x 1
x = 8

// Resposta: O número máximo de etapas é 8
```


### Exercício 1.3
Forneça o tempo de execução para o seguinte problema: Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda de telefone.

*Resolução:*

``` javascript
// Resposta: O tempo de execução deste algoritmo é de O(log n) 
```

### Exercício 1.4
Forneça o tempo de execução para o seguinte problema: Você tem o número de telefone e deseja encontrar pelo dono dele em uma agenda telefônica.

*Resolução:*

``` javascript
// Resposta: O tempo de execução deste algoritmo é de O(n) 
```

### Exercício 1.5
Forneça o tempo de execução para o seguinte problema: Você quer ler cada número da agenda telefônica.

*Resolução:*

``` javascript
// Resposta: O tempo de execução deste algoritmo é de O(n) 
```

### Exercício 1.6
Forneça o tempo de execução para o seguinte problema: Você quer ler cada número da agenda telefônica.

*Resolução:*

``` javascript
// Resposta: O tempo de execução deste algoritmo é de O(n) 

```

## Capítulo 2

### Exercício 2.1
Suponha que você esteja criando um aplicativo para acompanhar as suas finanças.

1. Compras
2. Cinema
3. Mensalidade

Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês, você deverá revisar os seus gastos e resumir o quanto gastou. Logo, você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo?

*Resolução:*

```javascript
/// Resposta: Lista encadeada.
```

### Exercício 2.2
Suponha que você esteja criando um aplicativo para anotar os pedidos dos clientes em um restaurante. Seu aplicativo precisa de uma lista de pedidos. Os garçons adicionam os pedidos a essa lista e os chefes retiram os pedidos da lista. Funciona como uma fila. Os garçons colocam os pedidos no final da fila e os chefes retiram os pedidos do começo dela para cozinhá-los.
Você usaria um array ou uma lista encadeada para implementar essa lista? (Dica: listas encadeadas são boas para inserções/ eliminações e arrays são bons para acesso aleatório. O que fazer neste caso?)

*Resolução:*

```javascript
/// Resposta: Lista encadeada.
```

### Exercício 2.3
Vamos analisar um experimento. Imagine que o Facebook guarda uma lista de usuários. Quando alguém tenta acessar o Facebook, uma busca é feita pelo nome de usuário. Se o nome da pessoa está na lista, ela pode continuar o acesso. As pessoas acessam o Facebook com muita frequência, então existem muitas buscas nessa lista. Presuma que o Facebook usa a pesquisa binária para procurar um nome na lista. A pesquisa binária requer acesso aleatório - você precisa ser capaz de acessar o meio da lista de nomes instantaneamente. Sabendo disso, você implementaria essa lista como um array ou uma lista encadeada?

*Resolução:*

```javascript
/// Resposta: Um array ordenado, pois somente o array é possível acessar o valor de um item que está localizado no meio do array, entretando a lista encadeada não é possível acessar um valor específico, dessa forma teria que ir acessando cada item dentro da lista encadeada até encontrar o item desejado.
```

### Exercício 2.4
As pessoas se inscrevem no Facebook com muita frequência também. Suponha que você decida usar um array para armazenar a lista de usuários. Quais as desvantagens de um array em relação às inserções? Em particular, imagine que você está usando a pesquisa binária para buscar os logins. O que acontece quando você adiciona novos usuários em um array?

*Resolução:*

```javascript
/// Resposta: Vou dar um exemplo para responder a primeira pergunta, imagine um array com algumas posições preenchidas aleatoriamente e o desenvolvedor quer inserir um conjunto de 5 items sequencialmente, ou seja, um atrás do outro. Nesse caso, o array é um problema devido por não ter gastar mais tempo para poder inserir todos os elementos pertos um do outro. Agora respondendo a segunda pergunta, se caso estivesse utilizando uma pesquisa binária e fosse adicionado novos usuários no array, aconteceria de precisar fazer ordenação para poder realizar a pesquisa binária, pois a pesquisa binária so funciona se os items dentro do array estiverem ordenados.
```

### Exercício 2.5
Na verdade, o Facebook não usa nem arrays nem listas encadeadas para armazenar informações. Vamos considerar ema cetrutura de dados hibridas a daray a listas encadeadas. Voce tem um array com 26 lois. cada si ot aponta para uma lista encadeada. Por exemplo, o primeiro slot do array aponta para uma lista encadeada que contém os usistios que começam com a letra 4. O segundo slot aponta para a lista encadeada que contém os usuários que começam com a letra B, e assim por diante.
Suponha que o Adit B se inscreva no Facebook e você queira adicioná-lo à lista. Você vai ao slot 1 do array, a seguir para a lista encadeada do slot 1, e adiciona Adit B no final. Agora, suponha que você queira procurar o Zakhir H. Você vai ao slot 26, que aponta para a lista encadeada de todos os nomes começados em Z.
Então, procura pela lista até encontrar o Zakhir H.
Compare esta estrutura híbrida com arrays e listas encadeadas. É mais lento ou mais rápido fazer inserções e eliminações nesse caso?
Você não precisa responder dando o tempo de execução Big(O), apenas diga se a nova estrutura de dados é mais rápida ou mais lenta do que os arrays e as listas encadeadas.

*Resolução:*

```javascript
/// Resposta: Para buscas - mais lenta do que arrays, mais rápida do que listas encadeadas. Para inserções - mais rápida do que arrays, mesmo tempo que as listas encadeadas. Portanto, é mais lenta para buscas que os arrays, porém mais rápida ou igual às listas encadeadas para tudo.
```
### Exercício 3.1
Suponha que eu forneça uma pilha de chamada com o esta:
Quais informações você pode retirar baseando-se nesta pilha de chamada ?

*Resolução:*

```javascript
/// Resposta: Eu posso remover o "sauda 2" primeiro, pois ele é a primeira função a ser chamada na pilha de chamada, da qual possui armazenado na memória o nome com o valor "maggie". Após essa chamada, é possível realizar a chamada da função "sauda", da qual possui armazenada na memória o nome com o valor "maggie".
```

### Exercício 3.2
Suponha que você acidentalmente escreva uma função recursiva que fique executando infinitamente. Como você viu, seu computador aloca memória na pilha para cada chamada de função. O que acontece com a pilha quando a função recursiva fica executando infinitamente?

*Resolução:*


```javascript
/// Resposta: A pilha cresce eternamente. Cada programa tem uma limitada quantidade de espaço na pilha de chamada. Quando o seu programa fica sem espaço (o que eventualmente acontece), ele é finalizado com um erro de overflow (estouro) da pilha.
```

### Exercício 4.1
Escreva o código para a função soma vista,anteriormente

*Resolução:*


```javascript
plus(number) {
    
    if(list === []) {
        return 0
    }

}
```

### Exercício 4.2 
Escreva uma função recursiva que contem o número de items de um lista

*Resolução:*


```javascript
function countListItems(items)  {
    if(items.length === 0 ) {
        return 0;
    }

    items.shift();
    const count = countListItems(items)

    return count + 1;
}

const list = [1,2,3,4,5,6];
```

### Exercício 4.3
Encontre o valor mais alto da lista

*Resolução:*

```javascript
function findMaxValue(items) {
    const [firstItem, secondItem] = items;

    if(items.length === 2) {
        return firstItem > secondItem ? firstItem : secondItem;
    }

    items.shift();
    const subMax = findMaxValue(items);

    return firstItem > subMax ? firstItem : subMax;
}

const items = [2,3,5,4,1];
findMaxValue(items);
```

### Exercício 4.4
Você se lembra da pesquisa binária do Capítulo 1? Ela também é um algoritmo do tipo dividir para conquistar. Você consegue determinar o caso-base e o caso recursivo para a pesquisa binária?

*Resolução:*

```javascript
const binarySearch = (items, item, startIndex = 0, endIndex = items.length - 1) => {
    if(startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middleItem = items[middleIndex];
        
        if(middleItem === item) {
            return middleIndex;
        }

        if(middleItem > item) {
            return binarySearch(items, item, startIndex, middleIndex - 1);
        }

        if(middleItem < item) {
            return binarySearch(items, item, middleIndex + 1, endIndex);
        }
    }

    return null;
}

const numbers = [1,3,5,7,9];

console.log(binarySearch(numbers, 3));
```

### Exercício 4.5
Quanto tempo levaria, em notação Big O, para imprimir o valor de cada elemento em um array?

*Resolução:*

```javascript
// Resposta: Log(n)
```

### Exercício 4.6
Quanto tempo levaria, em notação Big O, para duplicar o valor de cada elemento em um array?

*Resolução:*

```javascript
// Resposta: O(n)
```

### Exercício 4.7
Quanto tempo levaria, em notação Big O, para duplicar apenas o primeiro elemento de um array?

*Resolução:*

```javascript
// Resposta: O(1)
``` 

### Exercício 4.8
Quanto tempo levaria, em notação Big O, para criar uma tabela de multiplicação com todos os elementos do Atra: Assim, caso o seu array seja 2, 3, 7, 8, 10%, você primei culiplicará cada elemento por 2. Depois, multiplicará cada elemento por 3 e então por 7, e assim por diante.?

*Resolução:*

```javascript
// Resposta: O(n²)
```

### Exercício 5.1
A função `f(x) = 1` é consistente ?

*Resolução:*

```javascript
// Resposta: Retorna um número fixo, ou seja, consistente.
```

### Exercício 5.2
A função `f(x) = rand()` é consistente ?

*Resolução:*

```javascript
// Resposta: Retorna um número aleatório, ou seja, inconsistente.
```

### Exercício 5.3
A função `f(x) = proximo_espaco_vazio()` é consistente ?

*Resolução:*

```javascript
// Resposta: Retorna o indice do proximo espaço livre de uma tabela hash, ou seja, inconsistente.
```

### Exercício 5.4
A função `f(x) = len(x)`                                                                                                       )` é consistente ?

*Resolução:*

```javascript
// Resposta: Usa o comprimento da string como índice, ou seja, consistente. 
```


### Exercício 5.5
Uma lista telefônica em que as chaves são os nomes e os valores são os números telefônicos. Os nomes são os seguintes: Esther, Ben, Bob e Dan.Uma lista telefônica em que as chaves são os nomes e os valores são os números telefônicos. Os nomes são os seguintes: Esther, Ben, Bob e Dan.

*Resolução:*

```javascript
// Resposta: A funções C e D fornecerão uma boa distribuição. 
```

### Exercício 5.6
Um mapeamento do tamanho de baterias e sua devida potência. Os tamanhos são A, AA, AAA e AAAA.

*Resolução:*

```javascript
// Resposta: As funções hash B e C fornecerão uma boa distribuição. 
```

### Exercício 5.7
Um mapeamento de títulos de livros e autores. Os títulos são Maus, Fun Home e Watchmen.

*Resolução:*

```javascript
// Resposta: As funções hash B, C e D fornecerão uma boa distribuição. 
```

### Exercício 6.1
Encontre o menor caminho do início ao fim

*Resolução:*


```javascript
/* 
Primeiro cenário
- O vertice atual possui três arestas que conectam os seus respectivos vertices
- O primeiro vertice na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O primeiro vertice na lista dos relacionados é escolhido
- O vertice atual é o destino

Segundo cenário
- O vertice atual possui três arestas que conectam os seus respectivos vertices
- O primeiro vertice na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O segundo vertice na lista dos relacionados é escolhido
- O vertice atual não possui arestas

Terceiro cenário
Segundo cenário
- O vertice atual possui três arestas que conectam os seus respectivos vertices
- O segundo vertice na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O primerio vertice na lista dos relacionados é escolhido
- O vertice atual não possui arestas

Quarto cenário
- O vertice atual possui três arestas que conectam os seus respectivos vertices
- O segundo vertice na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O segundo vertice na lista dos relacionados é escolhido
- O vertice atual possui apenas uma aresta que conecta os seu respectivo vertice
- O primerio e único vertice na lista dos relacionados é escolhido
- O vertice atual é o destino

Resposta: O menor caminho é o primerio cenário, ou seja, precisa realizar duas movimentações para poder chegar ao destino.
```

### Exercício 6.2
Encontre o menor caminho de "jato" até "gado".

*Resolução:*


```javascript
/* 
Primeiro cenário
- O vertice atual "jato" possui duas arestas que conectam os seus respectivos vertices
- O primeiro vertice "gato" na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O primeiro vertice "grato" na lista dos relacionados é escolhido
- O vertice atual possui apenas uma aresta que conecta os seu respectivo vertice
- O primerio e único vertice "gado" na lista dos relacionados é escolhido
- O vertice "gado" é o destino

Segundo cenário
- O vertice atual "jato" possui duas arestas que conectam os seus respectivos vertices
- O primeiro vertice "gato" na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O segundo vertice "gado" na lista dos relacionados é escolhido
- O vertice "gado" é o destino

Terceiro cenário
- O vertice atual "jato" possui duas arestas que conectam os seus respectivos vertices
- O segundo vertice "tato" na lista dos relacionados é escolhido
- O vertice atual possui apenas uma aresta que conecta os seu respectivo vertice
- O primeiro e único vertice "gato" na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O vertice atual ""

Quarto cenário
- O vertice atual possui três arestas que conectam os seus respectivos vertices
- O segundo vertice na lista dos relacionados é escolhido
- O vertice atual possui duas arestas que conectam os seus respectivos vertices
- O segundo vertice na lista dos relacionados é escolhido
- O vertice atual possui apenas uma aresta que conecta os seu respectivo vertice
- O primerio e único vertice na lista dos relacionados é escolhido
- O vertice atual é o destino

Resposta: O menor caminho é o primerio cenário, ou seja, precisa realizar duas movimentações para poder chegar ao destino.
```

