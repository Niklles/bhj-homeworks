const allTabs = Array.from(document.querySelectorAll('.tab'));
let activeTab = document.querySelector('.tab_active');

const allContents = Array.from(document.querySelectorAll('.tab__content'));
let activeContent = document.querySelector('.tab__content_active');

allTabs.forEach(clickTab => {
  clickTab.addEventListener('click', () => {
    let idxClickTab = allTabs.indexOf(clickTab);

    activeTab.classList.remove('tab_active');
    activeTab = clickTab;
    activeTab.classList.add('tab_active');

    activeContent.classList.remove('tab__content_active');
    activeContent = allContents[idxClickTab];
    activeContent.classList.add('tab__content_active');
  });
});