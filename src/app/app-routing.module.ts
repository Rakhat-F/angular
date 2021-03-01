import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { MangaListComponent } from './manga-list/manga-list.component';

const routes: Routes = [
  { path: 'animes', component: AnimeListComponent},
  { path: 'mangas', component: MangaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AnimeListComponent, MangaListComponent]