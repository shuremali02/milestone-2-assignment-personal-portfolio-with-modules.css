
import Card from '@/component/projectcard';
import styles from './project.module.css';

export default function ProjectPage() {
  const projects = [
    {
      img: "/travelBlog.jpg",
      title: "Travelling-Website- ",
      description: "A modern travel blog built with Next.js, React, and Tailwind CSS, The site features responsive design, dynamic components, and smooth navigation for an engaging travel journey.",
      route: "https://travelblog-assignment.netlify.app/",
    },
    {
      img: "/BlogPost.jpg",
      title: "Blogpost",
      description: "This is My BlogPost-web ",
      route: "https://blogpost101.netlify.app/",
    
    },
    {
      img: "/image.png",
      title: "Dynamic Resume Builder",
      description: "Dynamic Resume Builder use to Generate your Resume and save as PDF ",
      route: "https://resume-builder-milestone-5.netlify.app/",
    
    },

    {

      img: "/cal.png",
      title: "Calculator.ts",
      description: "A device that performs arithmetic operations on numbers.",
      route: "https://github.com/shuremali02/CLI-calculator",
    },
    {
      img: "/Atm.png",
      title: "ATM.ts",
      description: "The ATM System is the project which is used to access their bank accounts in order to make cash withdrawals",
      route: "https://github.com/shuremali02/ATM-project"

    },

    {
      img: "/count.png",
      title: "Counter",
      description: "Simple Increment Decrement Counter Application build with nextjs  & react useState Hooks and styled with Tailwind",
      route: "https://github.com/shuremali02/Next.js-React.js-Counter.git",
    },
    {
      img: "/navebar.png",
      title: "Navigation Bar",
      description: "Simple Navigation bar with buttons build with nextjs & react useState Hooks and styled with Tailwind",
      route: "https://counter-nextjs.netlify.app/",
    },
    {
      img: "/Milestone1.png",
      title: "Hello-World",
      description: "Simple Hello World Application build with nextjs and styled with Tailwind",
      route: "https://next-js-milestone-1-achieved.netlify.app/",
    },
  ];

  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.featuredTitle}>Featured Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
