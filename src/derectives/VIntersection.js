//деректива пересечение элемента (элемент, функция подрузги постов)

export default  {
    mounted(element, binding) {    // element - 1 значение элемент на ктороую вещаем дерективу , binding - 2 значение которое передвем после знака равно (это может быть функция или обьект)
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
          };
          let callback =  (entries, observer) => {
            if(entries[0].isIntersecting ) {  //&& this.page < this.totalPage 
                binding.value()
            }
          };
          let observer = new IntersectionObserver(callback, options);
          observer.observe(element) //следить за этим элементом ;
    },


    name: "intersection"
}