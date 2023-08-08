import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Enterprise } from './enterprise.entity';

interface Address {
  description: string;

  address: string;

  address2: string;

  city: number;

  state: number;

  postalCode: number;
}

@Entity('enterpriseDetails')
export class EnterpriseDetails extends BaseEntity {
  @Column({
    name: 'enterpriseId'
  })
  enterpriseId: number;

  @Column({
    name: 'addresses',
    type: 'jsonb'
  })
  addresses?: Address[];

  @Column({
    name: 'dbnumber',
    nullable: true
  })
  dbnumber?: string;

  @Column({
    name: 'taxid',
    nullable: true
  })
  taxid?: string;

  @Column({
    name: 'domains',
    type: 'jsonb'
  })
  domains?: string[];

  @Column({
    name: 'dbaNames',
    type: 'jsonb'
  })
  dbaNames?: string[];

  @OneToOne(() => Enterprise, (enterprise) => enterprise.details)
  @JoinColumn({ name: 'enterpriseId' })
  enterprise: Enterprise;
}
