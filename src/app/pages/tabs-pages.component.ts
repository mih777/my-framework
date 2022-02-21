import { CoreComponent } from "../../framework";

class TabsPageComponent extends CoreComponent {
    constructor(config: any) {
        super(config)
    }
}


export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
        <h1>Tabs Page</h1>
        <div class="main">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdI858St4HTOPNhJjQpUWbMWHN2-Uy_6qWw&usqp=CAU" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        
    `
})