import { IsInt, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

class ICreateVehiclesDTOs {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  description: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  plate: string;

  @IsNotEmpty()
  @IsInt({})
  @Min(1500)
  year: number;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  price: number;

  constructor(
    name: string,
    description: string,
    plate: string,
    year: number,
    color: string,
    price: number,
  ) {
    this.name = name;
    this.description = description;
    this.plate = plate;
    this.year = year;
    this.color = color;
    this.price = price;
  }
}

export { ICreateVehiclesDTOs };