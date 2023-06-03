import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { router } from './routes'

const app = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on port ${process.env.SERVER_PORT}`)
})
