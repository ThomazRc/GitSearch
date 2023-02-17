import { renderProfile, renderRepos } from "./render.js";


function showProfile () {
    const profile = [JSON.parse(localStorage.getItem('searchProfile'))];
    


    renderProfile(profile);
    
}

showProfile();

function showRepos (){
    const repository = JSON.parse(localStorage.getItem('searchRepos'));

    renderRepos(repository);

}

showRepos();

function profileReturn (){
    const button = document.querySelector('.user_button');

    button.addEventListener('click', () => {
        window.location.replace("../../index.html");
        
    
    });
   
}

profileReturn();