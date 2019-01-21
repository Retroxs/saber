import 'nprogress/nprogress.css'
import './css/global.css'

export default ({ router, rootOptions }) => {
  if (process.browser) {
    const nprogress = require('nprogress')

    const loaded = Object.create(null)

    nprogress.configure({ showSpinner: false })

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        nprogress.start()
      }
      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      nprogress.done()
    })
  }

  rootOptions.head.htmlAttrs = {
    lang: 'en'
  }
  rootOptions.head.link = [
    {
      href: 'https://fonts.googleapis.com/css?family=Josefin+Sans|Source+Sans+Pro',
      rel: 'stylesheet'
    }
  ]
}