---
layout: default
title: He escrito
---
{%include title.html icon="glyphicon glyphicon-folder-open" title=" MIS PUBLICACIONES"%}

{% for post in site.posts %}
* {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
