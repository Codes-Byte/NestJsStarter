import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsInt, IsNumber, Min } from 'class-validator';

export class ICreateDTO {
  @ApiProperty() // this show that Whoever api, this Inteface DTO is used must have id: number
  @Type(() => Number)
  @IsNumber(
    {},
    {
      // By this way we can add custom message
      message: 'Custome Message',
    },
  )
  @Min(1)
  readonly id: number;
  @ApiProperty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @Type(() => Number) // This is where we mentioned the type of property
  @IsInt()
  readonly age: number;
}
