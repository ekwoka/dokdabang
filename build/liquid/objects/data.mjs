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
        title: 'Dang Tasty Drinks!!!',
        content: 'We make frikken tasty drinks! Full of great Coffee harvested by children in misquito infested jungles somewhere near the equator, the taste of despair and hope is unmatched!',
        image: '/assets/images/cafe-latte.jpg'
      },
      {
        title: '2000+ Happy Customers',
        content: 'Rated ⭐️⭐️⭐️⭐️⭐️ by the 180% of hipsters while listening to bands you have never heard of!',
        image: '/assets/images/espresso.jpg'
      },
      {
        title: 'This one is green!!',
        content: 'We are a green coffee shop! We are not a coffee shop! We are a green coffee shop! We are not a coffee shop! We are a green coffee shop! We are not a coffee shop!',
        image: '/assets/images/green-tea-latte.jpg'
      },
      {
        title: 'I let Copilot write this one',
        content: 'Coffee is the best thing since sliced bread! Seriously, we are the best! You should try us! This is the best coffee shop in the world! Made with love by the best coffee shop in the world!',
        image: '/assets/images/macchiato.jpg'
      }
    ]
  }
};