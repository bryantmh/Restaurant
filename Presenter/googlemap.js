////////////////////
// Map Component //
//////////////////
const googlemap = Vue.component('google-map', {
    props: ['name'],

    template: googlemapHTML,
    data(){
        return data
    },

    methods: {
        claimRoute(){
            return null;
        },
        
    },

    mounted(){
        this.mapName = this.name +"-map";
        const element = document.getElementById(this.mapName);
        const options = {
            zoom: 3,
            center: new google.maps.LatLng(39.381266,-97.922211)
        };
        const map = new google.maps.Map(element, options);
        // for (var city in this.cities) {
        //     var item = cities[city];
        //     console.log(item);
        //     var marker = new google.maps.Marker({
        //         position: new google.maps.LatLng(item.lat, item.lng),
        //         title: item.name,
        //     });
        //     console.log(marker);
        //     item.marker = marker;
        //         // To add the marker to the map, call setMap();
        //     item.setMap(map);
        //     };
        

        // this.routes.forEach(function(item, index, arr){
        //     var path = new google.maps.Polyline({
        //         path: [
        //             {lat: item.to.lat, lng: item.to.lng},
        //             // {lat: item.wayPoint.lat, lng: item.wayPoint.lng},
        //             {lat: item.from.lat, lng: item.from.lng}
        //         ],
        //         geodesic: true,
        //         strokeColor: item.color,
        //         strokeOpacity: 1.0,
        //         strokeWeight: 8
        //     });
        //     // var wayPoint = new google.maps.Marker({
        //     //     poisition: new google.maps.LatLng(item.wayPoint.lat, item.wayPoint.lng),
        //     //     label: item.length,
        //     // });
        //     // item.waypointMarker = wayPoint;
        //     // item.waypointMarker.setMap(map);
        //     item.path = path;
        //     item.path.setMap(map);
        //     item.path.addListener('click', this.claimRoute);
        // });
        
        
    },

    computed:{
        routes(){
            return [
                {from: this.cities.Vancouver , to: this.cities.Calgary, waypoint: { lat: null, lng: null}, length: 3 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Vancouver , to: this.cities.Seattle, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Seattle , to: this.cities.Vancouver, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Calgary , to: this.cities.Seattle, waypoint: { lat: null, lng: null}, length: 4 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Helena , to: this.cities.Calgary, waypoint: { lat: null, lng: null}, length: 4 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Winnipeg , to: this.cities.Calgary, waypoint: { lat: null, lng: null}, length: 3 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Seattle , to: this.cities.Helena, waypoint: { lat: null, lng: null}, length: 6 , color: '#FFFF00' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Seattle , to: this.cities.Portland, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Portland , to: this.cities.Seattle, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Portland , to: this.cities.SaltLake, waypoint: { lat: null, lng: null}, length: 6 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Portland , to: this.cities.SanFrancisco, waypoint: { lat: null, lng: null}, length: 5 , color: '#ff3399' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SanFrancisco , to: this.cities.Portland, waypoint: { lat: null, lng: null}, length: 5 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SanFrancisco , to: this.cities.SaltLake, waypoint: { lat: null, lng: null}, length: 5 , color: '#ff8000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaltLake , to: this.cities.SanFrancisco, waypoint: { lat: null, lng: null}, length: 5 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SanFrancisco , to: this.cities.LosAngeles, waypoint: { lat: null, lng: null}, length: 3 , color: '#ff3399' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.LosAngeles , to: this.cities.SanFrancisco, waypoint: { lat: null, lng: null}, length: 3 , color: '#FFFF00' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.LosAngeles , to: this.cities.LasVegas, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Phoenix , to: this.cities.LosAngeles, waypoint: { lat: null, lng: null}, length: 3 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.LosAngeles , to: this.cities.ElPaso, waypoint: { lat: null, lng: null}, length: 6 , color: '#000000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.LasVegas , to: this.cities.SaltLake, waypoint: { lat: null, lng: null}, length: 3 , color: '#ff8000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Phoenix , to: this.cities.ElPaso, waypoint: { lat: null, lng: null}, length: 3 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Phoenix , to: this.cities.SantaFe, waypoint: { lat: null, lng: null}, length: 3 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Denver , to: this.cities.Phoenix, waypoint: { lat: null, lng: null}, length: 5 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Denver , to: this.cities.SaltLake, waypoint: { lat: null, lng: null}, length: 3 , color: '#CC0000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaltLake , to: this.cities.Denver, waypoint: { lat: null, lng: null}, length: 3 , color: '#FFFF00' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Denver , to: this.cities.Helena, waypoint: { lat: null, lng: null}, length: 4 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Denver , to: this.cities.Omaha, waypoint: { lat: null, lng: null}, length: 4 , color: '#ff3399' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Denver , to: this.cities.KansasCity, waypoint: { lat: null, lng: null}, length: 4 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.KansasCity , to: this.cities.Denver, waypoint: { lat: null, lng: null}, length: 4 , color: '#ff8000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Denver , to: this.cities.OklahomaCity, waypoint: { lat: null, lng: null}, length: 4 , color: '#CC0000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Denver , to: this.cities.SantaFe, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SantaFe , to: this.cities.OklahomaCity, waypoint: { lat: null, lng: null}, length: 3 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SantaFe , to: this.cities.ElPaso, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.ElPaso , to: this.cities.Houston, waypoint: { lat: null, lng: null}, length: 6 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.ElPaso , to: this.cities.Dallas, waypoint: { lat: null, lng: null}, length: 4 , color: '#CC0000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.ElPaso , to: this.cities.OklahomaCity, waypoint: { lat: null, lng: null}, length: 5 , color: '#FFFF00' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.OklahomaCity , to: this.cities.Dallas, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Dallas , to: this.cities.OklahomaCity, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.OklahomaCity , to: this.cities.LittleRock, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.OklahomaCity , to: this.cities.KansasCity, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.KansasCity , to: this.cities.OklahomaCity, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.KansasCity , to: this.cities.Omaha, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Omaha , to: this.cities.KansasCity, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Houston , to: this.cities.Dallas, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Dallas , to: this.cities.Houston, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Houston , to: this.cities.NewOrleans, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Omaha , to: this.cities.Chicago, waypoint: { lat: null, lng: null}, length: 4 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Omaha , to: this.cities.Helena, waypoint: { lat: null, lng: null}, length: 5 , color: '#CC0000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Omaha , to: this.cities.Duluth, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Duluth , to: this.cities.Omaha, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Calgary , to: this.cities.Helena, waypoint: { lat: null, lng: null}, length: 4 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Calgary , to: this.cities.Winnipeg, waypoint: { lat: null, lng: null}, length: 6 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Winnipeg , to: this.cities.Helena, waypoint: { lat: null, lng: null}, length: 4 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Winnipeg, to: this.cities.Duluth, waypoint: { lat: null, lng: null}, length: 4 , color: '#000000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Winnipeg , to: this.cities.SaultSte, waypoint: { lat: null, lng: null}, length: 6 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Duluth , to: this.cities.Chicago, waypoint: { lat: null, lng: null}, length: 3 , color: '#CC0000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Duluth , to: this.cities.Toronto, waypoint: { lat: null, lng: null}, length: 6 , color: '#ff3399' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaultSte , to: this.cities.Toronto, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaultSte, to: this.cities.Montreal, waypoint: { lat: null, lng: null}, length: 5 , color: '#000000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Chicago , to: this.cities.SaintLouis, waypoint: { lat: null, lng: null}, length: 2 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaintLouis , to: this.cities.Chicago, waypoint: { lat: null, lng: null}, length: 2 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Chicago , to: this.cities.Toronto, waypoint: { lat: null, lng: null}, length: 4 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Chicago , to: this.cities.Pittsburgh, waypoint: { lat: null, lng: null}, length: 3 , color: '#000000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Pittsburgh , to: this.cities.Chicago, waypoint: { lat: null, lng: null}, length: 3 , color: '#ff8000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaintLouis , to: this.cities.KansasCity, waypoint: { lat: null, lng: null}, length: 2 , color: '#ff3399' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.KansasCity , to: this.cities.SaintLouis, waypoint: { lat: null, lng: null}, length: 2 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaintLouis , to: this.cities.Nashville, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaintLouis , to: this.cities.LittleRock, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.LittleRock , to: this.cities.Nashville, waypoint: { lat: null, lng: null}, length: 3 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.LittleRock, to: this.cities.NewOrleans, waypoint: { lat: null, lng: null}, length: 3 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewOrleans , to: this.cities.Miami, waypoint: { lat: null, lng: null}, length: 6 , color: '#CC0000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewOrleans , to: this.cities.Atlanta, waypoint: { lat: null, lng: null}, length: 4 , color: '#ff8000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Atlanta , to: this.cities.NewOrleans, waypoint: { lat: null, lng: null}, length: 4 , color: '#FFFF00' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Miami , to: this.cities.Atlanta, waypoint: { lat: null, lng: null}, length: 5 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Charleston , to: this.cities.Miami, waypoint: { lat: null, lng: null}, length: 4 , color: '#ff3399' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Charleston , to: this.cities.Atlanta, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Charleston , to: this.cities.Raleigh, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Nashville , to: this.cities.Raleigh, waypoint: { lat: null, lng: null}, length: 3 , color: '#000000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Nashville , to: this.cities.Atlanta, waypoint: { lat: null, lng: null}, length: 1 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Nashville , to: this.cities.Pittsburgh, waypoint: { lat: null, lng: null}, length: 4 , color: '#FFFF00' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Raleigh , to: this.cities.Atlanta, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Raleigh , to: this.cities.Pittsburgh, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Atlanta , to: this.cities.Raleigh, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Raleigh , to: this.cities.Washington, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Washington , to: this.cities.Pittsburgh, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Washington , to: this.cities.NewYork, waypoint: { lat: null, lng: null}, length: 2 , color: '#000000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewYork , to: this.cities.Washington, waypoint: { lat: null, lng: null}, length: 2 , color: '#ff8000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewYork , to: this.cities.Pittsburgh, waypoint: { lat: null, lng: null}, length: 2 , color: '#FFFFFF' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewYork , to: this.cities.Pittsburgh, waypoint: { lat: null, lng: null}, length: 2 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewYork , to: this.cities.Montreal, waypoint: { lat: null, lng: null}, length: 3 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewYork , to: this.cities.Boston, waypoint: { lat: null, lng: null}, length: 2 , color: '#FFFF00' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.NewYork , to: this.cities.Boston, waypoint: { lat: null, lng: null}, length: 2 , color: '#CC0000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Boston , to: this.cities.Montreal, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Boston , to: this.cities.Montreal, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Toronto , to: this.cities.Montreal, waypoint: { lat: null, lng: null}, length: 3 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Toronto , to: this.cities.Pittsburgh, waypoint: { lat: null, lng: null}, length: 2 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Pittsburgh , to: this.cities.SaintLouis, waypoint: { lat: null, lng: null}, length: 5 , color: '#006600' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.SaltLake , to: this.cities.Helena, waypoint: { lat: null, lng: null}, length: 3 , color: '#000099' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Duluth , to: this.cities.Helena, waypoint: { lat: null, lng: null}, length: 6 , color: '#ff8000' , owner: null, waypointMarker: null, marker: null, path: null},
                {from: this.cities.Duluth , to: this.cities.SaultSte, waypoint: { lat: null, lng: null}, length: 3 , color: '#A0A0A0' , owner: null, waypointMarker: null, marker: null, path: null},
            ];
        }
    },

    mounted(){
        
    }
});
