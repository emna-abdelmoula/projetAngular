import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/Modeles/Publication';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tabArticle: any;
  //i3bi les données statiques maghir requete
  //source:any[]=GLOBAL._DB.articles;

  //i3bi brequete
  GETALL():Observable<Article[]>{
    return this.httpClient.get<Article[]>('http://localhost:3000/articles')
  }

  ONSAVE(form:any):Observable<void>{
    return this.httpClient.post<void>('http://localhost:3000/articles',form);
  }
  onDelete(id: string): Observable<any> {
    return this.httpClient.delete<void>(`http://localhost:3000/articles/${id}`);
  }
  // getArticleById(id:string):Observable<any>{
  //   // return this.httpClient.get<any>('127.0.0.1:8080/api/Member/$id')
  //   return new Observable(observer=> observer.next(
  //   this.tabArticle.filter((item: { id: string; })=>item.id==id)[0]??null//ken 9itou irj3houli fel pos 0 /??:sinon/null
  //   ))
  // }

  getArticleById(id: string): Observable<Article | null> {
    return this.httpClient.get<Article>(`http://localhost:3000/articles/${id}`);
    // Use HTTP GET for the specific article ID, assuming your backend supports it
  }
// In your ArticleService
updateArticle(id: any, article: Article): Observable<any> {
  // Ensure the ID used in the URL is the one passed to the method, not article.id
  return this.httpClient.put(`http://localhost:3000/articles/${id}`, article);
}


  
  
  
  constructor(private httpClient:HttpClient) { }

  // onDelete(id:string):Observable<any>
  // {
  //   // return this.httpClient.delete<any>('127.0.0.1:8000/api/Member/$id');si on a backend 
  //   this.tab =this.tab.filter((item) => item.id !=id );//filtrer
  //   return new Observable(observer=> observer.next())
  // }
  // getArticlebyId(id:string):Observable<any>{
  //   // return this.httpClient.get<any>('127.0.0.1:8080/api/Member/$id')
  //   return new Observable(observer=> observer.next(
  //   this.source.filter(item=>item.id==id)[0]??null//ken 9itou irj3houli fel pos 0 /??:sinon/null
  //   ))}

  //   updateArticle(id: string , updatedMember : any ): Observable <any>{
  //     const index =this.source.findIndex(item=>item.id==id)
  //     this.source[index]={id:id,...updatedMember
  //    }
  //     return new Observable(observer=>observer.next())
      
  
  //   }
  //   ONSAVE(articletosave:any):Observable<any>{
  //     //generateur de requete HTTP => lance un thread de type observale (pattron qui contient 3 entites topic ,observer,subscriber)
  //     //thread => synchronisation entre frot et back (bech ay changement fel BD yettaficha fel front)
  //     // return this.httpClient.post
  //     // ('localhost:8000/api/Member',membertosave)//laison entre back et front
  //     const Article={
  //       //membertosave contient 4 données w houma 6 (ne9sin id w createddate)
  //       ...articletosave,//extracter toutes les attributes de membertosave(...)
  //       id:Math.ceil(Math.random()*1000).toString()//generation d'un identifiant unique pour cette personne

  //     }
  //    // this.source.push(Article);//push=> ajouter un elet dans un tab 
  //         return  new Observable(observer=> {observer.next()})//next()=> topic
  //         //observer.next() => si pas d'erreur  on appelle next()
  // }
}
