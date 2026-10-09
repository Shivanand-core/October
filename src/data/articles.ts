import { Article } from '../types/journal';

/**
 * Official Published Articles Registry
 * Currently 0 verified articles have been published; Volume 1, Issue 1 (Inaugural Issue 2026)
 * is undergoing active double-blind peer-review production.
 */
export const OFFICIAL_ARTICLES: Article[] = [];

/**
 * Demonstration Offprint Records
 * Preserved strictly for UI typesetting, PDF offprint preview, and layout verification.
 * Explicitly branded as DEMO — NOT FOR PUBLICATION.
 */
export const DEMO_ARTICLES: Article[] = [
  {
    id: 'demo-art-001',
    slug: 'multidisciplinary-approaches-urban-sustainability-delhi-ncr',
    title: '[DEMO — NOT FOR PUBLICATION] Interdisciplinary Frameworks for Urban Environmental Resilience in Delhi National Capital Region',
    authors: [
      {
        name: 'Editorial Demonstration Contributor',
        affiliation: 'Department of Environmental Studies, Shivaji College, University of Delhi',
        isCorresponding: true
      },
      {
        name: 'Institutional Research Fellow',
        affiliation: 'Faculty of Interdisciplinary & Applied Sciences, University of Delhi'
      }
    ],
    articleType: 'Research Article',
    volume: 1,
    issue: 1,
    issueName: 'Inaugural Issue (Layout Demo)',
    year: 2026,
    month: 'January–June',
    pages: '1–14',
    abstract: 'DEMONSTRATION SAMPLE: Urban regions across emerging economies encounter compounding environmental challenges that necessitate an integration of natural sciences, geographical information modeling, and municipal policy frameworks. This sample article demonstrates the typographic layout, citation rendering, and PDF offprint generation of the Shivraj 350 platform.',
    keywords: [
      'Layout Demo',
      'Urban Ecology',
      'Interdisciplinary Planning',
      'Environmental Resilience',
      'Delhi NCR'
    ],
    isSampleOrPreview: true,
    pdfAvailable: true,
    publishedDate: '2026-01-15',
    sections: [
      {
        heading: '1. Introduction and Scope (Demonstration Section)',
        content: 'This section illustrates body text typography using Newsreader serif at 16px line height. The acceleration of rapid metropolitan expansion throughout the National Capital Territory requires fresh methodological paradigms that dismantle traditional disciplinary silos.'
      },
      {
        heading: '2. Methodology & Cross-Disciplinary Synthesis',
        content: 'Employing multi-spectral spatial imagery paired with structured socioeconomic sampling across eight distinct planning zones, researchers harmonized ecological parameters with residential vulnerability indices.'
      },
      {
        heading: '3. Findings & Policy Implications',
        content: 'Evidence corroborates that ecological corridors designed with community stewardship covenants experience significantly lower encroachment rates.'
      }
    ],
    references: [
      'Bhardwaj, R., & Sen, A. (2024). Spatial Dynamics of Northern Indian Metropolitan Belts. Journal of Urban Sciences, 18(2), 112–129.',
      'Delhi Development Authority. (2021). Master Plan for Delhi – 2041 Baseline Assessment Reports. New Delhi: DDA Publications.',
      'Shivaji College Academic Forum. (2025). Multidisciplinary Dialogues on Sustainable Habitats. DU Academic Press.'
    ]
  },
  {
    id: 'demo-art-002',
    slug: 'vernacular-historiography-early-modern-deccan-maratha-polity',
    title: '[DEMO — NOT FOR PUBLICATION] Vernacular Historiography and Administrative Episteme in Early Modern Western India',
    authors: [
      {
        name: 'Humanistic Studies Scholar (Demo)',
        affiliation: 'Department of History, Shivaji College, University of Delhi',
        isCorresponding: true
      }
    ],
    articleType: 'Research Article',
    volume: 1,
    issue: 1,
    issueName: 'Inaugural Issue (Layout Demo)',
    year: 2026,
    month: 'January–June',
    pages: '15–28',
    abstract: 'DEMONSTRATION SAMPLE: This paper examines the emergence of Marathi vernacular administrative documentation (Bakhars and Rozkird records) during the seventeenth and eighteenth centuries, demonstrating humanities research layout standards.',
    keywords: [
      'Layout Demo',
      'Vernacular Historiography',
      'Hindavi Swaraj',
      'Administrative Statecraft',
      'Early Modern India'
    ],
    isSampleOrPreview: true,
    pdfAvailable: true,
    publishedDate: '2026-02-10',
    sections: [
      {
        heading: '1. Historiographical Context',
        content: 'Traditional historiography frequently categorized seventeenth-century regional administrative systems through the lens of centralized imperial models. Re-examining indigenous state papers reveals a sophisticated decentralized bureaucracy.'
      },
      {
        heading: '2. The Lexicon of Governance',
        content: 'The compilation of the Rajya Vyavahara Kosha marked a deliberate cultural initiative to systematize administrative terminology.'
      }
    ],
    references: [
      'Kulkarni, A. R. (2006). Explorations in the Deccan History. New Delhi: Pragati Publications.',
      'Gordon, S. (1993). The Marathas 1600–1818. Cambridge University Press.'
    ]
  },
  {
    id: 'demo-art-003',
    slug: 'computational-biochemistry-novel-phytochemical-screening',
    title: '[DEMO — NOT FOR PUBLICATION] In Silico Screening and Molecular Dynamics of Indigenous Phytochemicals against Antimicrobial Targets',
    authors: [
      {
        name: 'Chemical Biology Research Associate (Demo)',
        affiliation: 'Department of Chemistry & Biochemistry, Shivaji College, University of Delhi',
        isCorresponding: true
      },
      {
        name: 'Computational Biophysics Fellow (Demo)',
        affiliation: 'Department of Biophysics, University of Delhi South Campus'
      }
    ],
    articleType: 'Research Article',
    volume: 1,
    issue: 1,
    issueName: 'Inaugural Issue (Layout Demo)',
    year: 2026,
    month: 'January–June',
    pages: '29–42',
    abstract: 'DEMONSTRATION SAMPLE: Antimicrobial resistance (AMR) poses a severe global public health challenge, driving an urgent need for innovative lead compounds. This computational study demonstrates scientific reporting layout.',
    keywords: [
      'Layout Demo',
      'Computational Screening',
      'Phytochemicals',
      'Antimicrobial Resistance',
      'Drug Discovery'
    ],
    isSampleOrPreview: true,
    pdfAvailable: true,
    publishedDate: '2026-03-01',
    sections: [
      {
        heading: '1. Introduction',
        content: 'With the worldwide escalation of multidrug-resistant pathogens, traditional antibiotic pipelines require rapid reinforcement through non-canonical chemical spaces.'
      },
      {
        heading: '2. Computational Methodology',
        content: 'A curated library of 240 phytochemicals was evaluated against penicillin-binding protein targets using high-throughput virtual screening protocols.'
      }
    ],
    references: [
      'Lipinski, C. A., et al. (2001). Experimental and computational approaches to estimate solubility and permeability. Advanced Drug Delivery Reviews, 46(1-3), 3-26.',
      'Sharma, P., & Varma, K. (2025). Natural Products as Scaffolds in Modern Pharmacotherapy. Biochemical Journal, 480(7), 415–431.'
    ]
  }
];

