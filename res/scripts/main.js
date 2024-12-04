//nav menue links
const navItems = document.querySelectorAll('.navItem');
navItems.forEach((item, index)=>{
  //console.log(navItems[index]);
  //console.log(item.id);
  if(item.id === "home"){
    //console.log("hello home");
    item.addEventListener('click', ()=>{
      window.location.href = '/index.html';
      //console.log('hello');
    });
  }
  if (item.id === "about") {
    //console.log("hello about");
    item.addEventListener('click', () => {
      window.location.href = '/res/pages/about-us.html';
      //console.log('hello');
    });
  }
  if (item.id === "skills") {
    //console.log("hello skills");
    item.addEventListener('click', () => {
      window.location.href = '/res/pages/skills.html';
      //console.log('hello');
    });
  }
  if (item.id === "projects") {
    //console.log("hello projects");
    item.addEventListener('click', () => {
      window.location.href = '/res/pages/projects.html';
      //console.log('hello');
    });
  }
  if (item.id === "contactUs") {
    //console.log("hello contactUs");
    item.addEventListener('click', () => {
      window.location.href = '/res/pages/contact-us.html';
      //console.log('hello');
    });
  }
});

//explore button
const exploreBtn = document.querySelector('.exploreBtn');
function explore() {
  exploreBtn.addEventListener('click', ()=>{
    window.location.href = '/res/pages/about-us.html';
  });
}

explore();

