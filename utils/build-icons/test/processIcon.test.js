'use strict';

const processIcon = require('../lib/processIcon');

const missingViewBox = {
  fileName: 'bad_icon.svg',
  icon: {
    svg: {
      $: {}
    }
  },
  id: 'bad_icon',
  svgIds: []
};

const wrongSize = {
  fileName: 'bad_size.svg',
  icon: {
    svg: {
      $: { viewBox: '0 0 40 40', xmlns: 'http://www.w3.org/2000/svg' }
    }
  },
  id: 'bad_size',
  svgIds: []
};

const goodIcon = {
  fileName: 'ic_ticket.svg',
  icon: {
    svg: {
      $: { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
      path: [
        {
          $: {
            d:
              'M9.707 8.85l-5.379 5.378.472.471c1.39-.36 2.585-.04 3.584.959 1 1 1.387 2.262 1.162 3.787l.44.44 5.378-5.379-5.657-5.657zm1.414-1.415l5.657 5.657 3.107-3.107-.472-.471c-1.403.145-2.605-.281-3.604-1.28-1-1-1.37-2.145-1.11-3.434l-.471-.472-3.107 3.107zm-8.207 5.379l9.9-9.9a2 2 0 0 1 2.828 0l.792.792a1 1 0 0 1 .156 1.211c-.436.747-.28 1.493.466 2.24.747.747 1.494.902 2.24.466a1 1 0 0 1 1.212.157l.791.791a2 2 0 0 1 0 2.829l-9.9 9.9a2 2 0 0 1-2.828 0l-.791-.793a1 1 0 0 1-.157-1.21c.436-.747.28-1.494-.466-2.24-.747-.747-1.493-.903-2.24-.467a1 1 0 0 1-1.211-.156l-.792-.792a2 2 0 0 1 0-2.828z',
            'fill-rule': 'evenodd'
          }
        }
      ]
    }
  },
  id: 'ic_ticket',
  svgIds: ['ic_ticket']
};

test('Process icon', () => {
  const icon = processIcon(goodIcon);
  expect(icon).toEqual({
    id: 'ic_ticket',
    svg:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.707 8.85l-5.379 5.378.472.471c1.39-.36 2.585-.04 3.584.959 1 1 1.387 2.262 1.162 3.787l.44.44 5.378-5.379-5.657-5.657zm1.414-1.415l5.657 5.657 3.107-3.107-.472-.471c-1.403.145-2.605-.281-3.604-1.28-1-1-1.37-2.145-1.11-3.434l-.471-.472-3.107 3.107zm-8.207 5.379l9.9-9.9a2 2 0 0 1 2.828 0l.792.792a1 1 0 0 1 .156 1.211c-.436.747-.28 1.493.466 2.24.747.747 1.494.902 2.24.466a1 1 0 0 1 1.212.157l.791.791a2 2 0 0 1 0 2.829l-9.9 9.9a2 2 0 0 1-2.828 0l-.791-.793a1 1 0 0 1-.157-1.21c.436-.747.28-1.494-.466-2.24-.747-.747-1.493-.903-2.24-.467a1 1 0 0 1-1.211-.156l-.792-.792a2 2 0 0 1 0-2.828z" fill-rule="evenodd"/></svg>',
    svgIds: ['ic_ticket'],
    fileName: 'ic_ticket.svg'
  });
});

test('bad viewbox', () => {
  const icon = processIcon(missingViewBox);
  expect(icon).toEqual({
    id: 'bad_icon',
    svgIds: [],
    error: "\tbad_icon.svg doesn't define a viewbox",
    fileName: 'bad_icon.svg'
  });
});

test(' bad size', () => {
  const icon = processIcon(wrongSize);
  expect(icon).toEqual({
    id: 'bad_size',
    svgIds: [],
    error: "\tbad_size.svg has a viewbox that isn't 24",
    fileName: 'bad_size.svg'
  });
});
