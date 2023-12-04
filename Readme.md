<a name="readme-top"></a>


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br>

  <a href="#ForTech">Segura Rio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias-Utilizadas">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-Instalar-o-Projeto">Como Instalar o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-subir-cada-build-de-seu-micro-front-end">Como subir cada build de seu  micro front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Deploy-da-aplicação">Deploy da aplicação</a>


<br>

## <strong>Segura Rio</strong>

<br>

#### <strong>Desktop</strong>

<br>

<img width="940" alt="Segura_Rio_Web_parte_01" src="https://github.com/HMontarroyos/Segura_Rio/assets/60220406/73f9bdab-50a9-43c0-a7f8-b026ab8242a8">

<img width="940" alt="Segura_Rio_Web_parte_02" src="https://github.com/HMontarroyos/Segura_Rio/assets/60220406/89494a66-69a1-4c93-9aeb-3db1caa3bb20">

<img width="940" alt="Segura_Rio_Web_parte_03" src="https://github.com/HMontarroyos/Segura_Rio/assets/60220406/119cdb30-b07c-4103-817f-ad26488ab9d8">



<br/>
<br/>

#### <strong>Mobile</strong>
<br>

<img width="300" alt="Segura_Rio_Mobile" src="https://github.com/HMontarroyos/Segura_Rio/assets/60220406/97837341-5de8-4c73-b5dc-6f2986076d90">

<br/>
<br>

A Aplicação em questão se trata de uma seguradora onde informa os tipos de produtos que oferta para seu cliente, e caso o usuário se interesse pode preencher o formulário e enviar os dados para ela entrar em contato.

<br/>
Para isso fiz crie um SPA, construído com micro front-end através da lib single-spa em React.
Além disso, conectei minha aplicação ao Microsoft Clarity para fazer uma análise sobre os usuários que acessem minha aplicação, respeitando logicamente os padrões impostos pela LGPD, perguntando se os usuários estão de acordo com isso, caso contrario não envio as informações para o Clarity.

<br/>

<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>

### <strong>Tecnologias Utilizadas</strong>

<br>

  [![React][React]][React-url]
  [![Styled_Components][Styled_Components]][Styled_Components-url]
  [![Polished][Polished]][Polished-url]
  [![Axios][Axios]][Axios-url]
  [![Single_Spa][Single_Spa]][Single_Spa-url]
  [![React_Toastify][React_Toastify]][React_Toastify-url]
  [![React_Cookie_Consent][React_Cookie_Consent]][React_Cookie_Consent-url]
  [![React_Reveal][React_Reveal]][React_Reveal-url]
  [![React_Icons][React_Icons]][React_Icons-url]

<br>

### <strong>Utilitários</strong>

<br>

  [![Netlify][Netlify]][Netlify-url]
  [![Microsoft_Clarity][Microsoft_Clarity]][Microsoft_Clarity-url]
  [![Mocky.io][Mocky.io]][Mocky.io-url]
  [![Digital_Ocean][Digital_Ocean]][Digital_Ocean-url]
   


<p align="right">(<a href="#readme-top">de volta ao topo</a>)</p>


### <strong>Como Instalar o Projeto</strong>
<br>

Como a Arquitetura do Projeto consiste em cada micro front-end está separado por sua respectiva pasta, para isso será necessario navegar para dentro de cada pasta e rodar separadamente para cada uma um :

```sh
yarn 
```
Após baixar todas as Dependências do Projeto, navegue para a pasta container e , inicie o Servidor com o Comando: 

```sh
 yarn start
```

Após isso você terá que ligar cada micro front-end separado, para isso navegue para cada pasta
e rode o comando para cada porta conforme a cola abaixo: 

insuranceCompany - porta 8500
coverageInsuranceCompany - porta 8501
formInsuranceCompany porta - 8502

```sh
 yarn start -- -- port Valor_da_porta
```


### <strong>Como usar</strong> 
<br>

