export function searchProfile (){
    const input = document.querySelector('.search_input');
    const button = document.querySelector('.search_button');

    button.addEventListener('click', () => {
        const profile = await getProfileByName(input.value);


    });
}

function showProfile (){
    const profile = JSON.parse(localStorage.getItem(''));

}

