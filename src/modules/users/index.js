import { prisma } from '../../data/index.js'

export const list = async (ctx) => {
  try {
    const users = await prisma.user.findMany({})
    ctx.body = users
  } catch (error) {
    ctx.status = 500
    ctx.body = 'Ops! Algo deu errado. Tente novamente mais tarde.'
    return
  }
}

export const create = async (ctx) => {
  try {
    const user = await prisma.user.create({
      data: ctx.request.body,
    })
    ctx.body = user
  } catch (error) {
    ctx.status = 500
    ctx.body = 'Ops! Algo deu errado. Tente novamente mais tarde.'
    return
  }
}

export const update = async (ctx) => {
  const { name, email } = ctx.request.body
  try {
    const user = await prisma.user.update({
      where: {
        id: ctx.params.id,
      },
      data: { name, email },
    })
    ctx.body = user
  } catch (error) {
    ctx.status = 500
    ctx.body = 'Ops! Algo deu errado. Tente novamente mais tarde.'
    return
  }
}

export const remove = async (ctx) => {
  const { id } = ctx.params
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    })
    ctx.status = 204
    ctx.body = id
  } catch (error) {
    ctx.status = 500
    ctx.body = 'Ops! Algo deu errado. Tente novamente mais tarde.'
    return
  }
}
