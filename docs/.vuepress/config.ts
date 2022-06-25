import { defineUserConfig, defaultTheme } from 'vuepress'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'LRC静态文档网站',
    description: '这是我的第一个 VuePress 站点',

    /** 
     * 参考【https://v2.vuepress.vuejs.org/zh/reference/config.html#pagepatterns】
     * 仅哪些文件、目录需要作为md解析成html，哪些不需要  感叹号表示不需要
     * 
    */
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
    // base: "/product/",
})
