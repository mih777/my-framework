import { appModule } from "./app/app.module";
import { boorstrap } from "./framework";
import { delay } from './framework/tools/util'


delay(500).then(() => {
    boorstrap(appModule)
})