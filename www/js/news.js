const newsKey = "&apiKey=ed953cb64c2d4ce0b92820cdcd0b4bc4";
const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&category=";

//set up index.html news
function getCustomNews()
{
    var newsCategories = new Array();

    if(Cookies.get('bussiness') == "bussiness")
        newsCategories[newsCategories.length] = Cookies.get('bussiness');
    if(Cookies.get('entmnt') == "entertainment")
        newsCategories[newsCategories.length] = Cookies.get('entmnt');
    if(Cookies.get('science') == "science")
        newsCategories[newsCategories.length] = Cookies.get('science');
    if(Cookies.get('health') == "health")
        newsCategories[newsCategories.length] = Cookies.get('health');
    if(Cookies.get('sports') == "sports")
        newsCategories[newsCategories.length] = Cookies.get('sports');
    if(Cookies.get('tech') == "technology")
        newsCategories[newsCategories.length] = Cookies.get('tech');
    if(Cookies.get('gen') == "general")
        newsCategories[newsCategories.length] = Cookies.get('gen');

    //build url
    return newsCategories;
}

function formatNews(data, category, divName) {
    //alert(category);

    Cookies.set('newsAreSet', "yes");
   var newsSection = '<div id="categoryName0_' + divName +'">' + "<h2>" + category.charAt(0).toUpperCase() + category.slice(1) + "</h2></div>" + '<div id="newsContent0_' + divName +'">'
    var source = "";
    var title = "";
    var author = "";
    var desc = "";
    var link = "";
    var imgLink = "";
    var closeDiv = '</div>';

    for(let i = 0; i < 3; i++)
    {
        title = '<div class="title"><h3>' + data.articles[i].title + '</h3>' + closeDiv;
        source = '<div class="source"><p>Source:' + data.articles[i].source.name + '</p>' + closeDiv;
        if(data.articles[i].urlToImage == null) {
            imgLink = '<div class="newsImage"><img src="' + '../img/newsImgDefault.jpg">' + closeDiv;
        }
        else {
            imgLink = '<div class="newsImage"><img src="' +  data.articles[i].urlToImage + '">' + closeDiv;
        }

        link = '<div class="link"><a href="' + data.articles[i].url + '">See full article</a>' + closeDiv;
        desc = '<div class="newsDescription"><p>' + data.articles[i].description + '</p>' + closeDiv;
        if(data.articles[i].author == null) {
            newsSection += '<div class="news">' + title + source + link + imgLink + desc + "</div>" ;
        }
        else {
            author = '<div class="author"><p>' + data.articles[i].author + '</p>' + closeDiv;
            newsSection += '<div class="news">' + title + source + author + link + imgLink + desc + "</div>";
        }
        //order: title + source + author + link + img + desc
    }
    
    document.getElementById(divName).innerHTML = newsSection ;
}

function formatNewsTwo(data, category, divName) {
    //alert(category);
    var newsSection = '<div id="categoryName1_' + divName +'">' + "<h2>" + category.charAt(0).toUpperCase() + category.slice(1) + "</h2></div>" + '<div id="newsContent1_' + divName +'">'
    var source = "";
    var title = "";
    var author = "";
    var desc = "";
    var link = "";
    var imgLink = "";
    var closeDiv = '</div>';

    for(let i = 0; i < 3; i++)
    {
        title = '<div class="title"><h3>' + data.articles[i].title + '</h3>' + closeDiv;
        source = '<div class="source"><p>Source:' + data.articles[i].source.name + '</p>' + closeDiv;
        if(data.articles[i].urlToImage == null) {
            imgLink = '<div class="newsImage"><img src="' + '../img/newsImgDefault.jpg">' + closeDiv;
        }
        else {
            imgLink = '<div class="newsImage"><img src="' +  data.articles[i].urlToImage + '">' + closeDiv;
        }

        link = '<div class="link"><a href="' + data.articles[i].url + '">See full article</a>' + closeDiv;
        desc = '<div class="newsDescription"><p>' + data.articles[i].description + '</p>' + closeDiv;
        if(data.articles[i].author == null) {
            newsSection += '<div class="news">' + title + source + link + imgLink + desc + "</div>" ;
        }
        else {
            author = '<div class="author"><p>' + data.articles[i].author + '</p>' + closeDiv;
            newsSection += '<div class="news">' + title + source + author + link + imgLink + desc + "</div>";
        }
        //order: title + source + author + link + img + desc
    }
    
    document.getElementById(divName).innerHTML = newsSection ;
}

