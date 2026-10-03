import { JournalIdentity } from '../types/journal';

export const JOURNAL_DATA: JournalIdentity = {
  name: 'SHIVRAJ 350',
  fullTitle: 'Shivraj 350: International Peer Reviewed Multidisciplinary Journal',
  shortSubtitle: 'International Peer Reviewed Multidisciplinary Journal',
  publisher: 'Shivaji College',
  institution: 'Shivaji College',
  universityAffiliation: 'University of Delhi',
  address: {
    line1: 'Ring Road, Raja Garden',
    area: 'Raja Garden',
    city: 'New Delhi',
    pincode: '110027',
    country: 'India'
  },
  email: 'journal@shivaji.du.ac.in',
  collegeWebsite: 'https://www.shivajicollege.ac.in',
  startingYear: 2026,
  format: 'Online (Open Access Repository)',
  discipline: 'Multidisciplinary (Sciences, Social Sciences, Humanities, Commerce & Applied Studies)'
};

export const SCOPE_CATEGORIES = [
  {
    title: 'Sciences & Technology',
    description: 'Empirical and theoretical investigations across physical, chemical, biological, and mathematical disciplines fostering technological innovations and scientific inquiry.'
  },
  {
    title: 'Social Sciences & Policy',
    description: 'Critical inquiries addressing sociological transformations, economic development, public governance, political philosophy, and historical contexts.'
  },
  {
    title: 'Humanities & Cultural Studies',
    description: 'Rigorous scholarly analyses in literature, linguistics, philosophy, cultural heritage, ethics, and qualitative humanistic discourse.'
  },
  {
    title: 'Commerce & Management',
    description: 'Research into corporate governance, emerging financial systems, sustainable business practices, economics, and administrative innovations.'
  },
  {
    title: 'Interdisciplinary Studies',
    description: 'Pioneering work bridging diverse academic paradigms to develop holistic solutions for local, national, and global challenges.'
  }
];

export const CONTRIBUTION_TYPES = [
  {
    name: 'Research Articles',
    description: 'Original empirical or theoretical investigations presenting novel methodologies, substantial findings, and comprehensive discussion.',
    status: 'Confirmed'
  },
  {
    name: 'Review Articles',
    description: 'Critical, comprehensive, and systematic overviews of existing literature identifying research gaps, synthesis of state-of-the-art developments, and future trajectories.',
    status: 'Confirmed'
  },
  {
    name: 'Case Studies',
    description: 'Detailed examinations of specific phenomena, organizational practices, scientific anomalies, or contextual societal applications.',
    status: 'Pending official confirmation'
  },
  {
    name: 'Book Reviews',
    description: 'Scholarly appraisals of recent seminal academic monographs and scholarly publications in relevant fields.',
    status: 'Pending official confirmation'
  },
  {
    name: 'Research Notes',
    description: 'Concise reports of preliminary findings, novel technical methodologies, or significant research in progress.',
    status: 'Pending official confirmation'
  }
];

export interface JournalParticularItem {
  id: string;
  label: string;
  value: string;
  isConfirmed: boolean;
  isLink?: boolean;
  linkHref?: string;
  category: 'identity' | 'specs' | 'contact';
  isCompactGridItem?: boolean;
}

export const JOURNAL_PARTICULARS: JournalParticularItem[] = [
  {
    id: 'journal-title',
    label: 'Journal Title',
    value: 'Shivraj 350: International Peer Reviewed Multidisciplinary Journal',
    isConfirmed: true,
    category: 'identity'
  },
  {
    id: 'publisher',
    label: 'Publisher',
    value: 'Shivaji College, University of Delhi',
    isConfirmed: true,
    category: 'identity'
  },
  {
    id: 'publishing-institution',
    label: 'Publishing Institution',
    value: 'Shivaji College, University of Delhi',
    isConfirmed: true,
    category: 'identity'
  },
  {
    id: 'issn',
    label: 'ISSN',
    value: 'To be officially confirmed',
    isConfirmed: false,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'frequency',
    label: 'Frequency',
    value: 'To be officially confirmed',
    isConfirmed: false,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'place-of-publication',
    label: 'Place of Publication',
    value: 'New Delhi',
    isConfirmed: true,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'country-of-publication',
    label: 'Country of Publication',
    value: 'India',
    isConfirmed: true,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'starting-year',
    label: 'Starting Year',
    value: '2026',
    isConfirmed: true,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'broad-subject-category',
    label: 'Broad Subject Category',
    value: 'Multidisciplinary',
    isConfirmed: true,
    category: 'identity'
  },
  {
    id: 'language',
    label: 'Language',
    value: 'To be officially confirmed',
    isConfirmed: false,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'publication-format',
    label: 'Publication Format',
    value: 'Online',
    isConfirmed: true,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'publication-fee',
    label: 'Publication Fee',
    value: 'To be officially confirmed',
    isConfirmed: false,
    category: 'specs',
    isCompactGridItem: true
  },
  {
    id: 'editorial-office',
    label: 'Editorial Office',
    value: 'Shivaji College, University of Delhi',
    isConfirmed: true,
    category: 'contact'
  },
  {
    id: 'email',
    label: 'Email',
    value: 'journal@shivaji.du.ac.in',
    isConfirmed: true,
    isLink: true,
    linkHref: 'mailto:journal@shivaji.du.ac.in',
    category: 'contact'
  },
  {
    id: 'address',
    label: 'Address',
    value: 'Ring Road, Raja Garden, New Delhi – 110027, India',
    isConfirmed: true,
    category: 'contact'
  }
];

