module.exports = {
  base: "/winder/",
  title: "Hello Winder",
  description: "Just playing around",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Hello Winder',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Winder 框架欢迎你',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    // sidebar: [
    //   // '/',
    //   {
    //     title: "Introduction",
    //     children: ["/install/", "/get-started/"]
    //   },
    //   {
    //     title: "Components",
    //     children: [
    //       "/components/button",
    //       "/components/input",
    //       "/components/grid",
    //       "/components/layout",
    //       "/components/popover",
    //       "/components/tabs",
    //       "/components/toast"
    //     ]
    //   }
    // ],
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        sidebar: [
          {
            title: "Introduction",
            collapsable: false,
            children: ["/introduction/", "/get-started/"]
          },
          {
            title: "Components",
            collapsable: false,
            children: [
              "/components/button",
              "/components/input",
              "/components/grid",
              "/components/layout",
              "/components/popover",
              "/components/tabs",
              "/components/toast"
            ]
          }
        ]
      },
      "/zh/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        sidebar: [
          {
            title: "入门",
            children: ["/zh/install/", "/zh/get-started/"]
          },
          {
            title: "组件",
            children: [
              "/zh/components/button",
              "/zh/components/input",
              "/zh/components/grid",
              "/zh/components/layout",
              "/zh/components/popover",
              "/zh/components/tabs",
              "/zh/components/toast"
            ]
          }
        ]
      }
    }
  }
};
