google.charts.load('current');
google.charts.setOnLoadCallback(drawTopSubredditsByUpvoteRatio);
google.charts.setOnLoadCallback(drawTopCategories);
google.charts.setOnLoadCallback(drawTopMisInfoUsers);
google.charts.setOnLoadCallback(drawTopDomains);

var query_one = "SELECT A, B, C";
var query_two = "SELECT D, sum(E) group by D order by sum(E) label sum(E) 'MisInfo_Index'";
var query_four = "Select F, G";
var query_five = "Select H, Sum(I) group by H order by Sum(I) asc";
var data_url = "https://docs.google.com/spreadsheets/d/1rCaW8F4kw4oFRJ017xHSeoDo_8ICh5oAa6f0dibTPBA/edit?usp=sharing";


function drawTopSubredditsByUpvoteRatio() {
    var wrap = new google.visualization.ChartWrapper({
        "chartType":"BubbleChart",
        "dataSourceUrl": data_url,
        "containerId":"Top_misinfo_subreddits",
        "query": query_one,
        "options": {
            title:"Top Subreddits with most Misinformation URLs",
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "# of Misinformation Posts / Total Submissions Analyzed",
                maxValue: .4,
                minValue: 0
            },
            vAxis: {
                title: "Average Upvote Ratio",
                minValue: 0,
                maxValue: 1.5
            },
            sizeAxis: {
                maxSize: 20
            },
            animation:{
                startup: true,
                duration: 300,
                easing: "out",
            },
            backgroundColor: "#F4F2EE"}
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
            },
            backgroundColor: "#F4F2EE"}
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
            },
            backgroundColor: "#F4F2EE"}
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
            },
            backgroundColor: "#F4F2EE"}
        });
    wrap.draw();
}

function resize () {
    drawTopSubredditsByUpvoteRatio()
    drawTopCategories()
    drawTopMisInfoUsers()
    drawTopDomains()
}

window.onload = resize;
window.onresize = resize;