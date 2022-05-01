module.exports = {
  email: 'upadrastaharsha09@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'github.com/upadrastaharshavardhan',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/upadrasta_harsha_?igshid=YmMyMTA2M2Y=',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/HarshaUpadrasta?t=AVur0yApR0Kwr9Im0gPdhQ&s=08',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/harsha-upadrasta-a33a461a2',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/pasyanth.updrasta',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
