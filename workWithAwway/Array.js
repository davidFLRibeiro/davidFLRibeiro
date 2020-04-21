const Memory = require('./Memory');

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.memory = new Memory();
    this.ptr = this.memory.allocate(this.length);
  }
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    this.memory.set(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = this.memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    this.memory.copy(this.ptr, oldPtr, this.length);
    this.memory.free(oldPtr);
    this._capacity = size;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return new Error('Index Error');
    }
    return this.memory.get(this.ptr + index);
  }
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = this.memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
}

module.exports = Array;
