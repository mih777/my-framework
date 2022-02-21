import { CoreComponent } from "../../framework";

class NotFound extends CoreComponent {
    constructor(config: any){
        super(config)
    }
}

export const notFound = new NotFound({

    selector: 'app-not-found',
    template: `
        <div>
            <h2>Страница не найдена</h2>
            <a href="#">Перейти на главную</a>
        </div>
    `
})