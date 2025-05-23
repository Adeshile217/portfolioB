

function setCircularProgress(containerId, percent) {
    if (!containerId) {
        return;
    }

    const container = document.querySelector(`#${containerId}`).parentElement;
    const circle = container.querySelector('.circle-progress');
    const percentage = container.querySelector('.percentage-text');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;



    percent = Math.min(Math.max(percent, 0), 100);
    circle.style.strokeDasharray = circumference;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    percentage.innerHTML = percent + '%';
}

document.querySelectorAll('.circle-progress').forEach(circle => {
    const radius = circle.r.baseVal.value;
    circle.style.strokeDasharray = 2 * Math.PI * radius;
    circle.style.strokeDashoffset = 2 * Math.PI * radius;
});

setTimeout(() => {
    setCircularProgress('frenchPercentage', 100);
    setCircularProgress('englishPercentage', 90);
    setCircularProgress('arabicPercentage', 30);
}, 100);



function setHorizontalProgress(barId, percent) {
    const container = document.getElementById(barId);

    if (!container) {
        return
    };
    const fill = container.querySelector('.progress-bar-fill');
    const percentageText = container.querySelector('.HorizontalProgressPercentage');

    percent = Math.min(Math.max(percent, 0), 100);
    fill.style.width = percent + '%';
    percentageText.innerHTML = percent + '%';
}

setHorizontalProgress('htmlProgressbar', 85);
setHorizontalProgress('cssProgressbar', 85);
setHorizontalProgress('jsProgressbar', 70);
setHorizontalProgress('coreldrawProgressbar', 80);
setHorizontalProgress('wordpressProgressbar', 85);
setHorizontalProgress('primaveraProgressbar', 65);



const downloadButton = document.getElementById('downloadButton').addEventListener('click', (e) => {
    e.preventDefault()

    const link = document.createElement('a')
    link.href = './Adeshile_Ibraheem_CV.docx'
    link.download = './Adeshile_Ibraheem_CV.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link);

})



const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent')
    form.reset();
});

const bookingForm = document.getElementById('bookingForm')
bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your booking has been sent')
    form.reset();
});

chatbot = document.getElementById('chatbot')
chatbotIcon = document.getElementById('chatbot-icon')
chatbotHeader = document.getElementById('chatbot-header')
chatbotMessages = document.getElementById('chatbot-messages')
chatbotInput = document.getElementById('chatbot-textarea')
chatbotButton = document.getElementById('chatbot-button')

const botResponses = [
    {keywords: ['shile', 'adeshile', 'adeshile ibraheem', 'who is adeshile'], response: 'Read more about Adeshile in the ABOUT ME page'},
    {keywords: ['hello', 'hi', 'hey', 'are you there'], response: 'Hello! How can i help you today?'},
    {keywords: ['price', 'cost', 'how much'], response: 'Contact us via the CONTACT ME page to get more details about pricing'},
    {keywords: ['help', 'support'], response: 'Sure What can i help you with?'},
    {keywords: ['bye', 'goodbye'], response: 'Good! Have a great day'},
    {keywords: ['thanks', 'thank you', 'appreciate', 'i appreciate', 'ok'], response: "You're welcome, let me know if you need help with something else. If not, have a great day"}

]


chatbotIcon.addEventListener('click', (e) => {
    chatbot.style.display = 'flex'
    chatbot.style.flexDirection = 'column'
    chatbotIcon.style.display ='none'
    chatbotInput.focus()
    e.stopPropagation()
})


chatbotHeader.addEventListener('click', (e) => {
    chatbot.style.display = 'none'
    chatbotIcon.style.display = 'flex'
    e.stopPropagation()
})

chatbot.addEventListener('click', (e) => {
    e.stopPropagation()
})

document.addEventListener('click', (e) => {
    if(chatbot.style.display === 'flex'){
        chatbot.style.display = 'none'
        chatbotIcon.style.display = 'flex'
    }
})








function appendMessage(text, sender = 'bot'){
    const msg = document.createElement('div')
    msg.style.padding = '6px 10px'
    msg.style.marginBottom = '8px'
    msg.style.borderRadius = '4px'
    msg.style.maxWidth = '80%'
    msg.style.clear = 'both'
    msg.style.wordBreak = 'break-word'
    msg.style.overflowWrap = ' break-word'
    msg.style.whiteSpace = 'normal'
    if(sender === 'bot'){
        msg.style.color ='#1a191b'
        msg.style.background = '#ffff00'
        msg.style.float = 'left'
    }else{
        
        msg.style.background =  '#e6cc08';
        msg.style.color = 'white'
        msg.style.float = 'right'
    }

    msg.textContent = text;
    chatbotMessages.appendChild(msg)
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight
}

function getBotResponse(userText){
    const text = userText.toLowerCase()
    for(const entry of botResponses){
        if(entry.keywords.some(keyword => text.includes(keyword))){
            return entry.response;
        }
    }
    return "Sorry, I didn't understand that, can you please rephrase or contact us via from the CONTACT ME page?"
}

function botResponse(userText){
    setTimeout(() => {
        const response = getBotResponse(userText)
        appendMessage(response, 'bot')

    },1000)
}

chatbotButton.addEventListener('click', () => {
    const text = chatbotInput.value.trim()
    if(text){
        appendMessage(text, 'user')
        botResponse(text)
        chatbotInput.value = ''
    }
    chatbotInput.focus()
})


chatbotInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter')(
        chatbotButton.click()
    )
})