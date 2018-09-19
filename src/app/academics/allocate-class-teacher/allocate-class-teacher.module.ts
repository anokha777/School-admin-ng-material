export class AllocateClassTeacherModule {

    constructor(
      public id: number,
      public className: string,
      public sectionName: string,
      public classTeacherName: string,
      public classTeacherImgUrl: string,
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }