<template>
  <section>
    <BaseCard>
      <div class="user-info">
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
      <p>{{ infoText }}</p>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
    props: ["fullName", "infoText", "role"],
    components: { BaseCard }
};
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .user-info{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    p{
      width: 100%;
      text-align: left;
    }
  }
</style>