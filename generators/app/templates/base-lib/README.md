# Bienvenido a la librería <%= appName %>

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

## Corriendo la librería en local

Para correr la aplicación sólo debes ejecutar el siguiente comando:

```
ng serve
```

Y listo la aplicación quedará corriendo en http://localhost:4200

## Estructura del proyecto

El proyecto tiene los códigos en la carpeta src/app.
Sólo viene por defecto un módulo con el nombre  <%= module %>.

## Empaquetado de Librería
### Archivos Claves
Para generar una librería, sólo debemos empaquetar los componentes que nos interesan, y esto en Angular 5 se realiza a través de un archivo de configuración llamado
```
 "public_api.ts
 ```
 ### Comandos para empaquetar
Luego de declarar los componentes a exportar de la librería se debe generar el siguiente comando:

```
$ npm run packagr
 ```
 ### Publicado a Nexus
Para publicar a nexus debes ejecutar el siguiente comando:
```
$ npm publis dist
 ```
 Y listo ya puedes comenzar a utilizar tu librería desde tu aplicación web.
