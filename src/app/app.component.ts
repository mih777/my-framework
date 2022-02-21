import { CoreComponent } from "../framework";

class AppComponent extends CoreComponent {
    constructor(config: any){
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>

        <router-outlet></router-outlet>

        
    `
})