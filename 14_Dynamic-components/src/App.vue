<template>
  <section class="main">
    <TheHeader/>

  </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      activeUser: {
        name: 'Alberto Fanini',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html  {
  font-family: sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  display: flex;
  flex-direction: column;
}

.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
</style>