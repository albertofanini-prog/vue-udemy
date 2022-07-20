<template>
  <section class="main">
    <TheHeader/>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- 
      <ActiveGoals v-if="selectedComponent === 'manage-goals'"/>
      <ManageGoals v-if="selectedComponent === 'active-goals'"/> 
    -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </section>
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    ManageGoals,
    ActiveGoals
  },
  data() {
    return {
      selectedComponent: '',
      activeUser: {
        name: 'Alberto Fanini',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
      console.log(cmp);
    }
  }
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