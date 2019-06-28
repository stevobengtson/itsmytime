import { pbkdf2Sync, randomBytes } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = this.createHashedPassword(this.password);
  }

  @Column()
  public password: string;

  public confirmPassword: string;

  public checkPassword(candidatePassword: string): boolean {
    const salt = this.password.split('$')[0];
    const testPassword = this.createHashedPassword(candidatePassword, salt);
    return (testPassword === this.password) ? true : false;
  }

  private createHashedPassword(password: string, salt?: string): string {
    const generatedSalt = salt || this.generateSalt();
    const hash = this.generateHash(password, generatedSalt);
    return [salt, hash].join('$');
  }

  private generateHash(password: string, salt: string) {
    return pbkdf2Sync(password, salt, 2048, 32, 'sha512').toString('hex');
  }

  private generateSalt(): string {
    return randomBytes(32).toString('hex');
  }
}
