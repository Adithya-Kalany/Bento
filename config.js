// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Adithya!',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning',
  greetingAfternoon: 'Good afternoon',
  greetingEvening: 'Good evening',
  greetingNight: 'Go to Sleep',

  // Weather
  weatherKey: '3a3bcfbf1b249e58432e565d14c3407d',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '25.204849',
  defaultLongitude: '55.270782',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.protonmail.com/u/0/inbox',
    },
    {
      id: '2',
      name: 'My Devices',
      icon: 'lock',
      link: 'https://myaccount.google.com/device-activity',
    },
    {
      id: '3',
      name: 'Matrix',
      icon: 'message-square',
      link: 'https://app.schildi.chat/',
    },
    {
      id: '4',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '5',
      name: 'Coding',
      icon: 'terminal',
      link: 'https://studentportal.codeyoung.com',
    },
    {
      id: '6',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'briefcase',

  // Links
  lists: {
    firstList: [
      {
        name: 'Inspirational',
        link: 'https://www.youtube.com/watch?v=J3wONk-5ZM4',
      },
      {
        name: 'Lofi',
        link: 'https://www.youtube.com/watch?v=19BbOdi2sT4',
      },
      {
        name: 'Relaxing music',
        link: 'https://www.youtube.com/watch?v=dbJ55eUlw3A',
      },
      {
        name: 'Rock',
        link: 'https://www.youtube.com/watch?v=ozv4q2ov3Mk',
      },
    ],
    secondList: [
      {
        name: 'WhatsApp',
        link: 'https://web.whatsapp.com/',
      },
      {
        name: 'Radio',
        link: 'https://radio.mashtoolz.xyz/',
      },
      {
        name: 'Coding',
        link: 'https://replit.com',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com',
      },
    ],
  },
};
