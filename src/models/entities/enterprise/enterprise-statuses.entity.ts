import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Enterprise } from './enterprise.entity';

@Entity('enterpriseStatuses')
export class EnterpriseStatuses extends BaseEntity {
  @Column({
    name: 'enterpriseId'
  })
  enterpriseId: number;

  @Column({
    name: 'accountStatus',
    default: false
  })
  accountStatus: boolean;

  @Column({
    name: 'addressStatus',
    default: false
  })
  addressStatus: boolean;

  @Column({
    name: 'dbNumberStatus',
    default: false
  })
  dbNumberStatus: boolean;

  @Column({
    name: 'taxIdStatus',
    default: false
  })
  taxIdStatus: boolean;

  @OneToOne(() => Enterprise, (enterprise) => enterprise.status)
  @JoinColumn({ name: 'enterpriseId' })
  enterprise: Enterprise;
}
