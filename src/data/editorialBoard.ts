import { EditorialRoleGroup } from '../types/journal';

export const EDITORIAL_BOARD_DATA: EditorialRoleGroup[] = [
  {
    roleTitle: 'Patron',
    description: 'Institutional leadership guiding academic integrity and institutional governance.',
    members: [
      {
        name: 'Principal, Shivaji College',
        designation: 'Patron & Institutional Head',
        department: 'Administration',
        institution: 'Shivaji College, University of Delhi',
        isConfirmed: false
      }
    ]
  },
  {
    roleTitle: 'Editor-in-Chief',
    description: 'Provides overall scholarly direction, editorial governance, and final oversight of published literature.',
    members: [
      {
        name: 'To be officially confirmed',
        designation: 'Senior Faculty Member / Professor',
        department: 'Academic Faculty',
        institution: 'Shivaji College, University of Delhi',
        isConfirmed: false
      }
    ]
  },
  {
    roleTitle: 'Managing Editor',
    description: 'Directs the journal operational cycle, peer review administration, and scholarly production.',
    members: [
      {
        name: 'To be officially confirmed',
        designation: 'Associate Professor / Assistant Professor',
        department: 'Editorial Committee',
        institution: 'Shivaji College, University of Delhi',
        isConfirmed: false
      }
    ]
  },
  {
    roleTitle: 'Editorial Board Members',
    description: 'Subject matter authorities overseeing peer evaluation across multidisciplinary disciplines.',
    members: [
      {
        name: 'Faculty Nominee (Sciences)',
        designation: 'Departmental Editorial Representative',
        department: 'Sciences Division',
        institution: 'Shivaji College, University of Delhi',
        isConfirmed: false
      },
      {
        name: 'Faculty Nominee (Social Sciences)',
        designation: 'Departmental Editorial Representative',
        department: 'Social Sciences Division',
        institution: 'Shivaji College, University of Delhi',
        isConfirmed: false
      },
      {
        name: 'Faculty Nominee (Humanities)',
        designation: 'Departmental Editorial Representative',
        department: 'Humanities Division',
        institution: 'Shivaji College, University of Delhi',
        isConfirmed: false
      },
      {
        name: 'Faculty Nominee (Commerce)',
        designation: 'Departmental Editorial Representative',
        department: 'Commerce & Management Division',
        institution: 'Shivaji College, University of Delhi',
        isConfirmed: false
      }
    ]
  },
  {
    roleTitle: 'Advisory Board',
    description: 'Distinguished scholars and institutional researchers providing international and national strategic guidance.',
    members: [
      {
        name: 'External Advisory Scholars (National & International)',
        designation: 'Advisory Council Members',
        department: 'University Departments & Partner Research Institutions',
        institution: 'University of Delhi and Affiliated Research Centres',
        isConfirmed: false
      }
    ]
  }
];
