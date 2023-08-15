const apiKey = '73ec644ac0a14aea90e45c4437b0a2b7'
fetch(`https://newsapi.org/v2/top-headlines?country=jp&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let newsContainer = document.getElementById('news-container')
        newsContainer.innerHTML = ''
        //just show 5 news
        for (let i = 0; i < 5; i++) {
            newsContainer.innerHTML += `
            <div class="row featurette">
                <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">${json.articles[i].title}</h2>
                <p class="lead">${json.articles[i].description}</p>
                </div>
                <div class="col-md-5">
                <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                    height="500" src="${json.articles[i].urlToImage}" alt="news image">
                </div>
            </div>

            <hr class="featurette-divider">
          `
        }
            

    })
    .catch(error => {
        console.log(error)
    })
