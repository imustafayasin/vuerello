<style scoped>
.card {
  background-color: #fff;
  padding: 6px 8px;
  border-radius: var(--default-radius);
  margin-bottom: 10px;
  font-size: 14px;
  color: #172b4d;
  cursor: pointer;
}
.card:hover {
  filter: brightness(0.9);
}
</style>
<template>
  <div class="card">{{ card.cardName }}</div>
</template>
<script>
export default {
  name: "Card",
  props: {
    card: Object,
  },
};
</script>