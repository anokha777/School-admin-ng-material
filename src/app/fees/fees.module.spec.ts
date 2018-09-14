import { FeesModule } from './fees.module';

describe('FeesModule', () => {
  let feesModule: FeesModule;

  beforeEach(() => {
    feesModule = new FeesModule();
  });

  it('should create an instance', () => {
    expect(feesModule).toBeTruthy();
  });
});
