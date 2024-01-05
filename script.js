
const mainContainer = document.querySelector('main');

// Iterate through each festival and log its name
for (const festival in Database) {
  const temp = Database[festival];
  const ot=document.createElement('div');
  const festivalDiv = document.createElement('div');
  ot.id=temp.Name;
  
  // Use backticks for template literals
  ot.innerHTML = `<h2>${temp.Name}</h2>`;
  
  festivalDiv.style.backgroundImage = `url("bg/${temp.bg}")`;

  ot.appendChild(festivalDiv);
  ot.innerHTML += `<h2>${temp.Date}</h2>`;
  ot.addEventListener('click',function(){
    window.location.href="wishes.html?festival="+temp.Name+";image="+temp.bg;
  });
  mainContainer.appendChild(ot); // Use mainContainer instead of document.getElementById("main")
}
