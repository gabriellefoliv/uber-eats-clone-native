<h1 align="center">Seja bem-vindo à demo do Uber Eats Clone</h1>
<h2 align="center">Abaixo está passo a passo as funcionalidades do aplicativo</h2>
<p align="center">Construído com React Native, JavaScript, YelpAPI e Google API</p>

## As API's utilizadas
- A YelpAPI possui banco de dados variados, um deles é o banco de restaurantes. Com a YelpAPI, conseguimos as informações dos restaurantes, como nome, imagem de capa, opções do cardápio e avaliações. 
- A Google API foi utilizada para pesquisar regiões. Nela, você digita a cidade num campo de pesquisa e, em conjunto com a Yelp, são captados esses restaurantes.

## Página Home
- A Home possui a barra de pesquisa completamente funcional;
- Uma Scroll horizontal com os tipos de alimento (bebida, lanches, etc);
- Os restaurantes que serão captados da barra;
- E, por fim, as Tabs debaixo que no momento só são clicáveis.

<div display="flex" align="center">
    <img src="/design/EHome.png" width="200"/>
    <img src="/design/EPesquisa.png"/>
</div>

<div display="flex" align="center">
    <img src="/design/ELosAngeles.png"/>
    <img src="/design/EHollywood.png"/>
</div>

## Página RestaurantDetails
- Ao clicar em cima do restaurante roteia para uma página com as informações do restaurant;
- Agora, é possível selecionar os alimentos que deseja adquirir, portanto ainda não está puxando da API;
- As atualizações futuras incluem esse funcionamento e o desenvolvimento do carrinho de compras.

<div display="flex" align="center">
    <img src="/design/EHollyAbout.png"/>
    <img src="/design/EAboutSelected.png"/>
</div>

## Futuras atualizações
- Trabalhar com Redux e Firebase para criar carrinho de compras e armazenar essas informações de compra com o banco de dados.