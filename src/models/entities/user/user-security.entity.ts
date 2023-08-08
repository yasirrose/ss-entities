import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

class PhoneNumber {
  type: string;

  number: number;
}
// (username, password, email, phoneNumber) [name: "user_login_idx"]
@Entity('userSecurity')
export class UserSecurity extends BaseEntity {
  @Column({
    name: 'userId'
  })
  userId: number;

  @Column({
    name: 'username',
    unique: true
  })
  username: string;

  @Column({
    name: 'password'
  })
  @Exclude()
  password: string;

  @Column({
    name: 'email',
    unique: true
  })
  email: string;

  @Column({
    name: 'phoneNumber',
    unique: true,
    type: 'jsonb'
  })
  phoneNumber: PhoneNumber[];

  @Column({
    name: 'validated',
    default: false
  })
  validated: boolean;

  @OneToOne(() => User, (user) => user.security)
  @JoinColumn({ name: 'userId' })
  user: User;
}
