const name = "Abhishek"
const mobile_no = 7054916134
const pic = "hello.png"

const badges = [{
    badge_name: "Gate Score Card",
    summary: "ECE 2021",
    badge_image: "Gate result.jpg"
}, {
    badge_name: "Exposis Internship",
    summary: "",
    badge_image: "Exposis internship.jpg"
}, {
    badge_name: "HTML Complition",
    summary: "",
    badge_image: "HTML Certificate.jpg"
}, {
    badge_name: "Visa virtual",
    summary: "",
    badge_image: "Visa forage.jpg"
}, {
    badge_name: "World education fair",
    summary: "",
    badge_image: "World education fair.jpg"
}]


const Projects = [{
    project_name: "Artificial eye for a blind man",
    project_image: "artificial_eye.jpg",
    project_detail: "An ardiuno,altrasonic sensor and vibrator based project.Which sences the obstracle and warns the user"
}, {
    project_name: "Portfolio web-page",
    project_image: "port.jpg",
    project_detail: "A web page that describe about me. Based on pure javaScript and CSS based  "

}]


const skills = [{
    skill_name: "Python",
    skill_level: 80
}, {
    skill_name: "HTML",
    skill_level: 90
}, {
    skill_name: "CSS",
    skill_level: 85
}, {
    skill_name: "JavaScript",
    skill_level: 70
}, {
    skill_name: "React",
    skill_level: 50
}]

const nav_elements = ["Home", "Badge", "Project", "Skill", "Contect"]


const main_nav_bar = (name, nav_elements) => {
    const el = document.createElement("div")
    el.setAttribute("class", "name")
    el.innerHTML = `${name}`
    document.querySelector(".main-nav-bar").appendChild(el);
    const el1 = document.createElement("div")
    el1.setAttribute("class", "nav-bar")
    document.querySelector(".main-nav-bar").appendChild(el1);
    nav_bar(nav_elements) /*Calling nav_bar function */
    const el2 = document.createElement("div")
    el2.setAttribute("class", "chat")
    el2.innerHTML = `  <a href="https://api.whatsapp.com/send?phone=917054916134" target="_blank">
    <img width="70px" src=" whatsapp.png"></a>`
    document.querySelector(".main-nav-bar").appendChild(el2);
    load_home()
}

function nav_bar(nav_elements) {

    for (i in nav_elements) {
        const el3 = document.createElement("button");
        const el2 = document.createElement("a");
        el3.setAttribute("class", "nav-el")
        el3.setAttribute("id", `${ nav_elements[i] }`)
        el2.innerHTML = `${nav_elements[i]}`
        el3.appendChild(el2)
        document.querySelector(".nav-bar").appendChild(el3);
    }
}


main_nav_bar(name, nav_elements)

//nav Buttons
const home_but = document.getElementById('Home')
const badge_but = document.getElementById('Badge')
const project_but = document.getElementById('Project')
const skill_but = document.getElementById('Skill')
const contect_but = document.getElementById('Contect')

function load_home() {
    document.querySelector(".main-container").innerHTML = `
    <div class="welcome">
        <span class="greeting">Hello! <br> This is Abhishek Gupta<br>
        Front-end Developer</span>
    </div>
    <img id="profile-photo" src="${pic}">`
    const el = document.createElement("div")
    el.setAttribute("class", "")
}

function load_badge() {
    document.querySelector(".main-container").innerHTML = `<div class="badge-container"></div>`
    for (i in badges) {
        const el0 = document.querySelector(".badge-container")
        const el = document.createElement("div")
        el.setAttribute("class", "badge-box")
        const el2 = document.createElement("div")
        el2.setAttribute("class", "badge-detail")
        const el3 = document.createElement("details")
        const el4 = document.createElement("summary")
        const el5 = document.createElement("p")
        el4.innerHTML = `${badges[i].badge_name}`
        el5.innerHTML = `${badges[i].summary}`
        el3.appendChild(el4)
        el3.appendChild(el5)
        el2.appendChild(el3)
        const el6 = document.createElement("div")
        el6.setAttribute("class", "badge-image-box")
        const el7 = document.createElement("img")
        el7.setAttribute("class", "badge-image")
        el7.setAttribute("src", badges[i].badge_image)
        el6.appendChild(el7)
        el.appendChild(el2)
        el.appendChild(el6)
        el0.appendChild(el)
    }
    const el = document.createElement("img")
    el.setAttribute("id", "profile-photo")
    el.setAttribute('src', pic)
    document.querySelector(".main-container").appendChild(el)
}

function load_project() {
    document.querySelector(".main-container").innerHTML = `<div class="project-container"></div>`
    for (i in Projects) {
        const el = document.querySelector(".project-container")
        const el2 = document.createElement("div")
        el2.setAttribute("class", "project-box")
        el2.innerHTML = `<img class="project-image" alt="Image is missing" src="${Projects[i].project_image}"><div class="project-detail"><h2> ${Projects[i].project_name}</h2><p>${Projects[i].project_detail}</p></div> `
        el.appendChild(el2)
    }
    const el = document.createElement("img")
    el.setAttribute("id", "profile-photo")
    el.setAttribute("src", pic)
    document.querySelector(".main-container").appendChild(el)
}

function load_skill() {
    document.querySelector(".main-container").innerHTML = `<div class="skill-container"></div>`
    for (i in skills) {
        const el = document.querySelector(".skill-container")
        const el2 = document.createElement("div")
        el2.setAttribute("class", "skill-box")
        el2.innerHTML = `<div class"full-level"><div class="mesured-level" style="width:${skills[i].skill_level}%;"><div class="skill-name">${skills[i].skill_name}  ${skills[i].skill_level}%</div></div></div>`
        el.appendChild(el2)
    }
    const el = document.createElement("img")
    el.setAttribute("id", "profile-photo")
    el.setAttribute("src", pic)
    document.querySelector(".main-container").appendChild(el)
}

// nav elements clicking
home_but.addEventListener("click", load_home)

badge_but.addEventListener('click', load_badge)

project_but.addEventListener('click', load_project)
skill_but.addEventListener('click', load_skill)
contect_but.addEventListener('click', () => {
    document.querySelector(".main-container").innerHTML = `<div id="contect-form-container">
    <div id="contect-form">
        <h2 style="text-align: center;">Contect me</h2>
        <label>Email</label>
        <input id="mail_id" placeholder="  Enter your email">
        <label>Message</label>
        <textarea id="msg" placeholder=" Drope your message here"></textarea>
        <button id="send" >Send</button>
    </div>
</div>`
    const send = document.getElementById("send")
    send.addEventListener("click", send_mail)
})

function send_mail() {
    //site use is emailjs
    emailjs.init('ldeGyfVMt8ZoNnLI5')
    emailjs.send("service_k0av37i", "template_poygk7o", {
        sub: "Nothing",
        from_name: document.getElementById("mail_id").value,
        message: document.getElementById("msg").value,
    }).then(() => {
        alert('Sent!');
    }, (err) => {
        alert("Not send !! \n Try again");
    });;
}
