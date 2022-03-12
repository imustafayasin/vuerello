<style scoped>
.list {
  background-color: #ebecf0;
  width: 272px;
  padding: 10px 12px;
  border-radius: var(--default-radius);
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
.footer p {
  cursor: pointer;
  padding: 5px;
  color: #5e6c84;
  border-radius: var(--default-radius);
}
.footer > button.add-cart {
  background-color: transparent;
  width: 100%;
  text-align: left;
  border-radius: 3px;
}
.footer > button.add-cart span {
  padding: 6px 8px;
  display: block;
}
.footer:hover > button.add-cart {
  backdrop-filter: brightness(0.9);
}
textarea {
  padding: 4px 8px;
  margin: 10px 0;
  width: 100%;
  border-radius: var(--default-radius);
}

.add-cart-content {
  display: none;
}

.footer:focus-within .add-cart-content {
  display: block;
  margin-top: -37px;
}
.footer:focus-within .add-cart span {
  display: none;
}
</style>

<template>
  <div class="list">
    <div class="head">
      <input type="text" name="" id="" :value="listItem.name" />
    </div>
    <div class="content">
      <template v-for="card in listItem.cards" :key="card.cardName">
        <Card :card="card" />
      </template>
    </div>
    <div class="footer">
      <button class="add-cart" tabindex="-1"><span>+ Add Cart</span></button>
      <div class="add-cart-content active">
        <textarea
          placeholder="Bu kart için bir başlık girin"
          v-model="cardName"
        ></textarea>
        <button class="add" @click="addCart()">Kart Ekle</button>
      </div>
    </div>
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
  methods: {
    addCart() {
      if (!this.cardName) return;
      this.listItems.cards.push({ cardName: this.cardName });
      this.cardName = null;
    },
  },
  data() {
    return {
      cardName: null,
      listItems: this.listItem,
    };
  },
};
</script>