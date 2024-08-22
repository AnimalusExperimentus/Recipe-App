export interface Recipe {
    title:string,
    time:string,
    photoPath:string,
    type:region,
    instructions:string[],
  };

  export enum region{
    FRENCH="French",
    MEXICAN="Mexican",
    PORTUGUESE="Portuguese",
  }
