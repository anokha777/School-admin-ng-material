export class CastModule {
    constructor(
      public id: number,
      public castName: string,
      public castCategory: string,
      public religionName: string,
      public createDate: Date,
      public updateDate: Date,
      public createBy: string
    ) {  }
  
  }