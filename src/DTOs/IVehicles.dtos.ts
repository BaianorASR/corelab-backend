import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';

class IVehicleDTOs {
  @IsString()
  public id?: string;

  @IsString()
  public name: string;

  @IsString()
  public brand: string;

  @IsString()
  public description: string;

  @IsString()
  public plate: string;

  @IsBoolean()
  public isFavorite?: boolean;

  @IsString()
  public year: string;

  @IsString()
  public color: string;

  @IsInt()
  public price: number;

  @IsDate()
  public createdAt?: Date;

  @IsDate()
  public updatedAt?: Date;
}

export { IVehicleDTOs };
