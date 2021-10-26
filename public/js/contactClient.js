
let form = document.querySelector('form')

form.addEventListener('submit', async (e) => {
    //prevent default behavior
    e.preventDefault()

let newMessage = {
    name: document.querySelector('#feedback-form-name').value,
    title: document.querySelector('#feedback-form-title').value,
    message: document.querySelector('#feedback-form-message').value
}
//fetch to /api
let results = await fetch('/api',{
    method:'POST',
    headers:{'Content-type': 'application/json; charset=UTF-8'},
    body:JSON.stringify(newMessage),

    })
let messages = await results.json()
updateFeedback(messages)

})




//grab api data and display messages when page loads

const displayMessages = async () => {
    let result = await fetch('/api')

    let messages = await result.json()

    updateFeedback(messages)
}



const updateFeedback = (messagesArray) => {
    let htmlBlock = "";
    messagesArray.forEach((item, key) =>{

        htmlBlock += '     <div class="feedback-item item-list media-list">';
        htmlBlock += '       <div class="feedback-item media">';
        htmlBlock += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-dark"  id="' + key + '" ><i class="far fa-trash-alt"></i></button></div>';
        htmlBlock += '         <div class="feedback-info media-body">';
        htmlBlock += '           <div class="feedback-head">';
        htmlBlock += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">by: ' + item.name + '</small></div>';
        htmlBlock += '           </div>';
        htmlBlock += '           <div class="feedback-message">' + item.message + '</div>' ;
        htmlBlock += '         </div>'; 
        htmlBlock += '       </div>';
        htmlBlock += '     </div>';
    })
    
    //attach to a dom element
    let feedbackMessages = document.querySelector('.feedback-messages');
    feedbackMessages.innerHTML = htmlBlock;
}

displayMessages()



let feedbackMessages = document.querySelector('.feedback-messages')

feedbackMessages.addEventListener('click',async (e) => {
console.log( e.target?.id);
    if(e.target?.id){
        let result = await fetch("/api", {
            method: "delete",
            headers: {"Content-type": "application/json; charset=UTF-8"}, 
            body: JSON.stringify({id: e.target.id})
        }) 
        const dataResult = await result.json()
        console.log(dataResult);
        updateFeedback(dataResult)

        
    }



})

