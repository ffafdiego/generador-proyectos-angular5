# Project Generator Angular 5

El proyecto genera de manera fácil y dinámica proyectos en angular, ya sea sitio web o librerías.


### Prerequisitos

Para correr este proyecto debes tener instalado node(v > 8), npm(v > 5.6).
Si no lo tienes descárgalos de acá:
<p>https://nodejs.org/es/download/</p>
<p>https://www.npmjs.com/get-npm<p>

Además debes instalar la librería <a href="https://github.com/angular/angular-cli">angular-cli</a> y  <a href="http://yeoman.io/">yeoman</a> de manera global:

```
$ npm install -g @angular/cli

$ npm install -g yo
```

## Comenzando

Estas instrucciones te darán una guía para generar el proyecto base en Angular 5.


### Instalando

Lo primero que debes realizar es descargarte el presente repositorio con el siguiente comando:


```
$ git@github.com:ffafdiego/generador-proyectos-angular5.git
```

Luego ingresa a la carpeta y instala las dependencias del proyecto

```
$ cd  generador-proyectos-angular5
$ npm install
```
Finalmente genera el link desde npm
```
$ npm link
```

End with an example of getting some data out of the system or using it for a little demo

## Generación del proyecto

Por fin, llegamos a la generación del proyecto...
Y es tan simple como:
```
yo project-gen-a5
```

### Generación de proyecto base web

En las opciones Seleccionar Aplicación Web
```
? Es una aplicación web o una librería:
❯ Aplicación Web
  Librería
```
Luego debes ingresar el nombre del proyecto o aplicación. Por defecto es proyecto-base
```
? Por favor ingresa el nombre de tu aplicación (proyecto-base)
```
Luego completa los datos que se preguntan como descripción del proyecto y el autor.

Y listo tendrás una aplicación corriendo con Angular 5!

Para seguir revisa el archivo README.md del proyecto generado.

### Generar una librería

En las opciones Seleccionar Librería
```
? Es una aplicación web o una librería:
❯ Aplicación Web
❯ Librería
```
Luego debes ingresar el nombre de la librería. Por defecto es proyecto-base
```
? Por favor ingresa el nombre de tu aplicación (proyecto-base)
```
Luego completa los datos que se preguntan como descripción del proyecto y el autor.

En la librería vendrá instalado un componente por defecto, a través del instalador se te consultará el nombre:
```
? Nombre Del Componente a agregar en la Librería ? : (hello)
```
Si el componente "hello" se generará HelloComponent con sus respectivos archivos.

Y listo tendrás librería embebida lista para inyectar en cualquier aplicación con Angular 5!

Para seguir revisa el archivo README.md del proyecto generado.
