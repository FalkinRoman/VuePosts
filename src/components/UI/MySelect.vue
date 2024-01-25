<template >
    <select class="select" :value="modelValue" @change="changeOption">
        <option value="" disabled>Выберите значение</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>
<script>
export default {
    name: "my-select",
    props: {
        modelValue : [String],
        options : {
            type: Array,
            default: () => [] //по дефолту пустой массив 
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>
<style scoped>
   .select {
  border: 1px solid teal;
  padding: 8px; 
  font-size: 14px; 
  height: 50px;
  outline: none; /* Убирает стандартный стиль фокуса в некоторых браузерах */
}

</style>