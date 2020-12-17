import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
imports: [
    CommonModule,
    MatDialogModule],
exports: [
    MatDialogModule],
})
export class MaterialModule {}