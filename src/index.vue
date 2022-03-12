<style scoped>
.add-list {
  background-color: #ffffff3d;
  border-radius: var(--default-radius);
  padding: 10px 12px;
  cursor: pointer;
  color: #fff;
  width: 272px;
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
    <template v-for="list in lists" :key="list.name">
      <List :listItem="list" />
    </template>
    <div @click="addList()" class="add-list">+ Başka bir liste ekleyin</div>
  </div>
</template>

<script>
import List from "./components/List";
export default {
  name: "App",
  components: {
    List,
  },
  methods: {
    addList: function () {
      this.lists.push({
        name:'selam dünya'
      })
    },
    setBgImage: async function () {
      try {
        let random = Math.floor(Math.random() * 100000),
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
  },
  data() {
    return {
      lists: [
        {
          name: "Todolist",
          cards: [
            {
              cardName: "Read A Book",
            },
            {
              cardName: "Hard Working",
            },
          ],
        },
      ],
    };
  },
  mounted: function () {
    console.log("asd");
    console.log(this.setBgImage());
  },
};
</script>
