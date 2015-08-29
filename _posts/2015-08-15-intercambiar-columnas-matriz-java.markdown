---
layout: post
title:  "Intercambiar columnas de una matriz en Java"
date:   2015-08-28 11:00:00
categories: Java
comments: true
---
Al analizar el ejercicio nos damos cuenta de que solo es necesario recorrer las `filas` de la matriz y no necesitaremos una iteración `for` para
recorrer columnas ya que podremos pedirle al usuario que nos diga que columnas se van a intercambiar. Así que solamente necesitaremos un
ciclo `for`.

Para entender el siguiente código diremos que hay una `columna origen` que es la columna que se va a intercambiar por la `columna destino`.

{%highlight java%}
int auxiliar;

for (int i = 0; i < c.length; i++) {
  auxiliar = c[i][columnaDestino];
  c[i][columnaDestino] = c[i][columnaOrigen];
  c[i][columnaOrigen] = auxiliar;
}
{%endhighlight %}

##¿Qué hace la variable auxiliar?
- R:// almacenar el dato que está en la `columna destino` para que al ser reemplazado no perdamos ese valor y podamos ponerlo en la `columna origen`

{% include alert.html tipo="alert alert-info" alerta="Ahora mira este ejemplo completo, analízalo y trata de comprenderlo. Si lo mejoras me gustaría conocer tu versión del código. :smile: :+1:" %}


{% gist 572d34d750fae745a4bc %}

Este es el resultado de cambiar la columna `2` por la `4`.

{%include image.html img="/assets/intercambiar-columnas-matriz-java/image.png" caption="Output consola $ rails s" %}
