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

export { menuSlider }