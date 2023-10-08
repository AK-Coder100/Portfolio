// const send = document.getElementById("send")

// function send_mail() {
//     //site use is emailjs

//     fetch("https://discord.com/api/webhooks/1152935345864843346/vXWP_4MQTXgh7Igj0yJn4f1nMN5lsB-Af77zfvd5K8tdiH-4M3nYrxkt4sQyJsWgIAnS", {
//         "method": "POST",
//         "headers": { 'Content-Type': 'application/json' },
//         "content": "This msg is from Portfolio the contect form",
//         "username": "Porfolio bot",
//         "embeds": [
//             {
//                 "title": "Mail chat seo",
//                 "color": 15258703,
//                 "thumbnail": {
//                     "url": "https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280",
//                 },
//                 "fields": [

//                     {
//                         "name": "email",
//                         "value": document.getElementById("mail_id").value,
//                         "inline": false
//                     },

//                     {
//                         "name": "message",
//                         "value": document.getElementById("msg").value,
//                         "inline": true
//                     }
//                 ]
//             }
//         ]
//     }).then((e) => {
//         alert('Sent!');
//         console.log(e)
//     }, (err) => {
//         alert("Not send !! \n Try again");
//     });
// }


// send.addEventListener("click", send_mail)