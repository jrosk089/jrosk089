/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  let one = document.getElementById('html');
  let two = document.getElementById('test');

  function showTag(){
    two.style.visibility = 'visible';
  };
  
  function hideTag(){
    two.style.visibility = 'hidden';
  }

  one.addEventListener('mouseover', showTag);
  one.addEventListener('mouseout', hideTag);