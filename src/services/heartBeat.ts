import { interval } from 'rxjs';
import { LocationService } from './locationService';

const ls = LocationService.getInstance();

export const StartHeartBeat = () => {
    // save notification token 
    // todo make 5 minutes
    const source = interval(1 * 60 * 1000);
    const subscribe = source.subscribe(val => executeHeartBeat(val));
}

const executeHeartBeat = (hearBeatId: number) => {
    // get location
    const location = ls.getLocation();
        console.log("HeartBeat Done");
}

