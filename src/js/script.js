// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox")
const lightboximg = document.querySelector("#lightbox > img")

document.body.addEventListener("click", (evt) => {
    if (evt.target.matches("[data-full-img]")) {
        lightboximg.src = evt.target.dataset.fullimg
        lightbox.showModal()
    }
})

lightbox.addEventListener("click", (evt) => {
    lightbox.classList.add("sortie")
    lightbox.addEventListener(
        "animationend",
        () => {
            lightbox = Element | null
            lightbox.classList.remove("sortie")
            lightbox.close()
        },
        {once : true}
    )
})