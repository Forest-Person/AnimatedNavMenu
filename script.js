const menuSlideButton = document.querySelector('.navButton')

const navMenu = document.querySelector('#navMenu')

menuSlideButton.addEventListener('click', (event) => {

    
        if(navMenu.style.animationName !== 'slideOut'){
            navMenu.style.animation = 'slideOut .5s'
            navMenu.style.display = 'flex'

        }else if(navMenu.style.animationName === 'slideOut'){
        
        navMenu.style.animationName = 'slideIn'
        navMenu.style.animationFillMode = 'forwards'
        
        setTimeout(()=>{navMenu.style.display = 'none'},200)
        
        //navMenu
    }
        

})