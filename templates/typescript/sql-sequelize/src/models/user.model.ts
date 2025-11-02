import {
	Table,
	Column,
	Model,
	DataType,
	PrimaryKey,
	Default,
	Unique,
} from 'sequelize-typescript';
import bcrypt from 'bcryptjs';

@Table({
	tableName: 'users',
	timestamps: true,
})
export class User extends Model {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
	id!: string;

	@Unique
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	email!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password!: string;

	async comparePassword(candidate: string): Promise<boolean> {
		return bcrypt.compare(candidate, this.password);
	}
}
