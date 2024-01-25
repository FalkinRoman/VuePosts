<template>
    <input :value="modelValue" @input="updateInput"/>
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue : [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value )
        }
    },

}
</script>

<style>
.input {
  width: 100%;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>