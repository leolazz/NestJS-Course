import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// sql table === 'coffee'. 
// to change the table enter it in qoutes in the parenthesis of the entity decerator
@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;
    
    @Column('json', {nullable: true})
    flavors: string[];
}