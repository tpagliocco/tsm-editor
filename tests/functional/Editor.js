import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://localhost:8080`;

test('Autocomplete dropdown appears', async t => {
  await t
    .typeText('#editor-event', ' DBM')
    .expect(Selector('.dropdown.panel').visible).eql(true);
});

test('Autocomplete accept on enter', async t => {
  await t
    .click('#editor-event')
    .pressKey('ctrl+a delete')
    .typeText('#editor-event', 'DBM')
    .pressKey('enter')
    .expect(Selector('#editor-event').innerText).eql('DBMarket');
});

test('Autocomplete accept on tab', async t => {
  await t
    .click('#editor-event')
    .pressKey('ctrl+a delete')
    .typeText('#editor-event', 'DBM')
    .pressKey('tab')
    .expect(Selector('#editor-event').innerText).eql('DBMarket');
});

test('Dismissing autocomplete on escape', async t => {
  await t
    .click('#editor-event')
    .pressKey('ctrl+a delete')
    .typeText('#editor-event', 'DBM')
    .expect(Selector('.dropdown.panel').visible).eql(true)
    .pressKey('esc')
    .expect(Selector('.dropdown.panel').visible).eql(false);
});

test('Dismissing autocomplete on left', async t => {
  await t
    .click('#editor-event')
    .pressKey('ctrl+a delete')
    .typeText('#editor-event', 'DBM')
    .expect(Selector('.dropdown.panel').visible).eql(true)
    .pressKey('left')
    .expect(Selector('.dropdown.panel').visible).eql(false);
});

test('Dismissing autocomplete on right', async t => {
  await t
    .click('#editor-event')
    .pressKey('ctrl+a delete')
    .typeText('#editor-event', 'DBMarket + 100g', { paste: true })
    .typeText('#editor-event', ' DBM', { caretPos: 8 })
    .expect(Selector('.dropdown.panel').visible).eql(true)
    .pressKey('right')
    .expect(Selector('.dropdown.panel').visible).eql(false);
});
