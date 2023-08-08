import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Utilities } from './utilities.entity';

@Entity('language')
export class Language extends BaseEntity {
  @Column({
    name: 'languageCode'
  })
  languageCode: string;

  @Column({
    name: 'description'
  })
  description: string;

  @Column({
    name: 'utilitiesId',
    default: 1
  })
  utilitiesId: number;

  @ManyToOne(() => Utilities, (utilities) => utilities.language)
  @JoinColumn({ name: 'utilitiesId' })
  utilities: Utilities;
}
