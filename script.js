document.querySelector("fa-bars").addEventListener("click", displayMenu); 

function displayMenu() {
    const nav = document.getElementById('navbar');
    nav.style.display = 'block';
    const fa_bars = document.querySelector("fa-bars");
    fa_bars.style.display = 'none';
    const fa_times = document.querySelector("fa-times");
    fa_times.style.display = 'block';
}