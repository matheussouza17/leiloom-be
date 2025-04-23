import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;
  let jwtService: JwtService;

  const mockUser = {
    id: 'abc123',
    email: 'teste@email.com',
    password: '$2b$10$abcdef12345678901234567890abcdef1234567890abcdef123456', 
    name: 'Teste',
  };

  const mockJwt = {
    sign: jest.fn().mockReturnValue('token123'),
  };

  const mockUserService = {
    findByEmail: jest.fn().mockResolvedValue(mockUser),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: mockUserService },
        { provide: JwtService, useValue: mockJwt },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('validateUser', () => {
    it('retorna usuário válido se senha estiver correta', async () => {
      //jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

      const result = await service.validateUser(mockUser.email, 'senha_correta');
      expect(result).toHaveProperty('email', mockUser.email);
      expect(result).not.toHaveProperty('password'); // senha não deve ser retornada
    });

    it('retorna null se senha estiver errada', async () => {
      // jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

      const result = await service.validateUser(mockUser.email, 'senha_errada');
      expect(result).toBeNull();
    });

    it('retorna null se usuário não existir', async () => {
      mockUserService.findByEmail.mockResolvedValue(null);

      const result = await service.validateUser('nao@existe.com', 'qualquer');
      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('deve retornar access_token válido', async () => {
      const payload = { id: mockUser.id, email: mockUser.email };
      const result = await service.login(payload);

      expect(result).toEqual({ access_token: 'token123' });
      expect(jwtService.sign).toHaveBeenCalledWith({ sub: payload.id, email: payload.email });
    });
  });
});
