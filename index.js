import Button from './src/Button'
import ButtonGroup from './src/ButtonGroup'
import Icon from './src/Icon'

export {Button, ButtonGroup, Icon}
// node目前不认识上述语法，所以需要 npx parcel build index.js --no-minify 不要压缩，会有slot不识别的bug