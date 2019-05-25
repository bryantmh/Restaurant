////////////////////
// Map Component //
//////////////////
const googlemap = Vue.component('google-map', {
    template: googlemapHTML,
    data(){
        return mapdata
    },

    watch: {
        // '$parent.gameState.status': this.initMap,
    },

    methods: {
        claimRoute(){
            return null;
        },
        initMap(){
            
            
        },
        
    },

    mounted(){
        var myLatlng = new google.maps.LatLng(39.381266, -97.922211);
        var mapOptions = {
          /*   	mapTypeId: 'satellite',
           */
          zoom: 4,
          center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById("mapid"), mapOptions);
    },

    computed:{
        // routes(){
        //     return [
        //         {from: this.cities.Vancouver , to: this.cities.Calgary, waypoint: { lat: 50.2017, lng: -118.5765}, length: 3 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Vancouver , to: this.cities.Seattle, waypoint: { lat: 48.2798, lng: -123.7401}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Seattle , to: this.cities.Vancouver, waypoint: { lat: 48.58590, lng: -121.80649}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Calgary , to: this.cities.Seattle, waypoint: { lat: 49.3790, lng: -118.181}, length: 4 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Seattle , to: this.cities.Helena, waypoint: { lat: 47.0965, lng: -117.1483}, length: 6 , color: '#FFFF00' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Seattle , to: this.cities.Portland, waypoint: { lat: 46.6760, lng: -123.5423}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Portland , to: this.cities.Seattle, waypoint: { lat: 46.5704, lng: -121.5428}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Portland , to: this.cities.SaltLake, waypoint: { lat: 43.17737529, lng: -117.2142}, length: 6 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Portland , to: this.cities.SanFrancisco, waypoint: { lat: 41.75106, lng: -123.60824}, length: 5 , color: '#ff3399' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SanFrancisco , to: this.cities.Portland, waypoint: { lat: 41.75106, lng: -121.3890}, length: 5 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SanFrancisco , to: this.cities.SaltLake, waypoint: { lat: 38.6815, lng: -116.7748}, length: 5 , color: '#ff8000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaltLake , to: this.cities.SanFrancisco, waypoint: { lat: 39.90577, lng: -117.6097}, length: 5 , color: '#FFFFFF' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SanFrancisco , to: this.cities.LosAngeles, waypoint: { lat: 36.4878, lng: -119.2357}, length: 3 , color: '#ff3399' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.LosAngeles , to: this.cities.SanFrancisco, waypoint: { lat: 35.5101, lng: -121.0594}, length: 3 , color: '#FFFF00' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.LosAngeles , to: this.cities.LasVegas, waypoint: { lat: 35.0977, lng: -116.6429}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Phoenix , to: this.cities.LosAngeles, waypoint: { lat: 33.7748, lng: -115.1707}, length: 3 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.LosAngeles , to: this.cities.ElPaso, waypoint: { lat: 32.4869, lng: -112.534}, length: 6 , color: '#000000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.LasVegas , to: this.cities.SaltLake, waypoint: { lat: 38.4753, lng: -113.5008}, length: 3 , color: '#ff8000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Phoenix , to: this.cities.ElPaso, waypoint: { lat: 33.81137, lng: -106.2059}, length: 3 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Phoenix , to: this.cities.SantaFe, waypoint: { lat: 34.5385, lng: -108.9745}, length: 3 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Denver , to: this.cities.Phoenix, waypoint: { lat: 36.66427, lng: -108.51303}, length: 5 , color: '#FFFFFF' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Denver , to: this.cities.SaltLake, waypoint: { lat: 40.72669, lng: -108.183441}, length: 3 , color: '#CC0000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaltLake , to: this.cities.Denver, waypoint: { lat: 39.72011, lng: -108.60092}, length: 3 , color: '#FFFF00' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Denver , to: this.cities.Helena, waypoint: { lat: 43.2574, lng: -108.4032}, length: 4 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Denver , to: this.cities.Omaha, waypoint: { lat: 40.493159, lng: -100.44907}, length: 4 , color: '#ff3399' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Denver , to: this.cities.KansasCity, waypoint: { lat: 39.93947, lng: -98.42758}, length: 4 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.KansasCity , to: this.cities.Denver, waypoint: { lat: 38.81856, lng: -98.6912539}, length: 4 , color: '#ff8000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Denver , to: this.cities.OklahomaCity, waypoint: { lat: 37.66233, lng: -101.24008}, length: 4 , color: '#CC0000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Denver , to: this.cities.SantaFe, waypoint: { lat: 37.74925, lng: -105.4808}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SantaFe , to: this.cities.OklahomaCity, waypoint: { lat: 35.59951, lng: -101.74545}, length: 3 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SantaFe , to: this.cities.ElPaso, waypoint: { lat: 33.8296, lng: -106.18393}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.ElPaso , to: this.cities.Houston, waypoint: { lat: 30.70906, lng: -100.8665}, length: 6 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.ElPaso , to: this.cities.Dallas, waypoint: { lat: 32.22701, lng: -101.591645}, length: 4 , color: '#CC0000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.ElPaso , to: this.cities.OklahomaCity, waypoint: { lat: 33.62861, lng: -101.98715}, length: 5 , color: '#FFFF00' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.OklahomaCity , to: this.cities.Dallas, waypoint: { lat: 33.95729, lng: -97.944184}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Dallas , to: this.cities.OklahomaCity, waypoint: { lat: 34.2120675, lng: -96.318207}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.OklahomaCity , to: this.cities.LittleRock, waypoint: { lat: 35.097702, lng: -94.86801}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.OklahomaCity , to: this.cities.KansasCity, waypoint: { lat: 37.47075, lng: -96.91147}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.KansasCity , to: this.cities.OklahomaCity, waypoint: { lat: 36.945758, lng: -95.131684}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.KansasCity , to: this.cities.Omaha, waypoint: { lat: 40.057298, lng: -95.87875}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Omaha , to: this.cities.KansasCity, waypoint: { lat: 40.409558, lng: -94.58237}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Houston , to: this.cities.Dallas, waypoint: { lat: 31.12377, lng: -97.0433}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Dallas , to: this.cities.Houston, waypoint: { lat: 31.3867, lng: -95.4393008}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Houston , to: this.cities.NewOrleans, waypoint: { lat: 29.93141, lng: -92.692719}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Omaha , to: this.cities.Chicago, waypoint: { lat: 41.55405, lng: -91.72592}, length: 4 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Omaha , to: this.cities.Helena, waypoint: { lat: 43.9575, lng: -103.9867}, length: 5 , color: '#CC0000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Omaha , to: this.cities.Duluth, waypoint: { lat: 44.35158, lng: -95.065766}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Duluth , to: this.cities.Omaha, waypoint: { lat: 43.84664, lng: -93.357899}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Calgary , to: this.cities.Helena, waypoint: { lat: 48.8469, lng: -113.0614}, length: 4 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Calgary , to: this.cities.Winnipeg, waypoint: { lat: 50.4122, lng: -105.7445}, length: 6 , color: '#FFFFFF' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Winnipeg , to: this.cities.Helena, waypoint: { lat: 48.294371, lng: -104.5579}, length: 4 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Winnipeg, to: this.cities.Duluth, waypoint: { lat: 48.382007, lng: -94.56039}, length: 4 , color: '#000000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Winnipeg , to: this.cities.SaultSte, waypoint: { lat: 48.2212, lng: -90.759125}, length: 6 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Duluth , to: this.cities.Chicago, waypoint: { lat: 44.43009, lng: -89.792328}, length: 3 , color: '#CC0000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Duluth , to: this.cities.Toronto, waypoint: { lat: 45.271247, lng: -85.68344}, length: 6 , color: '#ff3399' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaultSte , to: this.cities.Toronto, waypoint: { lat: 45.085384, lng: -81.794281}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaultSte, to: this.cities.Montreal, waypoint: { lat: 46.039145, lng: -78.9158633}, length: 5 , color: '#000000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Chicago , to: this.cities.SaintLouis, waypoint: { lat: 40.44301, lng: -89.68246}, length: 2 , color: '#FFFFFF' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaintLouis , to: this.cities.Chicago, waypoint: { lat: 40.242043, lng: -88.2542}, length: 2 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Chicago , to: this.cities.Toronto, waypoint: { lat: 42.72707, lng: -83.55209}, length: 4 , color: '#FFFFFF' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Chicago , to: this.cities.Pittsburgh, waypoint: { lat: 41.800222, lng: -83.61801}, length: 3 , color: '#000000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Pittsburgh , to: this.cities.Chicago, waypoint: { lat: 40.710035, lng: -84.03549}, length: 3 , color: '#ff8000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaintLouis , to: this.cities.KansasCity, waypoint: { lat: 39.34729, lng: -92.297211}, length: 2 , color: '#ff3399' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.KansasCity , to: this.cities.SaintLouis, waypoint: { lat: 38.130488, lng: -92.297211}, length: 2 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaintLouis , to: this.cities.Nashville, waypoint: { lat: 37.453312, lng: -88.40805}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaintLouis , to: this.cities.LittleRock, waypoint: { lat: 36.717128, lng: -91.22055}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.LittleRock , to: this.cities.Nashville, waypoint: { lat: 35.4385569, lng: -89.506684}, length: 3 , color: '#FFFFFF' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.LittleRock, to: this.cities.NewOrleans, waypoint: { lat: 32.375593, lng: -91.110688}, length: 3 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewOrleans , to: this.cities.Miami, waypoint: { lat: 27.81507, lng: -85.17807}, length: 6 , color: '#CC0000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewOrleans , to: this.cities.Atlanta, waypoint: { lat: 32.2456, lng: -87.90268}, length: 4 , color: '#ff8000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Atlanta , to: this.cities.NewOrleans, waypoint: { lat: 31.34922, lng: -86.6722}, length: 4 , color: '#FFFF00' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Miami , to: this.cities.Atlanta, waypoint: { lat: 29.817095, lng: -82.27768}, length: 5 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Charleston , to: this.cities.Miami, waypoint: { lat: 29.30105, lng: -80.058441}, length: 4 , color: '#ff3399' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Charleston , to: this.cities.Atlanta, waypoint: { lat: 33.29866, lng: -82.1458}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Charleston , to: this.cities.Raleigh, waypoint: { lat: 34.26656, lng: -79.179535}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Nashville , to: this.cities.Raleigh, waypoint: { lat: 35.93825, lng: -82.7391055}, length: 3 , color: '#000000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Nashville , to: this.cities.Atlanta, waypoint: { lat: 35.007766, lng: -85.639496}, length: 1 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Nashville , to: this.cities.Pittsburgh, waypoint: { lat: 38.320363, lng: -83.33237}, length: 4 , color: '#FFFF00' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Raleigh , to: this.cities.Atlanta, waypoint: { lat: 35.11568, lng: -82.12387}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Raleigh , to: this.cities.Pittsburgh, waypoint: { lat: 38.147769, lng: -79.22348}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Atlanta , to: this.cities.Raleigh, waypoint: { lat: 34.30287, lng: -81.047211}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Raleigh , to: this.cities.Washington, waypoint: { lat: 37.76663, lng: -78.300629}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Washington , to: this.cities.Pittsburgh, waypoint: { lat: 39.65247, lng: -78.4764102}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Raleigh , to: this.cities.Washington, waypoint: { lat: 37.52305, lng: -76.87241}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Washington , to: this.cities.NewYork, waypoint: { lat: 39.9226, lng: -76.32309}, length: 2 , color: '#000000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewYork , to: this.cities.Washington, waypoint: { lat: 39.44917, lng: -74.76303}, length: 2 , color: '#ff8000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewYork , to: this.cities.Pittsburgh, waypoint: { lat: 40.14133, lng: -77.07016}, length: 2 , color: '#FFFFFF' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewYork , to: this.cities.Pittsburgh, waypoint: { lat: 41.02574, lng: -77.07016}, length: 2 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewYork , to: this.cities.Montreal, waypoint: { lat: 43.1933965, lng: -73.7426178}, length: 3 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewYork , to: this.cities.Boston, waypoint: { lat: 41.84934, lng: -72.873383}, length: 2 , color: '#FFFF00' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.NewYork , to: this.cities.Boston, waypoint: { lat: 41.191298, lng: -71.950531}, length: 2 , color: '#CC0000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Boston , to: this.cities.Montreal, waypoint: { lat: 43.4970004, lng: -72.807465}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Boston , to: this.cities.Montreal, waypoint: { lat: 44.27297, lng: -71.576996}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Toronto , to: this.cities.Montreal, waypoint: { lat: 44.5554779, lng: -76.367035}, length: 3 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Toronto , to: this.cities.Pittsburgh, waypoint: { lat: 42.04545169, lng: -79.618988}, length: 2 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Pittsburgh , to: this.cities.SaintLouis, waypoint: { lat: 39.517002268, lng: -85.06820709}, length: 5 , color: '#006600' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.SaltLake , to: this.cities.Helena, waypoint: { lat: 43.7674, lng: -111.9408}, length: 3 , color: '#000099' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Duluth , to: this.cities.Helena, waypoint: { lat: 46.706189, lng: -102.03109}, length: 6 , color: '#ff8000' , owner: '', waypointMarker: null, path: null},
        //         {from: this.cities.Duluth , to: this.cities.SaultSte, waypoint: { lat: 46.615708, lng: -88.2102969}, length: 3 , color: '#A0A0A0' , owner: '', waypointMarker: null, path: null},
        //     ];
        // }
    },
});
