import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { EnterpriseStatuses } from './enterprise-statuses.entity';
import { EnterpriseDetails, User } from '..';

@Entity('enterprise')
export class Enterprise extends BaseEntity {
  @Column({
    name: 'isActive',
    default: false
  })
  isActive: boolean;

  @Column({
    name: 'name',
    nullable: false,
    unique: true
  })
  name: string;

  @Column({
    name: 'description',
    nullable: true
  })
  description: string;

  @OneToOne(() => EnterpriseStatuses, (status) => status.enterprise, {
    cascade: ['insert']
  })
  status: EnterpriseStatuses;

  @OneToOne(() => EnterpriseDetails, (details) => details.enterprise, {
    cascade: ['insert']
  })
  details: EnterpriseDetails;

  @OneToMany(() => User, (user) => user.enterprise, {
    cascade: ['insert']
  })
  user: User[];
}
