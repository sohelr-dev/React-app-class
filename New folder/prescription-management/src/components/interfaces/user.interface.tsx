export interface User {
  id?: number,
  name: string,
  email: string,
  role?: string,
  role_id: number,
  phone?: string,
  photo?: string,
  file?: File | null,
  password?: string,
  role_name?: string,
}