module.exports = {
  base: "/winder/",
  title: "Hello Winder",
  description: "Just playing around",
  themeConfig: {
    sidebar: [
      // '/',
      {
        title: "Introduction",
        children: ["/install/", "/get-started/"]
      },
      {
        title: "Components",
        children: [
          "/components/button",
          "/components/input",
          "/components/grid",
        ]
      }
    ]
  }
};
