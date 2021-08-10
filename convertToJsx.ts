/**
 *
 *
 * @author fuyg
 * @date  2021-08-10
 */
import * as fs from 'fs'
import * as path from 'path'

const dirPath = path.join(__dirname, 'UltiSnips')

const files = fs.readdirSync(dirPath)

files.forEach(item => {
  if (item.indexOf('javascriptreact_el_') === 0) {
    const sourcePath = path.join(__dirname, 'UltiSnips', item)
    const content = fs.readFileSync(sourcePath, 'utf-8')
    const changed = content.replace('extends vue', '# extends javascriptreact')
    fs.writeFileSync(sourcePath, changed, 'utf-8')
    // const destFile = item.replace('javascript_jsx_el_', 'javascriptreact_el_')
    // const destPath = path.join(__dirname, 'UltiSnips', destFile)
    // fs.copyFileSync(sourcePath, destPath)
  }
})
