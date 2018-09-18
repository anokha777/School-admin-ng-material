export class LimitStudentModule {

    constructor(
      public id: number,
      public className: string,
      public sectionName: string,
      public limitBoyNumber: number,
      public limitGirlNumber: number,
      public admittedBoy: number,
      public admittedGirl: number,
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }