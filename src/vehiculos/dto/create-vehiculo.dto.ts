import { IsString, IsNumber } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsNumber()
  año: number;

  @IsNumber()
  kilometraje: number;

  @IsString()
  color: string;

  @IsString()
  tipo_combustible: string;

  @IsString()
  transmision: string;
}
