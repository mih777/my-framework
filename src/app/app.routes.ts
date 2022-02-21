import { notFound } from "./common/not-found.component";
import { homePageComponent } from "./pages/home-page.component";
import { listPageComponent } from "./pages/list-page.component";
import { tabsPageComponent } from "./pages/tabs-pages.component";

export const appRoutes = [

    { path: '', component: homePageComponent },
    { path: 'tabs', component: tabsPageComponent },
    { path: 'list', component: listPageComponent },
    { path: '**', component: notFound }

]