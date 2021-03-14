import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'pass-code-dialog',
  templateUrl: 'pass-code-dialog.component.html',
})
export class PassCodeDialog {

  constructor(
    public dialogRef: MatDialogRef<PassCodeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  pass_code: string;
  message: string;
  title: string
}