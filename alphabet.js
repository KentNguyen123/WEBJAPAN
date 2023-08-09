document.querySelectorAll(".letterImg").forEach((item) => {
    item.addEventListener("click",() => {
        document.getElementById('letterModal').setAttribute("src", item.getAttribute("src"))
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'))
        modal.show()
    })
})
