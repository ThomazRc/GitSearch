export function renderProfile (array) {
    const main = document.querySelector('.container');

    main.innerHTML = '';

    
    array.forEach(profile => {
        const card = profileCards(profile);

        main.appendChild(card);

    });

}

export function renderRepos (array) {
    const main = document.querySelector('.container');
    const ul = document.createElement('ul');
    ul.classList.add('project');

    main.appendChild(ul);


    array.forEach(repository => {
        const cardRepos = profileCardsRepos(repository);

        ul.appendChild(cardRepos);

    });

    return main;
}


function profileCards (user) {

    const section = document.createElement('section');
    const profileImg = document.createElement('img');
    const profileName = document.createElement('h2');
    const ButtonReturn = document.createElement('button');
    
    
    section.classList.add('user');
    profileImg.classList.add('user_image');
    profileName.classList.add('user_name');
    ButtonReturn.classList.add('user_button');
   
    
    profileImg.src = user.avatar_url;
    profileImg.alt = user.name;
    profileName.innerText = user.name;
    ButtonReturn.innerText = "Trocar de usuário";


    section.append(profileImg, profileName, ButtonReturn);
   

    return section;

}


function profileCardsRepos (repos) {
    const li = document.createElement('li');
    const profileProject = document.createElement('h3');
    const profileText = document.createElement('p');
    const repository = document.createElement('button');

    repository.addEventListener('click', () => {
        window.open(`${repos.html_url}`);

    });

    li.classList.add('project_list');
    profileProject.classList.add('project_title');
    profileText.classList.add('project_text');
    repository.classList.add('project_button');


    profileProject.innerText = repos.name;
    //profileText.innerText = `${repos[0].description.substring(0, 25)}...`;
    profileText.innerText = `${repos.description}`;
    if(repos.description == null){
        
        profileText.innerText = 'Sem Descrição...';
    }

    repository.innerText = 'Repositório';

    li.append(profileProject ,profileText, repository);

    return li;

}