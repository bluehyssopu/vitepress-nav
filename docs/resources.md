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
import { NAV_DATA } from '/.vitepress/theme/untils/data-resource.ts'
</script>

# 资源网站

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>