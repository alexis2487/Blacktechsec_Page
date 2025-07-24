
const numDogs = 5;
for (let i = 0; i < numDogs; i++) {
    const dog = document.createElement('img');
    dog.src = 'img/dog.gif';
    dog.className = 'doggo';
    dog.style.left = `${Math.random() * 100}%`;
    dog.style.top = `${Math.random() * 80 + 10}%`;
    document.body.appendChild(dog);

    const speed = Math.random() * 5 + 2;
    dog.animate([{ transform: "translateX(-100vw)" }, { transform: "translateX(100vw)" }], {
        duration: speed * 1000,
        iterations: Infinity,
    });
}
