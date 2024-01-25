<template>
    <div class="App">
      <my-input  v-model="searchQuery" class="input" placeholder="Поиск ..."
        style="width: 100%; margin-bottom: 15px" />
  
      <div class="btn_bar">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select :options="sortOptions" v-model="selectedSort" />
      </div>
  
      <post-list v-if="!postsLoading" :posts="serchAndSortedPosts" @remove="removePost" />
      <div v-else class="box-loader-spiner">
        <div class="loading-spinner"></div>
      </div>
  
      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost" />
      </my-dialog>
  
      <!-- <my-pagination :totalPage ="totalPage" :page="page" @changePage="changePage"/> -->
      <!-- блок для подгрузки постов -->
      <div v-intersection="loadMorePosts" class="observer"></div>
  
    </div>
  </template>
  
  <script>
  import PostForm from "@/components/PostForm.vue"
  import PostList from '@/components/PostList.vue'
  import axios from "axios"
  
  export default {
    components: {
      PostList, PostForm
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        postsLoading: false,
        selectedSort: '',
        sortOptions: [
          { value: "title", name: 'По названию' },
          { value: "body", name: 'По описанию' },
        ],
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPage: 0
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
  
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
  
      //Показать диалоговое окно
      showDialog() {
        this.dialogVisible = true;
      },
  
      // changePage(pageNum) {
      //   this.page = pageNum;
      //   this.fetchPost();
      // },
  
      //получить посты
      async fetchPost() {
        try {
          this.postsLoading = true;
          const request = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
  
            }
          })
          this.totalPage = Math.ceil(request.headers["x-total-count"] / this.limit)
          this.posts = request.data;
        } catch (e) {
          alert("Ошибка")
        } finally {
          this.postsLoading = false;
        }
      },
  
  
      //получить больше постов 
      async loadMorePosts() {
        try {
          this.page += 1;
          const request = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
  
            }
          })
          this.totalPage = Math.ceil(request.headers["x-total-count"] / this.limit)
          this.posts = [...this.posts, ...request.data];
        } catch (e) {
          alert("Ошибка")
        } 
      }
  
    },
  
    mounted() {
      this.fetchPost();

  
    },
  
  
    computed: {
      //копия массива(отсартированная по this.selectedSort)
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      },
      //поиск
      serchAndSortedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
  
  
    },
  
    watch: {
      //сортировка с watch, название обязательно как модель selectedSort, newSort - значение selectedSort
      // selectedSort(newSort) {
      //   this.posts.sort((post1, post2)=> {
      //   return post1[newSort]?.localeCompare(post2[newSort]);
      //  })
    }
  
  
  
  
  
  }
  </script>
  
  <style >
  .App {
    padding: 15px;
  }
  
  .btn_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .loading-spinner {
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top: 5px solid teal;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  .box-loader-spiner {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  
  .observer {
    height: 30px;
  }</style>