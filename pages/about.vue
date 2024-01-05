
<script setup>
  const task = ref('');
  const { data: tasks, refresh } = useFetch('/api/task');
  
const addTask = async() => {
  if (task.value === '') {
    return;
  }
  const { data } = await useFetch('/api/task', {
    method: 'post',
    body: { task: task.value },
  });
  console.log(data);
  refresh();
  task.value = '';
};
const Taskcompleted = async(taskId) => {
  console.log(taskId)
  const { data} = await useFetch('/api/task/', {
    method: 'put',
    body: { completed: true, 
            id:taskId
          },
  });
  refresh();
};

const Taskdelete = async(taskId) => {
  console.log(taskId)
  const { data } = await useFetch('/api/task/', {
    method: 'delete',
    body: {id:taskId},
  });
  refresh();
};

const handleCheckboxChange = async(task) => {
  if (task.completed===true) {
    console.log(task.id+"完了");
    const { data} = await useFetch('/api/task/', {
    method: 'put',
    body: { completed: true, 
            id:task.id
          },
  });
  } else {
    await console.log(task.id+"未完了");
    const { data} = await useFetch('/api/task/', {
    method: 'put',
    body: { completed: false, 
            id:task.id
          },
  });
  }
  console.log(task.id)
  refresh();
};

</script>


<template>
  <div>
    <h1>Main Page</h1>
    <table>
    <ul>
    <div v-for ="task in tasks" :key="task.id">
        <li v-if ="!task.completed" :key="task.id">
          {{ task.completed }} - {{ task.task }}
          <form @submit.prevent="Taskcompleted(task.id)">
          <input type="checkbox" v-model="task.completed" id="task.id" class="checkbox" @change="handleCheckboxChange(task)"/> 
        </form>
        <button @click="Taskdelete(task.id)">削除</button>  
    </li>
        </div>
      <p>

      </p>

      <div v-for ="task in tasks" :key="task.id">
        <li v-if ="task.completed" :key="task.id">{{ task.completed }} - {{ task.task }}
          <form @submit.prevent="Taskcompleted(task.id)">
            <input type="checkbox" v-model="task.completed" id="task.id" class="checkbox" @change="handleCheckboxChange(task)"/>
        </form>
        <button @click="Taskdelete(task.id)">削除</button> 
        </li>
        
        
        </div>
    <li><form @submit.prevent="addTask">
        <input v-model="task" />
        <button type="submit">タスクを登録</button>
    </form></li>
    </ul>
  </table>
  </div>
</template>