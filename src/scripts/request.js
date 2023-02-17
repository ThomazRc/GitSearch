export async function getProfile (profileName){
    const profile = await fetch(`https://api.github.com/users/${profileName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(Response => Response.json())
    .then(res => {

        localStorage.setItem('searchProfile', JSON.stringify(res));

        if(res.message !== 'Not Found') {
            window.location.replace('/src/pages/profile.html');

        }else{
            window.location.replace('src/pages/error.html');
        }
    });

    return profile;

}

export async function getProfileRepos (profileName){
    const repository = await fetch(`https://api.github.com/users/${profileName}/repos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(Response => Response.json())
    .then(res => {

        localStorage.setItem('searchRepos', JSON.stringify(res));

    });

   return repository;  
}
