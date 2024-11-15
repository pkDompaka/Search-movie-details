let api=" http://www.omdbapi.com/?i=tt3896198&apikey=d8234909&t="


let poster=document.getElementById('poster')

function searchmovie(){
    let moviename=document.getElementById('moviename')
    abc = api+moviename.value
    fetch(abc).then((data)=>{
        return  data.json()
      }).then((data)=>{
        
        let title= document.getElementById('title')
let director=document.getElementById('director')
let ratings=document.getElementById('ratings')
let date=document.getElementById('date')
let actors=document.getElementById('actors')
let languages=document.getElementById('languages')
let awards=document.getElementById('awards')
let writer=document.getElementById('writer')
let poster = document.getElementById('poster')
let boxoffice = document.getElementById('boxoffice')
let genre = document.getElementById('genre')




        title.innerText = data.Title;
      director.innerText = data.Director;
      ratings.innerText = data.imdbRating;
      date.innerText = data.Released;
      actors.innerText = data.Actors;
      languages.innerText = data.Language;
      awards.innerText = data.Awards;
      writer.innerText = data.Writer;
      poster.src = data.Poster;
      boxoffice.innerText = data.BoxOffice;
      genre.innerText = data.Genre;
      })
}
