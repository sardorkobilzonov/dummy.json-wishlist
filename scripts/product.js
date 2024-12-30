const detailEl = document.querySelector(".detail")
const BASE_URL = "https://dummyjson.com"

async function fetchData() {
    let params = new URLSearchParams(window.location.search)
    const response = await fetch(`${BASE_URL}/products/${params.get("id")}`)
    response
        .json()
        .then(res => {
            createDetailPage(res);
        })

}

window.onload = ()=> {
    fetchData()
}

function createDetailPage(data){
    detailEl.innerHTML = `
        <div>
            <img src=${data.images[0]} alt="">
        </div>
        <div>
            <h1>${data?.title}</h1>
            <p>${data?.description}</p>
            <p>${data?.price}</p>
            <button>Buy now</button>
        </div>
    `
}