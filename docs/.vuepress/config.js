module.exports = {
    base: '/yunnotes-apidocs/',
    //网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
    title: 'yun-notes',

    //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    description: 'api文档',

    //额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
    head: [
        ['link', {rel: 'icon', href: '/img/logo.png'}],
        //移动端优化
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
    ],

    //使用主题：vuepress-theme-reco
    theme: 'reco',

    //主题配置
    themeConfig: {
        //全局作者
        author:'jxl 🐦',
        //首页显示华为文案
        // huawei: true,
        // 密钥
        keyPage: {
            keys: ['cf79ae6addba60ad018347359bd144d2'], // 1.3.0 版本后需要设置为密文
            color: '#42b983', // 登录页动画球的颜色
            lineColor: '#42b983' // 登录页动画线的颜色
        },
        //关闭腾讯公益
        noFoundPageByTencent: false,
        //导航栏logo
        logo: '/img/logo.png',
        // navbar: false,  //禁用导航栏，也可以通过 YAML front matter 来禁用某个指定页面的导航栏
        lastUpdated: '更新时间',
        //导航栏链接
        nav: [
            {text: 'Home', link: '/', icon: 'reco-home'},
            {text: '文档', link: '/apidoc', icon: 'reco-document'},
            // {text: '笔记', link: '/a',icon:'reco-suggestion'},
            // {text: '工具', link: '/b',icon:'reco-api'},
            // {text: '资源', link: '/c',icon:'reco-juejin'},
            // {text: '收藏', link: '/d',icon:'reco-category'},
            // {text: 'Guide', link: '/guide/'},
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         {text: 'Chinese', link: '/'},
            //         {text: 'Japanese', link: '/'}
            //     ]
            // }
        ],

        sidebarDepth: 2,
        sidebar: 'auto',//自动生成侧栏,自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏
        // sidebar:[
        //     '/guide/test1',
        //     '/guide/test2',
        //     ['/guide/test3','this is my title'],
        //     '/guide/test4',
        //     '/guide/vue cli的使用',
        // ]
    }
}
