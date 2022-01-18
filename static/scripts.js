google.charts.load('current');
google.charts.setOnLoadCallback(drawTopSubreddits);
google.charts.setOnLoadCallback(drawTopCategories);

var query_one = 'SELECT B, COUNT(B) where L="Detected" group by B order by COUNT(B)';
var query_two = 'SELECT A, COUNT(A) where L="Detected" group by A order by COUNT(A)';

function drawTopSubreddits() {
    var wrap = new google.visualization.ChartWrapper({
        'chartType':'BarChart',
        'dataSourceUrl':'https://docs.google.com/spreadsheets/d/1rCaW8F4kw4oFRJ017xHSeoDo_8ICh5oAa6f0dibTPBA/edit#gid=37061668',
        'containerId':'Top_misinfo_subreddits',
        'query': query_one,
        'options': {
            title:'Top Subreddits with most Misinformation URLs',
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "# of Misinformation Posts"
            },
            vAxis: {
                title: 'Subreddits',
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

function drawTopCategories() {
    var wrap = new google.visualization.ChartWrapper({
        'chartType':'BarChart',
        'dataSourceUrl':'https://docs.google.com/spreadsheets/d/1rCaW8F4kw4oFRJ017xHSeoDo_8ICh5oAa6f0dibTPBA/edit?usp=sharing',
        'containerId':'Top_misinfo_categories',
        'query': query_two,
        'options': {
            title:'Top Categories with most Misinformation URLs',
            legend: { position: "top" },
            allowHtml: true,  
            hAxis: {
                title: "# of Misinformation Posts"
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

function resize () {
    drawTopSubreddits()
    drawTopCategories()
}

window.onload = resize;
window.onresize = resize;