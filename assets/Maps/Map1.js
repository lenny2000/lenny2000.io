var lat = 53.147569882062754
var lng = 8.225042158378644
function map1()
{
    var mymap = L.map('map1').setView([lat, lng], 16);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVubnkyMDAwIiwiYSI6ImNrbHY3ZDBlMzBiajYyd213a2w2Z3F4Y2UifQ._f0UGwVtFAbUFwINIBBuZw'
    }).addTo(mymap);
    var marker = L.marker([lat, lng]).addTo(mymap);
    marker.bindPopup("text").openPopup();  
}
map1();


