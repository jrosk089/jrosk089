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
  let two = document.getElementById('css');
  let three = document.getElementById('js');
  let four = document.getElementById('git');
  let five = document.getElementById('trombone');


  function showTag(){
    let tag = this.lastElementChild;
    tag.style.visibility = 'visible';
  };
  
  function hideTag(){
    let tag = this.lastElementChild;
    tag.style.visibility = 'hidden';
  }

  one.addEventListener('mouseover', showTag);
  one.addEventListener('mouseout', hideTag);

  two.addEventListener('mouseover', showTag);
  two.addEventListener('mouseout', hideTag);

  three.addEventListener('mouseover', showTag);
  three.addEventListener('mouseout', hideTag);

  four.addEventListener('mouseover', showTag);
  four.addEventListener('mouseout', hideTag);

  five.addEventListener('mouseover', showTag);
  five.addEventListener('mouseout', hideTag);
