import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { City, Countries, Language, PostalCode, State, TimeZone } from '..';

@Entity('utilities')
export class Utilities extends BaseEntity {
  @Column({
    name: 'name'
  })
  name: string;

  @OneToMany(() => City, (city) => city.utilities)
  city: City[];

  @OneToMany(() => State, (state) => state.utilities)
  state: State[];

  @OneToMany(() => PostalCode, (postalCode) => postalCode.utilities)
  postalCode: PostalCode[];

  @OneToMany(() => Countries, (country) => country.utilities)
  country: Countries[];

  @OneToMany(() => Language, (language) => language.utilities)
  language: Language[];

  @OneToMany(() => TimeZone, (timezone) => timezone.utilities)
  timezone: TimeZone[];
}
