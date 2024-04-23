import Tag from './Tag';

const res = new Tag('p', {}, 'hellow');
const res1 = new Tag('img', {});
const res2 = new Tag('label', { for: 'email' }, 'Email');
const res3 = new Tag('input', { type: 'submit', value: 'Save' });

console.log(res.toString());
console.log(res1.toString());
console.log(res2.toString());
console.log(res3.toString());