Para Inicializar o Projeto 
Abrir [http://localhost:9000](http://localhost:9000) vizualizar no Navegador. 

<br>


### <strong>Como subir cada build de seu  micro front-end </strong> 

Para isso eu utilizei o <a href="https://www.digitalocean.com/" target="blank">Digital Ocean</a> como meu bucket para guardar cada arquivo da minha 
pasta dist que é gerada após rodar cada comando separadamente dentro de sua pasta : 

```sh
 yarn run build
```

Após subir tudo você terá algo parecido com essa arquitetura de pastas . 

<img width="938" alt="segura Rio" src="https://github.com/HMontarroyos/Segura_Rio/assets/60220406/4ad449bf-36e0-4e6f-b6b0-c9323bd0aa7f">

<br/>

<i>Lembrando que a Digital Ocean é gratuito por um breve periodo free trial depois se torna pago</i>

Eu também deixei os dados que eu preciso para mapear todos os meus front-ends dinamicamente usando o <a href="https://designer.mocky.io/" target="blank">mocky.io</a> para simular uma API. 

no seguinte modelo : 

```json
 {
  "applications": [
    {
      "name": "@hmontarroyos/insuranceCompany",
      "package": "@hmontarroyos/insuranceCompany",
      "activeWhen": "/",
      "exact": true,
      "order": 1
    },
    {
      "name": "@hmontarroyos/coverageInsuranceCompany",
      "package": "@hmontarroyos/coverageInsuranceCompany",
      "activeWhen": "/",
      "exact": true,
      "order": 2
    },
    {
      "name": "@hmontarroyos/formInsuranceCompany",
      "package": "@hmontarroyos/formInsuranceCompany",
      "activeWhen": "/",
      "exact": true,
      "order": 3
    }
  ]
}
```





### <strong>Deploy da aplicação</strong> 
<br>

[![Deploy][Deploy]][Deploy-url]

<br>


### 🚀 Let's code! 🚀 ###


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/HMontarroyos/Segura_Rio.svg?style=for-the-badge
[contributors-url]: https://github.com/HMontarroyos/Segura_Rio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/HMontarroyos/Segura_Rio.svg?style=for-the-badge
[forks-url]: https://github.com/HMontarroyos/Segura_Rio/fork
[stars-shield]: https://img.shields.io/github/stars/HMontarroyos/Segura_Rio.svg?style=for-the-badge
[stars-url]: https://github.com/HMontarroyos/Segura_Rio/stargazers
[issues-shield]: https://img.shields.io/github/issues/HMontarroyos/Segura_Rio.svg?style=for-the-badge
[issues-url]: https://github.com/HMontarroyos/Segura_Rio/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hebertmontarroyos-developer/


[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://pt-br.react.dev/
[Styled_Components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled_Components-url]: https://styled-components.com/
[Polished]: https://img.shields.io/badge/Polished-107C10?style=for-the-badge
[Polished-url]: https://polished.js.org/
[React_Icons]: https://img.shields.io/badge/React%20Icons-FF0000?style=for-the-badge
[React_Icons-url]: https://react-icons.github.io/react-icons
[Axios]: https://img.shields.io/badge/Axios-%23632CA6.svg?style=for-the-badge
[Axios-url]: https://axios-http.com/

[Single_Spa]: https://img.shields.io/badge/Single%20SPA-%23ED2B88.svg?style=for-the-badge
[Single_Spa-url]:https://single-spa.js.org/
[React_Toastify]:https://img.shields.io/badge/React%20Toastify-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React_Toastify-url]: https://www.npmjs.com/package/react-toastify
[React_Cookie_Consent]: https://img.shields.io/badge/React%20Cookie%20Consent-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React_Cookie_Consent-url]:https://www.npmjs.com/package/react-cookie-consent
[React_Reveal]:https://img.shields.io/badge/React%20Reveal-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React_Reveal-url]:https://www.react-reveal.com/

[Netlify]: https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7
[Netlify-url]: https://www.netlify.com/
[Microsoft_Clarity]: https://img.shields.io/badge/Microsoft%20Clarity-0078D4?style=for-the-badge&logo=microsoft&logoColor=white
[Microsoft_Clarity-url]: https://clarity.microsoft.com/
[Mocky.io]: https://img.shields.io/badge/Mocky%20IO-white?style=for-the-badge&
[Mocky.io-url]: https://designer.mocky.io/
[Digital_Ocean]: https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white
[Digital_Ocean-url]: https://www.digitalocean.com/

[Deploy]: https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7
[Deploy-url]: https://segurario.netlify.app/