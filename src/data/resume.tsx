import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Michael Kimeison",
  initials: "MK",
  url: "https://github.com/MikeKomari",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "Just a Sophomore student interested in Web Development and Machine Learning. I love developing things. I can speak many languages! Very active on Instagram, feel free to reach out!",
  summary:
    "A Self-motivated 2nd year student majoring in [School of Computer Science](/#education) interested in Web Development and Machine Learning at Binus University with a GPA of 3.93. Striving for knowledge, experience, network, and skills in organization. ",
  avatarUrl: "/me.png",
  skills: [
    "Algorithm and Data Structures",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Javascript",
    "Python",
    "Java",
    "Raylib",
    "C++",
    "C",
    "Adobe",
    "3D Modelling",
    "Multilingual",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // Update This
    { href: "#", icon: NotebookIcon, label: "Portfolio" },
  ],
  contact: {
    email: "michael.kimeison@binus.ac.id",
    tel: "+6282288552005",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MikeKomari",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/michkimei/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mikekomari",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/channel/UCziLWj6HOJVdsJMqdYF8Qjw",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Binus Blockchain and Crypto Club",
      href: "https://binusbcc.org",
      badges: [],
      location: "Hybrid",
      title: "Research and Development Staff",
      logoUrl: "/bbcc.jpeg",
      start: "Sept 2024",
      end: "Now",
      description:
        "Research and development staff in charge of developing, maintaining, and managing the organization's website, ensuring its functionality, user experience, and alignment with organizational goals.",
    },
    {
      company: "Binus Student and Learning Club",
      badges: [],
      href: "https://new.bslc.or.id/",
      location: "Remote",
      title: "Student Mentor",
      logoUrl: "/bslc.png",
      start: "Sept 2024",
      end: "Now",
      description: (
        <>
          z
          <ul>
            <li>- Teaching various subjects to support student learning.</li>
            <li>
              - Provide academic guidance and help students strengthen their
              problem-solving and technical skills.
            </li>
            <li>
              - Foster a collaborative and inclusive learning environment to
              encourage student engagement.
            </li>
            <li>
              - Share personal insights and experiences to motivate students on
              their academic journey.
            </li>
          </ul>
          <br />
        </>
      ),
    },
    {
      company: "Bina Nusantara University",
      href: "https://binus.ac.id/",
      badges: [],
      location: "Onsite",
      title: "Freshmen Partner",
      logoUrl: "/binus.png",
      start: "January 2020",
      end: "April 2020",
      description: (
        <>
          As a Freshmen Partner (FP) for Binusian 2028, I serve as a facilitator
          for a group of nine freshmen during their first year at Binus
          University, helping them transition smoothly through both semesters.
          <br />
          <br />
          My responsibilities include:
          <ul>
            <li>
              - Building strong relationships with freshmen and creating a
              supportive environment.
            </li>
            <li>
              - Assisting freshmen in raising and presenting projects to the
              wider community.
            </li>
            <li>
              - Introducing them to campus regulations and ensuring they adapt
              to university life.
            </li>
            <li>
              - Facilitating the development of Binus Graduate Attributes (BGA),
              focusing on Applied Management Skills (communication, planning &
              organizing), Collaboration, Critical & Creative Thinking, and
              Adaptability.
            </li>
          </ul>
          <br />
          This role enhances my own skills, especially in facilitation, empathy,
          and leadership, while guiding freshmen through their academic and
          personal growth.
        </>
      ),
    },
    {
      company: "Bina Nusantara University",
      href: "https://binus.ac.id/",
      badges: [],
      location: "Onsite",
      title: "Freshmen Leader",
      logoUrl: "/binus.png",
      start: "Aug 2024",
      end: "Sept 2024",
      description: (
        <>
          As a Freshmen Leader (FL) for Binusian 2028, I help new students
          (referred to as Freshmen) navigate and adapt to the campus environment
          through various orientation programs before the start of the first
          semester. These include the Orientation & Transition Program (OTP),
          Week of Welcoming (WoW), and Academic Experience (AE), culminating in
          their official student inauguration. My role involves guiding freshmen
          to:
          <br />
          <br />
          My responsibilities include:
          <ul>
            <li>- Familiarize themselves with the campus environment.</li>
            <li>
              - Learn and apply Binusian Values ​​and the Binus Graduate
              Attributes (BGA), crucial for their learning journey.
            </li>
            <li>
              - Build rapport and maintain strong connections with freshmen.
            </li>
            <li>
              - Ensure freshmen adhere to campus policies and smoothly
              participate in university activities.
            </li>
          </ul>
          <br />
        </>
      ),
    },
    {
      company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
      href: "https://www.kmbd.info/",
      badges: [],
      location: "Indonesia",
      title: "Coordinator of Public Relations",
      logoUrl: "/kmbd.png",
      start: "March 2024",
      end: "Sept 2024",
      description: (
        <>
          As the Coordinator for the Welcoming Party within the Public Relations
          Division, I lead strategic communication initiatives and event usher
          coordination to enhance community engagement, leveraging my technical
          skills to streamline operations and improve digital outreach. Key
          responsibilities include:
          <br />
          <br />
          My responsibilities include:
          <ul>
            <li>
              - Event Planning & Management: Orchestrate the logistics and
              execution of large-scale events, integrating project management
              tools to ensure seamless coordination across multiple teams.
            </li>
            <li>
              - Data Management: Utilize data-driven strategies for managing
              participant information, employing Google Sheets, Excel, and
              Python scripts to efficiently track, organize, and analyze event
              registration and attendee feedback.
            </li>
          </ul>
          <br />
          Additionally, as an FL, I am responsible for overseeing the smooth
          execution of the First Year Program (FYP), leading and supporting the
          freshmen throughout the process, and helping them develop key skills
          like communication, planning, collaboration, and creative thinking.
        </>
      ),
    },
    {
      company: "Ureeka",
      href: "https://socs.binus.ac.id/ureeka/",
      badges: [],
      location: "Indonesia",
      title: "Activist",
      logoUrl: "/ureeka.png",
      start: "Aug 2024",
      end: "Now",
      description: (
        <>
          Ureeka focuses on software development and holds various trainings on
          Frontend and Backend Developers. Ureeka also assisted students who are
          willing to strive for competitions.
          <br />
          <br />
          <ul>
            <li>- Learned Backend and CRUD using PHP, MySQL, and Laravel</li>
            <li>
              - Created an API using Postman API for Back End documentation.
            </li>
          </ul>
          <br />
        </>
      ),
    },
  ],
  education: [
    {
      school: "Bina Nusantara University",
      href: "https://binus.ac.id",
      degree: "Computer Science Undergraduate",
      logoUrl: "/binus.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "SMA Education",
      href: "#",
      degree: "High School Diploma, Natural Science",
      logoUrl: "/edu21.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Willify",
      href: "https://mikekomari.github.io/Willify_Final_Project_HCI/",
      dates: "Jan 2024 - March 2024",
      active: true,
      description:
        "I developed an e-commerce website for selling music, similar to Apple Music, using pure HTML, CSS, and JavaScript. This project, while not my best work, has made me immensely proud of how far I've come in web development. The primary objective was to create a fully functional and visually appealing website that allows users to browse and purchase music.",
      technologies: ["HTML", "CSS", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://mikekomari.github.io/Willify_Final_Project_HCI/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MikeKomari/Willify_Final_Project_HCI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/willify.png",
      video: "",
    },
    {
      title: "areyouokay.",
      href: "https://mikekomari.github.io/areyouokay./",
      dates: "Sept 2023 - Dec 2023",
      active: true,
      description:
        "As part of my Program Design Method course, were tasked to create a fully functional website. We chose to create a medical website similar to halodoc but instead of doctors, our website hires psychologists. I serve as the Frontend Developer. I have never code for a web development before, this project alone opened my world towards web development.",
      technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "https://mikekomari.github.io/areyouokay./",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MikeKomari/areyouokay.",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/areyouokay.png",
      video: "",
    },
    {
      title: "World-University",
      href: "https://world-university-bncc.vercel.app/",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "Final project of a Web Development Bootcamp using React and Axios",
      technologies: ["React", "Axios", "Tailwind"],
      links: [
        {
          type: "Website",
          href: "https://world-university-bncc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MikeKomari/WorldUniversityBNCC",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/worlduniversitybncc.png",
      video: "",
    },
    {
      title: "Snake Game",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description: "Mini Project of Learning OOP with Raylib library in C++",
      technologies: ["C++", "Raylib", "Object Oriented Programming"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MikeKomari/SnakeGame-usingRaylib",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/snakegame.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
