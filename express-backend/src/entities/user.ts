import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 100 })
    username!: string;

    @Column('varchar', { length: 64 })
    password!: string;
}
