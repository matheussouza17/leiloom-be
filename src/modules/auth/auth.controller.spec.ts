import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  const mockAuthService = {
    validateUser: jest.fn(),
    login: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('deve retornar access_token em login bem-sucedido', async () => {
    const user = { id: '1', email: 'test@test.com' };
    const dto: LoginDto = { email: 'test@test.com', password: '123456' };

    mockAuthService.validateUser.mockResolvedValue(user);
    mockAuthService.login.mockResolvedValue({ access_token: 'token123' });

    const result = await controller.login(dto);
    expect(result).toEqual({ access_token: 'token123' });
  });

  it('deve lançar UnauthorizedException se login falhar', async () => {
    mockAuthService.validateUser.mockResolvedValue(null);

    await expect(controller.login({ email: 'x', password: 'y' })).rejects.toThrow();
  });
});
