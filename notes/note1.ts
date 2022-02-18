// OVERLOADS AND GENERICS
//
// Aims:
// - Create a function that will add one to a string on number as input.
// - Infer types correctly depending on the input.
//
// Examples:
// - addOne(1) will return 2
// - addOne('1') will return '11' (concatenated)

// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types
function genericFun1<T>(param: T): T {
  if (typeof param === 'string') {
    return param + '1'
    // Type 'string' is not assignable to type 'T'.
    // 'T' could be instantiated with an arbitrary type which could be unrelated to 'string'.ts(2322)
  }
  return param + 1
  // Operator '+' cannot be applied to types 'T' and 'number'.ts(2365)
}
const genericFun1_1 = genericFun1(1) // const genericFun1_1: 1
const genericFun1_2 = genericFun1('1') // const genericFun1_2: "1"
const genericFun1_3 = genericFun1(true) // const genericFun1_3: true

const genericFun1Arrow = <T>(param: T): T => {
  if (typeof param === 'string') {
    return param + '1'
    // Type 'string' is not assignable to type 'T'.
    // 'T' could be instantiated with an arbitrary type which could be unrelated to 'string'.ts(2322)
  }
  return param + 1
  // Operator '+' cannot be applied to types 'T' and 'number'.ts(2365)
}
const genericFun1Arrow_1 = genericFun1Arrow(1) // const genericFun1Arrow_1: 1
const genericFun1Arrow_2 = genericFun1Arrow('1') // const genericFun1Arrow_2: "1"
const genericFun1Arrow_3 = genericFun1Arrow(true) // const genericFun1Arrow_3: true

function genericFun2<T extends string | number>(param: T): T {
  if (typeof param === 'string') {
    return param + '1'
  }
  return param + 1
}
const genericFun2_1 = genericFun2(1) // const genericFun2_1: 1
const genericFun2_2 = genericFun2('1') // const genericFun2_2: "1"
const genericFun2_3 = genericFun2(true) // const genericFun2_3: string | number
// Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
function genericFun3<T extends string | number>(
  param: T
): T extends number ? number : string {
  if (typeof param === 'string') {
    return param + '1'
  }
  return param + 1
}
const genericFun3_1 = genericFun3(1) // const genericFun3_1: number
const genericFun3_2 = genericFun3('1') // const genericFun3_2: string
const genericFun3_3 = genericFun3(true) // const genericFun3_3: string | number
// Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

function overloadFun(param: string): string
function overloadFun(param: number): number
function overloadFun(param: string | number) {
  if (typeof param === 'string') {
    return param + '1'
  }
  return param + 1
}
const overloadFun_1 = overloadFun(1) // const overloadFun_1: number
const overloadFun_2 = overloadFun('1') // const overloadFun_2: string
const overloadFun_3 = overloadFun(true) // const overloadFun_3: string | number
// No overload matches this call.

// https://stackoverflow.com/a/53143568/2085381
type IOverload = {
  (param: string): string
  (param: number): number
}
const overloadFunArrow: IOverload = (param: any) => {
  if (typeof param === 'string') {
    return param + '1'
  }
  return param + 1
}
const overloadFunArrow_1 = overloadFunArrow(1) // const overloadFunArrow_1: number
const overloadFunArrow_2 = overloadFunArrow('1') // const overloadFunArrow_2: string
const overloadFunArrow_3 = overloadFunArrow(true) // const overloadFunArrow_3: never