// Alias for backwards compatibility
export const SAMPLE_ARTICLES: Article[] = DEMO_ARTICLES;

export const ALL_ISSUES = [
  {
    volume: 1,
    issueNumber: 1,
    title: 'Inaugural Issue (In Preparation)',
    period: 'January–June 2026',
    year: 2026,
    isInaugural: true,
    status: 'In Progress' as const,
    description: 'The inaugural edition of Shivraj 350 is currently undergoing double-blind peer review. Accepted research papers will be cataloged and published in this open-access repository upon editorial approval.',
    // Dynamic calculation from verified published records:
    articleCount: OFFICIAL_ARTICLES.length,
    articles: OFFICIAL_ARTICLES
  },
  {
    volume: 1,
    issueNumber: 2,
    title: 'Issue 2 (Planning Phase)',
    period: 'July–December 2026',
    year: 2026,
    isInaugural: false,
    status: 'Upcoming' as const,
    description: 'Upcoming second issue of Volume 1. Editorial and submission schedules to be officially announced following inaugural release.',
    articleCount: 0,
    articles: []
  }
];

export const ARCHIVE_YEARS = [
  {
    year: 2026,
    volumes: [
      {
        volume: 1,
        year: 2026,
        issues: ALL_ISSUES
      }
    ]
  },
  {
    year: 2027,
    volumes: [
      {
        volume: 2,
        year: 2027,
        issues: [
          {
            volume: 2,
            issueNumber: 1,
            title: 'Issue 1 (Planned)',
            period: 'January–June 2027',
            year: 2027,
            isInaugural: false,
            status: 'Upcoming' as const,
            description: 'Scheduled volume and issue in accordance with the future journal publication calendar.',
            articleCount: 0,
            articles: []
          }
        ]
      }
    ]
  }
];
