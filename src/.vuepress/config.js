const fs = require('fs')
const path = require('path')
const { buildContents, buildSidebar } = require('metacon')

let contents = require('./contents.data.json')
contents = contents.contents
console.log(contents)
let modules = buildSidebar(contents, path.join(__dirname, '../'))
console.log(modules)



// configure these modules if you
module.exports = {
  title: "HARDOCS",
  description : "Friendly documentation workflows for non code projects",
  description: "",
  dest: "build",
  base: "/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  extend: "@vuepress/theme-default",
  // config: md => {
  //   md.options.linkify = modules;
  // },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About EOSC co-creation', link: '/02-co-creation-report/' },
      { text: 'Repositories', link: '/01-dev-status/' },
    ],
    logo: "/logo.png",
    sidebar: modules,
    // if your docs are in a different repo from your main project:
    docsRepo: "https://github.com/Hardocs/hardocs.github.io",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "develop",
    // defaults to false, set to true to enable
    editLinks: true,

    editLinkText: "Help us improve this page!"
  },
  plugins: [
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     'ga': '' // UA-00000000-0
    //   }
    // ],
    '@vuepress/pwa',
    'vuepress-plugin-reading-time',
    '@saintic/utterances',
        {
          repo: 'Hardocs/hardocs.github.io',
          theme: 'github-light',
          issueTerm: 'pathname'
        }
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ]
  }
};


