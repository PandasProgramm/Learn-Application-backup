import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReviewComponent} from './Review/review.component';
import {AppModule} from '../../app.module';


@NgModule({
    declarations: [
        ReviewComponent,
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        AppModule,

    ]
})
export class ReviewModule { }
