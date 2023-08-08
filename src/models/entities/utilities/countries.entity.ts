import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { PostalCode } from './postal-code.entity';
import { Utilities } from './utilities.entity';

@Entity('countries')
export class Countries extends BaseEntity {
  @Column({
    name: 'code'
  })
  code: number;

  @Column({
    name: 'name'
  })
  name: string;

  @Column({
    name: 'continentName'
  })
  continentName: string;

  @Column({
    name: 'utilitiesId',
    default: 1
  })
  utilitiesId: number;

  @OneToMany(() => PostalCode, (postalCode) => postalCode.countries)
  postalCode: PostalCode;

  @ManyToOne(() => Utilities, (utilities) => utilities.country)
  @JoinColumn({ name: 'utilitiesId' })
  utilities: Utilities;
}
