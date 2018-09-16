export class CategoryModule {

    constructor(
      public id: number,
      public name: string,
      public code: string,
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }