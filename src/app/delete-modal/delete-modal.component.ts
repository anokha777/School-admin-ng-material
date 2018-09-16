import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Section } from '../academics/create-section/section.model';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  componetData: Section;

  constructor(private dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log('data====', data);
      this.componetData = data.row;
     }

  ngOnInit() {
  }

  delete() {
    this.dialogRef.close(this.componetData);
  }

  cancel() {
    this.dialogRef.close();
  }

}
