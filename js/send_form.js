const token = "7494564803:AAHc8LdfUOSeqjOzXXrUQ0K-tqopp2p5z0U";
const chat_id = "-1002236120894";
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`;

document.querySelector("#forma_body").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("TEST");

  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>Name: </b> ${this.name.value} \n`;
  message += `<b>lastName: </b> ${this.lastName.value} \n`;
  message += `<b>Email: </b> ${this.email.value} \n`;
  message += `<b>Number: </b> ${this.number.value}`;

  axios.post(uri_api, {
    chat_id: chat_id,
    parse_mode: "html",
    text: message,
  });
});
