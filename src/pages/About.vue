<template>
    <div style="padding: 15px;">
      <h1 style="margin-top: 25px;">Контакты</h1>
      <div class="flex contact">
        <h3>Moscow, Oruzheiny Lane, 41. Tverskoy, 127006</h3>
        <div class="flex_column contact_tel">
          <div class="flex_column">
            <h3>8(999)777-77-77</h3>
            <h3>8(999)777-88-88</h3>
          </div>
          <h3><span>oruzheinypost@gmail.com</span></h3>
        </div>
        <img src="/img/Location1.svg" alt="Location" />
      </div>
      <div style="margin-top: 40px;">
        <!-- Включение компонента FormContact -->
        <FormContact />
      </div>
    </div>
  </template>
  
  <script>
  // Импорт компонента FormContact
  import FormContact from '../components/FormContact.vue';
  
  export default {
    components: {
      FormContact,
    },
  };
  </script>
  
  <style scoped>
  
.contact {
  border: 2px solid teal;
  padding: 15px;
  margin-top: 30px;
  justify-content: space-around
}

.contact h3 {
  font-weight: 300;
}



.contact img {
  min-width: 50px;

}

.contact span {
  color: teal;
}


.form_contact button {
  margin-top: 10px;
}
  </style>
  