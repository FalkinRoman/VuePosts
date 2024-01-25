<template>
  <div class="postId"> 
    <PostIdItem v-if="!postsLoading"  :post="this.post"/>
    <div v-else class="box-loader-spiner">
        <div class="loading-spinner"></div>
      </div>
  </div>
</template>

<script>
import PostService from '@/API/PostService';
import PostIdItem from '@/components/PostIdItem.vue'

export default {
    components: {
        PostIdItem
    },
  data() {
    return {
      post: [],
      postsLoading: false,
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        this.postsLoading = true;
        this.post = await PostService.getById(this.$route.params.id);
      } catch (error) {
        // Обработка ошибок
        console.error('Error fetching posts in component:', error);
      } finally {
        this.postsLoading = false;
      }
    },
  },
};
</script>

<style scoped>
    .postId{
    padding: 15px;
}

</style>
