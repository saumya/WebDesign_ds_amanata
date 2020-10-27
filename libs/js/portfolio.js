// 
// @version : 1.0.0
// Application Entry
//

// JQuery: Ready : https://api.jquery.com/ready/
$(function(){
    console.log('ready! portfolio.');

    const portfolioItems = ['Wedding', 'Fashion And Beauty', 'Food', 'Commercial', 'Street', 'Travel'];
    let activeItemNum = 1;

    // Menu
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function(){
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    })

    //
    //$('.b_inactive').hide();
    //$('.b_active').show();
    //
    const hideAllDotsExcept = function(activeNum){
      for (let index = 0; index < portfolioItems.length; index++) {
        const i_name = '.b_inactive_'+(index+1);
        const a_name = '.b_active_'+(index+1);
        const imageId = '#img_'+(index+1);
        //console.log(a_name,i_name);

        if(activeItemNum === (index+1) ){
          $(a_name).show();
          $(i_name).hide();
          $(imageId).show();
        }else{
          $(a_name).hide();
          $(i_name).show();
          $(imageId).hide();
        }
        
      }
      
    }
    
    //
    
    // Portfolio.html
    $("#btn_left").on('click', function(){
      //console.log('Left');
      if(activeItemNum<=1){
        //
      }else{
        activeItemNum--;
      }
      updateApp();
      //console.log( activeItemNum );
      return false;
    });
    $("#btn_right").on('click', function(){
      //console.log('Right');
      if(activeItemNum>=6){
        //
      }else{
        activeItemNum++;
      }
      updateApp();
      //console.log( activeItemNum );
      return false;
    });

    const updateApp = function(){
        //console.log('updateApp : activeItemNum', activeItemNum);
        //console.log(activeItemNum, portfolioItems[activeItemNum-1]);
        hideAllDotsExcept(activeItemNum);
        $('#photo_info').html( portfolioItems[activeItemNum-1] );
    }
    // initial call
    updateApp();
    // Portfolio.html /
  })