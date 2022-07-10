---
title: 機能を拡張してみる
description: this is the second post
date: '2022-02-01'
tags: 
  - 'JavaScript'
  - 'Markdoc'
---
投稿日: {% toLocaleDateJP($markdoc.frontmatter.date) %}  
Published: {% toLocaleDateUS($markdoc.frontmatter.date) %}
{% tagGroup items=$markdoc.frontmatter.tags / %}
# {% $markdoc.frontmatter.title %}

## 見出し1

## 見出し2

{% note title="Info"%}
これはInfo用のボックスです
{% /note %}

{% note title="Caution" type="caution"%}
これは注意書き用のボックスです
{% /note %}

{% note title="Warning" type="warning" %}
これは警告用のボックスです
{% /note %}

