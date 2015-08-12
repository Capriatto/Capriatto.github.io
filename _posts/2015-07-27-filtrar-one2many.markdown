---
layout: post
title:  "Filtrar registros en one2many (on_change)"
date:   2015-08-07 22:00:00
categories: Openerp 7
comments: true
---

Imagine que tiene un modelo `idea` y que usted desea cargar en un campo `one2many` las ideas que pertenecen a una categoria determinada.
También imagine que dicha categoria será seleccionada de un `many2one` en el mismo formulario por lo que será un dominio dinámico que hará
que el one2many filtre los datos que serán cargados en él.

Para este ejemplo usaremos el evento `on_change` como se ve a continuación.

  {% highlight xml %}
  <field name="foobar" on_change="get_ideas(categoria)"/>
  {% endhighlight %}

  ... Y ahora el código que se ejecuta con el `on_change`

  {% highlight python %}
  def get_ideas(self, cr, uid, ids, categoria,context=None):
    ideas_obj = self.pool.get('idea')
    id_categoria = ideas_obj.browse(cr, uid, categoria).id
    ideas = ideas_obj.search(cr, uid,[('categoria', '=', id_categoria),
                                      ('active', '=', True)])
    return {'value': {'ideas': ideas}}
  {% endhighlight %}
