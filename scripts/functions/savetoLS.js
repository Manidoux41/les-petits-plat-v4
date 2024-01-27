
export function saveToLS() {
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('filter-selected__itemList')) {
            const itemText = event.target.textContent;
            const localStorageItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
            const itemIndex = localStorageItems.indexOf(itemText);
            if (itemIndex === -1) {
                localStorageItems.push(itemText);
                event.target.classList.add('active');
                const filterSelected = document.querySelector('.filter-selected');

                if (event.target.classList.contains('active') && localStorageItems.includes(event.target.textContent)) {
                    const newItem = document.createElement('div');
                    newItem.classList.add('filter-selected__item');
                    newItem.innerHTML = `
                        <span class="item__name">${event.target.textContent}</span>
                        <span class="item__close__icon">
                            <i class="fa-solid fa-xmark"></i>
                        </span>
                    `;
                    filterSelected.appendChild(newItem);
                }
                
                

            } else {
                localStorageItems.splice(itemIndex, 1);
                event.target.classList.remove('active');
                const filterItems = document.querySelectorAll('.filter-selected__item');
                filterItems.forEach(item => {
                    if (item.querySelector('.item__name').textContent === event.target.textContent) {
                        item.remove();
                    }
                });
            }
            localStorage.setItem('selectedItems', JSON.stringify(localStorageItems));
        }



        
    });
}





