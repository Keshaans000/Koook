import bcrypt from 'bcryptjs';

// Simple teacher authentication for admin access
// In production, you would use a proper authentication system
const TEACHER_CREDENTIALS = {
  username: 'deca_teacher',
  // Password: 'wayzata2024' (hashed)
  passwordHash: '$2a$10$8K9.rGRLVx9v5xF2Q8lZO.Xm3qN9pF4uH8wD2mE6tA7sR5vY1cB3k'
};

export function validateTeacherCredentials(username: string, password: string): boolean {
  // Simple password-only authentication - password is "wayzata2024"
  return password === "wayzata2024";
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}