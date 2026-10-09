import { PolicyItem } from '../types/journal';

/**
 * Centralized policy slug mapping and alias resolver.
 * Ensures consistent canonical URL handling across all dropdowns, footers, and direct links.
 */
export const POLICY_ALIAS_MAP: Record<string, string> = {
  // Aliases for copyright and licensing
  'copyright': 'copyright-and-licensing',
  'licensing': 'copyright-and-licensing',
  'copyright-and-licensing': 'copyright-and-licensing',

  // Aliases for archiving policy
  'archiving': 'archiving-policy',
  'digital-preservation': 'archiving-policy',
  'archiving-policy': 'archiving-policy',

  // Aliases for corrections and retractions
  'corrections': 'corrections-and-retractions',
  'retractions': 'corrections-and-retractions',
  'corrections-and-retractions': 'corrections-and-retractions',

  // Aliases for AI use policy
  'ai': 'ai-use-policy',
  'ai-use': 'ai-use-policy',
  'ai-use-policy': 'ai-use-policy',

  // Aliases for complaints and appeals
  'complaints': 'complaints-and-appeals',
  'appeals': 'complaints-and-appeals',
  'complaints-and-appeals': 'complaints-and-appeals',

  // Canonical base policies
  'peer-review': 'peer-review',
  'publication-ethics': 'publication-ethics',
  'plagiarism': 'plagiarism',
  'open-access': 'open-access',
};

/**
 * Normalizes any route fragment or alias to the verified canonical policy slug.
 */
