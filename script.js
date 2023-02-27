const menuSlider = (menuList) => {

  const sliderForward = () =>{
  
    document.querySelector(menuList).animate(
    [
      {transform:'scaleY(0)', transformOrigin:'0 0'},
      {transform:'scaleY(1)', transformOrigin:'0 0'}
      
    ], {
      duration: 500,
      fill:'both',
      
      
    }
      ).play()
  }

    const sliderBackward = ()=> {

    document.querySelector(menuList).animate(
      [
        {transform:'scaleY(0)', transformOrigin:'0 0'},
        {transform:'scaleY(1)', transformOrigin:'0 0'}
        
      ], {
        duration: 500,
        fill:'both',
        
        
      }
        ).reverse()

    }

return{sliderBackward,sliderForward}

  }


const navForward = menuSlider('#navMenu').sliderForward

const navBackward = menuSlider('#navMenu').sliderBackward




const buttonMenuListener = document.querySelector('.menuContainer')
const closeMenuButton = document.querySelector('.closeMenu')

buttonMenuListener.addEventListener('click', (event)=>{
if(event.target.className === 'navButton'){
  navForward()
  closeMenuButton.style.display = 'flex'
}else if(event.target.className === 'closeMenu') { 
  closeMenuButton.style.display = 'none'
  navBackward()}
})








 

  