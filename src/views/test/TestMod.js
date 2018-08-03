import { observable, action } from 'mobx';
/**
 * mod层
 * 业务逻辑，数据逻辑应该存储于此
 */
class TestMod {
  @observable state = {
    hello: 'ssss'
  };

  @action
  changeHello (value) {
    this.state.hello = value;
  }
}

const testMod = new TestMod();

export default testMod;