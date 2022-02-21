import { CoreModule } from "../framework";
import { appComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { appHeader } from "./common/app.header";

class AppModule extends CoreModule {
    constructor(config: any) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appHeader
    ],
    bootstrap: appComponent,
    
    routes: appRoutes
})