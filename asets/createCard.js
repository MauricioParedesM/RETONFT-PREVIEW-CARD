export function createCard() {
    const app = document.querySelector('#app')
    const container = document.createElement('div')
    container.className = "container"
    app.appendChild(container)

    const wrapper = document.createElement('div')
    wrapper.className = "wrapper"
    container.appendChild(wrapper)

    const imgTop = document.createElement('div')
    imgTop.className = "img-top"
    wrapper.appendChild(imgTop)



    const imagen1 = document.createElement('img')
    imagen1.src = './asets/image-equilibrium.jpg'
    imagen1.alt = ''
    imgTop.appendChild(imagen1)

    const imgOverlay = document.createElement('div')
    imgOverlay.className = "img-overlay"
    imgTop.appendChild(imgOverlay)

    const imagen2 = document.createElement('img')
    imagen2.src = './asets/icon-view.svg'
    imagen2.alt = ''
    imgOverlay.appendChild(imagen2)

    const boxText = document.createElement('div')
    boxText.className = "box-text"
    wrapper.appendChild(boxText)

    const title = document.createElement('a')
    title.textContent = "Equilibrium #3429"
    boxText.appendChild(title)

    const paragraph = document.createElement('p')
    paragraph.textContent = "Our Equilibrium collection promotes balance and calm."
    boxText.appendChild(paragraph)

    const flex = document.createElement('div')
    flex.className = "flex"
    boxText.appendChild(flex)

    const eth = document.createElement('div')
    eth.className = "eth"
    flex.appendChild(eth)

    const imagen3 = document.createElement('img')
    imagen3.src = './asets/icon-ethereum.svg'
    imagen3.alt = ''
    eth.appendChild(imagen3)

    const paragraph1 = document.createElement('p')
    paragraph1.textContent = "0.041 ETH"
    eth.appendChild(paragraph1)

    const days = document.createElement('div')
    days.className = "days"
    flex.appendChild(days)

    const imagen4 = document.createElement('img')
    imagen4.src = './asets/icon-clock.svg'
    imagen4.alt = ''
    days.appendChild(imagen4)

    const paragraph2 = document.createElement('p')
    paragraph2.textContent = "3 days left"
    days.appendChild(paragraph2)

    const author = document.createElement('div')
    author.className = "author"
    boxText.appendChild(author)

    const imagen5 = document.createElement('img')
    imagen5.src = './asets/image-avatar.png'
    imagen5.alt = ''
    author.appendChild(imagen5)

    const paragraph3 = document.createElement('p')
    paragraph2.textContent = "Creation of "
    author.appendChild(paragraph3)

    const person = document.createElement('a')
    person.textContent = "Jules Wyvern"
    paragraph3.appendChild(person)

}