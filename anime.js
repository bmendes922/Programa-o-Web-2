const base_url = "https://api.jikan.moe/v3";

//POST
function pesquisarAnimes(event){

    event.preventDefault();
    const form = new FormData(this);
    const query = form.get("pesquisar");

    


    fetch('${base_url}/pesquisar/anime?q=${query} &page=1')
    .then(res=>res.json())
    .then(updateDom)  
    .catch(err=>console.warn(err.message));
}

//UPDATE
function updateDom(){

    const pesquisaCards = document.getElementById('pesquisaCards');

   
    const animeByCategories = data.results
        .reduce((acc,anime)=>{

            const {type} = anime;
            if (acc[type] === undefined) acc[type] =  [];
            acc[type].push(anime);
            return acc;
        },{});

        pesquisaCards.innerHTML =object.keys(animeByCategories).map(key=>{
            
            const anime = animeByCategories[keys].sort((a,b)=>a.episodes-b.episodes).map(anime=>{

            return  (
                    <div class="card" style="width: 18rem;">
                   <img class="card-img-top" src="${anime.image_url}" alt="Imagem de capa do card"></img>
                     <h5 class="card-title">${anime.title}</h5>
                      <p class="card-text">${anime.synopsis}</p>
                    <a href="${anime.url}" class="btn btn-primary">find out more</a>
        </div>

        )
        
            return (
            
            <section>
                 <h3>${key.toUpperCase()}</h3>
                 <div class = "div">${animesHTML}</div>
                 <buttton onclick={()=> find_cat()}>buscar</buttton>
            </section>
            
            );

        });
    }
//GET

function pageLoaded() {

    const form = document.getElementById("pesquisar_form");
    form.addEventListener("submit",pesquisarAnimes);
    
    
}

    window.addEventListener("load",pageLoaded);