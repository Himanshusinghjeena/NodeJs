import {z} from "zod";

const portSchema = z.coerce.number().min(1).max(6505).default(3004)
export const PORT = portSchema.parse(process.env.PORT);

// const ageSchema =z.number().min(18).max(50).int()
// const age =11;

// const parseAge = ageSchema.parse(age);

// const {data,error,success} = ageSchema.safeParse(age);
// console.log({data,error,success})