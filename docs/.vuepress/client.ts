
/**
 * vuepress/client所有的开放对象、方法参考  【https://v2.vuepress.vuejs.org/zh/reference/client-api.html】
 */
import { defineClientConfig,usePageHeadTitle,useSiteData,usePageData,usePagesData } from '@vuepress/client'

export default defineClientConfig({


    /**
     * 客户端应用创建后被调用，你可以对 Vue 应用添加各种能力
     * @param app   createApp创建的 Vue 应用实例    用法参考【https://staging-cn.vuejs.org/api/application.html#app-config-compileroptions】
     * @param router  createRouter创建的路由实例  用法参考【https://router.vuejs.org/zh/api/index.html#addroute】
     * @param siteData 根据用户配置生成的Ref 对象，包含 base, lang, title, description, head 和 locales。
     */
    enhance({ app, router, siteData }) { 

        //获取config.ts信息
        console.log(`enhance.siteData: `,siteData.value)
        console.log(`useSiteData(): `,useSiteData().value)


        //获取所有页面信息
        const pagesData = usePagesData().value
        const pagesDataKeys = Object.keys(pagesData);
        console.log("pagesDataKeys：",Object.keys(pagesData));
        Promise.all(pagesDataKeys.map(key => pagesData[key]())).then(newPagesData => {
            console.log(`usePagesData(): `,newPagesData)
        })


        // console.log(`usePageHeadTitle(): `,usePageHeadTitle().value)

    },


    /**
     *
     * 组合式API：用法参考【https://staging-cn.vuejs.org/api/composition-api-setup.html】
     */
    setup() { },

    //全局的 UI 组件
    rootComponents: [],
})