import menu from './menu.mjs';

export const global = {
  navigation: {
    main: [
      {
        title: 'drinks',
        flyout: true,
        items: menu.slice(0, 4).map(item => ({
          label: item.title,
          url: `/menu/${item.handle}`,
          img: item.image
        })),
        url: '/menu'
      },
      {
        title: 'location'
      }
    ]
  },
  menu
}

export const index = {
  heading: 'DOK DA BANG 🇺🇸🇰🇷 독수리 다방',
  features: {
    heading: 'Our Great Features',
    paragraph: 'Seriously we have really great stuff. Dont believe us? check this out!',
    items: [
      {
        title: 'Feature One',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        image: 'https://placekitten.com/400/400'
      },
      {
        title: 'Feature Two',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        image: 'https://placekitten.com/401/401'
      },
      {
        title: 'Feature Three',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
        image: 'https://placekitten.com/402/402'
      }
    ]
  }
};