import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { City } from './city.entity';
import { State } from './state.entity';
import { Countries } from './countries.entity';
import { UserDetails, Utilities } from '..';

@Entity('postalCode')
export class PostalCode extends BaseEntity {
  @Column({
    name: 'code'
  })
  code: number;

  @Column({
    name: 'lng'
  })
  lng: string;

  @Column({
    name: 'lat'
  })
  lat: string;

  @Column({
    name: 'cityId'
  })
  cityId: number;

  @Column({
    name: 'stateId'
  })
  stateId: number;

  @Column({
    name: 'countriesId',
    nullable: true
  })
  countriesId: number;

  @Column({
    name: 'utilitiesId',
    default: 1
  })
  utilitiesId: number;

  @ManyToOne(() => City, (city) => city.postalCode)
  city: City;

  @ManyToOne(() => State, (state) => state.postalCode)
  state: State;

  @ManyToOne(() => Countries, (countries) => countries.postalCode)
  countries: Countries;

  @OneToMany(() => UserDetails, (user) => user.postalCode)
  userDetails: UserDetails;

  @ManyToOne(() => Utilities, (utilities) => utilities.postalCode)
  @JoinColumn({ name: 'utilitiesId' })
  utilities: Utilities;
}
