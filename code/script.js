// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

// Global variables, if you need any, declared here
let questionNumber = 1


// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'bot')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumer === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => hobbyType(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => hobbyPlace(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => hobbyRec(message), 1000)
  } else {
    userReply(message)
    setTimeout(hobbyBye, 1000)
  }
}


// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`First of all, what's your name?`, 'bot')
}


const hobbyType = (msg) => {
  questionNumber++
  botReply(
    `Hi there, ${msg}, I hope you are doing ok. What kind of new hobby would you like to try?`
  )

  inputWrapper.innerHTML = `
  <button id="relaxingBtn">relaxing</button>
  <button id="activeBtn">active</button>
  <button id="creativeBtn">creative</button>
  `

  document.getElementById('relaxingBtn').addEventListener('click', () => nextQuestion('relaxing'))
  document.getElementById('activeBtn').addEventListener('click', () => nextQuestion('active'))
  document.getElementById('creativeBtn').addEventListener('click', () => nextQuestion('creative'))
}

const hobbyPlace = (type) => {
  questionNumber++
  botReply(`I get you, I would so like to be ${type} right now too! Are you more of an outdoorsy or indoorsy kind of person?`)

  if (type === 'relaxing') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Your options</option>
        <option value="outdoorsy">outdoorsy - give me all the woods!</option>
        <option value="indoorsy">indoorsy - I like to be cozy...</option>
        <option value="outdoorsy">a bit of both, actually</option>
      </select>
    `
  } else if (type === 'active') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Your options</option>
        <option value="outdoorsy">outdoorsy - give me all the woods!</option>
        <option value="indoorsy">indoorsy - I like to be cozy...</option>
        <option value="outdoorsy">a bit of both, actually</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Your options</option>
        <option value="outdoorsy">outdoorsy - give me all the woods!</option>
        <option value="indoorsy">indoorsy - I like to be cozy...</option>
        <option value="outdoorsy">a bit of both, actually</option>
      </select>
    `
  }
  
  const select = document.getElementById('select')
  select.addEventListener('change, () => nextQuestion(select.value))
}


const hobbyRec = (type) => {
  questionNumber++

  let rec 
    if (type === 'relaxing') {
      rec = 'coloring for adults'
    } else if (type === 'active') {
      rec = 'training to do a handstand'
    } else {
      rec = 'knitting a scarf to give as a christmas present to yourself'
    }

    botReply(`Hmm, how about you try ${rec}? I think you would like that!`)
  
    inputWrapper.innerHTML = `
      <button id="accept">That sounds great!</button>
      <button id="tryAgain">Uhh, not for me, thanks. I would like to try again!</button>
      `

    document.getElementById('tryAgain').addEventListener('click', () => {
      location.reload()
      return false
    })

    document.getElementById('accept').addEventListener('click', () => {
      nextQuestion()
    }
    
    const hobbyBye = () => {
      botReply(`Happy to help! Let me know how you get on.`)
      inputWrapper.innerHTML = ``
    }

    sentBTn.addEventListener('click', () => nextQuestion(input.value))
    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter' && input.value) nextQuestion(input.value)
    })
    )
}

// Set up your eventlisteners here







// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
