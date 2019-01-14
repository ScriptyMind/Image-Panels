var pannels = document.querySelectorAll('.pannel');

function active(){
  pannels.forEach(p => p.classList.remove("active"));
  this.classList.toggle("active");
  console.log("ok");
}

pannels.forEach(x => x.addEventListener('click', active));