<style scoped>
body input.card {
  background-color: #fff;
  padding: 6px 8px;
  border-radius: var(--default-radius);
  margin-bottom: 10px;
  font-size: 14px;
  overflow-wrap: break-word;
  color: #172b4d;
  cursor: pointer;
  position: relative;
  width: 100%;
  transition: 250ms all ease-in-out;
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
input.card:hover {
  filter: brightness(0.95);
}
input.card:focus {
  border: 1px solid lightskyblue;
}
/* input.card:focus + .remove{
  visibility: visible;
} */
input.card:active {
  background-color: #fff;
  border: 0;
  caret-color: transparent;
}
.card:hover .edit {
  visibility: visible;
}
.relative {
  position: relative;
}
.relative .remove {
  inset: 5px 10px auto auto;
  position: absolute;
  font-size: 18px;
  background: #a8a8a800;
  width: 20px;
  height: 20px;
  display: grid;
  border-radius: 2px;
  place-items: center;
  line-height: 20px;
  cursor: pointer;
}
.relative .remove:hover {
  background-color: #dbdbdb;
}
</style>
<template>
  <div class="relative">
    <input
      draggable="true"

      class="card"
      :value="card.cardName"
    />
    <div @click="removeCard(card)" class="remove">&times;</div>
  </div>
</template>
<script>
// import Icon from "../components/Icon";
export default {
  name: "Card",
  props: {
    card: Object,
  },
  components: {
    // Icon,
  },
  methods: {

    removeCard() {
      this.$emit("removeCard", this.card.cardName);
    },
  },
};
</script>