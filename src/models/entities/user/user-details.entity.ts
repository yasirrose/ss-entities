import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Expose } from 'class-transformer';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';
import { City, PostalCode, State } from '..';

@Entity('userDetails')
export class UserDetails extends BaseEntity {
  @Column({
    name: 'userId'
  })
  userId: number;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Column({
    name: 'firstName'
  })
  firstName: string;

  @Column({
    name: 'lastName'
  })
  lastName: string;

  @Column({
    name: 'address',
    nullable: true
  })
  address: string;

  @Column({
    name: 'address2',
    nullable: true
  })
  address2: string;

  @Column({
    name: 'cityId',
    nullable: true
  })
  cityId: number;

  @Column({
    name: 'stateId',
    nullable: true
  })
  stateId: number;

  @Column({
    name: 'postalCodeId',
    nullable: true
  })
  postalCodeId: number;

  @Column({
    name: 'avatarUrl',
    nullable: true
  })
  avatarUrl: string;

  @Column({
    name: 'localeId',
    nullable: true
  })
  localeId: number;

  @Column({
    name: 'timeZoneId',
    nullable: true
  })
  timeZoneId: number;

  @Column({
    name: 'roles',
    nullable: true
  })
  roles: string;

  @Column({
    name: 'title',
    nullable: true
  })
  title: string;

  @Column({
    name: 'enterprisePrimaryContact',
    default: false
  })
  enterprisePrimaryContact: boolean;

  @OneToOne(() => User, (user) => user.security)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => City, (city) => city.userDetails)
  @JoinColumn({ name: 'cityId' })
  city: City;

  @ManyToOne(() => State, (state) => state.userDetails)
  @JoinColumn({ name: 'stateId' })
  state: State;

  @ManyToOne(() => PostalCode, (postalCode) => postalCode.userDetails)
  @JoinColumn({ name: 'postalCodeId' })
  postalCode: PostalCode;
}
