// const form = document.querySelector("#sign-up-form")
const submit_btn = document.querySelector("#submit-btn")
document.addEventListener("DOMContentLoaded", () => {
    let hidden_elements = document.querySelectorAll(".content-to-show")
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show')

                observer.unobserve(entry.target)
            }
        }),
        {
            threshold: 0.6
        }
    })

    hidden_elements.forEach(el => observer.observe(el))
})

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const formData = new FormData(event.target)
//     const workableData = Object.fromEntries(formData.entries())
//     console.log(workableData)
//     form.reset()
// })