function formatNewsThree(data, category, divName) {
    //alert(category);
    var newsSection = '<div id="categoryName2_' + divName +'">' + "<h2>" + category.charAt(0).toUpperCase() + category.slice(1) + "</h2></div>" + '<div id="newsContent2_' + divName +'">'
    var source = "";
    var title = "";
    var author = "";
    var desc = "";
    var link = "";
    var imgLink = "";
    var closeDiv = '</div>';

    for(let i = 0; i < 3; i++)
    {
        title = '<div class="title"><h3>' + data.articles[i].title + '</h3>' + closeDiv;
        source = '<div class="source"><p>Source:' + data.articles[i].source.name + '</p>' + closeDiv;
        if(data.articles[i].urlToImage == null) {
            imgLink = '<div class="newsImage"><img src="' + '../img/newsImgDefault.jpg">' + closeDiv;
        }
        else {
            imgLink = '<div class="newsImage"><img src="' +  data.articles[i].urlToImage + '">' + closeDiv;
        }

        link = '<div class="link"><a href="' + data.articles[i].url + '">See full article</a>' + closeDiv;
        desc = '<div class="newsDescription"><p>' + data.articles[i].description + '</p>' + closeDiv;
        if(data.articles[i].author == null) {
            newsSection += '<div class="news">' + title + source + link + imgLink + desc + "</div>" ;
        }
        else {
            author = '<div class="author"><p>' + data.articles[i].author + '</p>' + closeDiv;
            newsSection += '<div class="news">' + title + source + author + link + imgLink + desc + "</div>";
        }
        //order: title + source + author + link + img + desc
    }
    
    document.getElementById(divName).innerHTML = newsSection ;
}

function setNews(divName1, divName2 = "customNews", divName3 = "customNews")
{
    //var completeUrl1 = newsUrl;
    //var completeUrl2 = newsUrl;
    //var completeUrl3 = newsUrl;
    var newsCategories = getCustomNews();

    
    if(newsCategories.length == 1) {
        var completeUrl1 = newsUrl + newsCategories[0] + newsKey;
        //alert(completeUrl1);
        fetch(completeUrl1)
        .then(function(response) { return response.json()})
        .then(function(data) {
            formatNews(data, newsCategories[0], divName1);
        })
        .catch(function() {
            if(Cookies.get("newsAreSet") !== "yes")
                alert("couldnt get news");
        });
        
    }
    else if(newsCategories.length == 2) {
        var completeUrl1 = newsUrl + newsCategories[0] + newsKey;

        fetch(completeUrl1)
        .then(function(response) { return response.json()})
        .then(function(data) {
            formatNews(data, newsCategories[0], divName1);
        })
        .catch(function() {
            alert("couldnt get news");
        });


        var completeUrl2 = newsUrl + newsCategories[1] + newsKey;

        fetch(completeUrl2)
        .then(function(response) { return response.json()})
        .then(function(data) {
            formatNewsTwo(data, newsCategories[1], divName2);
        })
        .catch(function() {
            alert("couldnt get news");
        });
    }
    else {
        var completeUrl1 = newsUrl + newsCategories[0] + newsKey;

        fetch(completeUrl1)
        .then(function(response) { return response.json()})
        .then(function(data) {
            formatNews(data, newsCategories[0], divName1);
        })
        .catch(function() {
            alert("couldnt get news");
        });

        
        var completeUrl2 = newsUrl + newsCategories[1] + newsKey;

        fetch(completeUrl2)
        .then(function(response) { return response.json()})
        .then(function(data) {
            var div = '"' + divName2 + '"';
            formatNewsTwo(data, newsCategories[1], div);
        })
        .catch(function() {
            alert("couldnt get news");
        });

        var completeUrl3 = newsUrl + newsCategories[2] + newsKey;

        fetch(completeUrl3)
        .then(function(response) { return response.json()})
        .then(function(data) {
            formatNewsThree(data, newsCategories[2], divName3);
        })
        .catch(function() {
            alert("couldnt get news");
        });
    }
    
}

function displayNews() {
    var completeUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ed953cb64c2d4ce0b92820cdcd0b4bc4"
    //alert(completeUrl1);
    fetch(completeUrl)
    .then(function(response) { return response.json()})
    .then(function(data) {
        var newsSection = '<div class="genNews"><h2>Top stories today:</h2>';
        var source = "";
    var title = "";
    var author = "";
    var desc = "";
    var link = "";
    var imgLink = "";
    var closeDiv = '</div>';

    for(let i = 3; i < 8; i++)
    {
        title = '<div class="title"><h3>' + data.articles[i].title + '</h3>' + closeDiv;
        source = '<div class="source"><p>Source:' + data.articles[i].source.name + '</p>' + closeDiv;
        if(data.articles[i].urlToImage == null) {
            imgLink = '<div class="newsImage"><img src="' + '../img/newsImgDefault.jpg">' + closeDiv;
        }
        else {
            imgLink = '<div class="newsImage"><img src="' +  data.articles[i].urlToImage + '">' + closeDiv;
        }

        link = '<div class="link"><a href="' + data.articles[i].url + '">See full article</a>' + closeDiv;
        desc = '<div class="newsDescription"><p>' + data.articles[i].description + '</p>' + closeDiv;
        if(data.articles[i].author == null) {
            newsSection += '<div class="news">' + title + source + link + imgLink + desc + "</div>" ;
        }
        else {
            author = '<div class="author"><p>' + data.articles[i].author + '</p>' + closeDiv;
            newsSection += '<div class="news">' + title + source + author + link + imgLink + desc + "</div>";
        }
        //order: title + source + author + link + img + desc
    }
    
    document.getElementById("allNews").innerHTML = newsSection ;
        
    })
    .catch(function() {
        alert("couldnt get news");
    });
}