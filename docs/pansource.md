---
layout: doc
layoutClass: m-nav-layout
sidebar: true
prev: true
next: true
outline: [2, 3, 4]
---

<style src="/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data-pansource.ts'
</script>

# 网盘资料

这是一份客怎眠从多年的屯屯鼠仓库里翻出来还能用的资源清单ℹ️，希望能够帮到各位。如果有资源失效或者未更新情况，可以直接踢我或者私信。

那么🍀祝好运，生活愉快、大便通畅。

<img src="https://vip2.loli.io/2023/01/25/AxZqRfM1h4TjG2B.png" width=300px>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>