<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
export default {
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
html {
  font-family: sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  display: flex;
  flex-direction: column;
}
</style>