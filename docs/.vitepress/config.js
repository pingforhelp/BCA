export default {
  title: 'notes.tamims.space',
  description: 'xx',
  ignoreDeadLinks: true, // ✅ prevents build from failing on dead links
  themeConfig: {
    sidebar: [
      {
        text: 'Communication Skills',
        collapsed: false,
        items: [
          { text: 'Everyday Phrases', link: '/communication-skills/everyday_phrases' },
          { text: 'Mouth Yoga', link: '/communication-skills/mouth-yoga' },
        ],
      },
      {
        text: 'Computer Science',
        collapsed: false,
        items: [
          { text: 'Computer Fundamentals', link: '/computer-sci/computer-fundamentals/computer_fundamentals_unit-1' },
          { text: 'Unit 1 – C', link: '/computer-sci/c/u-1c' },
          { text: 'Unit 2 – C', link: '/computer-sci/c/u-2c' },
          
        ],
      },
    ],
  },
};
