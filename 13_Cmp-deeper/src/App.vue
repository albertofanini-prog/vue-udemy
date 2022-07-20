<template>
  <section class="main">
    <TheHeader/>
    <badge-list></badge-list>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals>
      <template #default="slotScoped">
        <h2>{{slotScoped.scoped}}</h2>
      </template>
    </course-goals>
  </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader,
    'badge-list': BadgeList,
    UserInfo,
    CourseGoals
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