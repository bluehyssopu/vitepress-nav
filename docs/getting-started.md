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
import { NAV_DATA } from '/.vitepress/theme/untils/data-tools.ts'
</script>

# 办公提效

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>