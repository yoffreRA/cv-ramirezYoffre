import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/Foto.png';
import testimonialImage from '../images/testimonial.webp';

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import WhatsappIcon from '../components/Icon/WhatsappIcon';
import EmailIcon from '../components/Icon/EmailIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ramirez Amado Yoffre',
  description: "Automation, management and support of business technological infrastructures and computer networks",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yoffre Ramirez.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Yoffre Ramirez <strong className="text-stone-100">systems engineer</strong>, focused on ISP, security and program with the company <strong className="text-stone-100">AtonTec</strong>, I am dedicated to the design and management of advanced network infrastructures and connectivity solutions.

      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I am passionate about expanding my knowledge in a self-taught manner through various sources on the internet. I explore new topics and immerse myself in online courses, technical articles, and specialized communities to stay up-to-date and improve my skills as an ever-evolving systems engineer.
      </p>
    </>
  ),
  actions: [
    {
      href: '../images/CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a systems engineer, my goal is the development and improvement of
digital systems. My focus has been on creating and
optimization of solutions with business models that encompass
from SaaS products to e-commerce platforms,
digital media and communication. My commitment to innovation
and efficiency has been the basis of my passion in this field, and I am
excited to continue contributing my experience to
promote cutting-edge technological solutions in the next
stage of my career.`,
  aboutItems: [
    {label: 'Location', text: 'Chavin de Huantar', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Peruvian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, program', Icon: SparklesIcon},
    {label: 'Study', text: 'Los Angeles University of Chimbote', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'AtomTec Network Administrator', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Quechua',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Nextjs',
        level: 9,
      },
      {
        name: 'Laravel',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'python',
        level: 9,
      },
      {
        name: 'php',
        level: 9,
      },
      {
        name: 'java',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 6,
      },
      {
        name: 'Swift',
        level: 8,
      },
      {
        name: 'Android Studio',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Dic 2023',
    location: 'Los Angeles Catholic University of Chimbote',
    title: 'Systems Engineer',
    content: <p>During my career in systems engineering, I developed technical skills in programming, network administration, database design, and managing complex technology projects.</p>,
  },
  {
    date: 'Jul 2003',
    location: 'Senati',
    title: 'IT Maintenance and Technical Support Specialist',
    content: <p>I gained vital experience in maintenance, technical support and troubleshooting in information technology.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 - Present',
    location: 'AtomTec',
    title: 'Systems Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'September 2023 – December 2023',
    location: 'District municipality of Chavín de Huántar',
    title: 'IT Intern',
    content: (
      <p>
        During my experience in the IT area, I was in charge of
        manage communication networks and information technology systems
        information, ensuring efficient operation and resolving
        technical problems.
      </p>
    ),
  },
  {
    date: 'September 2021, October - 2022',
    location: 'District municipality of Chavín de Huántar',
    title: 'Municipal Technical Assistant for the Management of Services Water and Sanitation - ATM',
    content: (
      <p>
        During my performance as Municipal Technical Assistant for the
        Management of Water and Sanitation Services, my work focused
        in the coordination of activities related to the
        water and sanitation infrastructure. I managed properly
        water and sanitation systems, collaborating closely with
        technical equipment to guarantee a safe and sustainable supply.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Do you have questions or ideas to share? Do not hesitate to contact me! You can contact me through email or social networks.',
  items: [
    {
      type: ContactType.Email,
      text: 'ramirezamadoyoffre@gmail.com',
      href: 'ramirezamadoyoffre@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chavin de Huantar',
      href: 'https://maps.app.goo.gl/tagPftEUmL2ZCR1CA',
    },
    {
      type: ContactType.Whatsapp,
      text: 'WhatsApp',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Messenger,
      text: 'Messenger',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/yoffreRA'},
  {label: 'Email', Icon: EmailIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'}, 
  {label: 'Whatsapp', Icon: WhatsappIcon, href: 'https://wa.me/qr/G4V5XNVBQ4T7P1'},
];
