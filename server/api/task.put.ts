import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event)=> {

    const prisma = new PrismaClient();
    const body = await readBody(event);
    console.log(body);//テスト用
    const updatedTask = await prisma.task.update({
        where: { id: body.id},
        data:  { completed: body.completed }, });
        return updatedTask;
});