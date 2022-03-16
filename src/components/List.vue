<style scoped>
.list {
  background-color: #ebecf0;
  width: 272px;
  flex-shrink: 0;
  padding: 10px 8px;
  border-radius: var(--default-radius);
}
.list.dragover{
  transform: scale(1.06);
}
.head {
  padding: 0 4px;
  display: flex;
  align-items: center;
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
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer:hover > button.add-cart {
  backdrop-filter: brightness(0.9);
}
textarea {
  padding: 4px 8px;
  margin: 10px 0;
  width: 100% !important;
  resize: vertical;
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
.removeListButton {
  width: 28px;
  height: 28px;
  line-height: 0;
}
.removeListButton:hover {
  background: #ddd;
}
.card.dragover{
  padding-top: 32px;;
}
</style>

<template>
  <div :class="isDragOver ? 'dragover list' : 'list'" @dragleave="dragLeave" @dragover="dragOver">
    <div class="head">
      <input
        type="text"
        @change="updateTitle(listItem)"
        name=""
        id=""
        v-model="list_item_title"
      />
      <button class="removeListButton" @click="removeList(list_item)">
        <Icon :size="16" icon="close" />
      </button>
    </div>
    <div class="content">
      <template v-for="card in list_item.cards" :key="card.cardName">
        <Card  :card="card" :dragover="isDragOver ? 'dragover': ''" />
      </template>
    </div>
    <div class="footer">
      <button class="add-cart" tabindex="-1">
        <span><Icon :size="20" icon="add" /> Add Card</span>
      </button>
      <div class="add-cart-content active">
        <textarea
          placeholder="Add title for this card"
          v-model="cardName"
          @keyup.enter="addCart()"
        ></textarea>
        <button class="add" @click="addCart()">Add Card</button>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import Icon from "./Icon";
export default {
  name: "List",
  props: {
    listItem: Object,
    listItems: Object,
  },
  components: {
    Card,
    Icon,
  },
  methods: {
    addCart() {
      console.log(this.cardName, "asasd", typeof this.cardName);
      if (this.cardName == null) return;
      this.$emit("addCart", this.list_item.cards, { cardName: this.cardName });
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
    removeList(list__item) {
      let remove_item = this.listItems.indexOf(list__item);
      this.list_items.splice(remove_item, 1);
      this.updateLocalStorage();
    },
    dragOver(event) {
      console.log("dragg overrr");
      event.target.classList.contains("card") || event.target.classList.contains("list")  ? event.target.classList.add("dragover") : "";
    },
    dragLeave(event){
      event.target.classList.remove("dragover")
    }
  },
  data() {
    return {
      cardName: null,
      list_item_title: this.listItem.name,
      list_item: this.listItem,
      list_items: this.listItems,
      isDragOver: false,
    };
  },
};
</script>