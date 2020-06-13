import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";




export class clientDTO {
    @IsInt({ message: 'Não é um inteiro válido'})
    id: number;
    
    
    @IsString({ message: 'Não é uma string válida'})
    @MaxLength(80, {message: 'Máximo 80 caracteres.'})
    email:string;
 
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    @IsString({ message: 'Não é uma string válida'})
    endereco:string;

    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    @IsInt({ message: 'Não é um number valido'})
    telefone:number;
    
    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(40, {message: 'Máximo 40 caracteres.'})
    emprego:string;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(1,{message: 'Mínimo 1 caracteres.'})
    @MaxLength(8, {message: 'Máximo 8 caracteres.'})
     nascimento:string;

     @IsString({ message: 'Não é uma string válida'})
     @MinLength(10,{message: 'Mínimo 10 caracteres.'})
     @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    sexo:string;

    @IsInt({ message: 'Não é uma string válida'})
    @MinLength(1,{message: 'Mínimo 01 caracteres.'})
    @MaxLength(11, {message: 'Máximo 11 caracteres.'})
    cpf:number;

    @IsInt({ message: 'Não é uma string válida'})
    @MinLength(1,{message: 'Mínimo 01 caracteres.'})
    @MaxLength(10, {message: 'Máximo 10 caracteres.'})
    rg:number;

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    nome: String;
}