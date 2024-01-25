<template>
      <div class="post">
        <strong>{{ post.id }}. {{ post.title }}</strong>
        <hr />
        <div>{{ post.body }}</div>
      </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: start;
    flex-direction: column






  }
  
  </style>
  