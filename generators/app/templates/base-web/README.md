# Bienvenido a la aplicación <%= appName %>

## Prerequisitos

Para correr este proyecto debes tener instalado node(v > 8), npm(v > 5.6).
Si no lo tienes descárgalos de acá:
<p>https://nodejs.org/es/download/</p>
<p>https://www.npmjs.com/get-npm</p>

Además debes instalar la librería <a href="https://github.com/angular/angular-cli">angular-cli</a>


```
$ npm install -g @angular/cli
```

## Comenzando

Estas instrucciones te darán una guía para generar el proyecto base en Angular 5.


### Instalando

Para instalar las dependencias del proyecto debes realizarlo con el siguiente comando:

```
$ npm install
```

## Corriendo la aplicación en local

Para correr la aplicación sólo debes ejecutar el siguiente comando:

```
ng serve
```

Y listo la aplicación quedará corriendo en http://localhost:4200

## Estructura del proyecto

El proyecto tiene los códigos en la carpeta src/app

Ahí podemos ver el componente root llamado AppComponent, el se descompone en 3 partes que coinciden en la separación por html del sitio. Header, Footer y RouterOutlet.

<p>---------------------------</p>
HEADER
<p>---------------------------</p>
ROUTER-OUTLET
<p>---------------------------</p>
FOOTER
<p>---------------------------</p>

El proyecto incluye un componente por defecto llamado HomeComponent, que se reemplaza por router-outlet dependiendo de la ruta del navegador.

## Generar versión Web para producción
Para generar la aplicación minificada se debe ejecutar el siguiente comando:

```
$ ng build --prod
```
