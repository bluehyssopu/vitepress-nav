---
layout: doc
layoutClass: m-nav-layout
sidebar: true
prev: false
next: false
outline: [2, 3, 4]
---

<style src="/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data-docs.ts'
</script>

# 基础工具

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>