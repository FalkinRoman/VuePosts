<template >
  <div >
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style >
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  

  .flex {
  display: flex;
}

.flex_column {
  flex-direction: column;
}

.flex_start {
  justify-content: start;
}

.flex_end {
  justify-content: end;
}


.mb5 {
  margin-bottom: 5px;
}
 
</style>