import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validateContactForm,
  filterProjectsByTag,
  formatSkillLevel,
  ProjectItem,
} from './portfolioLogic';

test('validateEmail validates typical and edge case emails correctly', () => {
  assert.equal(validateEmail('kavinmahi.cs@gmail.com'), true);
  assert.equal(validateEmail('test@sub.domain.co'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('foo@bar'), false);
});

test('validateContactForm checks required fields and formats', () => {
  const valid = validateContactForm({
    name: 'Kavinkumar',
    email: 'kavinmahi.cs@gmail.com',
    message: 'Hello, I want to collaborate on a new UI/UX project.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);

  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    message: 'Short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);
});

test('filterProjectsByTag filters items accurately or returns all', () => {
  const projects: ProjectItem[] = [
    { id: '1', title: 'InnSync', category: 'App', tags: ['UI/UX Design', 'App Design'], description: 'Hotel app' },
    { id: '2', title: 'ZuTail', category: 'Web', tags: ['UI/UX Design', 'Website Redesign'], description: 'Pet care web' },
  ];

  const all = filterProjectsByTag(projects, 'all');
  assert.equal(all.length, 2);

  const appOnly = filterProjectsByTag(projects, 'App Design');
  assert.equal(appOnly.length, 1);
  assert.equal(appOnly[0].id, '1');

  const webOnly = filterProjectsByTag(projects, 'Website Redesign');
  assert.equal(webOnly.length, 1);
  assert.equal(webOnly[0].id, '2');

  const none = filterProjectsByTag(projects, 'Nonexistent');
  assert.equal(none.length, 0);
});

test('formatSkillLevel clamps and returns correct mastery labels', () => {
  const figma = formatSkillLevel(95);
  assert.equal(figma.label, 'Mastery');
  assert.equal(figma.widthPercent, '95%');

  const react = formatSkillLevel(90);
  assert.equal(react.label, 'Expert');
  assert.equal(react.widthPercent, '90%');

  const next = formatSkillLevel(85);
  assert.equal(next.label, 'Advanced');

  const overflow = formatSkillLevel(120);
  assert.equal(overflow.widthPercent, '100%');
});

test('portfolioData contains valid user social media links and contact details', async () => {
  const { PERSONAL_INFO } = await import('../data/portfolioData');
  assert.equal(PERSONAL_INFO.socials.behance, 'https://www.behance.net/Kavinmahi');
  assert.equal(PERSONAL_INFO.socials.linkedin, 'https://www.linkedin.com/in/kavinkumarv/');
  assert.equal(PERSONAL_INFO.socials.instagram, 'https://www.instagram.com/uidesigner_001/');
  assert.equal(PERSONAL_INFO.phone, '+91-7339451207');
  assert.equal(PERSONAL_INFO.phoneCallUrl, 'tel:+917339451207');
  assert.equal(PERSONAL_INFO.fullName, 'Kavinkumar V');
  assert.equal(PERSONAL_INFO.title, 'UI/UX Designer');
  assert.equal(PERSONAL_INFO.email, 'kavinmahi.cs@gmail.com');
  assert.equal(PERSONAL_INFO.resumeUrl, '/assets/aistudio/kavinkumar-resume_52a98029.pdf');
  assert.equal(PERSONAL_INFO.resumePreviewUrl, '/assets/aistudio/kavinkumar-resume_88c7a99c.png');
});
