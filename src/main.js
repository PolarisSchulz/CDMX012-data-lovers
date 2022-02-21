/* css normalization  */

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

:root {
  --color-gold: #c28f2c;
  --color-white: aliceblue;
  --color-gray: #444444;
  --color-black: #111111;
  --color-gray-bar: #364044;
}

/*Selectores del container */
.container {
  background: rgb(20, 24, 27);
  background: linear-gradient(
    90deg,
    rgba(20, 24, 27, 1) 0%,
    rgba(82, 91, 97, 1) 100%
  );
}

/*Selectores del main section*/

.solid-opacity-main-section {
}

.main-section-margin {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

.main-section {
  /* falta hacer responsive esta wea*/
  background-image: url("https://www.riotgames.com/darkroom/800/238125c3534d95c640509aeadde0eecd:089e4d2ec82788b382ecbe5ebc328fb1/lol-ka22-bg-web-3830x1644-jcao-v001.jpg");
}

.head-paragraph {
}

/*Selectores de la seleccion del campeon*/

.choose-your-champion-margin {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 9rem;
  padding-bottom: 9rem;
}

.choose-your-champion {
  align-items: center;
}

/*Selectores del filtro de seleccion de campeones*/
.filter-selection {
  background-color: blueviolet;
}

/*Barra de navegación*/
.filter-options {
  display: flex;
  align-items: baseline;
  text-align: center;
  justify-content: center;
  padding: 12px 16px;
}

.search-bar {
  font-family: "Arial";
  font-size: 20px;
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #25282a;
  border-color: #25282a;
}

.champClass {
  text-align: center;
  text-decoration: none;
  display: inline;
  padding: 14px 16px;
}

.champFilters {
  float: right;
  text-decoration: none;
  display: inline;
  padding: 14px 16px;
}

.search-bar {
  font-family: "Arial";
  font-size: 20px;
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #25282a;
  border-color: #25282a;
}

.champClass {
  text-align: center;
  text-decoration: none;
  display: inline;
  padding: 14px 16px;
}

.champFilters {
  float: right;
  text-decoration: none;
  display: inline;
  padding: 14px 16px;
}
/* 79*98 */
/*Menú desplegable */
.dropdown-difficulty {
  position: relative;
  display: inline-block;
}

.dropdown-content-difficulty {
  display: none;
}

.dropdown-stats {
  position: relative;
  display: inline-block;
}

.dropdown-content-stats {
  display: none;
}

/*Selectores del flex container*/
.flex-container {
  background-color: indigo;
}

/* Tamaño de imágenes en mosaico */
.champion-image {
  height: 220px;
}

/* Flex aplicado a mosaico */
.champion-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.dropbtn {
  /* background-color: #04AA6D; */
  /* color: white; */
  padding: 16px;
  /* font-size: 16px; */
  /* border: none; */
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
/* Este hover cambia el color de el boton del menu cuando se esta haciendo hover en el */
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */
