import menu from './menu.mjs';

export const global = {
  navigation: {
    main: [
      {
        title: 'menu',
        flyout: true,
        items: [
          {
            label: 'old',
            url: '/old',
            img: 'https://placekitten.com/200/200'
          },
          {
            label: 'new',
            url: '/new',
            img: 'https://placekitten.com/205/205'
          },
          {
            label: 'borrowed',
            url: '/borrowed',
            img: 'https://placekitten.com/210/210'
          },
          {
            label: 'blue',
            url: '/blue',
            img: 'https://placekitten.com/215/215'
          }
        ]
      },
      {
        title: 'about',
        flyout: true,
        items: [
          {
            label: 'food',
            url: '/food',
            img: 'https://placekitten.com/220/220'
          },
          {
            label: 'drinks',
            url: '/drinks',
            img: 'https://placekitten.com/225/225'
          },
          {
            label: 'whatever',
            url: '/whatever',
            img: 'https://placekitten.com/220/220'
          },
          {
            label: 'books',
            url: '/books',
            img: 'https://placekitten.com/235/235'
          }
        ]
      },
      {
        title: 'location'
      },
      {
        title: 'contact'
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