// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-satellite-testing",
              title: "Satellite Testing",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/1_pumpkin/";
              },
            },{id: "dropdown-mars-like-rover",
              title: "Mars-like Rover",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/2_rover/";
              },
            },{id: "dropdown-stroke-rehab-app",
              title: "Stroke Rehab App",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/3_thumbot/";
              },
            },{id: "dropdown-tars-replica",
              title: "TARS Replica",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/4_tars/";
              },
            },{id: "dropdown-l1-rocket",
              title: "L1 Rocket",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/5_rocket/";
              },
            },{id: "dropdown-frc-robot",
              title: "FRC Robot",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/6_frc/";
              },
            },{id: "nav-resume",
          title: "Resume",
          description: "My resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "projects-satellite-testing",
          title: 'Satellite Testing',
          description: "Testing and automation projects for internship at Pumpkin Space Systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_pumpkin/";
            },},{id: "projects-rover",
          title: 'Rover',
          description: "UCI Legacy Robotics Mars-like rover for URC/CIRC competitions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rover/";
            },},{id: "projects-thumbot",
          title: 'ThumBOT',
          description: "UCI Biorobotics Lab stroke rehabilitation robot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_thumbot/";
            },},{id: "projects-tars",
          title: 'TARS',
          description: "UCI ZotBotics Level 3 project (autonomous animatronic).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_tars/";
            },},{id: "projects-rocket",
          title: 'Rocket',
          description: "L1 solid rocket for high power rocketry (HPR) certification.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_rocket/";
            },},{id: "projects-mr-krabs",
          title: 'Mr. Krabs',
          description: "FRC Team 3189 Circuit Breakers&#39; 2025 Robot",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_frc/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Ethan%20J.%20Pham%20Resume.pdf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ethanjpham", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
