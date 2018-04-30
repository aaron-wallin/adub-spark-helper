import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { MyFilterPipe } from './pipefilter';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ MyFilterPipe ],
  exports:      [ MyFilterPipe ]
})

export class SharedModule { }