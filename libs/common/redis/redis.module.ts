import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProvider,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';

export class RedisModule {
  static getRedisOption(option: object): ClientProvider {
    const config = new ConfigService();

    return {
      ...option,
      transport: Transport.REDIS,
      options: {
        host: config.getOrThrow('HOST_REDIS_SERVER'),
        port: config.getOrThrow('PORT_PUBLIC_REDIS'),
        password: config.getOrThrow('PASSWORD_REDIS'),
      },
    };
  }

  static register(name: string): DynamicModule {
    return {
      module: RedisModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name: name,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.REDIS,
              options: {
                host: configService.getOrThrow('HOST_REDIS_SERVER'),
                port: configService.getOrThrow('PORT_PUBLIC_REDIS'),
                password: configService.getOrThrow('PASSWORD_REDIS'),
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
