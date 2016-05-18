### Algoritmo de Web Scraping

O **submarino-scrap** é um algoritmo utilizado para a obtenção de metadados relacionados à produtos da E-commerce Submarino à partir da URL.

É feita uma leitura padronizada dos elementos da página do produto e, desta forma, obtidos os dados relativos ao mesmo. Atualmente os dados drenados pelo algoritmo são: Nome, Preço e Thumbnail.

#### Exemplo prático

```js
 var subscrap = require('submarino-scrap');
 var url = "http://www.submarino.com.br/produto/124431005/smart-tv-led-65-samsung-65ju6000-ultra-hd-4k-com-conversor-digital-3-hdmi-2-usb-funcao-games-wi-fi";
 
 subscrap.getProduct(url, function(res, erro)) {
    if(!erro) {
        console.log(res);
    }
 }
```

#### Objeto de resposta

```js
 { 
   title: 'Smartphone Asus Live Dual Chip Desbloqueado Android 5 Tela 5" 16GB 3G 8MP e  TV Digital - Preto',
   price: '788.4199829101562',
   thumbnail: 'http://isuba1-a.akamaihd.net/produtos/01/00/item/124606/5/124606581SZ.jpg'
 }
```

#### Objeto de erro

```js
 { erro: 'Cannot get product' }
```
