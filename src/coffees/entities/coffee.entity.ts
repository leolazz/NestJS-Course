import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

// sql table === 'coffee'. 
// to change the table enter it in qoutes in the parenthesis of the entity decerator
@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column()
    brand: string;

    @Column({default: 0})
    recommendations: number;
    
    @JoinTable()
    @ManyToMany(
      type => Flavor,
      flavor => flavor.coffees,
      {
        cascade: true, // ['insert']
      }
    
    )
    flavors: Flavor[];
}