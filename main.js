let myBody = $('body');
let newDiv = $('<div>Click Here</div>')
let newUl = $('<ul></ul>')



myBody.append(newDiv);
myBody.append(newUl);

newDiv.on('click', () => {

    let inputId = $('#newInput');
    let textDisplay = $(` <li> ${inputId.val()}  </li>`)
    newDiv.append(textDisplay)


})