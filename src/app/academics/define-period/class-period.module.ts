export class ClassPeriodModule {

    constructor(
      public id: number,
      public classPeriodName: string,
      public classPeriodFrom: string,
      public classPeriodTo: string,
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }