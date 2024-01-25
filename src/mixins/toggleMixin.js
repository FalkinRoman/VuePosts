//содержит пропс show и метод для закрытия модального окна(переиспользуемый функционал компонента)

export default {
    props:{
        show: {
            type: Boolean,
            default:false
        }
    },
    methods: {
        hiddenDialog() {
           this.$emit("update:show", false) 
        }
    },
}