import { API } from './api.js';
import * as UI from './ui.js';

UI.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // read data
    const artist = document.querySelector('#artist').value,
        song = document.querySelector('#song').value;

    if (artist === '' || song === '') {
        UI.messageDiv.innerHTML = 'Error... All fields are mandatory';
        UI.messageDiv.classList.add('error');

        setTimeout(() => {
            UI.messageDiv.innerHTML = '';
            UI.messageDiv.classList.remove('error');
        }, 3000);
    } else {
        const api = new API(artist, song);
        api.queryAPI()
            .then(data => {
            if (data.lyric.lyrics) {
                    const lyrics_data = data.lyric.lyrics;
                    console.log(lyrics_data)
                    UI.resultDiv.textContent = lyrics_data;
                } else {
                    UI.resultDiv.innerHTML = 'No Lyrics Found';
                    UI.resultDiv.classList.add('error');
                    setTimeout(() => {
                        UI.resultDiv.innerHTML = '';
                        UI.resultDiv.classList.remove('error');
                    }, 4000);
                }
            })
    }
})
