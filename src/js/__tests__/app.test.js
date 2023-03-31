import Settings from '../app';

test('check setСustomSettings function', () => {
  const settings = new Settings();
  settings.setСustomSettings('theme', 'light');
  settings.setСustomSettings('music', 'rock');
  settings.setСustomSettings('difficulty', 'nightmare');
  const received = settings.customSettings;
  const arr = [['theme', 'light'], ['music', 'rock'], ['difficulty', 'nightmare']];
  const expected = new Map(arr);
  expect(received).toEqual(expected);
});

test('check setСustomSettings function if settings are in defaultSettings', () => {
  const settings = new Settings();
  settings.setСustomSettings('theme', 'dark');
  const received = settings.customSettings;
  const arr = [];
  const expected = new Map(arr);
  expect(received).toEqual(expected);
});

test('check getSettings function if customSettings.size === 0', () => {
  const settings = new Settings();
  settings.getSettings();
  const received = settings.generalSettings;
  const arr = [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']];
  const expected = new Map(arr);
  expect(received).toEqual(expected);
});

test('check getSettings function', () => {
  const settings = new Settings();
  settings.setСustomSettings('music', 'rock');
  settings.setСustomSettings('difficulty', 'nightmare');
  settings.getSettings();
  const received = settings.generalSettings;
  const arr = [['theme', 'dark'], ['music', 'rock'], ['difficulty', 'nightmare']];
  const expected = new Map(arr);
  expect(received).toEqual(expected);
});
