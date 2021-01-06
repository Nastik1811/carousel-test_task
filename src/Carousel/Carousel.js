

const Carousel = () => {
    const container = document.createElement('div')
    container.insertAdjacentHTML('afterbegin', `
        <section class="carousel-container">
            <ul class="carousel">
                <li class="slide" ><a href="#1">1</a></li>
                <li class="slide" ><a href="#2">2</a></li>
                <li class="slide" ><a href="#3">3</a></li>
                <li class="slide" ><a href="#4">4</a></li>
            </ul>
        </section>
    `)
    return container
}

module.exports = Carousel