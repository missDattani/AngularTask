import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pass-data',
  templateUrl: './pass-data.component.html',
  styleUrls: ['./pass-data.component.css']
})
export class PassDataComponent {

  @Input() text:string='';

  @Output() data = new EventEmitter<string>();
  passDataToParent(){
    this.data.emit('From Child');
  }

}
