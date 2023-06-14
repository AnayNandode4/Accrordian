const acc = document.querySelectorAll('.accordian')


for(let accs of acc){
    const icon = accs.querySelector('.icon')
    const answer = accs.querySelector('.answer')

    accs.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active')
    })
}