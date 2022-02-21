import { CoreComponent } from "../../framework";

class HomePageComponent extends CoreComponent {
    constructor(config: any) {
        super(config)

        this.data = {
            drin: 'Дринчик работает'
        }
    }
}


export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
        
        <div class="main">
            <h1>Home Page</h1>
            <h5 class="drin">{{ drin }}</h5>
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> 
            
        </div>    
    `,

    styles: `
        .drin { color: red; }
    `
})