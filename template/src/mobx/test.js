import {observable, action} from 'mobx';

class Test {
    @observable
    count = 0;

    @action
    changeCount(type) {
        if (type === '+') {
            this.count++;
        } else  if (type === '-') {
            this.count--;
        }
    }
}

const test = new Test();
export default test;