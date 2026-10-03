import { Announcement } from '../types/journal';

export const ANNOUNCEMENTS_DATA: Announcement[] = [
  {
    id: 'ann-001',
    date: 'Spring 2026',
    category: 'Publication Update',
    title: 'Release of the Inaugural Issue — Volume 1, Issue 1 (January–June 2026)',
    summary: 'Shivaji College proudly announces the inauguration of Shivraj 350: International Peer Reviewed Multidisciplinary Journal, advancing cross-faculty scholarly inquiry.',
    details: 'The inaugural issue marks a historic milestone in the academic publication footprint of Shivaji College, University of Delhi. Manuscripts across sciences, social sciences, humanities, and commerce are assembled to foster multidisciplinary research dialogues.',
    linkText: 'View Inaugural Issue',
    linkPath: '/publications/current',
    isOfficialNotice: true
  },
  {
    id: 'ann-002',
    date: 'Active Session 2026',
    category: 'Call for Papers',
    title: 'Call for Papers: Volume 1, Issue 2 (July–December 2026)',
    summary: 'Submissions are invited for the upcoming issue. Scholars, faculty, and research fellows are encouraged to submit original research articles, review essays, and commentaries.',
    details: 'Manuscripts will undergo double-blind peer review. Deadline for initial manuscript receipt and formatting guidelines are available in the author portal. Official submission dates will be finalized upon administrative notification.',
    linkText: 'Call for Papers Guidelines',
    linkPath: '/for-authors/call-for-papers',
    isOfficialNotice: true
  },
  {
    id: 'ann-003',
    date: 'Administrative Notification',
    category: 'Editorial Notice',
    title: 'Constitution of Editorial Peer Review Panels Across Academic Faculties',
    summary: 'Shivaji College is formalizing specialized multidisciplinary review panels comprising eminent scholars from University of Delhi and partner institutions.',
    details: 'The confirmed roster of subject section editors and advisory council members will be published on the official portal upon final administrative notification.',
    linkText: 'Editorial Board Information',
    linkPath: '/editorial-board',
    isOfficialNotice: true
  }
];

export const CALL_FOR_PAPERS_INFO = {
  targetVolume: 'Volume 1, Issue 2',
  publicationPeriod: 'July–December 2026',
  submissionDeadlines: 'To be officially confirmed by the Editorial Board',
  notificationOfReview: 'Within 4 to 6 weeks from submission',
  manuscriptFee: 'Zero Publication Charges (To be officially confirmed)',
  disciplinesCovered: [
    'Physical, Chemical & Biological Sciences',
    'Mathematical Sciences & Computational Applications',
    'Economics, Commerce & Corporate Governance',
    'Political Science, Sociology & Public Administration',
    'History, Literature, Linguistics & Cultural Studies',
    'Environmental Studies & Sustainable Development',
    'Interdisciplinary Pedagogies & Higher Education'
  ],
  guidelinesSummary: [
    'Originality: Submitted manuscripts must be entirely unpublished and not under consideration elsewhere.',
    'Length: 4,000 to 7,000 words inclusive of references and abstract for research articles; 2,500 to 4,000 words for review essays.',
    'Abstract: A structured abstract of 200–250 words accompanied by 4 to 6 relevant keywords.',
    'Referencing: Standard scholarly reference format (APA / Chicago manual style as appropriate for the discipline).',
    'Anonymization: Manuscripts must be stripped of author names, institutional affiliations, and identifying metadata to ensure strict double-blind evaluation.'
  ]
};
