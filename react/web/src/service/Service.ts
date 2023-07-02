import { BehaviorSubject, Observable } from 'rxjs';

interface State {
    label: string;
    url: string;
    target: string;
}

class MyService {
    private currentSizeSubject: BehaviorSubject<string>;
    private currentLevelSubject: BehaviorSubject<string>;
    private currentForegorundSubject: BehaviorSubject<string>;
    private currentBackgroundSubject: BehaviorSubject<string>;
    private animationSource: BehaviorSubject<boolean>;


    currentLocation = ""
    breadcrumbLocation: {} = [];
    isRegister: boolean = false;
    private bcSource = new BehaviorSubject<State[]>([{ label: 'home', url: 'main/AAA', target: "_self" }]);
    currentBc = this.bcSource.asObservable();





    constructor() {
        this.currentSizeSubject = new BehaviorSubject<string>('size1');
        this.currentLevelSubject = new BehaviorSubject<string>('A');
        this.currentForegorundSubject = new BehaviorSubject<string>('#000000');
        this.currentBackgroundSubject = new BehaviorSubject<string>('#ffffff');
        this.animationSource = new BehaviorSubject<boolean>(false);
    }

    public getCurrentAnimationSource(): Observable<boolean> {
        return this.animationSource.asObservable();
    }

    public getCurrentForegorund(): Observable<string> {
        return this.currentForegorundSubject.asObservable();
    }

    public getCurrentBackgroundSubject(): Observable<string> {
        return this.currentBackgroundSubject.asObservable();
    }

    public getCurrentSize(): Observable<string> {
        return this.currentSizeSubject.asObservable();
    }

    public getCurrentLevel(): Observable<string> {
        return this.currentLevelSubject.asObservable();
    }


    public getCurerntBs(): Observable<{}> {
        return this.bcSource.asObservable();
    }


    public updateAnimation(anim: boolean): void {
        this.animationSource.next(anim);
        console.log(anim)
    }

    public updateCurrentSize(size: string): void {
        this.currentSizeSubject.next(size);
    }

    public updateCurrentLevel(level: string): void {
        this.currentLevelSubject.next(level);
    }

    updateBc(menuItem: State[]) {
        this.bcSource.next(menuItem)
    }
}

export default MyService;