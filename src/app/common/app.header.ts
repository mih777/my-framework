import { CoreComponent } from "../../framework";

class AppHeader extends CoreComponent {
    constructor(config: any){
        super(config)
    }
}

export const appHeader = new AppHeader({

    selector: 'app-header',
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">TS Framework</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link "  href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#tabs">Tabs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#list">List</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    `
})