const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Zachary Zimmerman',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Zachary Zimmerman',
    heading: 'ABOUT ME',
  },
  {
    route: '/stats',
    title: 'Stats | Zachary Zimmerman',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Zachary Zimmerman',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
