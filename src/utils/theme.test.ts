import test from 'node:test';
import assert from 'node:assert/strict';
import { getNextTheme, resolveInitialTheme } from './theme';

test('getNextTheme toggles between light and dark accurately', () => {
  assert.equal(getNextTheme('light'), 'dark');
  assert.equal(getNextTheme('dark'), 'light');
});

test('resolveInitialTheme respects stored preference over system', () => {
  assert.equal(resolveInitialTheme('dark', false), 'dark');
  assert.equal(resolveInitialTheme('light', true), 'light');
});

test('resolveInitialTheme falls back to system preference when storage is empty or invalid', () => {
  assert.equal(resolveInitialTheme(null, true), 'dark');
  assert.equal(resolveInitialTheme(null, false), 'light');
  assert.equal(resolveInitialTheme('invalid', true), 'dark');
  assert.equal(resolveInitialTheme(undefined, false), 'light');
});
