<style scoped>
.list {
  background-color: #ebecf0;
  width: 272px;
  padding: 10px 12px;
  border-radius: var(--default-radius);
}
.head,
.footer {
  padding: 0 5px;
}
.content {
  margin: 15px 0;
}
input {
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
}
input:not(:focus) {
  background-color: #ebecf0;
}
.footer {
  cursor: pointer;
  padding: 5px;
  color: #5e6c84;
  border-radius: var(--default-radius);
}
.footer:hover {
  backdrop-filter: brightness(0.9);
}
</style>

<template>
  <div class="list">
    <div class="head">
      <input type="text" name="" id="" :value="listItem.name" />
    </div>
    <div class="content">
      <template v-for="card in listItem.cards" :key="card.cardName">
        <Card :card="card"/>
      </template>
    </div>
    <div class="footer">+ Add Cart</div>
  </div>
</template>
<script>
import Card from "./Card";
export default {
  name: "List",
  props: {
    listItem: Object,
  },
  components: {
    Card,
  },
};
</script>