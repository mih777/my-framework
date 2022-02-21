import { isUndefined } from "../tools/util"

export class Component {
    private selector: string
    private template: string
    public data: any
    private el: HTMLElement

    constructor(config: any) {
        this.template = config.template
        this.selector = config.selector
        this.el = null
    }

    render() {
        this.el = document.querySelector(this.selector)
        if(!this.el) throw new Error(`Component with selector ${this.selector} wasn't found`)
        this.el.innerHTML = compileTemplate(this.template, this.data)   
        
    }
}

const compileTemplate = (template: any, data: any) => {
    if(isUndefined(data)) return template

    let regex = /\{{(.*?)}}/g
    template = template.replace(regex, (str: any, d: any) => {
        let key = d.trim()

        return data[key]
    })

    return template
}