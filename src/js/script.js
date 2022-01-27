function createExp(){
  let experience = ''
  experiencies.forEach((exp)=>{
    experience += `
      <div class="experience">
        <div class="experience-position">${exp.name}</div>
        <div class="experience-company">${exp.company}</div>
        <div class="experience-date">
          <span>${exp.date.start}</span> - <span>${exp.date.end}</span>
        </div>
        <div class="experience-description">${exp.description}</div>
      </div>
    `
  })
  
  document.querySelector('.experiencies').innerHTML = experience
}

createExp()