import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

const mockUser = {
  id: '1',
  name: 'Matheus',
  email: 'teste@teste.com',
  password: 'hashed123',
  createdOn: new Date(),
  updatedOn: new Date(),
};

const mockPrismaClient = {
  user: {
    create: jest.fn().mockResolvedValue(mockUser),
    findUnique: jest.fn().mockResolvedValue(mockUser),
    findMany: jest.fn().mockResolvedValue([mockUser]),
    update: jest.fn().mockResolvedValue(mockUser),
    delete: jest.fn().mockResolvedValue(mockUser),
  },
};

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
      ],
    })
      .overrideProvider(UserService)
      .useValue(new UserService())
      .compile();

    service = module.get<UserService>(UserService);
    // manualmente substitui o prisma por mock
    (service as any).prisma = mockPrismaClient;
  });

  it('should create a user with hashed password', async () => {
    jest.spyOn(bcrypt, 'hash').mockImplementation(() => Promise.resolve('hashed123'));

    const result = await service.create({
      name: 'Matheus',
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(result).toHaveProperty('email');
    expect(mockPrismaClient.user.create).toHaveBeenCalled();
  });

  it('should return user by ID', async () => {
    const result = await service.findOne('1');
    expect(result.id).toBe('1');
  });

  it('should return all users', async () => {
    const result = await service.findAll();
    expect(result.length).toBeGreaterThan(0);
  });
});
