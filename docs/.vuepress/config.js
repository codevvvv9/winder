module.exports = {
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
        children: ["/components/button"]
      }
    ]
  }
};
