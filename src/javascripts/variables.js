// const methods = require('./methods');
import methods from './methods';

export default {
  mobile: '+6281377232136',
  email: 'me@yanuarizal.net',
  github_username: 'yanuarizalk',
  website: 'yanuarizal.net',
  address: 'Surakarta, Indonesia',
  google_place: 'Surakarta,+Surakarta+City,+Central+Java/@-7.5592034,110.7487715,12z/data=!3m1!4b1!4m5!3m4!1s0x2e7a16627ad11ab1:0xe7fe4e0454bc3095!8m2!3d-7.5754887!4d110.8243272',
  description: 'I am a software engineer with wide & deep expertise in many technologies.\n With those commitment, i try to produce the best developing experience not just for consumers, but also for the developer itself.',
  techs: [
    'Javascript', 'PHP', 'Kotlin', 'Dart', '.NET', 'VB', 'Golang',
    'SQL', 'NoSQL', 'Influx 1x',
    'Node JS', 'Laravel', 'Livewire', 'Tailwind CSS', 'EF Core', 'GetX', 'React JS', 'Alpine JS',
    'Docker', 'Parse Server', 'Traefik', 'Firebase', 'Git', 'Linux',
    /* {
      ecosystem: [
        'SQL'
      ],
      services: [

      ],
    }, */
  ],
  educations: [
    {
      institution: 'SMK Negeri 2 Surakarta',
      since: [
        new Date(2015, 5), new Date(2018, 4),
      ],
      do: [
        'Reaching class rank from bottom to atleast top 6, in which the progress is increasing on every semester',
        'As semester exams, managed to make realtime chat room using plain socket protocol in Vb6',
      ],
    },
    {
      institution: 'BLK Surakarta',
      since: [
        new Date(2019, 0), new Date(2019, 2),
      ],
      do: [
        'Polishing web skills that have been taught already in highschool for 3 months',
        'Pass & certified as web developer by Kemnaker',
      ],
    },
  ],
  experiences: [
    {
      company: 'PT. Tyfountex Indonesia',
      as: 'IT Staff',
      since: [
        new Date(2019, 5), new Date(2019, 11),
      ],
      do: [
        'Developed new reporting system with .NET technologies using DevExpress framework to revolutionize their monolith desktop based system',
        'Doing some chore for maintaining & troubleshooting employee\'s computer',
        'Establish attendance tracker system (Mobile) to help the security officer cycling around company',
      ],
    },
    {
      company: 'PT Sanityasa Anjaya Daniswara',
      as: 'Fullstack Engineer',
      since: [
        new Date(2020, 1), new Date(2020, 5),
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
        new Date(2020, 5), new Date(2022, 1),
      ],
      do: [
        'Setup network ecosystem, self hosted service like dns, mail, sms & etc on premise server',
        'Maintaining a CRM system to be used by company\'s employees',
        'Attempt to deploy production ready server with load balancing traefik & grafana as monitoring system',
        'Using flutter, managed to implement realtime tracking order & chat system using firebase & parse server as well as on backend for their marketplace app',
        'Responsible to train interns from UDB university',
      ],
    },
    {
      company: 'Evomo',
      as: 'Backend Engineer',
      since: [
        new Date(2022, 2), Date.now(),
      ],
      do: [
        'Maintenance & develop OEE & EMS services',
        'Bugfixing some bugs, ranging from patching to major fix',
        'Refactoring some code & reduce performance load by optimizing the logic system',
        'Responsible to train interns from Telkom university',
      ],
    },
  ],
  certificates: [
    {
      name: 'Software Engineering Expertise Program',
      image: 'assets/certs/rpl.thumb.png',
      link: 'assets/certs/rpl.pdf',
      issuer: 'AppsInTune',
      issued_date: new Date(2018, 5),
    },
    {
      name: 'Web Developer',
      image: 'assets/certs/blk.thumb.jpg',
      link: 'assets/certs/blk.pdf',
      issuer: 'BNSP Kemnaker',
      issued_date: new Date(2019, 5),
    },
    {
      name: 'Data Analytic',
      image: 'assets/certs/analytic.thumb.png',
      link: 'assets/certs/analytic_google.pdf',
      issuer: 'Google',
      issued_date: new Date(2023, 5),
    },
  ],
  methods,
};
