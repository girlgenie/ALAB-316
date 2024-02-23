
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
    // { text: 'account', href: '/account' },
    // { text: 'a', href: '/account' },
    // { text: 'b', href: '/account' },
    // { text: 'f', href: '/account' },
    // { text: 'ad', href: '/account' },
  ];


// how to access an element in an array
console.log(menuLinks[0]) //pulls first item in an array
console.log(menuLinks[0].href)

for(let i = 0; i < 10; i++){
    console.log(i)
} // (): condition for loop {}: what I want to happen once it loops


// for each loop
menuLinks.forEach((item) => {
    console.log (item.text)
})


// Part 3:
const nav = document.querySelector('nav')
// add nav bar
    for (var i = 0; i < menuLinks.length; i++) {
        var link = menuLinks[i];
        var menuItem = document.createElement('a');
        menuItem.textContent = link.text;
        menuItem.href = link.href;
        nav.appendChild(menuItem);
    }

const mainEl = document.querySelector('main'); 
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr')

// var('--main-bg')=document.querySelector(mainEl).style.backgroundColor

// Part 2:
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
console.log(topMenuEl)
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");


// Part 2-------------------------------------------------------------
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = "100%"; 
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; 
console.log(subMenuEl)