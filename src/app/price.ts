export class Price {
  constructor(
    public id: number,
    public itemId: string,
    public min6: number,
    public max6: number,
    public avg6: number,
    public min: number,
    public max: number,
    public avg: number,
    public countTotal: string,
    public countItems: string,
    public countTotal6: string,
    public countItems6: string
  ) {}
}
