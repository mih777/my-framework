import { router } from "../tools/router"
import { isUndefined } from "../tools/util"

export class Module {

    private components
    private botstrapComponent
    private routes

    constructor(config: any) {
        this.components = config.components
        this.botstrapComponent = config.bootstrap
        this.routes = config.routes
    }

    start() {
        this.initComponents()
        if(this.routes) this.initRoutes()
    }

    initComponents() {
        this.botstrapComponent.render()
        this.components.forEach(this.renderComponent.bind(this))
    }

    initRoutes(){
        window.addEventListener('hashchange', this.renderRoute.bind(this))
        this.renderRoute()
    }

    renderRoute(){
        let url = router.getUrl()
        let route = this.routes.find((r: any) => r.path === url)

        if(isUndefined(route)) {
            route = this.routes.find((r: any) => r.path === '**')
        }

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderComponent(route.component)
    }

    renderComponent(c: any) {
        c.render()
    }

}