const userList = document.querySelector(".users__list");
function getUserApi(){
    return fetch("https://github.com/DinaMazur/Http-practise")

}


getUserApi().then((result) =>result.json()).then((resultData) => console.log(resultData))

function dynamic(){
    const htmlElement = galleryItems.map(galleryItem => {
        const elementOfLI =`
        <li class="users__item">
            <h2 class="users__nickname">${login}</h2>
            <p class="users__node-id">${node_id}</p>
            <img class="users__picture" src="${avatar_url}" alt="picture">
        </li>`
        return elementOfLI
    })
const htmlElementString = htmlElement.join('')
userList.innerHtml = htmlElementString
}

userList.style.listStyle = "none";
userList.style.dysplay = "flex"

function getUserApi(){
    return fetch("https://github.com/DinaMazur/Http-practise")

}

getUserApi().then((result) =>result.json()).then((resultData) => console.log(resultData))