export class AcademicYearModule {

    constructor(
      public id: number,
      public academicMonthStart: string,
      public academicYearStart: string,
      public academicMonthEnd: string,
      public academicYearEnd: string,
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }