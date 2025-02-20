var body = document.body;

function createTextContainer (tag,text, style){
  var = element =document.createElement (tag);
  element.textContent = text;
  element.className = style;
  return element

}

function renderLanding(){
  var landingTitle = createTextContainer ('h1', 'BOOKWORMS')
  body.appendChild (landingTitle)
}

