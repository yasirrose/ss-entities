import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { PostalCode } from './postal-code.entity';
import { UserDetails, Utilities } from '..';

@Entity('stateProvince')
export class State extends BaseEntity {
  @Column({
    name: 'code'
  })
  code: string;

  @Column({
    name: 'name'
  })
  name: string;

  // @Column({
  //   name: 'county',
  //   nullable: true
  // })
  // county: string;

  @Column({
    name: 'utilitiesId',
    default: 1
  })
  utilitiesId: number;

  @OneToMany(() => PostalCode, (postalCode) => postalCode.state)
  postalCode: PostalCode;

  @OneToMany(() => UserDetails, (user) => user.state)
  userDetails: UserDetails;

  @ManyToOne(() => Utilities, (utilities) => utilities.state)
  @JoinColumn({ name: 'utilitiesId' })
  utilities: Utilities;
}
