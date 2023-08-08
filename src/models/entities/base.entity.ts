import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    type: 'bigint'
  })
  id: number;

  @CreateDateColumn({
    name: 'createdAt',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updatedAt',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP'
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deletedAt',
    type: 'timestamptz',
    nullable: true
  })
  deletedAt: Date;
}
