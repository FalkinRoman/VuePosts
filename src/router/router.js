import { createRouter, createWebHistory } from "vue-router"
import Posts from '@/pages/Posts.vue';
import About from '@/pages/About.vue';
import PostsId from '@/pages/PostsId.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';

const routes = [
    {
        path: "/",
        component: Posts
    },
    {
        path:"/about",
        component: About
    },
    {
        path:"/posts/:id",
        component: PostsId
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
});


export default router;