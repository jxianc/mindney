import { InputType, Int, Field } from "@nestjs/graphql";
import { IsNotEmpty, Min } from "class-validator";

@InputType()
export class SpendInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  @Min(1, { message: "amount should greater than 0" })
  @IsNotEmpty()
  amount: number;

  @Field(() => String, { nullable: true })
  date?: Date;

  @Field(() => Int)
  @IsNotEmpty()
  categoryId: number;
}