<template >
    <div  class="post">
        <div>
            <div><strong> {{ post.id }} Название:</strong>  {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div style="display: flex;">
            <my-button style="margin: 0px 10px;" @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
            <my-button  @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>