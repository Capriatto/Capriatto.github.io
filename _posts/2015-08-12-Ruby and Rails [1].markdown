---
layout: post
title:  "Ruby on Rails [1]"
date:   2015-08-12 08:00:00
categories: RubyOnRails
comments: true
---

Vamos a explorar este magnífico framework para Ruby, espero que disfruten esta primera entrega .

##¿Qué es Ruby on Rails?

Es un entorno de desarrollo web de [Ruby][ruby] o más conocido como `Framework` que no es más que un grupo de librerías, automatismos y
convenciones que tienen el objetivo de facilitar tareas comunes del desarrollo, evitándonos tardar mucho tiempo en detalles poco importantes
y podamos dedicarlo a tareas únicas o específicas del desarrollo. Algunos buenos ejemplos del poder de Ruby on Rails son las siguientes
aplicaciones web


- [twitter][twitter]
- [scribd][scribd]
- [hulu][hulu]
- [xing][xing]
- [basecamp][basecamp]
- [github][github]

##Instalando Ruby on Rails

Vamos a asumir que ya tienes instalado [Ruby][ruby] en tu máquina. Si no es así, [visita este enlace antes de iniciar][descargar-ruby]

Una vez instalado Ruby podemos enfocarnos en Rails. Vamos a crear nuestro primero proyecto con el siguiente comando en consola.

{%highlight bash%}
  $ rails new proyecto_rubyonrails
{%endhighlight %}

Si todo ha ido bien deberiamos poder ver nuestra estructura de archivos creada así.

{%include image.html img="/assets/rubyonrails1/1.png" caption="$ tree -d" %}

Ahora para instalar todas las dependencias de nuestro proyecto utilizaremos el administrador de gemas `bundler`:

{%highlight bash%}
$ gem install bundler
$ bundle install
{%endhighlight %}

Esto les instalará todas las dependencias del proyecto.

{%include image.html img="/assets/rubyonrails1/4.png" caption="$ bundle install" %}

Cuando hemos logrado crear nuestro proyecto tendremos que `iniciar el servidor` de la aplicación para ver nuestra aplicación demo.

{%highlight bash%}
$ rails s
{%endhighlight %}

Si todo ha ido bien hasta aquí deberíamos tener nuestro proyecto corriendo en el `puerto 3000` así:

{%include image.html img="/assets/rubyonrails1/2.png" caption="Output consola $ rails s" %}

{%include image.html img="/assets/rubyonrails1/3.png" caption="Deploy en web browser" %}



{% include alert.html tipo="alert alert-success" alerta="ENHORABUENA TU PRIMER PROYECTO RUBY ON RAILS! :clap: :+1: " %}



[ruby]:           https://www.ruby-lang.org/es/
[twitter]:        http://twitter.com/
[scribd]:         http://scribd.com/
[hulu]:           http://hulu.com/
[xing]:           http://xing.com/
[soundcloud]:     http://soundcloud.com/
[basecamp]:       https://basecamp.com/
[github]:         https://github.com/
[descargar-ruby]: https://www.ruby-lang.org/es/downloads/
