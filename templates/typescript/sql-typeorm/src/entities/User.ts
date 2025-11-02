import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
	BeforeInsert,
} from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Index({ unique: true })
	@Column({ type: 'varchar', length: 120 })
	email!: string;

	@Column({ type: 'varchar', length: 120 })
	name!: string;

	@Column({ type: 'varchar', select: false })
	password!: string;

	@Column({ type: 'boolean', default: true })
	isActive!: boolean;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;

	@BeforeInsert()
	async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10);
	}
}
