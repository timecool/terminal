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
      linkData: [
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
    linkData: [
      { name: 'bw_jobs.git', link: 'https://github.com/Browserwerk/bw_jobs' },
      { name: 'terminal.git', link: 'https://github.com/timecool/terminal' },
      {
        name: 'buyMeACoffee_eth.git',
        link: 'https://github.com/timecool/buyMeACoffee_eth',
      },
    ],
  },
  about_me: {
    files: ['resume.pdf'],
  },
  socials: {
    linkData: [
      {
        name: 'linkedin.link',
        link: 'https://www.linkedin.com/in/vincent-b%C3%A4rtsch-b732741b3/',
      },
      { name: 'instagram.link', link: 'https://www.instagram.com/vbaertsch/' },
    ],
  },
  images: {
    files: images,
  },
};
