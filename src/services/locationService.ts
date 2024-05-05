import { interval } from 'rxjs';

export class LocationService {

    private static instance: LocationService;
    private location: GeolocationCoordinates | null;
    private hooks: ((data: GeolocationCoordinates) => void)[];

    private constructor() {
        this.location = null;
        this.hooks = [];
        this.InitLocationService();
    }

    public static getInstance(): LocationService {
        if (!LocationService.instance) {
            LocationService.instance = new LocationService();
        }

        return LocationService.instance;
    }

    private getLatestLocation() {
        // if geolocation is supported by the users browser
        if (navigator.geolocation) {
            // get the current users location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // save the geolocation coordinates in two variables
                    this.location = position.coords;
                    console.log('Location:', this.location);
                },
                // if there was an error getting the users location
                (error) => {
                    alert('Error getting user location:' + JSON.stringify(error));
                }
            );
        }
        // if geolocation is not supported by the users browser
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    private InitLocationService() {
        // update location every 30 seconds
        const source = interval(60 * 1000);
        const subscribe = source.subscribe(val => this.getLatestLocation());
    }

    public getLocation() {
        // Default location to Aphrodite rock, You just climbed from waves :D
        return this.location || { timestamp: new Date, coords: { accuracy: 1, latitude: 34.66413047526212, longitude: 32.62698523959087 } };
    }

    public subscribe(executable: (data: GeolocationCoordinates) => void) {
        this.hooks.push(executable);
    }
}