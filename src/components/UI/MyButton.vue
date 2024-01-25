<template >
    <Button class="btn">
        <slot></slot>
    </Button>
</template>
<script>
export default {
    name: "my-button" //имя компонента нужно для глобального подключения
}
</script>
<style>
   .btn {
  padding: 15px 20px;
  align-self: flex-end;
  background: none;
  color: teal;
  border: 1px solid;
  cursor: pointer;

} 
</style>