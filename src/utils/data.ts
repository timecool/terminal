const images = [
  'emma.jpg',
  'mainz.jpg',
  'morning.jpg',
  'night.jpg',
  'roundnet.jpg',
  'vincent.jpg',
];

const projects = ['smartwatch_auf_den_digitalen_vormarsch.pdf'];
const thesis = [
  'hyperwork-frontend.git',
  'hyperwork-backend.git',
  'thesis.pdf',
];

export const paths = {
  projects: {
    bachelor_thesis: {
      files: thesis,
      git: [
        {
          name: 'hyperwork-frontend.git',
          link: 'https://github.com/timecool/hyperwork-frontend',
        },
        {
          name: 'hyperwork-backend.git',
          link: 'https://github.com/timecool/hyperwork-backend',
        },
      ],
    },
    my_food_coop: {},
    files: projects,
    git: [
      { name: 'bw_jobs.git', link: 'https://github.com/Browserwerk/bw_jobs' },
      { name: 'terminal.git', link: 'https://github.com/timecool/terminal' },
    ],
  },
  about_me: {},
  images: {
    files: images,
  },
};
