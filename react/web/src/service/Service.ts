import { BehaviorSubject, Observable } from 'rxjs';

class MyService {
    private currentSizeSubject: BehaviorSubject<string>;
    private currentLevelSubject: BehaviorSubject<string>;
    private currentForegorundSubject: BehaviorSubject<string>;
    private currentBackgroundSubject: BehaviorSubject<string>;

    currentLocation = ""
    breadcrumbLocation: {} = [];
    isRegister: boolean = false;
    private bcSource = new BehaviorSubject<{}>([{ label: 'content', url: 'main/AAA', preserveFragment: true }]);
    private currentBc = this.bcSource.asObservable();



    constructor() {
        this.currentSizeSubject = new BehaviorSubject<string>('size1');
        this.currentLevelSubject = new BehaviorSubject<string>('A');
        this.currentForegorundSubject = new BehaviorSubject<string>('#000000');
        this.currentBackgroundSubject = new BehaviorSubject<string>('#ffffff');
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

    public updateCurrentSize(size: string): void {
        this.currentSizeSubject.next(size);
    }

    public updateCurrentLevel(level: string): void {
        this.currentLevelSubject.next(level);
    }
}

export default MyService;