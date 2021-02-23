const lis_sizes = [...document.getElementById('sizes_list').children];
const lis_colors = [...document.getElementById('colors_list').children];
const circle = document.getElementById('circle');
const bag = document.getElementById('bag');
const sneaker = document.getElementById('sneaker');

function debounce(fn, wait) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, wait);
    }
};

function PutBag() {
    
    sneaker.style.animation ='put 1s ease';
   
    setTimeout(() => {
        sneaker.style.animation ='';
    },1000);
};


lis_sizes.forEach(li => {
    li.addEventListener('click', function () {
        lis_sizes.forEach(li => li.classList.remove('active_size'));
        this.classList.add('active_size');
    });
    
});


lis_colors.forEach(li => {
    li.addEventListener('click', function () {

        lis_colors.forEach(li => li.classList.remove('active_color'));

        this.classList.add('active_color');

        circle.style.background = this.dataset.color;

        bag.style.background = this.dataset.color;
        
        sneaker.src = `/assets/sneakers_${this.dataset.sneaker}.png`

    });
  
});
