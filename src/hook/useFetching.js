import { reactive, ref } from 'vue';

export const useFetching = (callback) => {
  const state = reactive({
    isPostsLoading: ref(false),
    error: ref(''),
  });

  const fetching = async () => {
    try {
      state.isPostsLoading = true;
      await callback();
    } catch (e) {
      state.error = e.message;
    } finally {
      state.isPostsLoading = false;
    }
  };

  return [fetching, state.isPostsLoading, state.error];
};
