<template>
    <form class="form_contact">
      <div v-if="notification">
        <my-notification>Форма успешно отправлена</my-notification>
      </div>
      <div v-if="nameDirty && nameError" style="color: red;">{{ nameError }}</div>
      <my-input
        class="input"
        v-model="name"
        @change="nameHandler"
        @blur="blurHandler"
        :placeholder="'Имя'"
        :name="'name'"
        :type="'text'"
      />
      <div v-if="emailDirty && emailError" style="color: red; margin-top: 10px;">{{ emailError }}</div>
      <my-input
        class="input"
        style="margin-bottom: 15px;"
        v-model="email"
        @change="emailHandler"
        @blur="blurHandler"
        :placeholder="'Email'"
        :name="'email'"
        :type="'email'"
      />
      <!-- <my-textarea v-model="comment" :placeholder="'Комментарий'" :name="'comment'" :type="'text'" /> -->
      <div class="flex flex_end">
        <my-button @click="sendForm" :disabled="!validForm" :type="'submit'">Отправить</my-button>
      </div>
    </form>
  </template>
  
  <script>
  import { ref, reactive, watch } from 'vue';
  import MyInput from './UI/MyInput.vue';
//   import MyTextarea from './UI/MyTextarea.vue';
  import MyButton from './UI/MyButton.vue';
//   import MyNotification from './UI/MyNotification.vue';
//   import { FormService } from '../API/FormService';
  
  export default {
    components: {
      MyInput,
    //   MyTextarea,
      MyButton,
    //   MyNotification,
    },
    setup() {
      const name = ref('');
      const nameDirty = ref(false);
      const nameError = ref('Имя не может быть пустым');
      const email = ref('');
      const emailDirty = ref(false);
      const emailError = ref('Email не может быть пустым');
      const comment = ref('');
      const notification = ref(false);
      const validForm = ref(false);
  
      const nameHandler = () => {
        // Ваша логика валидации для имени
      };
  
      const emailHandler = () => {
        // Ваша логика валидации для email
      };
  
      const blurHandler = (inputName) => {
        // Ваша логика при потере фокуса
      };
  
      const sendForm = (e) => {
        e.preventDefault();
        // Ваша логика отправки формы
        FormService.sendFormToTelegram({ name, email, comment });
        name.value = '';
        email.value = '';
        comment.value = '';
        notification.value = true;
      };
  
      watch([nameError, emailError], () => {
        // Ваша логика при изменении ошибок
        validForm.value = !nameError.value && !emailError.value;
      });
  
      return {
        name,
        nameDirty,
        nameError,
        email,
        emailDirty,
        emailError,
        comment,
        notification,
        validForm,
        nameHandler,
        emailHandler,
        blurHandler,
        sendForm,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Ваши стили здесь, scoped указывает на использование ограниченной области стилей */
  </style>
  