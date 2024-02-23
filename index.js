
// Menu data structure
// original menuLinks code before part 4 starts here ------------
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];
//   original menuLinks code before part 4 ends here ------------

// updated menuLinks code for part 4 starts here ----------------
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
//   updated menuLinks code for part 4 ends here ------------------
  console.log(menuLinks)


// how to access an element in an array------------------------------
// ------------------------------------------------------============
// console.log(menuLinks[0]) //pulls first item in an array
// console.log(menuLinks[0].href)
// ------------------------------------------------------------------
// ==================================================================

for(let i = 0; i < 10; i++){
    console.log(i)
} // (): condition for loop {}: what I want to happen once it loops


// GOOD TO KNOW: how to use for each loop in an array below ===============================
// menuLinks.forEach((item) => {
//     console.log (item.text)
// })
// ========================================================================================


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
    console.log(menuItem)

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


// DOM Manipulation (Part Two) 
// Part 3: Creating the Submenu ------------------------------------------------------------------

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%"; 
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; 
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around"); 

// Set the CSS position property of subMenuEl to the value of absolute.
document.getElementById("sub-menu").style.position = "absolute"; 
// Set the CSS top property of subMenuEl to the value of 0.
document.getElementById("sub-menu").style.top = 0; 



// Part 4: Adding Menu Interaction----------------------------------------------------------------
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');   // HELP! RETURNING NodeList(4) [a, a, a, a] INSTEAD OF MENU ITEM NAMES
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", (event) => {
    // The first line of code of the event listener function should call the event object's preventDefault() method
    event.preventDefault()
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (!event.target.matches('a')) {
        // Immediately return if the element clicked was not an <a> element
        return
    }
    console.log(event.target.textContent)
});


console.log(topMenuEl)
console.log(topMenuLinks)
console.log(subMenuEl)