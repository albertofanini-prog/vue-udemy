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
section {
  width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
}
</style>