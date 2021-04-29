import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { MangaListComponent } from './manga-list/manga-list.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent} from './home/home.component';
import { RanobeComponent} from './ranobe/ranobe.component'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'animes', component: AnimeListComponent},
  { path: 'mangas', component: MangaListComponent},
  { path: 'news', component: NewsComponent},
  { path: 'homes', component: HomeComponent},
  { path: 'ranobes', component: RanobeComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AnimeListComponent, MangaListComponent, NewsComponent, RanobeComponent, HomeComponent]