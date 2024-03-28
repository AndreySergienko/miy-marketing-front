<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="header__inner">
          <h1>ON DEVELOPER</h1>
          <Navigation />
          <div class="header__button">
            <button class="btn__login">Войти</button>
            <button class="btn__registration">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  
</script>

<style scoped>
  .container {
    max-width: 1600px;
    margin: 0 auto;
  }

  .header {
    margin-bottom: var(--ident-xxxl);
    border-bottom: 1px solid var(--color--light-gray);
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--ident-xs) 0px;
  }

  h1 {
    font-size: var( --font-size-l);
    font-weight: var(--font-weight-bold);
  }

  .btn__login, .btn__registration {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);

    display: inline-block;
    padding: 10px 20px;

    width: 250px;
    height: 50px;

    color: var(--color-blue);
    background-color: var(--color-white);
    border: 1px solid var(--color-white) ;
    border-radius: 25px;
    transition: all 0.3s;
  }

  .btn__login {
    color: var(--color-blue);
    background-color: var(--color-white);
    border: 1px solid var(--color-white) ;
  }
  .btn__registration {
    color: var(--color-white);
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue);
  }
  
</style>