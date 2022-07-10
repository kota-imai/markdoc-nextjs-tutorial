---
title: 標準のNodeやTagを試す
description: this is the first post
date: '2022-01-01'
tags: 
  - 'JavaScript'
  - 'Markdoc'
---
投稿日：{% $markdoc.frontmatter.date %}  
{% tagGroup items=$markdoc.frontmatter.tags / %}
# {% $markdoc.frontmatter.title %}

# Headers

**Bold**

_Italic_

[Links](/docs/nodes)

![Images](/logo.svg)

Lists
- Item 1
- Item 1
- Item 1

> Quotes

`Inline code`

{% table %}
* タイトル {% align="center" %}
* 公開日 {% align="center" %}
* 説明 {% align="center" %}
---
* {% $markdoc.frontmatter.title %}
* {% $markdoc.frontmatter.date %}
* {% $markdoc.frontmatter.description %}
{% /table %}