import axios from "axios";

//модуль для постов
export const postModule = {

    state: () => ({
        //модель для постов
        posts: [],
        //для показа спинера загрузки
        isPostsLoading: false,
        //выбранная сортировка
        selectedSort: '',
        //поле поиска
        searchQuery: '',
        //страницы
        page: 1 ,
        //кол-во товаров
        limit: 10,
        //всего страниц
        totalPages: 0,
        //каталог сортировок
        sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'},
        ]

    }),


    getters: {
        //отсартированные посты
        sortedPosts(state) {
            return [... state.posts].sort((post1, post2)=> post1[state.selectedSort] ?.localeCompare(post2[state.selectedSort]));
        },
        //отсартированные посты + с поиском
        sortedAndSearshedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },


    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },

        setLoading(state, bool) {
            state.isPostsLoading = bool
        },

        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },

        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },

        setPage(state, page) {
            state.page = page
        },

        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        }
    },


    actions: {
        // получение постов с апи
        async fetchPosts({state, commit}) {
            try {
                //показываем спинер загрузки
                commit('setLoading', true)
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                //кол-во страниц с лимитом
                commit('setTotalPages', Math.ceil(responce.headers['x-total-count']/state.limit))
                commit('setPosts', responce.data)
            }catch (e){
                alert('ошибка запроса')
            }finally {
                //убираем спинер загрузки
                commit('setLoading', false)
            }
        },

        // получение постов бесконечная лента
        async loadMorePosts({state, commit}) {
            try {
                //увеличиваем на 1 каждый раз когда вызываем функци при бесконечной ленте
               commit('setPage', state.page += 1);
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                //кол-во страниц с лимитом
                commit('setTotalPages', Math.ceil(responce.headers['x-total-count']/state.limit))
                commit('setPosts', [...state.posts, ... responce.data])
            }catch (e){
                alert('ошибка запроса')
            }
        }
    },
    //включаем пространство имен чтобы не перебивались одинаковые mutations, actions в других модулях
    namespaced: true
}