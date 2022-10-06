const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    const firstName = document.getElementById('firstName').value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    fetch(url)
        .then(response => {
            if (response.status !== 200){
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response);
            })
        .then((response)=>response.json())
        .then((commits) => log.textContent = `${commits.gender}`)
    event.preventDefault();
}
