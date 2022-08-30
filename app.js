const tabsBtn = document.querySelectorAll('.tabs_nav_btn');
const tabsItems = document.querySelectorAll('.tabs_item');
// console.log(tabsBtn);

tabsBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    // console.log(currentTab);

    
    tabsBtn.forEach(function(item) {
      item.classList.remove('active');
    });
    tabsItems.forEach(function(item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});


function Copy(containerid) {
  let textarea = document.createElement('textarea');
  textarea.id = 'temp';
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = document.getElementById(containerid).innerText;
  let selector = document.querySelector('#temp');
  selector.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
function CopyThree(containerid) {
  let textarea = document.createElement('textarea');
  textarea.id = 'temp';
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = document.getElementById(containerid).innerText;
  let selector = document.querySelector('#temp');
  selector.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

const tabsBtnT = document.querySelectorAll('.tabs_nav_btnT');
const tabsItemsT = document.querySelectorAll('.tabs_itemT');
// console.log(tabsBtn);

tabsBtnT.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtnT = item;
    let tabId = currentBtnT.getAttribute('data-tab');
    let currentTabT = document.querySelector(tabId);
    // console.log(currentTab);

    
    tabsBtnT.forEach(function(item) {
      item.classList.remove('active');
    });
    tabsItemsT.forEach(function(item) {
      item.classList.remove('active');
    });
    currentBtnT.classList.add('active');
    currentTabT.classList.add('active');
  });
});

const tabsBtnThree = document.querySelectorAll('.tabs_nav_btnThree');
const tabsItemsThree = document.querySelectorAll('.tabs_itemThree');
// console.log(tabsBtn);

tabsBtnThree.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtnThree = item;
    let tabIdThree = currentBtnThree.getAttribute('data-tab');
    let currentTabThree = document.querySelector(tabIdThree);
    // console.log(currentTab);

    
    tabsBtnThree.forEach(function(item) {
      item.classList.remove('active');
    });
    tabsItemsThree.forEach(function(item) {
      item.classList.remove('active');
    });
    currentBtnThree.classList.add('active');
    currentTabThree.classList.add('active');
  });
});

let nav = document.querySelector('.header');
let menuBtn = document.querySelector('.burger__menu');
menuBtn.addEventListener('click', ()=>{
  nav.classList.toggle('active');
});