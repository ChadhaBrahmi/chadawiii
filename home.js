const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', toggle.checked);
});


    const menuIcon = document.getElementById("menu-icon");
    const nav = document.querySelector("nav");

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}

function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'

}

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
  
      
      if (window.innerWidth <= 768) {
        
        let opacity = 1 - (scrollPosition / windowHeight);
  
        
        opacity = opacity < 0 ? 0 : opacity;
  
    
        logo.style.opacity = opacity;
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const icon1 = document.getElementById("icon1");
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
  
      
      if (window.innerWidth <= 768) {
        
        let opacity = 1 - (scrollPosition / windowHeight);
  

        opacity = opacity < 0 ? 0 : opacity;
        icon1.style.opacity = opacity;
      }
    });
  });
  