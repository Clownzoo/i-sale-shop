import { cloneDeep } from 'lodash';
import { observable, action, runInAction, useStrict, autorun } from 'mobx';
// 设置默认state
const defaultState = {
  hello: "ssss"
};
class MobxMod {
  @observable state = cloneDeep(defaultState);
}

const mobxMod = new MobxMod();

export default mobxMod;