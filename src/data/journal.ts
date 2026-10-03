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
