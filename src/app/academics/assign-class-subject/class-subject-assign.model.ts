export class ClassSubjectAssignModule {

    constructor(
      public id: number,
      public className: string,
      public subjectsName: string[],
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }