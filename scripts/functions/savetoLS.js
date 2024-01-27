
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('filter-selected__itemList')) {
        const itemText = event.target.textContent;
        const localStorageItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        const itemIndex = localStorageItems.indexOf(itemText);
        if (itemIndex === -1) {
            localStorageItems.push(itemText);
            event.target.classList.add('active');
        } else {
            localStorageItems.splice(itemIndex, 1);
            event.target.classList.remove('active');
        }
        localStorage.setItem('selectedItems', JSON.stringify(localStorageItems));
    }
});




