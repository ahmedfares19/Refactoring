export class ConcreteStrategyA implements Strategy {
  public execute(numbers: number[]): number {
    return numbers.length();
  }
}
