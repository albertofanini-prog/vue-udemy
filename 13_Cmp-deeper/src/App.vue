<template>
  <div>
    <TheHeader/>
    <badge-list></badge-list>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    TheHeader,
    'badge-list': BadgeList,
    UserInfo
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
</style>