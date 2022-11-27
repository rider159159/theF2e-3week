<template>
  <div class="wrapper">
    <div class="table-todo-caption">To Do</div>
    <div class="table-todo">
      <draggable
        :list="list"
        group="people"
        ghostClass="ghost-cls"
        chosenClass="chosen-cls"
        dragClass="drag-cls"
        class="dragArea"
      >
        <base-ticket class="ticket" v-for="element in list" :key="element.name">
          {{ element.name }}
        </base-ticket>
      </draggable>
    </div>

    <div class="table-done-caption">Done</div>
    <div class="table-done">
      <!-- -->
      <draggable
        :list="list3"
        group="people"
        ghostClass="ghost-cls"
        chosenClass="chosen-cls"
        dragClass="drag-cls"
        class="dragArea"
      >
        <base-ticket
          class="ticket"
          v-for="element in list3"
          :key="element.name"
        >
          {{ element.name }}
        </base-ticket>
      </draggable>
      <!-- -->
    </div>
  </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";
//import BaseCard from "./ui/BaseCard.vue";
import BaseTicket from "./BaseTicketsV2.vue";

export default {
  components: {
    draggable: VueDraggableNext,
    //    BaseCard,
    BaseTicket,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "John", id: 1, tasks: [] },
        { name: "Joao", id: 2, tasks: [] },
        { name: "Jean", id: 3, tasks: [] },
        { name: "Gerard", id: 4, tasks: [] },
      ],
      list2: [
        {
          name: "Greg",
          id: 5,
          tasks: [
            { name: "Hania", id: 8, tasks: [] },
            { name: "Emil", id: 9, tasks: [] },
            { name: "Maxi", id: 10, tasks: [] },
          ],
        },
      ],
      list3: [{ name: "Emi", id: 6, tasks: [] }],
      dragging: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.ticket {
  resize: vertical;
}

.wrapper {
  height: 100vh;

  display: grid;
  grid-gap: 5px;

  grid-template-rows: 30px auto;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "todo-caption wip-caption done-caption"
    "todo wip done";
}

.table-todo {
  grid-area: todo;
  height: 90%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  /** /
  background: rgb(255, 150, 150);
  /**/
}

.table-wip {
  grid-area: wip;
  height: 90%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  /** /
  background: rgb(140, 210, 255);
  /**/
}

.table-done {
  grid-area: done;
  height: 90%;
  border-right: 1px solid black;
  border-left: 1px solid black;
}

/**/
.ghost-cls {
  opacity: 0.3;
  background: rgb(248, 187, 187);
  border-radius: 4px;
  padding: 1rem;
  margin: 0.5rem auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
}
/**/

.chosen-cls {
  opacity: 0.6;
  color: rgb(75, 73, 73);
  background: rgb(248, 221, 171);
  border-radius: 4px;
  padding: 1rem;
  margin: 0.5rem auto;
  box-shadow: 2px 2px 8px rgba(50, 50, 50, 0.35);
}

.drag-cls {
  opacity: 0.7;
  background: rgb(190, 252, 190);
  /** / 
  background: rgb(252, 195, 91);
  /**/
  color: rgb(20, 20, 20);
  border-radius: 12px;
  padding: 1rem;
  margin: 0.5rem auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.35);
}

.dragArea {
  /**/
  min-height: 20px; /**/
  /**/
  height: 100%;
  /**/
  outline: 1px dashed; /**/
}
/*********************************/
</style>
