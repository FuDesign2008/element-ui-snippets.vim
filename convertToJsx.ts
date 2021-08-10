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
  if (item.indexOf('javascript_jsx_el_') === 0) {
    const sourcePath = path.join(__dirname, 'UltiSnips', item)
    const destFile = item.replace('javascript_jsx_el_', 'javascriptreact_el_')
    const destPath = path.join(__dirname, 'UltiSnips', destFile)
    fs.copyFileSync(sourcePath, destPath)
  }
})
