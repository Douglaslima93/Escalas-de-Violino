const buttonRe = document.querySelector('#Rmaior')
const buttonmi = document.querySelector('#remi')
const buttonfa = document.querySelector('#Sii')
const buttonsol = document.querySelector('#Doo')
const buttonla = document.querySelector('#Ree')
const buttonsi = document.querySelector('#Mii')
const buttondo = document.querySelector('#Faa')
const buttonre = document.querySelector('#Solmenor')
const buttonacorde = document.querySelector('#escalasol')


 buttonRe.addEventListener('click', function(){
    const audio = document.querySelector('#acorderRe')
    audio.play()
 })

 buttonmi.addEventListener('click', function(){
    const audio = document.querySelector('#acordermi')
    audio.play()
 })

 buttonfa.addEventListener('click', function(){
   const audio = document.querySelector('#acordesSi')
   audio.play()
})

buttonsol.addEventListener('click', function(){
   const audio = document.querySelector('#acordesDo')
   audio.play()
})

buttonla.addEventListener('click', function(){
   const audio = document.querySelector('#acordesRe')
   audio.play()
})

buttonsi.addEventListener('click', function(){
   const audio = document.querySelector('#acordesMi')
   audio.play()
})

buttondo.addEventListener('click', function(){
   const audio = document.querySelector('#acordesFa')
   audio.play()
})

buttonre.addEventListener('click', function(){
   const audio = document.querySelector('#acordesSolm')
   audio.play()
})

buttonacorde.addEventListener('click', function(){
   const audio = document.querySelector('#acordedesol')
   audio.play()
})