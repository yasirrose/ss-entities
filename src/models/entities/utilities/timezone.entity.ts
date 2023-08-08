import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Utilities } from './utilities.entity';

@Entity('timezone')
export class TimeZone extends BaseEntity {
  @Column({
    name: 'zone'
  })
  zone: string;

  @Column({
    name: 'zoneShort'
  })
  zoneShort: string;

  @Column({
    name: 'zoneDescription'
  })
  zoneDescription: string;

  @Column({
    name: 'utc'
  })
  utc: string;

  @Column({
    name: 'utcDescription'
  })
  utcDescription: string;

  @Column({
    name: 'utilitiesId',
    default: 1
  })
  utilitiesId: number;

  @ManyToOne(() => Utilities, (utilities) => utilities.timezone)
  @JoinColumn({ name: 'utilitiesId' })
  utilities: Utilities;
}
