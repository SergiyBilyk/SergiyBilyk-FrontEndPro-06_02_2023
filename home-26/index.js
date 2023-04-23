'use strict'

function* Foo() {
  console.log('start')
  yield 1
  yield 2
  yield 3
  console.log('finish')
}

function Boo(){
  console.log('start');
  return {
    from: 1,
    to: 3,

    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (this.current === undefined) {
        this.current = this.from;
      }
      if (this.current <= this.to) {
        return {
          value: this.current++,
          done: false
        };
      } else {
        console.log('finish');
        this.current++;
        return {
          value: undefined,
          done: true
        };
      };
    }
  };
}

const iterator = Boo()
console.log(iterator.next().value);
console.log(iterator.next().done);
console.log(iterator.next().value);