import { Component } from '@angular/core';
import { Observable, combineLatest, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {


  data:string[]=[];


    ObservableTraditionalWay(){
      // this.MethodA().subscribe((v)=>{
      //   this.data.push(v);
      //   this.helloFromObservableMethod().subscribe((res)=>{
      //     this.data.push(res);
      //     this.MethodB().subscribe((x)=>{
      //       this.data.push(x);
      //     })
      //   })
      // })

      forkJoin({a:this.MethodA(),b:this.helloFromObservableMethod(),c:this.MethodB()}).subscribe(({a,b,c})=>{
        this.data.push(a);
        this.data.push(b);
        this.data.push(c);
      })
  }

  combineLatest(){
    combineLatest(this.MethodA(),this.helloFromObservableMethod(),this.MethodB()).subscribe(([a,b,c])=>{
      this.data.push(a);
      this.data.push(b);
      this.data.push(c);
    })
  }

  CallObservable(){
    this.MethodA().subscribe((v)=>{
      this.data.push(v);
      this.helloFromObservableMethod().subscribe((value) => {
        // alert('Hello Promise');
        this.data.push(value);
        this.MethodB().subscribe((x)=>{
          this.data.push(x);
        })
       })
    })
 
  }

  MethodA():Observable<string>{
    return of('A');
  }

  MethodB():Observable<string>{
    return of('B');
  }

  count=0;
  helloFromObservableMethod() : Observable<string> {
    return new Observable(observer => {
     const SET_TIMER =  setInterval(() => {
      this.count = this.count + 1;
      if(this.count >= 5){
        observer.complete();
        observer.unsubscribe();
        clearInterval(SET_TIMER);
        alert('All Done');
      }
              // this.data.push('Hey From Observable Again');
              observer.next('Hey From Observable Again');
            }, 1000);
    })
  }

  // helloFromObservableMethod() : Promise<string> {
  //   return new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       this.data.push('Hey From Promise');
  //       resolve('');
  //     }, 5000);
  //   })
  // }



  Call3Methods(){
    this.method1().then((value)=>{
      this.method2().then((val) => {
        this.method3().then((v) => {
          alert("all done");
        });
      });
    });
  }

  method1() : Promise<string>{
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        this.data.push('Method 1');
        resolve('');
      },10000);
    })
  }
  method2() : Promise<string>{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.data.push('Method 2');
        resolve('');
      }, 5000);
    })
  }
  method3() : Promise<string>{
    
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.data.push('Method 3');
        resolve('');
      }, 1000);
    })
  }

  //fork join has syntaxt that accepts each observable output as an object value



}
