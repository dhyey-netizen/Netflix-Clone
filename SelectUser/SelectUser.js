let idx = -1;

function addUsers (users) {
    let printUser = document.getElementsByClassName("printUser")[0];
    printUser.style.width = "1000px";
    printUser.style.height = "250px";
    printUser.style.display = "grid";
    printUser.style.justifyItems = "center"; 
    printUser.style.gridTemplateRows = "repeat(5, 1fr)";
    printUser.style.gridTemplateColumns = "repeat(5, 1fr)";
    printUser.style.gap = "0px";

    let userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.style.textAlign = "center";

    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "imageDiv");
    imageDiv.style.background = getColor();
    imageDiv.style.width = "150px";
    imageDiv.style.height = "150px"; 
    imageDiv.style.borderRadius = "8px";
    imageDiv.style.position = "relative";

    imageDiv.addEventListener("click", function () {
        window.location.href = "../Homepage/Homepage.html";
    })

    imageDiv.addEventListener("mouseenter", function () {
        imageDiv.style.border = "2px solid white";
        text.style.color = "white";
        text.style.fontWeight = "500";
    })

    imageDiv.addEventListener("mouseleave", function () {
        imageDiv.style.border = "0px solid white";
        text.style.color = "rgb(115, 115, 115)";
    })

    let image = document.createElement("img");
    image.setAttribute("id", "img");
    image.src = "ChatGPT Image Apr 13, 2025, 09_08_59 PM.png";
    image.style.width = "200px";
    image.style.height = "200px";
    image.style.position = "absolute";
    image.style.top = "50%";
    image.style.left = "50%";
    image.style.transform = "translate(-50%, -50%)";

    imageDiv.appendChild(image);

    let text = document.createElement("div");
    text.innerText = users;
    text.style.fontSize = "18px";
    text.style.fontFamily = "Arial";
    text.style.color = "rgb(115, 115, 115)";
    text.style.paddingTop = "20px";

    userCard.append(imageDiv);
    userCard.append(text);

    printUser.appendChild(userCard);
}

function getColor() {
    const gradients = [
        'linear-gradient(to bottom, #0071eb, #63b3ff)', // Blue
        'linear-gradient(to bottom, #f5b100, #ffe185)', // Yellow
        'linear-gradient(to bottom, #002f4b, #5b6770)', // Dark Cyan/Grey
        'linear-gradient(to bottom, #00c853, #69f0ae)', // Green
        'linear-gradient(to bottom, #d50000, #ff8a80)'  // Red
    ];
    idx = (idx + 1) % gradients.length;
    return gradients[idx];
}

let users = ['Priyansh Patel', 'Rushi Patel', 'Dhyey Gajjar', 'Shail Patel', 'Disha Patel']

for (let i = 0; i < users.length; i++) {
    addUsers(users[i]);
}

let manageProfile = document.getElementsByClassName("manage-profiles")[0];
manageProfile.style.justifyItems = "center";

let btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.innerText = "Manage Profiles"; 
btn.style.width = "220px";
btn.style.color = "rgb(115, 115, 115)";
btn.style.marginTop = "18px";
btn.style.padding = "13px 20px";
btn.style.backgroundColor = "transparent";
btn.style.border = "2px solid rgb(115, 115, 115)";
btn.style.cursor = "pointer";
btn.style.fontSize = "22px";
btn.style.fontFamily = "Arial";
btn.style.display = "block"; 


btn.addEventListener("click", function () {
    let name = prompt("Enter User Name");
    users.push(name);
    addUsers(name);
    printUser.lastElementChild.scrollIntoView({ behavior: "smooth" });

    if (users.length >= 10) {
        alert("Maximum user limit reached!");
        return;
    }
})

btn.addEventListener("mouseenter", function () {
    btn.style.color = "white";
    btn.style.border = "2px solid white";
})

btn.addEventListener("mouseleave", function () {
    btn.style.color = "rgb(115, 115, 115)";
    btn.style.border = "2px solid rgb(115, 115, 115)";
})

manageProfile.appendChild(btn);
