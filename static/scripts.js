google.charts.load('current');
google.charts.setOnLoadCallback(drawTopSubreddits);
google.charts.setOnLoadCallback(drawTopCategories);
google.charts.setOnLoadCallback(drawSubredditsUpvote);
google.charts.setOnLoadCallback(drawTopMisInfoUsers);
google.charts.setOnLoadCallback(drawTopDomains);

var query_one = "SELECT A, B";
var query_two = "SELECT C, sum(D) group by C order by sum(D) label sum(D) 'MisInfo_Index'";
var query_three = "Select E, F order by F asc";
var query_four = "Select G, H";
var query_five = "Select I, Sum(J) group by I order by Sum(J) asc";
var data_url = "https://docs.google.com/spreadsheets/d/1rCaW8F4kw4oFRJ017xHSeoDo_8ICh5oAa6f0dibTPBA/edit?usp=sharing";


function drawTopSubreddits() {
    var wrap = new google.visualization.ChartWrapper({
        "chartType":"BarChart",
        "dataSourceUrl": data_url,
        "containerId":"Top_misinfo_subreddits",
        "query": query_one,
        "options": {
            title:"Top Subreddits with most Misinformation URLs",
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "# of Misinformation Posts / Total Submissions Analyzed"
            },
            vAxis: {
                title: "Subreddits",
                minValue: 0,
            },
            animation:{
                startup: true,
                duration: 300,
                easing: "out",
            }}
        });
    
    wrap.draw();
}

function drawTopCategories() {
    var wrap = new google.visualization.ChartWrapper({
        "chartType":"BarChart",
        "dataSourceUrl": data_url,
        'containerId':'Top_misinfo_categories',
        'query': query_two,
        'options': {
            title:'Top Categories with most Misinformation URLs',
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "# of Misinformation Posts / Total Submissions Analyzed"
            },
            vAxis: {
                title: 'Categories',
                minValue: 0,
            },
            animation:{
                startup: true,
                duration: 300,
                easing: 'out',
            }}
        });
    wrap.draw();
}

function drawSubredditsUpvote() {
    var wrap = new google.visualization.ChartWrapper({
        "chartType":"BarChart",
        "dataSourceUrl": data_url,
        'containerId':'subreddits_upvote',
        'query': query_three,
        'options': {
            title:'Top Subreddits (Upvote Ratio); All',
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "Average Upvote Ratio"
            },
            vAxis: {
                title: 'Subreddit',
                minValue: 0,
            },
            animation:{
                startup: true,
                duration: 300,
                easing: 'out',
            }}
        });
    wrap.draw();
}


function drawTopMisInfoUsers() {
    var wrap = new google.visualization.ChartWrapper({
        "chartType":"BarChart",
        "dataSourceUrl": data_url,
        'containerId':'Top_misinfo_users',
        'query': query_four,
        'options': {
            title:'# of MisInfo-Posters per Subreddit',
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "# of MisInfo-Posters Active on the Subreddit"
            },
            vAxis: {
                title: 'Subreddit',
                minValue: 0,
            },
            animation:{
                startup: true,
                duration: 300,
                easing: 'out',
            }}
        });
    wrap.draw();
}

function drawTopDomains() {

    var wrap = new google.visualization.ChartWrapper({
        "chartType":"BarChart",
        "dataSourceUrl": data_url,
        'containerId':'Top_misinfo_domains',
        'query': query_five,
        'options': {
            title:'Top Misinformation Domains Detected (Across All Subreddits Analyzed)',
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "# of Times Detected"
            },
            vAxis: {
                title: 'Domain',
                minValue: 0,
            },
            animation:{
                startup: true,
                duration: 300,
                easing: 'out',
            }}
        });
    wrap.draw();
}

function resize () {
    drawTopSubreddits()
    drawTopCategories()
    drawSubredditsUpvote()
    drawTopMisInfoUsers()
    drawTopDomains()
}

window.onload = resize;
window.onresize = resize;