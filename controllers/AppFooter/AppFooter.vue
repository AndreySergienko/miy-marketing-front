<template>
  <footer class="app-footer">
    <div class="app-footer__links">
      <NuxtLink class="app-footer__links--item" to="/#benefit">
        Преимущества
      </NuxtLink>
      <NuxtLink class="app-footer__links--item" to="/#telegram">
        Каналы
      </NuxtLink>
      <NuxtLink class="app-footer__links--item" to="/#faq">FAQ</NuxtLink>
      <NuxtLink class="app-footer__links--item" to="/#contact">
        Контакты
      </NuxtLink>
    </div>
    <div class="app-footer__info">
      <div class="app-footer__info-company">
        <h2 class="app-footer__info-company--name">On-Developer</h2>
        <p class="app-footer__info-company--devs">
          Разработка сайта <span class="highlight">Я</span>Р студия
        </p>
        <p class="app-footer__info-company--copyright">
          © ОN DEVELOPERс 2021-2024
        </p>
      </div>
      <div class="app-footer__info-contacts">
        <NuxtLink
          class="app-footer__info-contacts--item"
          to="mailto:on-developer@gmail.com"
          external
          target="_blank"
        >
          <NuxtIcon
            class="app-footer__info-contacts--item-icon"
            name="footer-email"
            filled
          />
          on-developer@gmail.com
        </NuxtLink>
        <NuxtLink
          class="app-footer__info-contacts--item"
          to="https://t.me/on_developer"
          external
          target="_blank"
        >
          <NuxtIcon
            class="app-footer__info-contacts--item-icon"
            name="footer-tg"
            filled
          />
          https://t.me/on_developer
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss" src="./AppFooter.scss"></style>
