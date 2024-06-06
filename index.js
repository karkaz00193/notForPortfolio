const btnDarkMode= document.querySelector('.dark-node-btn')
//

//1.
if (window.matchMedia && window.matchMedia('perfes-color-scheme: dark').matches){
  btnDarkMode.classList.add("dark-node-btn--active")
  document.body.classList.add("dark")
}
//2.
if(localStorage.getItem('darkMode')==='dark'){
  btnDarkMode.classList.add("dark-node-btn--active")
  document.body.classList.add('dark')
} else if(localStorage.getItem("darkMode")==='light') {
  btnDarkMode.classList.remove("dark-node-btn--active")
  document.body.classList.remove('dark')
}


//If the system settings change, the themes changes  
window.matchMedia("(perfes-color-scheme: dark)").addEventListener('change', () =>{
const nweColorSchene =event.matches ? "dark" : 'light'

alert('change')

if (nweColorSchene==='dark'){
  btnDarkMode.classList.add("dark-node-btn--active")
  document.body.classList.add("dark")
  localStorage.setItem('darkMode','dark' )
} else{
  btnDarkMode.classList.remove("dark-node-btn--active")
  document.body.classList.remove("dark")
  localStorage.setItem('darkMode','light' )

}})
//

btnDarkMode.onclick= function () {
    btnDarkMode.classList.toggle("dark-node-btn--active")
  const idsDark=  document.body.classList.toggle('dark')
  
  if(idsDark){
    localStorage.setItem('darkMode', 'dark')

  } else{
    localStorage.setItem('darkMode','light')
  }
  }