export interface VisitorRespFormat {
  attendance: {
    month: string;
    year: number;
    highest: {
      museum: string;
      visitors: number;
    };
    lowest: {
      museum: string;
      visitors: number;
    };
    ignored?: {
      museum: string;
      visitors: number;
    };
    total: number;
  };
}
