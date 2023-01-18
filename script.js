import project from './project.js'

const introEl = `<div class="welcome-wrapper" id="welcome-wrapper" >
<div id="welcome" class="welcome colornfont">
    <h1 class="colornfont">Welcome!</h1>
</div>
<div id="intro" class="intro colornfont">
    <p class="about" id="about">
    "My name is Prabhat Mishra, I'm a front-end developer based in Greater Noida,Uttar Pradesh,India. I am proficient
    in Core Java,ReactJs and Bootstrap.I am Learning Web development by making Mini-Projects.
    <br> I'm passionate about Responsive Design,beautiful interfaces and
    intuitively implemented UX."
    </p>
</div>
</div>`


let mainEl = document.getElementById('main-container')


let plEl= document.getElementById('project-list');
let boxEl = document.getElementById('welcome-wrapper')
console.log("h1")

mainEl.addEventListener('click',function(e){
    if(e.target.dataset.portfolio){
        boxEl.innerHTML = introEl
    }
})

plEl.addEventListener('click',function(e){
    if(e.target.id){
        boxEl.innerHTML = buildHtml(e.target.id)
    }
   
}
)

function buildHtml(ids){
    const getobj = project.filter(function(projects){
        return projects.id==ids
    })
   // console.log(getobj)
   let save = `
   <div id="topic" class="topic colornfont">

        <div class="topfront">
                <h3 class="colornfont topic-tittle">${getobj[0].name}</h3>
        </div>

        <div class="content-container">
                    <div id="topic-explain" class="topic-explain colornfont">
                            <p class="allabout" id="allabout">
                                        ${getobj[0].description}
                            </p>
                    </div>
                    
                    <div class="link-wrapper">
                                    <a href ="${getobj[0].link}" target= "_blank" class="githublink colornfont bottomlink">Live Site</a>
                                    <a href ="https://github.com/PRABHAT747" class = "bottomlink" target="_blank" >Github</a>
                    </div>
       </div>
   </div>    
        `
return save
}








































