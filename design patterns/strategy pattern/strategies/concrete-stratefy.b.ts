export class ConcreteStrategyB implements Strategy {
  public execute(numbers: number[]): number {
    return numbers.length() - 50;
  }
}
