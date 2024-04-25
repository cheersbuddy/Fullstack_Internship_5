// const drums = document.querySelectorAll('.drum');
// let audio = new Audio();

// drums.forEach(drum => {
//     let clickCount = 0;

//     drum.addEventListener('click', () => {
//         clickCount++;

//         const sound = drum.dataset.sound;

//         // If clicked once it play the sound
//         if (clickCount === 1) {
//             audio.src = `sounds/${sound}.mp3`;
//             audio.play();
//         } else {
//             // If clicked twice it pause the sound and reset the counter
//             audio.pause();
//             audio.currentTime = 0;
//             clickCount = 0;
//         }
//     });

//     // to reset the counter when the audio finishes playing
//     audio.addEventListener('ended', () => {
//         clickCount = 0;
//     });
// });



// const drumrow = document.querySelector('.col');

// const keyboard = {
//     'Q':'Kick',
//     'w':'snare',
//     'x':'drum',
//     'y':'form',
// }
// Object.keys(keyboard).forEach(key =>
// {
//     const button =document.getElement(key);
//     button.classList.add('btn','btn-primary','drum-${key}');
//     button.textContent = keyboard[key].toUpperCase();
//     button.dataset.sound = keyboard[key]
//     drumrow.appendChild(button);
// })
// document.addEventListener('keydown', event=>{
//     const key=event.key.toUpperCase;
//     console.log(key);
//     if(keyboard[key]){
//         const audio = new Audio(`sounds/${keyboard[key]}.mp3`);
//         audio.play(); 
//     }
// })

const drumRows = document.querySelector('.col')

const keyboard = {
    'Q': 'kick',
    'W': 'drum',
    'E': 'snare',
    'R': 'hithat',
    'T': 'ride',
    'A': 'turn',
    'S': 'crash',
    'L': 'wind',
    'F': 'fire',
    'H': 'loop',
}
Object.keys(keyboard).forEach(key => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary', 'm-1', `drum-${key}`);
    button.textContent = keyboard[key].toUpperCase();
    button.dataset.sound = keyboard[key];
    drumRows.appendChild(button);
})

document.addEventListener('keydown', event => {
    const key = event.key.toUpperCase();
    console.log(key);
    if(keyboard[key]){
        const audio = new Audio(`sounds/${keyboard[key]}.mp3`)
        audio.play();
    }
})