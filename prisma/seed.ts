import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.user.findFirst({
    where: { role: Role.BOOwner },
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('admin123', 10);

    await prisma.user.create({
      data: {
        name: 'Admin Master',
        email: 'admin@radarleilao.com',
        password: passwordHash,
        role: Role.BOOwner,
      },
    });

    console.log('BOOwner criado com sucesso!');
  } else {
    console.log('BOOwner já existente. Seed ignorado.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
