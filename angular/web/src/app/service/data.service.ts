import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataService {

    private messageSource = new BehaviorSubject<string>("size1");
    private levelSource = new BehaviorSubject<string>("A");
    private foregroundSource = new BehaviorSubject<string>("#000000");
    private backgroundSource = new BehaviorSubject<string>("#ffffff");

    private animationSource = new BehaviorSubject<boolean>(false);

    currentMessage = this.messageSource.asObservable();
    currentLevel = this.levelSource.asObservable();
    currentForeground = this.foregroundSource.asObservable();
    currenBackground = this.backgroundSource.asObservable();
    currentAnimation = this.animationSource.asObservable();

    constructor() { }

    changeMessage(message: string) {
        this.messageSource.next(message);
    }

    changeAnimation(anim: boolean) {
        this.animationSource.next(anim);
    }



    changeLevel(level: string) {
        this.levelSource.next(level);
    }

    changeForegorund(color: string) {
        this.foregroundSource.next(color);
    }

    changeBackgorund(color: string) {
        this.backgroundSource.next(color);
        console.log(this.currenBackground)
    }

}