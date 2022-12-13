import { PrismaServiceAuth } from '@common/auth/prisma';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AuthModule } from '../apps/auth/src/auth.module';
// import { AuthDto } from '../apps/auth/src/dto';
// import { PrismaService } from '@libs/auth/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaServiceAuth;
  const config = new ConfigService();

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();
    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();

    await app.listen(config.getOrThrow('PORT_E2E') || 3000);
    prisma = app.get(PrismaServiceAuth);
    await prisma.cleanDatabase();
    pactum.request.setBaseUrl(
      `http://localhost:${config.getOrThrow('PORT_E2E')}`,
    );
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: any = {
      email: 'test@gmail.com',
      firstName: 'Nguyễn',
      lastName: 'Văn A',
      password: '123',
    };

    describe('Signup', () => {
      it('should throw if email empty', () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody({
            password: dto.password,
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if password empty', () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody({
            email: dto.email,
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if no body provided', () => {
        return pactum.spec().post(`/auth/signup`).expectStatus(400).inspect();
      });

      it('should signup', () => {
        return pactum
          .spec()
          .post(`/auth/signup`)
          .withBody(dto)
          .expectStatus(200)
          .inspect();
      });
    });

    describe('Signin', () => {
      it('should throw if email empty', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            password: dto.password,
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if password empty', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody({
            email: dto.email,
          })
          .expectStatus(400)
          .inspect();
      });

      it('should throw if no body provided', () => {
        return pactum.spec().post(`/auth/signin`).expectStatus(400).inspect();
      });

      it('should signin', () => {
        return pactum
          .spec()
          .post(`/auth/signin`)
          .withBody(dto)
          .expectStatus(200)
          .stores('userAt', 'data.access_token')
          .inspect();
      });
    });
  });

  // describe('User', () => {
  //   describe('Get current', () => {
  //     it('should get current user', () => {
  //       return pactum
  //         .spec()
  //         .get(`/users/me`)
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .expectStatus(200)
  //         .inspect();
  //     });
  //   });
  //   describe('Edit user', () => {
  //     it('should edit user', () => {
  //       const dto: EditUserDto = {
  //         firstName: 'Nguyễn',
  //         lastName: 'Văn B',
  //         email: 'develop@gmail.com',
  //       };

  //       return pactum
  //         .spec()
  //         .patch(`/users`)
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .withBody(dto)
  //         .expectStatus(200)
  //         .expectBodyContains(dto.firstName)
  //         .expectBodyContains(dto.lastName)
  //         .expectBodyContains(dto.email)
  //         .inspect();
  //     });
  //   });
  // });

  // describe('Bookmarks', () => {
  //   describe('Get empty bookmark', () => {
  //     it('shout get bookmark', () => {
  //       return pactum
  //         .spec()
  //         .get(`/bookmarks`)
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .expectStatus(200)
  //         .expectBody([])
  //         .inspect();
  //     });
  //   });

  //   describe('Create bookmark', () => {
  //     it('shout create bookmark', () => {
  //       const dto: CreateBookmarkDto = {
  //         title: 'New bookmark',
  //         link: 'http://google.com',
  //         description: 'description',
  //       };

  //       return pactum
  //         .spec()
  //         .post(`/bookmarks`)
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .withBody(dto)
  //         .expectStatus(200)
  //         .stores('bookmarkId', 'id')
  //         .inspect();
  //     });
  //   });
  //   describe('Get bookmarks', () => {
  //     it('shout get bookmark', () => {
  //       return pactum
  //         .spec()
  //         .get(`/bookmarks`)
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .expectStatus(200)
  //         .expectJsonLength(1)
  //         .inspect();
  //     });
  //   });
  //   describe('Get bookmark by id', () => {
  //     it('shout get bookmark', () => {
  //       return pactum
  //         .spec()
  //         .get(`/bookmarks/{id}`)
  //         .withPathParams('id', '$S{bookmarkId}')
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .expectStatus(200)
  //         .expectBodyContains('$S{bookmarkId}')
  //         .inspect();
  //     });
  //   });
  //   describe('Edit bookmark', () => {
  //     it('shout edit bookmark', () => {
  //       const dto: EditBookmarkDto = {
  //         title: 'Tin thế giới nổi bật trong tuần',
  //         description: 'NHỮNG ĐIỂM NHẤN TRONG BÀI PHÁT BIỂU CỦA ÔNG PUTIN',
  //         link: 'https://www.youtube.com/watch?v=47LpVwuoJJE&ab_channel=FBNCVietnam',
  //       };
  //       return pactum
  //         .spec()
  //         .patch(`/bookmarks/{id}`)
  //         .withPathParams('id', '$S{bookmarkId}')
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .withBody(dto)
  //         .expectStatus(200)
  //         .inspect();
  //     });
  //   });

  //   describe('Delete bookmark', () => {
  //     it('shout delete bookmark', () => {
  //       return pactum
  //         .spec()
  //         .delete(`/bookmarks/{id}`)
  //         .withPathParams('id', '$S{bookmarkId}')
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .expectStatus(200)
  //         .inspect();
  //     });

  //     it('shout empty bookmark', () => {
  //       return pactum
  //         .spec()
  //         .get(`/bookmarks`)
  //         .withHeaders({
  //           Authorization: 'Bearer $S{userAt}',
  //         })
  //         .expectStatus(200)
  //         .expectJsonLength(0)
  //         .inspect();
  //     });
  //   });
  // });

  /**
   * test e2e areas
   */
  describe('Area', () => {
    const host = 'http://localhost:50000';
    const schemaName = 'areas';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJwZHVvbmdwZHU5OUBnbWFpbC5jb20iLCJpYXQiOjE2NjY5NjAyODQsImV4cCI6MTY2Njk2MTE4NH0.7xeXuEqj-X-P3ks2TuAIdOJz-0h1v_Amjj4-jdD1s8k';

    it('should create area instance', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .expectStatus(200)
        .stores('id', 'data.id')
        .inspect();
    });

    it('should update area instance by id', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}/{id}`)
        .withPathParams('id', '$S{id}')
        .withHeaders('Authorization', `Bearer ${token}`)
        .expectStatus(200)
        .inspect();
    });

    it('should get area list', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .expectStatus(200)
        .inspect();
    });

    it('should find area by id ', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}/{id}`)
        .withPathParams('id', '$S{id}')
        .withHeaders('Authorization', `Bearer ${token}`)
        .expectStatus(200)
        .inspect();
    });

    it('should delete area instance by id', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}/{id}`)
        .withPathParams('id', '$S{id}')
        .withHeaders('Authorization', `Bearer ${token}`)
        .expectStatus(200)
        .inspect();
    });
  });

  /**
   * test e2e alert notes
   */
  describe('Alert notes', () => {
    const host = 'http://localhost:50000';
    const schemaName = 'alert-notes';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJwZHVvbmdwZHU5OUBnbWFpbC5jb20iLCJpYXQiOjE2NjcxODM1ODYsImV4cCI6MTY2NzI2OTk4Nn0.0QOLhyqdhP5QfOQkEJSavVw-FMSxdA9P3_Q8fvzpf00';

    it('should create alert note instance', async () => {
      return await pactum
        .spec()
        .post(`${host}/${schemaName}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'Note created',
        });
    });

    it('should update alert note instance by id', async () => {
      return await pactum
        .spec()
        .patch(`${host}/${schemaName}/{id}`)
        .withPathParams('id', '$S{id}')
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'Note updated',
        });
    });

    it('should get alert note list', async () => {
      return await pactum
        .spec()
        .withHeaders('Authorization', `Bearer ${token}`)
        .get(`${host}/${schemaName}`);
    });

    it('should find alert note by id ', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });

    it('should delete alert note instance by id', async () => {
      return await pactum
        .spec()
        .delete(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });
  });

  /**
   * test e2e contact
   */
  describe('contact', () => {
    const host = 'http://localhost:50000';
    const schemaName = 'business-models';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZHVvbmdwZHU5OUBnbWFpbC5jb20iLCJpYXQiOjE2NjcyMDE2NTcsImV4cCI6MTY2NzI4ODA1N30.WivZVrhV4_5mtjTqeEjJPAgsI4T7D4ZeqgWR7mX6-8c';

    it('should create contact instance', async () => {
      return await pactum
        .spec()
        .post(`${host}/${schemaName}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'Note created',
        });
    });

    it('should update contact instance by id', async () => {
      return await pactum
        .spec()
        .patch(`${host}/${schemaName}/{id}`)
        .withPathParams('id', '$S{id}')
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'Note updated',
        });
    });

    it('should get contact list', async () => {
      return await pactum
        .spec()
        .withHeaders('Authorization', `Bearer ${token}`)
        .get(`${host}/${schemaName}`);
    });

    it('should find contact by id ', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });

    it('should delete contact instance by id', async () => {
      return await pactum
        .spec()
        .delete(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });
  });

  /**
   * test e2e contacts
   */
  describe('Contacts', () => {
    const host = 'http://localhost:50000';
    const schemaName = 'contacts';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZHVvbmdwZHU5OUBnbWFpbC5jb20iLCJpYXQiOjE2NjcyODk1NzksImV4cCI6MTY2NzM3NTk3OX0.bzrAtp7KavYL9Dp4ujONzfTAOiPxyaUTqv_BfTeEVTM';

    it('should create contact instance', async () => {
      return await pactum
        .spec()
        .post(`${host}/${schemaName}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'Note created',
        });
    });

    it('should update contact instance by id', async () => {
      return await pactum
        .spec()
        .patch(`${host}/${schemaName}/{id}`)
        .withPathParams('id', '$S{id}')
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'Note updated',
        });
    });

    it('should get contact list', async () => {
      return await pactum
        .spec()
        .withHeaders('Authorization', `Bearer ${token}`)
        .get(`${host}/${schemaName}`);
    });

    it('should find contact by id ', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });

    it('should delete contact instance by id', async () => {
      return await pactum
        .spec()
        .delete(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });
  });

  /**
   * test e2e investors
   */
  describe('Investors', () => {
    const host = 'http://localhost:50000';
    const schemaName = 'investors';
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkZXZlbG9wQGdtYWlsLmNvbSIsImlhdCI6MTY2NzM4MjU4NSwiZXhwIjoxNjY3NDY4OTg1fQ.w0ab4QdIMCR6eedVZujhuFKUE_wSR3FLcY-VnoVRWRM';

    it('should create investors instance', async () => {
      return await pactum
        .spec()
        .post(`${host}/${schemaName}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'investors created',
        });
    });

    it('should update investors instance by id', async () => {
      return await pactum
        .spec()
        .patch(`${host}/${schemaName}/{id}`)
        .withPathParams('id', '$S{id}')
        .withHeaders('Authorization', `Bearer ${token}`)
        .withBody({
          name: 'investors updated',
        });
    });

    it('should get investors list', async () => {
      return await pactum
        .spec()
        .withHeaders('Authorization', `Bearer ${token}`)
        .get(`${host}/${schemaName}`);
    });

    it('should find investors by id ', async () => {
      return await pactum
        .spec()
        .get(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });

    it('should delete investors instance by id', async () => {
      return await pactum
        .spec()
        .delete(`${host}/${schemaName}/{id}`)
        .withHeaders('Authorization', `Bearer ${token}`)
        .withPathParams('id', '$S{id}');
    });
  });
});
