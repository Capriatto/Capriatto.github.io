---
layout: post
title:  "Wkhtmltopdf en Odoo 8 [Ubuntu]"
date:   2015-07-17 10:00:00
categories: Odoo
permalink: /odoo/wkhtmltopdf-odoo8
comments: true
---
#¿Qué es wkhtmltopdf?

[Wkhtmltopdf][wkthtmltopdf] Es una librería o plugin [open source][opensource] que nos permite convertir html
 a PDF y otros formatos de imágen. En Odoo es muy importante contar con él porque nos permite generar reportes.

#La instalación:

  1. Instalamos wkhtmltopdf desde la librería de ubuntu:

     `sudo apt-get install wkhtmltopdf`

  2. Una vez instalado con la librería de ubuntu nos quedará el ejecutable en `/usr/bin`.

  3. Ahora instalamos el paquete oficial (compatible con nuestra versión de ubuntu). Para saber qué versión de Ubuntu estamos utilizando
     usamos el comando:

     `cat /etc/os-release`

     Podemos verlo en la línea *PRETTY_NAME="Ubuntu 14.04 LTS"*

     Una vez que sabemos que versión tenemos podemos buscarla [aqui][descargas]. Para descargarla damos clic derecho sobre la arquitectura
     que deseamos descargar (32 o 64) y vamos a la línea de comandos y escribimos `wget ruta_al_archivo` Ejemplo:

     `wget download.gna.org/wkhtmltopdf/wkhtmltox-0.12.2.1_linux-trusty-amd64.deb`

  4. Ahora que tenemos descargado el paquete lo instalamos con el siguiente comando:

      `dpkg -i nombre_archivo.deb`

     Los archivos quedarán en: `/usr/local/bin`

  5. Por último el truco más importante. Reemplazar los archivos localizados en `/usr/local/bin` por los que están en
    `/usr/bin/`

  6. Puede ser necesario reiniciar el servicio de odoo para que se apliquen los cambios.

#Conclusión:

  Wkhtmltopdf nos permite generar pdf y otros formatos de imagen. Es muy útil para generar reportes en odoo. La instalación se lleva a cabo
  por medio de un *truco* que se trata de instalar dos versiones distintas de wkhtmltopdf y reemplazar los archivos como se indica más arriba.



[opensource]:     https://es.wikipedia.org/wiki/C%C3%B3digo_abierto
[wkthtmltopdf]:   http://wkhtmltopdf.org/
[descargas]:      http://wkhtmltopdf.org/downloads.html
