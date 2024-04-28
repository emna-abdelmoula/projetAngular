import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import { LoginComponent } from './login/login.component';
import { ArticleformComponent } from './articleform/articleform.component';


const routes: Routes = [//tableau qui va contenir les routes 
{
  path:'create', //quand on a ce path 
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:MemberFormComponent,//elle execute ce composant 
},
{
  path:'createart', //quand on a ce path 
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:ArticleformComponent,//elle execute ce composant 
},
{
  path:'members',
  component:MemberComponent
},
// {
//   path:'',
//   pathMatch:'full',
//   redirectTo:'members'
// },
{
  path:':id/edit',//:id => pour afficher contenu du id 
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:MemberFormComponent,
},
{
  path:'dashborad',
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:DashboradComponent,
},
{
  path:'articles',
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:ArticlesComponent,
},
{
  path:':id/edit/article',
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:ArticleformComponent,
},
{
  path:'events',
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:EventsComponent,
},
{
  path:'tools',
  pathMatch:'full',//ken maktebtch kima houa fel path belthabt erreur 
  component:ToolsComponent,
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'',
  pathMatch:'full',
  redirectTo:'login'
},
//l'ordre intervient lezmni n7otha o5er sinon kol yahbtou fiha 
{
  path:'**',//ken ma9itch 7ata path meli moujoudin
  redirectTo:'members'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




