<style scoped>
.add-list {
  background-color: #ffffff3d;
  border-radius: var(--default-radius);
  padding: 10px 12px;
  cursor: pointer;
  color: #fff;
  width: 272px;
  flex-shrink: 0;
}
.add-list .actions {
  --opacity: 0;
  --top: -20px;
  --h: 0;
  height: var(--h);
  opacity: var(--opacity);
  transition: 250ms transform cubic-bezier(0, 1.3, 0.85, -0.02);
  transform: translateY(var(--top));
  visibility: hidden;
}

.add-list:focus-within input {
  padding: 4px 8px;
  background-color: #fff;
}
.add-list:focus-within .actions {
  --opacity: 1;
  --h: auto;
  --top: 0;
  margin-top: 10px;
  visibility: visible;
}
.add-list input {
  width: 100%;
  border-radius: var(--default-radius);
}
.add-list input {
  background-color: transparent;
}
.add-list:not(:focus-within) :is(input::placeholder, input) {
  color: #fff;
}
.add-list:not(:focus-within) input::placeholder {
  color: #fff;
}
.add-list:hover {
  background-color: #ffffff6e;
}
.lists {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
</style>
<template>
  <div class="lists">
    <template v-for="list in lists" :key="list.cards">
      <List v-on:addCart="addCart" :listItem="list" :listItems="lists" />
    </template>
    <div class="add-list">
      <input
        v-model="listName"
        type="text"
        tabindex="0"
        placeholder="+ Add another list"
      />
      <div class="actions" tabindex="0">
        <button @click="addList()" class="add">Add List</button>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List";
import keyHanding from "./assets/js/utils.js";
export default {
  name: "App",
  components: {
    List,
  },
  methods: {
    setBgImage: async function () {
      try {
        let random = Math.floor(Math.random() * 1000000),
          image;
        let req = await fetch(
          `https://images.pexels.com/photos/${random}/pexels-photo-${random}.jpeg?auto=compress&cs=tinysrgb`
        );
        if (!req.ok) {
          this.setBgImage();
          return;
        }
        image = await req.blob();
        document.body.style.backgroundImage = `url(${URL.createObjectURL(
          image
        )})`;
      } catch {
        console.log("image process");
      }
    },
    addCart(listCards, payload) {
      console.log("fired");
      listCards.push(payload);
    },
    addList: function () {
      if (!this.listName) return;
      this.lists.push({
        name: this.listName,
        cards: [],
      });
      this.listName = null;
      localStorage.lists = JSON.stringify(this.lists);
    },
  },
  data() {
    return {
      listName: "",
      lists: localStorage?.lists
        ? JSON.parse(localStorage?.lists)
        : [
            {
              name: "Welcome !",
              order: 1,
              cards: [
                {
                  cardName: "Smile :)",
                },
                {
                  cardName: "Be Happy",
                },
              ],
            },
          ],
    };
  },
  mounted() {
    this.setBgImage();
    console.log(JSON.parse(localStorage?.lists).sort());
    document.addEventListener("keyup", (e) => {
      keyHanding(e.key, this.addList);
    });
  },
};
</script>
