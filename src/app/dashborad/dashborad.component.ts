import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ArticleService } from 'src/Services/article.service';
import { EvenementServiceService } from 'src/Services/evenement.service.service';
import { Member1Service } from 'src/Services/member1.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashborad', // Consider renaming to 'app-dashboard' for correctness
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboardComponent implements OnInit {
  Nb_Members!:number;
  Nb_Articles!:number;
  Nb_Events!:number;
  Nb_Tools!:number;
  nbTeachers:number=0;
  nbStudents:number=0;
  chartData: ChartDataset[] =  [
    {
      label: '$ en millions',
      data: [1551, 1688, 1800, 1895, 2124, 2124]
    }
  ]
  chartLabels: string[] = [];

  chartData2: ChartDataset[] =  [
    {
      label: '$ en millions',
      data: [this.nbTeachers,this.nbStudents]
    }
  ]
  tabEvent:number[]=[];
  
  chartLabels2: string[] = ['Teacher','Student'];

  chartData3: ChartDataset[] =  [
    {
      label: '$ en millions',
      data: this.tabEvent
    }
  ]

  chartLabels3: string[] = ['Teacher','Student'];

  tab:string[]=[];
  tab2:number[]=[];
  
  
  chartOptions: ChartOptions = {};
  

  constructor(private MS: Member1Service,
    private AS: ArticleService,
    private ES:EvenementServiceService,
    ){}

  ngOnInit(){

    this.MS.GETALL().subscribe((r)=>{
      this.Nb_Members=r.length;
      for(let i=0;i<this.Nb_Members;i++){
        this.chartLabels.push(r[i].name);
        this.tab2.push(r[i].tab_pub.length);
        this.chartData =  [
          {
            
            data: this.tab2
          }
        ];
        this.MS.GETALL().subscribe((r)=>{
          this.Nb_Members=r.length;
          for(let i=0;i<this.Nb_Members;i++){
        if (r[i].type =="Student") {
          console.log("stu");
          this.nbStudents++;
        } else  {
          console.log("jjjjj");
          this.nbTeachers++;
        }

        this.chartData2 =  [
          {
            
            data: [this.nbTeachers , this.nbStudents]
          }
        ]
        if(r[i].type=="Student"){
          this.chartLabels3.push(r[i].name)
          this.tabEvent.push(r[i].tab_evt.length)
          this.chartData3 =  [
            {
              label: '$ en millions',
              data: this.tabEvent
            }
          ]
        }
      }})
      }      
    }) 

    this.AS.GETALL().subscribe((r)=>{
      this.Nb_Articles=r.length
    })

    this.ES.GETALL().subscribe((r)=>{
      this.Nb_Events=r.length
    })
  }

}
