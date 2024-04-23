import { expect, test } from 'vitest';

import Tag from 'src/Tag';

test('checking class work Tag', () => {
  expect(new Tag('p', {}, 'hellow').toString()).toBe('<p>hellow</p>');
  expect(new Tag('img', {}).toString()).toBe('<img>');
  expect(new Tag('label', { for: 'email' }, 'Email').toString()).toBe('<label for="email">Email</label>');
  expect(new Tag('input', { type: 'submit', value: 'Save' }).toString()).toBe('<input type="submit" value="Save">');
});
