   
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function show () 
{
     let toggle1 = document.querySelector("#intro");
     let toggle2 = document.querySelector("#awaken");

    if (toggle1.style.display == "block") 
        {
        toggle1.style.display = "none";
        toggle2.style.display = "block";
        } 
    else 
        {
        toggle1.style.display = "block";
        toggle2.style.display = "none";
        }

  }

  function show2 () 
{
     let toggle1 = document.querySelector("#awaken");
     let toggle2 = document.querySelector("#awaken2");

    if (toggle1.style.display == "block") 
        {
        toggle1.style.display = "none";
        toggle2.style.display = "block";
        } 
    else 
        {
        toggle1.style.display = "block";
        toggle2.style.display = "none";
        }

  }

  function show3 () 
  {
       let toggle1 = document.querySelector("#awaken2");
       let toggle2 = document.querySelector("#awaken3");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          }
  
    }

    function show4 () 
  {
       let toggle1 = document.querySelector("#awaken3");
       let toggle2 = document.querySelector("#awaken4");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          }
  
    }

    function show5 () 
  {
       let toggle1 = document.querySelector("#awaken4");
       let toggle2 = document.querySelector("#awaken5");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          }
  
    }

    function show6a () 
  {
       let toggle1 = document.querySelector("#awaken5");
       let toggle2 = document.querySelector("#awaken6a");
       let toggle3 = document.querySelector("#awaken6b");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          toggle3.style.display = "none";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          toggle3.style.display = "none";
          }
  
    }

    function show6b () 
  {
       let toggle1 = document.querySelector("#awaken5");
       let toggle2 = document.querySelector("#awaken6b");
       let toggle3 = document.querySelector("#awaken6a");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          toggle3.style.display = "none"
          } 
          else if (toggle3.style.display == "block")
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          toggle3.style.display ="none";
          }
          else 
          {
            toggle1.style.display="block";
            toggle2.style.display="none";
            toggle3.style.display="none";
          }
  
    }

    function show7 () 
  {
       let toggle1 = document.querySelector("#awaken6b");
       let toggle2 = document.querySelector("#out");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          }
  
    }
    function show8 () 
  {
       let toggle1 = document.querySelector("#out");
       let toggle2 = document.querySelector("#out2");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          }
  
    }

    function show9a () 
  {
       let toggle1 = document.querySelector("#out2");
       let toggle2 = document.querySelector("#out2a");
       let toggle3 = document.querySelector("#out2b");
       let toggle4 = document.querySelector("#out2c");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          toggle3.style.display = "none"
          toggle4.style.display ="none"
          } 
          else 
          {
            toggle1.style.display="block";
            toggle2.style.display="none";
            toggle3.style.display="none";
            toggle4.style.display="none";
          }
    }

    function show9ab () 
  {
       let toggle1 = document.querySelector("#out2a");
       let toggle2 = document.querySelector("#out2ab");
       let toggle3 = document.querySelector("#out2b");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          toggle3.style.display = "none"
          } 
          else 
          {
            toggle1.style.display="block";
            toggle2.style.display="none";
            toggle3.style.display="none";
          }
    }
    function show9b () 
  {
       let toggle1 = document.querySelector("#out2");
       let toggle2 = document.querySelector("#out2b");
       let toggle3 = document.querySelector("#out2ab");
       let toggle4 = document.querySelector("#out2c");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          toggle3.style.display = "none"
          toggle4.style.display ="none"
          } 
          else if (toggle3.style.display=="block")
          {
            toggle1.style.display = "none";
            toggle2.style.display = "block";
            toggle3.style.display = "none"
            toggle4.style.display ="none"

          }
          else if(toggle4.style.display =="block")
          {
            toggle1.style.display = "none";
            toggle2.style.display = "block";
            toggle3.style.display = "none"
            toggle4.style.display = "none"
          }
          else 
          {
            toggle1.style.display="block";
            toggle2.style.display="none";
            toggle3.style.display="none";
            toggle4.style.display="none";
          }
    }

    function show9c () 
  {
       let toggle1 = document.querySelector("#out2");
       let toggle2 = document.querySelector("#out2c");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          }
  
    }
    function show10 () 
  {
       let toggle1 = document.querySelector("#out2b");
       let toggle2 = document.querySelector("#end");
  
      if (toggle1.style.display == "block") 
          {
          toggle1.style.display = "none";
          toggle2.style.display = "block";
          } 
      else 
          {
          toggle1.style.display = "block";
          toggle2.style.display = "none";
          }
  
    }
    
