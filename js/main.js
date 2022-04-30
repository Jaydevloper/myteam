const elCard = document.querySelector('.meet-the-drecteros-list__item')
const elCardBtn = document.querySelectorAll('.meet-the-drecteros-list__item-button')

elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.meet-the-drecteros-list__item').classList.toggle('meet-the-drecteros-list__item--visual')
  })
})
const elwrraper = document.querySelector('.site-wrraper-list')
const elwrraperbtn = document.querySelector('.site-wrraper-list__button')

elwrraperbtn.addEventListener('click' , () =>{
  elwrraper.classList.toggle('site-wrraper-list--open')
})
