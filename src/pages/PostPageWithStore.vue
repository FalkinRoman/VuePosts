<template>
  <div class="App">
    <h1>Страница с постами</h1>
    <my-input
      class="input"
        v-focus
        :model-value="searchQuery"
        @update:model-value='setSearchQuery'
        placeholder = "Поиск ..."
        style=" margin-bottom: 15px"
    />
    <div class="app_btns" style="display: flex; justify-content: space-between;">
      <my-button
          style=" margin-bottom: 15px"
          @click="showDialog"
      >
        Создать пост
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value = 'setSelectedSort'
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create = 'createPost'
      />
    </my-dialog>
    <post-list
        :posts = "sortedAndSearshedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else class="loading-spinner"></div>
    <div v-intersection="loadMorePosts" class="observer"></div>

  </div>
</template>



<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
//импортируем карты для всех наших элементов модуля для более простой записи
import {mapState,mapGetters,mapMutations, mapActions} from "vuex";


export default {
  components: {
    PostForm,PostList,
  },
  data(){
    return {
      //для показа компонента диалог
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),

    ...mapActions({
      //получить больше постов
      loadMorePosts: 'post/loadMorePosts',
      //загрузить посты
      fetchPosts: 'post/fetchPosts'
    }),


    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id )  
    },

    //показатб компонент диалог
    showDialog() {
      this.dialogVisible = true;
    },

  },


  mounted() {
    this.fetchPosts()
  },


  
  computed: {
    ...mapState({
      //модель для постов
      posts: state => state.post.posts,
      //для показа спинера загрузки
      isPostsLoading: state => state.post.isPostsLoading,
      //выбранная сортировка
      selectedSort: state => state.post.selectedSort,
      //поле поиска
      searchQuery: state => state.post.searchQuery,
      //страницы
      page: state => state.post.page ,
      //кол-во товаров
      limit: state => state.post.limit,
      //всего страниц
      totalPages: state => state.post.totalPages,
      //каталог сортировок
      sortOptions: state => state.post.sortOptions
    }),

    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearshedPosts: 'post/sortedAndSearshedPosts'
    }),

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

