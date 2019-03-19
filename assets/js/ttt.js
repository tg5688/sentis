const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let indexInterval = setInterval(changeSlide, time)
//moje rozwiązanie bez zatrzymania - musze robic programy bardziej uniwersalne bo jakby sie dodało jeden slajd wiecej to juz by nie działał program poprawnie
// const keyChangeSlide = (e) => {
//     if (e.keyCode === 37) {
//         active--;
//         if (active < 0) active = 2;

//         image.src = slideList[active].img;
//         h1.textContent = slideList[active].text;
//         changeDot()
//     } else if (e.keyCode === 39) {
//         active++;
//         if (active === 3) active = 0;

//         image.src = slideList[active].img;
//         h1.textContent = slideList[active].text;
//         changeDot()

//     }
// }
const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        indexInterval = setInterval(changeSlide, time) //ponownie wywolujemy sekcje setInterval ale ona jest już nową funkcją wiec juz nie mamy jej indeksu (zwraca ona liczbe liczbe ile razy interwał nastąpił) dlatego trzeba go przypisac do zmiennej indexInterval poto żeby gdy znów klikniemy w klawisz clearInterval ją wyczyścił
    }
}
// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)
