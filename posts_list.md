---
layout: default
title: Posts
permalink: /past/
---
{%include title.html icon="glyphicon glyphicon-folder-open" title=" Posts"%}

{% for post in site.posts %}
* {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
