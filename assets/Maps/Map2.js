var lat = 53.2078357667713
var lng =  8.241583266019086
function map2()
{
    var mymap = L.map('map2').setView([lat, lng], 18);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVubnkyMDAwIiwiYSI6ImNrbHY3ZDBlMzBiajYyd213a2w2Z3F4Y2UifQ._f0UGwVtFAbUFwINIBBuZw'
    }).addTo(mymap);
}
map2();