<style scoped>
.list {
  background-color: #ebecf0;
  width: 272px;
  flex-shrink: 0;
  padding: 10px 8px;
  border-radius: var(--default-radius);
}
.head {
  padding: 0 4px;
}
.content {
  margin-top: 15px;
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
  margin-top: -27px;
}
.footer:focus-within .add-cart span {
  display: none;
}
</style>

<template>
  <div class="list">
    <div class="head">
      <input
        type="text"
        @change="updateTitle(listItem)"
        name=""
        id=""
        v-model="list_item_title"
      />
    </div>
    <div class="content">
      <template v-for="card in list_item.cards" :key="card.cardName">
        <Card :card="card" />
      </template>
    </div>
    <div class="footer">
      <button class="add-cart" tabindex="-1"><span>+ Add Card</span></button>
      <div class="add-cart-content active">
        <textarea
          placeholder="Add title for this card"
          v-model="cardName"
        ></textarea>
        <button class="add" @click="addCart()">Add Card</button>
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
    listItems: Object,
  },
  components: {
    Card,
  },
  methods: {
    addCart() {
      if (!this.cardName) return;
      this.list_item.cards.push({ cardName: this.cardName });
      this.cardName = null;
      this.updateLocalStorage();
    },
    updateTitle(item) {
      item.name = this.list_item_title;
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.lists = JSON.stringify(this.list_items);
    },
  },
  data() {
    return {
      cardName: null,
      list_item_title: this.listItem.name,
      list_item: this.listItem,
      list_items: this.listItems,
    };
  },
};
</script>