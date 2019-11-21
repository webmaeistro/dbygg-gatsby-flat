const config = {
  siteTitle: "Danielsen Bygg", // Site title.
  siteTitleShort: "D-B Horten", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Danielsen Bygg Horten", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://danielsen-bygg.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Vi utfører ALT av snekkerarbeid! Lik siden og få gratis befaring ved ønske!", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Bygg", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Morten Danielsen", // Username to display in the author segment.
  userEmail: "danielsen.bygg@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Horten, Vestfold, Norway", // User location to display in the author segment.
  userAvatar: "https://i.imgur.com/caLpeJM.jpg", // User avatar to display in the author segment.
  userDescription: "Danielsen Bygg ble startet opp i Oktober 2018, av snekkeren Morten Danielsen, fra Horten. Morten har god erfaring med alt som har med snekkerarbeid å gjøre. Selskapet tar på seg jobber som totalrenovering, tilbygg, tak, malejobber, og alt annet snekkerarbeid.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Messenger",
      url: "https://m.me/Danielsenbygghorten?fbclid=IwAR3QCPG97Rlxa3EhQWX9GK_KQqNFNAFWdHWHCi_D2X1wF3JKMowVWf-qupQ",
      iconClassName: "fa fa-facebook-messenger"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/danielsenbygg",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:danielsen.bygg@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Morten Danielsen" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
