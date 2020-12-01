// instructions on how to be an argument for
// method addMarker on CustomMaps class
export interface Mappable {
  loc: {
    lat: number;
    lng: number;
  };
  makerContent: () => string;
}

class CustomMaps {
  constructor(divId: string) {
    this.googleMaps = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  private googleMaps: google.maps.Map;

  addMaker = (mappable: Mappable) => {
    const maker = new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lng: mappable.loc.lng,
        lat: mappable.loc.lat,
      },
    });

    maker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.makerContent(),
      });

      infoWindow.open(this.googleMaps, maker);
    });
  };
}

export default CustomMaps;
