<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-danger">To-Do List</h2>
    <div class="input-group mb-3 flex-wrap flex-md-nowrap">
      <input
        type="text"
        class="form-control mb-2 mb-md-0 me-md-2"
        placeholder="Enter a new task"
        v-model="newTask"
        @keyup.enter="addTask"
      />
      <button class="btn btn-success bg-danger" @click="addTask">Add</button>
    </div>

    <ul class="list-group">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center"
      >
        <div class="mb-2 mb-md-0">
          {{ task.text }}
          <span class="badge bg-warning text-dark ms-2">
            ({{ task.priority }})
          </span>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <button
            class="btn btn-sm btn-outline-primary"
            @click="togglePriority(index)"
          >
            Mark as {{ task.priority === 'High Priority' ? 'Low Priority' : 'High Priority' }}
          </button>
          <button class="btn btn-sm btn-outline-danger" @click="deleteTask(index)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      const trimmed = this.newTask.trim();
      if (trimmed !== '') {
        this.tasks.unshift({ text: trimmed, priority: 'Low Priority' });
        this.newTask = '';
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    togglePriority(index) {
      const task = this.tasks[index];
      task.priority = task.priority === 'High Priority' ? 'Low Priority' : 'High Priority';
    }
  }
};
</script>

<style scoped>
.list-group-item {
  transition: background-color 0.2s ease;
}
</style>
