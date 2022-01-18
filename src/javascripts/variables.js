const methods = require('./methods');

module.exports = {
  mobile: '+6281377232136',
  email: 'me@yanuarizal.net',
  github_username: 'yanuarizalk',
  website: 'yanuarizal.net',
  address: 'Surakarta, Indonesia',
  google_place: 'Surakarta,+Surakarta+City,+Central+Java/@-7.5592034,110.7487715,12z/data=!3m1!4b1!4m5!3m4!1s0x2e7a16627ad11ab1:0xe7fe4e0454bc3095!8m2!3d-7.5754887!4d110.8243272',
  description: 'I am a engineer',
  education_experiences: [
    {
      institution: 'SMK Negeri 2 Surakarta',
      since: [
        Date(2015), Date(2018),
      ],
      do: [
        'Reaching class rank from bottom to atleast top 6, in which the progress is increasing on every semester',
        'As semester exams, managed to make realtime chat room using plain socket protocol in Vb6',
      ],
    },
    {
      institution: 'BLK Surakarta',
      since: [
        Date(2019, 1), Date(2019, 3),
      ],
      do: [
        'Polishing web skills that have been taught already in highschool',
      ],
    },
  ],
  work_experiences: [
    {
      company: 'PT. Tyfountex Indonesia',
      as: 'IT Staff',
      since: [
        new Date(2019, 6), new Date(2019, 12),
      ],
      do: [
        'Developed new reporting system with ASP technologies to revolutionize their monolith desktop based system',
        'Doing some chore for maintaining & troubleshooting employee\'s computer',
        'Managed to help the security officer by creating attendance tracker system (Mobile)',
      ],
    },
    {
      company: 'PT Sanityasa Anjaya Daniswara',
      as: 'Fullstack Engineer',
      since: [
        new Date(2020, 2), new Date(2020, 6),
      ],
      do: [
        'Reported some vulnerability API system before i was given the responsibility to see their logic system',
        'Maintaining few web app revision from client',
        'Fixing & add more validation on purchasing from google play',
      ],
    },
    {
      company: 'PT Daya Rekadigi Indonesia',
      as: 'Backend Engineer, Mobile Developer & Sysadmin',
      since: [
        new Date(2020, 6), Date.now(),
      ],
      do: [
        'Setup network ecosystem, self hosted application like dns, mail server, sms server & etc on physical server',
        'Maintaining a CRM system to be used by company\'s employees',
        'Using flutter, i managed to make realtime tracking & chat system using firebase & rocketchat as well as on backend for their marketplace app',
        'Responsible to train interns from UDB university',
      ],
    },
  ],
  methods,
};
