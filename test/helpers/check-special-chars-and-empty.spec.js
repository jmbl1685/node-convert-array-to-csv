const { checkSpecialCharsAndEmpty } = require('../../lib/helpers/check-special-chars-and-empty');

test('checkIfValid | newline', () => {
  const result = checkSpecialCharsAndEmpty('\n');

  expect(result).toBeTruthy();
});

test('checkIfValid | tab', () => {
  const result = checkSpecialCharsAndEmpty('\t');

  expect(result).toBeTruthy();
});

test('checkIfValid | ,', () => {
  const result = checkSpecialCharsAndEmpty(',');

  expect(result).toBeTruthy();
});

test('checkIfValid | ;', () => {
  const result = checkSpecialCharsAndEmpty(';');

  expect(result).toBeTruthy();
});

test('checkIfValid | .', () => {
  const result = checkSpecialCharsAndEmpty('.');

  expect(result).toBeTruthy();
});

test('checkIfValid | "', () => {
  const result = checkSpecialCharsAndEmpty('"');

  expect(result).toBeTruthy();
});

test("checkIfValid | '", () => {
  const result = checkSpecialCharsAndEmpty("'");

  expect(result).toBeTruthy();
});

test('checkIfValid | `', () => {
  const result = checkSpecialCharsAndEmpty('`');

  expect(result).toBeTruthy();
});

test('checkIfValid | ´', () => {
  const result = checkSpecialCharsAndEmpty('´');

  expect(result).toBeTruthy();
});

test('checkIfValid | no value', () => {
  const result = checkSpecialCharsAndEmpty('');

  expect(result).toBeTruthy();
});

test('checkIfValid | normal value', () => {
  const result = checkSpecialCharsAndEmpty('hello');

  expect(result).toBeFalsy();
});