export function resolvePolicySlug(rawSlug: string): string {
  if (!rawSlug) return 'peer-review';
  const clean = rawSlug.trim().toLowerCase().replace(/^\/?policies\/?/, '').replace(/^\//, '');
  if (!clean) return 'peer-review';
  return POLICY_ALIAS_MAP[clean] || clean;
}

export const POLICIES_DATA: PolicyItem[] = [
  {
    id: 'peer-review',
    slug: 'peer-review',
    title: 'Peer Review Policy',
    shortSummary: 'Rigorous double-blind evaluation by independent domain experts ensuring high academic quality and impartial assessment.',
    content: [
      'Shivraj 350 adheres strictly to a double-blind peer-review model. Both the reviewer identities and the author identities remain completely concealed throughout the entire evaluation cycle.',
      'Upon receipt of a manuscript, the Managing Editor and relevant Section Editors conduct an initial screening for scope conformity, academic rigor, ethical compliance, and structural integrity.',
      'Manuscripts satisfying preliminary criteria are dispatched to a minimum of two external domain specialists with established research credentials in the specific field.',
      'Reviewers assess methodology validity, original contribution, literature grounding, clarity of presentation, and adherence to ethical standards.',
      'Editorial determinations (Accept, Minor Revisions, Major Revisions, or Reject) are rendered objectively based on reviewer appraisals. Revised submissions undergo subsequent evaluation prior to final acceptance.'
    ],
    standards: [
      'Double-Blind Anonymity Guaranteed',
      'Minimum Two Independent Peer Reviewers',
      'Confidentiality of Unpublished Findings',
      'Objective Editorial Conflict-of-Interest Disclosures'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'publication-ethics',
    slug: 'publication-ethics',
    title: 'Publication Ethics & Malpractice Statement',
    shortSummary: 'Uncompromising adherence to international best practices in academic publishing, aligned with COPE recommendations.',
    content: [
      'Shivraj 350 is dedicated to maintaining the highest ethical standards across all stages of the publication lifecycle. Editors, authors, and peer reviewers are expected to uphold scholarly honesty and transparency.',
      'Authors must guarantee that submitted manuscripts represent entirely original scholarly inquiry, that all contributing authors are appropriately acknowledged, and that no dual submission exists simultaneously with any other venue.',
      'Any potential conflict of interest—financial, institutional, or personal—must be fully disclosed upon initial manuscript submission.',
      'Fabrication, falsification, and selective omission of data constitute grave academic violations and warrant immediate rejection and institutional notification.'
    ],
    standards: [
      'Aligned with COPE (Committee on Publication Ethics) Guidelines',
      'Mandatory Conflict of Interest Disclosures',
      'Integrity in Authorship & Acknowledgements',
      'Protection of Human & Animal Subject Protocols'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'plagiarism',
    slug: 'plagiarism',
    title: 'Plagiarism Policy',
    shortSummary: 'Zero tolerance for intellectual appropriation, unauthorized reproduction, or unacknowledged text recycling.',
    content: [
      'Shivraj 350 maintains an uncompromising zero-tolerance policy against all manifestations of plagiarism, including verbatim copying without citation, inadequate paraphrasing, and unauthorized intellectual appropriation.',
      'All incoming submissions undergo systematic digital similarity screening utilizing academic similarity software before dispatch to peer reviewers.',
      'Submissions exhibiting unacceptable textual similarity thresholds (as determined by the Editorial Board in accordance with University of Delhi and UGC guidelines) will be summarily rejected or returned for rectification.',
      'Self-plagiarism and redundant text recycling without prominent attribution will not be permitted.'
    ],
    standards: [
      'Automated Digital Similarity Verification',
      'Stringent Adherence to UGC Plagiarism Guidelines',
      'Immediate Editorial Disqualification for Ethical Infractions'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'copyright-and-licensing',
    slug: 'copyright-and-licensing',
    title: 'Copyright & Licensing Policy',
    shortSummary: 'Transparent frameworks protecting author intellectual rights and establishing institutional archival stewardship.',
    content: [
      'The definitive copyright agreement and specific open access licensing framework are subject to official institutional ratification by Shivaji College, University of Delhi.',
      'Under the proposed institutional model, authors retain moral ownership of their scholarship while granting the journal the non-exclusive right of first publication.',
      'Articles are envisioned to be distributed under an academic Open Access protocol allowing scholarly reading, citation, and educational dissemination with appropriate bibliographic attribution.',
      'Detailed licensing documentation will be ratified and promulgated upon formal notification.'
    ],
    standards: [
      'Author Moral Rights Protected',
      'Non-Exclusive Publication Stewardship',
      'Formal Licensing Terms Pending Official Confirmation'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'open-access',
    slug: 'open-access',
    title: 'Open Access Policy',
    shortSummary: 'Commitment to universal, barrier-free access to peer-reviewed multidisciplinary knowledge for scholars worldwide.',
    content: [
      'Shivraj 350 is founded on the institutional conviction that freely disseminating peer-reviewed academic research accelerates global intellectual progress and civic enlightenment.',
      'All published articles in the online edition are slated for immediate and unrestricted public access without subscription paywalls.',
      'Readers across universities, research institutes, and independent communities are granted open reading and scholarly downloading permissions in adherence to academic fair use.'
    ],
    standards: [
      'Barrier-Free Universal Public Access',
      'Immediate Online Repository Availability',
      'No Reader Subscription Fees'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'archiving-policy',
    slug: 'archiving-policy',
    title: 'Archiving & Digital Preservation Policy',
    shortSummary: 'Long-term preservation protocols ensuring permanent electronic continuity of published scholarly literature.',
    content: [
      'To safeguard the enduring accessibility of scholarly literature, Shivraj 350 integrates institutional repository archiving through Shivaji College and University of Delhi infrastructure.',
      'Digital copies of all published issues and individual articles are deposited in secure, redundantly backed-up university servers.',
      'Post-publication, authors are encouraged to deposit pre-print and post-print versions in their institutional repositories with complete citation to the original publication in Shivraj 350.'
    ],
    standards: [
      'Institutional Digital Repository Backup',
      'Permanent URL & Identifier Preservation',
      'Author Self-Archiving Permitted'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'corrections-and-retractions',
    slug: 'corrections-and-retractions',
    title: 'Corrections & Retractions Policy',
    shortSummary: 'Rigorous scholarly correction mechanisms upholding the accuracy and integrity of the permanent academic record.',
    content: [
      'Shivraj 350 recognizes its solemn obligation to maintain the unblemished integrity of the permanent scientific and humanistic record.',
      'If inadvertent factual or typographic errors that do not compromise the fundamental conclusions of an article are identified, a formal Erratum (for publisher errors) or Corrigendum (for author errors) will be published.',
      'In rare events where substantial evidence of research misconduct, fraudulent data, severe plagiarism, or irreproducible findings emerges, the Editorial Board will execute a formal Retraction in alignment with international publishing standards.'
    ],
    standards: [
      'Formal Errata & Corrigenda Notices',
      'Transparent Retraction Procedures',
      'Permanent Archival Annotation'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'ai-use-policy',
    slug: 'ai-use-policy',
    title: 'Artificial Intelligence (AI) Use Policy',
    shortSummary: 'Transparent guidelines governing generative tools in manuscript preparation, data analysis, and peer review.',
    content: [
      'Authors must explicitly disclose if generative AI models, language processing tools, or machine learning algorithms were utilized in data curation, analysis, or drafting assistance.',
      'Generative AI cannot be credited as an author or co-author. Authorship entails accountability and ethical responsibility, which non-human tools cannot assume.',
      'Reviewers and editors are strictly prohibited from uploading confidential unpublished manuscripts into public or external generative AI platforms to preserve intellectual confidentiality.'
    ],
    standards: [
      'AI Tools Cannot Be Credited as Authors',
      'Mandatory Transparency & Disclosure Statements',
      'Strict Prohibition of AI in Peer Review Deliberations'
    ],
    status: 'Under Development',
    isApproved: false
  },
  {
    id: 'complaints-and-appeals',
    slug: 'complaints-and-appeals',
    title: 'Complaints & Appeals Procedure',
    shortSummary: 'Equitable institutional channels for arbitrating author grievances, review disagreements, and editorial disputes.',
    content: [
      'Authors who believe an editorial decision was reached through procedural irregularity, factual misunderstanding, or demonstrable reviewer bias may submit a formal letter of appeal to the Managing Editor.',
      'Appeals must be supported by point-by-point objective evidence and submitted within 30 days of the decision notice.',
      'The Editor-in-Chief, in consultation with independent senior members of the Editorial Advisory Board, reviews the appeal to determine if an independent re-review is warranted.'
    ],
    standards: [
      'Structured 30-Day Appeal Window',
      'Independent Senior Faculty Arbitration',
      'Written Procedural Documentation'
    ],
    status: 'Under Development',
    isApproved: false
  }
];
