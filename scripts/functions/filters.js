const chevron = document.querySelectorAll('.down-chevron');

console.log(chevron);

for(let i = 0; i < chevron.length; i++) {
    chevron[i].addEventListener('click', () => {
        const parentElement = chevron[i].parentElement;
        parentElement.classList.toggle('active');
        console.log(parentElement);

        if(parentElement.classList.contains('active')) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('newDiv')
            newDiv.innerHTML = `
                <div class="input-search-categories">
                    <input type="text" aria-label="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <ul>
                    <li>Tarte aux fraise</li>
                </ul>
            `;
            parentElement.appendChild(newDiv);
        } else {
            let newDiv = parentElement.querySelector('.newDiv');
            if(newDiv) parentElement.removeChild(newDiv);
        }
    });

       
}

