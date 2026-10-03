import { JournalParticularItem } from '../types/journal';

export interface FullJournalParticular {
  label: string;
  value: string;
  isConfirmed: boolean;
  notes?: string;
  linkHref?: string;
}

export const COMPLETE_JOURNAL_INFORMATION: FullJournalParticular[] = [
  {
    label: 'Journal Title',
    value: 'Shivraj 350: International Peer Reviewed Multidisciplinary Journal',
    isConfirmed: true
  },
  {
    label: 'Publisher',
    value: 'Shivaji College, University of Delhi',
    isConfirmed: true
  },
  {
    label: 'Publishing Institution',
    value: 'Shivaji College, University of Delhi',
    isConfirmed: true
  },
  {
    label: 'ISSN',
    value: 'To be officially confirmed',
    isConfirmed: false,
    notes: 'Formal application in process with National Science Library (NIScPR), India'
  },
  {
    label: 'Frequency',
    value: 'To be officially confirmed',
    isConfirmed: false,
    notes: 'Biannual schedule (2 issues per volume per academic cycle proposed)'
  },
  {
    label: 'Place of Publication',
    value: 'New Delhi',
    isConfirmed: true
  },
  {
    label: 'Country of Publication',
    value: 'India',
    isConfirmed: true
  },
  {
    label: 'Starting Year',
    value: '2026',
    isConfirmed: true
  },
  {
    label: 'Broad Subject Category',
    value: 'Multidisciplinary',
    isConfirmed: true,
    notes: 'Sciences, Humanities, Social Sciences, Commerce & Applied Interdisciplinary Studies'
  },
  {
    label: 'Language',
    value: 'To be officially confirmed',
    isConfirmed: false,
    notes: 'English (Inaugural volumes); additional multilingual criteria subject to Editorial Board ratification'
  },
  {
    label: 'Publication Format',
    value: 'Online',
    isConfirmed: true,
    notes: 'Digital Open Access Repository'
  },
  {
    label: 'Publication Fee',
    value: 'To be officially confirmed',
    isConfirmed: false,
    notes: 'Zero Article Processing Charges (APC) policy pending Governing Body ratification'
  },
  {
    label: 'Current Issue',
    value: 'Volume 1, Issue 1 (Inaugural Issue, 2026)',
    isConfirmed: true,
    notes: 'Scheduled for release following active peer review cycle'
  },
  {
    label: 'Editorial Office',
    value: 'Shivaji College, University of Delhi',
    isConfirmed: true
  },
  {
    label: 'Email',
    value: 'journal@shivaji.du.ac.in',
    isConfirmed: true,
    linkHref: 'mailto:journal@shivaji.du.ac.in'
  },
  {
    label: 'Website',
    value: 'shivaji.du.ac.in',
    isConfirmed: true,
    linkHref: 'https://shivaji.du.ac.in/'
  },
  {
    label: 'Address',
    value: 'Ring Road, Raja Garden, New Delhi – 110027, India',
    isConfirmed: true
  },
  {
    label: 'Access Model',
    value: 'Open Access Repository (Online)',
    isConfirmed: true,
    notes: 'Universal barrier-free academic access for scholars, researchers, and students'
  },
  {
    label: 'Copyright / Licensing',
    value: 'To be officially confirmed',
    isConfirmed: false,
    notes: 'Formal Creative Commons (CC BY / CC BY-NC) attribution framework under ratification'
  }
];

// Backward compatibility alias
export const JOURNAL_PARTICULARS = COMPLETE_JOURNAL_INFORMATION;
