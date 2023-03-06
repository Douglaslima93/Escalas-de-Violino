const buttonmim = document.querySelector('#Mmaior')
const buttonfa= document.querySelector('#mifa')
const buttonsol = document.querySelector('#misol')
const buttonla = document.querySelector('#mila')
const buttonsi = document.querySelector('#misi')
const buttondo = document.querySelector('#mido')
const buttonre = document.querySelector('#mire')
const buttonmi = document.querySelector('#mmenor')
const buttonacorde = document.querySelector('#acordemi')


 buttonmim.addEventListener('click', function(){
    const audio = document.querySelector('#acordemmi')
    audio.play()
 })

 buttonfa.addEventListener('click', function(){
    const audio = document.querySelector('#acordemfa')
    audio.play()
 })

 buttonsol.addEventListener('click', function(){
   const audio = document.querySelector('#acordemsol')
   audio.play()
})

buttonla.addEventListener('click', function(){
   const audio = document.querySelector('#acordemla')
   audio.play()
})

buttonsi.addEventListener('click', function(){
   const audio = document.querySelector('#acordemsi')
   audio.play()
})

buttondo.addEventListener('click', function(){
   const audio = document.querySelector('#acordemdo')
   audio.play()
})

buttonre.addEventListener('click', function(){
   const audio = document.querySelector('#acordemre')
   audio.play()
})

buttonmi.addEventListener('click', function(){
   const audio = document.querySelector('#acordemmim')
   audio.play()
})

buttonacorde.addEventListener('click', function(){
   const audio = document.querySelector('#escalademi')
   audio.play()
})



