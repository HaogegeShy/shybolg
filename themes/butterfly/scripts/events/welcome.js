hexo.on('ready', () => {
  const { version } = require('../../package.json')
  hexo.log.info(`版本${version}`)
})
