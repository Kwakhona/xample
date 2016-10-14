class MapsController {
    constructor() {
        'ngInject';
        this.agmap = null;
        this.poly;
        this.map;
        this.geocoder;
    }
    $onInit() {
        // loading the AfriGIS Map
        // afrigis.maps = {
        //     jsapiLoaded: function() {
        //         var coord = new AGCoord(-26.3328259072, 28.097419467926025);
        //         this.agmap = new AGMap(document.getElementById("AfriGIS"));
        //         this.agmap.centreAndScale(coord, 14);
        //     }
        // };
        var coord = new AGCoord(-26.3328259072, 28.097419467926025);
        this.agmap = new AGMap(document.getElementById("AfriGIS"));
        this.agmap.centreAndScale(coord, 14);
        this.showDefault();

        this.map = new google.maps.Map(document.getElementById('GoogleMap'), {
            zoom: 14,
            center: {
                lat: -26.3328259072,
                lng: 28.097419467926025
            }
        });
        this.geocoder = new google.maps.Geocoder();
    }

    showImage() {
        this.agmap.hideDefaultMap();
        this.agmap.hideDefaultMapForImagery();
        this.agmap.showImagery();
    }
    showDefault() {
        this.agmap.hideDefaultMap();
        this.agmap.hideImagery();
        this.agmap.showDefaultMap();
    }
    showHybrid() {
        this.agmap.hideDefaultMap();
        this.agmap.showImagery();
        this.agmap.showDefaultMapForImagery();
    }
}

export default MapsController;
