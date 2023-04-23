import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getInteractionData = async (prisma: PrismaClient) => {
  await prisma.$connect();
  const allInteractionData = await prisma.sessiondata
    .findMany()
    .then((data) => {
      console.log(data);
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    });
  return allInteractionData;
};

void getInteractionData(prisma);
