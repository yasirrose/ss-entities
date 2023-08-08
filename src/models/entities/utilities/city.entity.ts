import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { PostalCode } from './postal-code.entity';
import { UserDetails, Utilities } from '..';

@Entity('cityTown')
export class City extends BaseEntity {
  @Column({
    name: 'code',
    nullable: true
  })
  code: number;

  @Column({
    name: 'name'
  })
  name: string;

  @Column({
    name: 'county'
  })
  county: string;

  @Column({
    name: 'utilitiesId',
    default: 1
  })
  utilitiesId: number;

  @OneToMany(() => PostalCode, (postalCode) => postalCode.city)
  postalCode: PostalCode;

  @OneToMany(() => UserDetails, (user) => user.city)
  userDetails: UserDetails;

  @ManyToOne(() => Utilities)
  @JoinColumn({ name: 'utilitiesId' })
  utilities: Utilities;
}
