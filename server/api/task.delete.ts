import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event)=> {

    const prisma = new PrismaClient();
    const body = await readBody(event);
    console.log(body);//テスト用
    const deleteTask = await prisma.task.delete({
        where: { id: body.id},});
        return deleteTask;
});