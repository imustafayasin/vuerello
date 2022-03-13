<style scoped>
.card {
  background-color: #fff;
  padding: 6px 8px;
  border-radius: var(--default-radius);
  margin-bottom: 10px;
  font-size: 14px;
  overflow-wrap: break-word;
  color: #172b4d;
  cursor: pointer;
  position: relative;
}
.card .edit {
  position: absolute;
  right: 0;
  width: 25px;
  height: 25px;
  top: 0;
  text-align: center;
  line-height: 25px;
  visibility: hidden;
}
.card:hover {
  filter: brightness(0.95);
}
.card:hover .edit {
  visibility: visible;
}
</style>
<template>
  <div class="card">
    {{ card.cardName }}
    <div class="edit"><Icon :size="10" icon="pen" /></div>
  </div>
</template>
<script>
import Icon from "../components/Icon";
export default {
  name: "Card",
  props: {
    card: Object,
  },
  components: {
    Icon,
  },
};
</script>