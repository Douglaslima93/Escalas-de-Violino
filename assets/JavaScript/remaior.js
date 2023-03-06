const buttonrem = document.querySelector('#Rmaior')
const buttonmi = document.querySelector('#remi')
const buttonfa = document.querySelector('#refa')
const buttonsol = document.querySelector('#resol')
const buttonla = document.querySelector('#rela')
const buttonsi = document.querySelector('#resi')
const buttondo = document.querySelector('#redo')
const buttonre = document.querySelector('#Rmenor')
const buttonacorde = document.querySelector('#escaladere')


 buttonrem.addEventListener('click', function(){
    const audio = document.querySelector('#acorderRe')
    audio.play()
 })

 buttonmi.addEventListener('click', function(){
    const audio = document.querySelector('#acorderMi')
    audio.play()
 })

 buttonfa.addEventListener('click', function(){
   const audio = document.querySelector('#acorderFa')
   audio.play()
})

buttonsol.addEventListener('click', function(){
   const audio = document.querySelector('#acordersol')
   audio.play()
})

buttonla.addEventListener('click', function(){
   const audio = document.querySelector('#acorderla')
   audio.play()
})

buttonsi.addEventListener('click', function(){
   const audio = document.querySelector('#acordersi')
   audio.play()
})

buttondo.addEventListener('click', function(){
   const audio = document.querySelector('#acorderdo')
   audio.play()
})

buttonre.addEventListener('click', function(){
   const audio = document.querySelector('#acorderRem')
   audio.play()
})

buttonacorde.addEventListener('click', function(){
   const audio = document.querySelector('#acordeder')
   audio.play()
})