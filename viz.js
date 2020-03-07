Plotly.d3.csv('https://raw.githubusercontent.com/ayman1996/Dataismine/master/earthquakes.csv',(err, rows)=>{
    function unpack(rows, key) {return rows.map(function(row){ return row[key];
})};

var data = [{
  lon: unpack(rows, 'location.longitude'), lat: unpack(rows, 'location.latitude'), radius:10,
  z: unpack(rows, 'impact.magnitude'), type: "densitymapbox", coloraxis: 'coloraxis',
  hoverinfo: ['location.name'}];
    

var layout = {
    mapbox: {center: {lon: 60, lat: 30}, style: "outdoors", zoom: 2},
    coloraxis: {colorscale: "Viridis"}, title: {text: "Earthquakes_viz"},
    width: 600, height: 400, margin: {t: 30, b: 0}};
    


var config = {mapboxAccessToken: "pk.eyJ1IjoiYXltYW4xOTk2IiwiYSI6ImNrNmF3dGg4MDBsanIzbG1nZnppaHJuNXQifQ.kNm4S9pycGK9W_MQIe0VhA"};

Plotly.newPlot('myViz', data, layout, config);
})