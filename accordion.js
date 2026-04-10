const lists = document.querySelector('.feature-sub');
const btns = document.querySelectorAll('feature__link');
console.log(btns[0])
btn.onclick = function () {
  console.log('1')
  //alert('Ты кликнул по кнопке')
  // Tab to edit
}
btn.onclick = function () {
  console.log('2')
}
btn.addEventListener('click', () =>  
  console.log("1")
)
btn.addEventListene('click', () => {
  console.log("2")
  console.log("2")
})
//for (let i = 0 i < btns.length; i++ {
btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btns.forEach((btnItem,) => {
      btnItem.classList.remove('feature __l8nk_active') 
    })
    
  btnItem.classList.add('feature__link_active')
  lists.forEach((listItem,) => {
    listItem.classList.add("hidden")
  }) 
  lists[index].classList.remove("hidden")
    console.dir(btnItem)
     }
   }