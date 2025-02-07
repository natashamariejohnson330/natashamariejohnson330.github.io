// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-fanfiction-project",
          title: "fanfiction project",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/fanfiction/";
          },
        },{id: "news-i-39-m-working-on-a-project-involving-fanfiction-amp-lt-p-style-quot-color-black-quot-amp-gt-and-i-would-be-very-grateful-if-you-would-let-me-include-your-stories-amp-lt-p-amp-gt",
          title: 'I&amp;#39;m working on a project involving fanfiction&amp;amp;lt;p style=&amp;quot;color: black;&amp;quot;&amp;amp;gt;, and I would be...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%6D%6A@%61%6C%75%6D%6E%69.%73%74%61%6E%66%6F%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/natasha-m-johnson", "_blank");
        },
      },];
