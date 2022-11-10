const images = [
  'emma.jpg',
  'mainz.jpg',
  'morning.jpg',
  'night.jpg',
  'roundnet.jpg',
  'vincent.jpg',
];

export const paths = {
  projects: {
    bachelor_thesis: {
      files: ['thesis.pdf'],
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
    files: ['smartwatch_auf_den_digitalen_vormarsch.pdf'],
    git: [
      { name: 'bw_jobs.git', link: 'https://github.com/Browserwerk/bw_jobs' },
      { name: 'terminal.git', link: 'https://github.com/timecool/terminal' },
    ],
  },
  about_me: {
    files: ['resume.pdf'],
  },
  images: {
    files: images,
  },
};
