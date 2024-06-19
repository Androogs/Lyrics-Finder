import * as UI from './interfaz.js'; //Importamos todo el contenido de el módulo 
import Api from './api.js';

UI.searchForm.addEventListener('submit', searchSong);

function searchSong(e){
    e.preventDefault();

    const artist = document.querySelector('#artist').value;
    const song = document.querySelector('#song').value;

    if(artist ==='' || song ===''){
        UI.messageDiv.textContent='Todos los campos son obligatorios';
        UI.messageDiv.classList.add('error');

        setTimeout(() => {
            UI.messageDiv.textContent='';
            UI.messageDiv.classList.remove('error');
        }, 3000);
        return;
    }

    const apiIntance = new Api(artist, song);
    apiIntance.fetchApi();
    console.log(apiIntance);
}