
import { getProfile, getProfileRepos } from "./request.js";

function searchProfile (){
    const input = document.querySelector('.search_input');
    const button = document.querySelector('.search_button');

    button.addEventListener('click', async (event) => {
        event.preventDefault();

        const repos = await getProfileRepos(input.value);
        const profile = await getProfile(input.value);
        
    });
}

searchProfile();

