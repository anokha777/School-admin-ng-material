export class CreateClassTimetableModule {

    constructor(
      public id: number,
      public className: string,
      public sectionName: string,
      public subjectName: string,
      public teacherName: string,
      public teacherImgUrl: string,
      public periodStartTime: string,
      public periodEndTime: string,
      public periodName: string, 
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }