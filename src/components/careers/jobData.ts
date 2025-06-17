
import { Job } from './types';

export const jobData: Job[] = [
  // Abuja, Nigeria - Fixed coordinates
  {
    id: '1',
    title: 'Regional Operations Director',
    department: 'Operations',
    location: 'Abuja, Nigeria',
    coordinates: [7.4951, 9.0765], // [lng, lat] format
    type: 'Full-time',
    experience: 'Executive',
    salary: '€75,000 - €110,000',
    remote: false,
    description: 'Lead our strategic operations across West Africa, driving sustainable growth and community impact through innovative business solutions.',
    requirements: [
      '10+ years of operations leadership experience',
      'Deep understanding of African markets',
      'MBA or equivalent advanced degree',
      'Fluency in English and French preferred',
      'Experience in emerging markets'
    ],
    benefits: [
      'Comprehensive healthcare coverage',
      'Housing allowance',
      'International travel opportunities',
      'Professional development budget',
      'Equity participation'
    ],
    posted: '2 days ago'
  },
  // Abidjan, Côte d'Ivoire - Fixed coordinates
  {
    id: '2',
    title: 'Senior Project Manager - CAOAGRO Industrial Projects',
    department: 'Operations',
    location: 'Abidjan, Côte d\'Ivoire',
    coordinates: [-4.0435, 5.3599], // [lng, lat] format
    type: 'Full-time',
    experience: 'Senior',
    salary: '€60,000 - €80,000',
    remote: false,
    description: 'Lead turnkey industrial project builds and installations for CAOAGRO\'s revolutionary agricultural processing facilities. Manage complex multi-phase projects from conception to commissioning, ensuring seamless integration of cutting-edge technology with sustainable agricultural practices.',
    requirements: [
      '8+ years in industrial project management',
      'Experience with turnkey facility construction',
      'PMP or equivalent certification preferred',
      'Knowledge of agricultural processing systems',
      'Fluency in French and English',
      'Strong leadership and coordination skills',
      'Experience in African industrial markets'
    ],
    benefits: [
      'Comprehensive health and dental coverage',
      'Housing and transportation allowance',
      'Professional development opportunities',
      'International project exposure',
      'Performance-based bonuses',
      'Equity participation in CAOAGRO'
    ],
    posted: '3 days ago'
  },
  {
    id: '3',
    title: 'CAD Mechanical Engineer - Factory Design & 3D Rendering',
    department: 'Engineering',
    location: 'Abidjan, Côte d\'Ivoire',
    coordinates: [-4.0435, 5.3599], // [lng, lat] format
    type: 'Full-time',
    experience: 'Senior',
    salary: '€55,000 - €75,000',
    remote: false,
    description: 'Design complete factories and processing lines from scratch using advanced CAD software. Create unprecedented 3D renderings and technical drawings for revolutionary agricultural processing facilities. Transform conceptual ideas into detailed engineering blueprints.',
    requirements: [
      '7+ years in mechanical design and CAD',
      'Expertise in SolidWorks, AutoCAD, and 3D rendering',
      'Experience designing industrial processing equipment',
      'Knowledge of manufacturing and assembly processes',
      'Ability to create photorealistic 3D visualizations',
      'Understanding of mechanical systems and automation',
      'French and English proficiency'
    ],
    benefits: [
      'State-of-the-art design software and hardware',
      'International collaboration opportunities',
      'Professional certification support',
      'Health insurance and housing support',
      'Innovation bonus programs',
      'Career advancement pathways'
    ],
    posted: '5 days ago'
  },
  // Aix-en-Provence, France - Fixed coordinates
  {
    id: '4',
    title: 'Senior Investment Analyst',
    department: 'Strategy',
    location: 'Aix-en-Provence, France',
    coordinates: [5.4474, 43.5263], // [lng, lat] format
    type: 'Full-time',
    experience: 'Senior',
    salary: '€70,000 - €95,000',
    remote: false,
    description: 'Lead investment analysis and due diligence for high-impact ventures across Africa\'s emerging markets, identifying opportunities that create sustainable value.',
    requirements: [
      '8+ years in investment analysis',
      'MBA from top-tier institution',
      'Experience in emerging markets',
      'French and English fluency',
      'CFA designation preferred'
    ],
    benefits: [
      'Competitive salary package',
      'European healthcare benefits',
      'Vacation and sabbatical options',
      'Professional development budget',
      'Stock options'
    ],
    posted: '5 days ago'
  },
  {
    id: '5',
    title: 'AI Research Engineer',
    department: 'Engineering',
    location: 'Aix-en-Provence, France',
    coordinates: [5.4474, 43.5263], // [lng, lat] format
    type: 'Full-time',
    experience: 'Senior',
    salary: '€65,000 - €85,000',
    remote: false,
    description: 'Pioneer next-generation AI solutions for industrial intelligence, developing algorithms that empower Africa\'s agro-industrial transformation.',
    requirements: [
      '6+ years in AI/ML development',
      'PhD in Computer Science or related field',
      'Experience with deep learning frameworks',
      'Published research in AI conferences',
      'Python, TensorFlow, PyTorch expertise'
    ],
    benefits: [
      'Research publication support',
      'Conference attendance budget',
      'Flexible research time',
      'Top-tier computing resources',
      'International collaboration opportunities'
    ],
    posted: '1 week ago'
  },
  // Remote Positions - Fixed coordinates with meaningful centers
  {
    id: '6',
    title: 'Global Marketing Director',
    department: 'Marketing',
    location: 'Remote (Americas)',
    coordinates: [-98.5795, 39.8283], // Center of USA
    type: 'Full-time',
    experience: 'Executive',
    salary: '€95,000 - €130,000',
    remote: true,
    description: 'Shape OWL International\'s global brand strategy and lead marketing initiatives across our portfolio companies, driving awareness and engagement.',
    requirements: [
      '12+ years in marketing leadership',
      'Experience with global brands',
      'Digital marketing expertise',
      'B2B and B2C experience',
      'MBA preferred'
    ],
    benefits: [
      'Fully remote work',
      'Home office setup budget',
      'Global travel opportunities',
      'Health and wellness stipend',
      'Equity participation'
    ],
    posted: '4 days ago'
  },
  {
    id: '7',
    title: 'Data Science Manager',
    department: 'Data Science',
    location: 'Remote (Asia-Pacific)',
    coordinates: [134.489563, -25.734968], // Center of Australia
    type: 'Full-time',
    experience: 'Senior',
    salary: '€75,000 - €100,000',
    remote: true,
    description: 'Lead data science initiatives across our portfolio, developing predictive models and analytics solutions that drive strategic decision-making.',
    requirements: [
      '8+ years in data science',
      'Team leadership experience',
      'Machine learning expertise',
      'Big data technologies proficiency',
      'Masters in Data Science or related field'
    ],
    benefits: [
      'Remote-first culture',
      'Learning and development budget',
      'Flexible working hours',
      'Annual company retreat',
      'Performance bonuses'
    ],
    posted: '6 days ago'
  },
  {
    id: '8',
    title: 'Product Manager - AKOULA Platform',
    department: 'Engineering',
    location: 'Remote (Africa/Europe)',
    coordinates: [15, 35], // Mediterranean region center
    type: 'Full-time',
    experience: 'Mid',
    salary: '€60,000 - €80,000',
    remote: true,
    description: 'Drive product strategy and development for our flagship AKOULA platform, working closely with engineering teams to deliver cutting-edge solutions.',
    requirements: [
      '5+ years in product management',
      'Technical background preferred',
      'Experience with AI/ML products',
      'Agile methodology expertise',
      'Strong analytical skills'
    ],
    benefits: [
      'Flexible remote work',
      'Product development budget',
      'Cross-functional collaboration',
      'Career growth opportunities',
      'Health insurance coverage'
    ],
    posted: '2 days ago'
  },
  {
    id: '9',
    title: 'Cybersecurity Specialist',
    department: 'Engineering',
    location: 'Remote (Global)',
    coordinates: [20, 30], // Center of Africa for global remote
    type: 'Full-time',
    experience: 'Senior',
    salary: '€80,000 - €105,000',
    remote: true,
    description: 'Protect our global operations and portfolio companies through comprehensive cybersecurity strategies and implementation.',
    requirements: [
      '7+ years in cybersecurity',
      'Security certifications (CISSP, CISM)',
      'Cloud security expertise',
      'Incident response experience',
      'Risk assessment capabilities'
    ],
    benefits: [
      'Global remote flexibility',
      'Certification reimbursement',
      '24/7 support rotation bonus',
      'Security conference attendance',
      'Premium health benefits'
    ],
    posted: '1 week ago'
  },
  {
    id: '10',
    title: 'Business Development Manager',
    department: 'Strategy',
    location: 'Remote (Americas)',
    coordinates: [-122.4194, 37.7749], // San Francisco
    type: 'Full-time',
    experience: 'Mid',
    salary: '€65,000 - €85,000',
    remote: true,
    description: 'Identify and develop strategic partnerships and business opportunities that align with our mission of transforming Africa through innovation.',
    requirements: [
      '6+ years in business development',
      'Experience in emerging markets',
      'Strong negotiation skills',
      'MBA preferred',
      'Network in tech/investment industry'
    ],
    benefits: [
      'Commission opportunities',
      'Travel budget for partnerships',
      'Professional networking support',
      'Flexible schedule',
      'Equity participation'
    ],
    posted: '3 days ago'
  },
  {
    id: '11',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote (Asia-Pacific)',
    coordinates: [151.2093, -33.8688], // Sydney
    type: 'Full-time',
    experience: 'Mid',
    salary: '€58,000 - €75,000',
    remote: true,
    description: 'Build and maintain the infrastructure that powers our global operations, ensuring scalability, reliability, and security across all systems.',
    requirements: [
      '5+ years in DevOps/Infrastructure',
      'Cloud platforms expertise (AWS, Azure)',
      'Container orchestration (Kubernetes)',
      'CI/CD pipeline experience',
      'Monitoring and observability tools'
    ],
    benefits: [
      'Remote work with flexible hours',
      'Cloud certification support',
      'On-call compensation',
      'Latest technology access',
      'Career advancement path'
    ],
    posted: '5 days ago'
  },
  {
    id: '12',
    title: 'Legal Counsel - Africa Operations',
    department: 'Operations',
    location: 'Remote (Africa/Europe)',
    coordinates: [31.2357, -29.8587], // South Africa
    type: 'Full-time',
    experience: 'Senior',
    salary: '€70,000 - €95,000',
    remote: true,
    description: 'Provide legal expertise for our African operations, ensuring compliance across multiple jurisdictions while supporting strategic initiatives.',
    requirements: [
      '8+ years in corporate law',
      'African legal system knowledge',
      'M&A transaction experience',
      'Regulatory compliance expertise',
      'Law degree from accredited institution'
    ],
    benefits: [
      'Remote flexibility',
      'Legal education reimbursement',
      'Bar membership support',
      'International legal network',
      'Sabbatical opportunities'
    ],
    posted: '1 week ago'
  }
];
