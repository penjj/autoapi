import { cac } from 'cac'
import { createAutoapi } from './codegen'

const program = cac()
program
  .command('gen')
  .option('-d, --doc <docUrl>', 'openapi json doc url')
  .option('-o, --output <output>', 'api generate output dir, default is api')
  .option(
    '-m, --model <model>',
    'model generate output dir, default is api/models'
  )
  .action(args => {
    createAutoapi({
      openapiUrl: args.doc,
      generateDir: args.output,
      modelDir: args.model,
    })
  })

program.help()
program.parse()
