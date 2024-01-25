<template>
    <div class="page_wrapper ">
        <div class="page" :key="pageNum" v-for="pageNum in totalPage" :class="{
            'current-page': page === pageNum //добавление класса по условию
        }" @click="changePage(pageNum)">
            {{ pageNum }}
        </div>
    </div>
</template>
<script>
export default {
    name: "my-pagination",
    props: {
        totalPage : {
            type: Number
        },
        page: {
            type: Number
        }
    },
    methods: {
        changePage(pageNumber) {
        this.$emit("changePage", pageNumber)
     },
    },
}
</script>
<style scoped>
    .page_wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  margin-left: 5px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}
</style>