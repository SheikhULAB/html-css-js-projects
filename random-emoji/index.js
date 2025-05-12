const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
 let response = await fetch("https://emoji-api.com/emojis?access_key=1ceb2cbec9514773d4ab68171aebbc9e8a304898");
 data = await response.json();
 for(let i =0; i<=1500; i++) {
    emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
    })
 }
}
getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random()*emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
})