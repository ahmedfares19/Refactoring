export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = Strategy;
  }

  public executeStrategy(): void {
    this.strategy.execute();
  }
}

const context = new Context(new ConcreteStrategyA());
context.executeStrategy();
context.setStrategy(new ConcreteStrategyB());
context.executeStrategy();
