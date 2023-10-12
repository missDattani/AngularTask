import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngTopics';
  

  ngOnInit(){
    // let obs = Observable.create((observer:any)=>{
    //   observer.next(Math.random());
    // });

    

    let obs = new Subject<number>();

    console.warn('--------Subject--------');
    
    console.log('Befor anyone subscribes');

    obs.subscribe((res:any)=>{
      console.log('A Just Subscribed' + res);
      
    });

    console.log('After A subscribed');

    obs.next(Math.random());

    console.log('Before B Subscribe');

    obs.subscribe((res:any)=>{
      console.log('B Just Subscribed' + res);
      
    });

    console.log('After B subscribed');

    obs.next(Math.random());

    console.warn('--------Behaviour Subject--------');

    let obs1 = new BehaviorSubject<number>(0);

    
    console.log('Befor anyone subscribes');

    obs1.subscribe((res:any)=>{
      console.log('A Just Subscribed' + res);
      
    });

    console.log('After A subscribed');

    obs1.next(Math.random());

    console.log('Before B Subscribe');

    obs1.subscribe((res:any)=>{
      console.log('B Just Subscribed' + res);
      
    });

    console.log('After B subscribed');

    obs1.next(Math.random());

    console.warn('--------Async Subject--------');

    let obs2 = new AsyncSubject();

    
    console.log('Befor anyone subscribes');

    obs2.subscribe((res:any)=>{
      console.log('A Just Subscribed' + res);
      
    });

    console.log('After A subscribed');

    obs2.next(Math.random());

    console.log('Before B Subscribe');

    obs2.subscribe((res:any)=>{
      console.log('B Just Subscribed' + res);
      
    });

    console.log('After B subscribed');

    obs2.next(Math.random());

    obs2.complete(); //gives values(res) only after complete

    console.warn('--------Replay Subject--------');

    let obs3 = new ReplaySubject<number>(3);

    
    console.log('Befor anyone subscribes');

    obs3.subscribe((res:any)=>{
      console.log('A Just Subscribed' + res);
      
    });

    console.log('After A subscribed');

    obs3.next(Math.random());

    console.log('Before B Subscribe');

    obs3.subscribe((res:any)=>{
      console.log('B Just Subscribed' + res);
      
    });

    console.log('After B subscribed');

    obs3.next(Math.random());

    
    

    // obs.subscribe((result:any)=>{
    //   console.log('Subject 1:' + result);
    // });

    
    // obs.subscribe((result:any)=>{
    //   console.log('Subject 2:' + result);
    // });

    
    // obs.subscribe((result:any)=>{
    //   console.log('Subject 3:' + result);
    // });
    // obs.next(Math.random());
  }

  source:string='From Parent';

  childData(data:any){
    alert(data);
  }


}
