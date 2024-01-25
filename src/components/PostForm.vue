<template >
    <form @submit.prevent>
      <my-input 
      v-focus 
      v-model="post.title"
      class="input" 
      name="text" 
      placeholder="Введите название" 
      />
      <my-input 
      v-model="post.body"
      class="input" 
      name="text" 
      placeholder="Введите описание" 
      />
      <my-button style="margin-top: 15px;" @click="addNewPost">Создать</my-button>
    </form>
</template>


<script>


export default {
  components: {

  },
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
    addNewPost() {
      this.post.id = Date.now()
      this.$emit("create", this.post)  //emit () - прокинуть пост родителю
      this.post = {
            title: '',
             body: ''
      }
      
    }
  },
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}




</style>