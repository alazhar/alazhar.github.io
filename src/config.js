const profile = {
  fullName: 'Al Azhar',
  description: 'SOFTWARE & WEB DEVELOPER',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.jpeg',
  about: {
    title: `HEY THERE! 
    I'M AZHAR`,
    description: ``,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Jakarta, Indonesia',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@alazhaar_',
        url: 'https://twitter.com/alazhaar_',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'me@alazhar.dev',
        url: 'mailto://me@alazhar.dev',
        hoverColor: '#546e7a'
      }
      // {
      //   iconName: 'lock',
      //   text: '@kuser',
      //   url: 'https://keybase.io/kuser',
      //   hoverColor: '#e9641c'
      // }
    ]
  },
  social: [
    {
      iconName: 'twitter',
      url: 'https://twitter.com/alazhaar_',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/kambiang',
      text: "I'm on Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/alazhar',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:me@alazhar.dev',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Test',
    img: '',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample'],
    siteUrl: 'https://project.alazhar.dev/test/',
    sourceCodeUrl: 'https://github.com/alazhar/test'
  }
  // {
  //   title: 'Project Title #2',
  //   img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
  //   description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
  //   categories: ['Sample', 'Freeware', 'Go'],
  //   siteUrl: 'https://amazing.project.com'
  // },
  // {
  //   title: 'Project Title #3',
  //   img: 'https://www.nethruster.com/assets/img/wareader.svg',
  //   description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
  //   categories: ['Wat', 'Linux', 'LoL'],
  //   sourceCodeUrl: 'https://github.com/user/:O'
  // }
]

const formUrl = 'https://script.google.com/macros/s/AKfycbyDP7wAGSy4zd4uhDbKcjZTGN0HdrYixNkExqjy7K2oKVL0r34/exec'
const ReCAPTCHAKey = '6LflCl4aAAAAAFaNzjMxUI5QcABpdF_ORZdLRIUW'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
