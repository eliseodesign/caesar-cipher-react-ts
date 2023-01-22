import useCipher from "../hook/useCipher";

describe("Probando useCipher", ()=>{
  it("1. Probando casos de error controlados", ()=> {
    expect(()=> useCipher(false as unknown as string, 2 )).toThrow() // toThrow espera errores controlados de tipo throw new

    expect(()=> useCipher(0 as unknown as string, "error" as unknown as number)).toThrow() // toThrow espera errores controlados de tipo throw new

  })

  it("2. Probando casos de encriptaado", ()=> {
    expect(useCipher("abcd",1)).toBe("bcde")
    expect(useCipher("ABC",2)).toBe("CDE")
  })

  it("3. Probando caos de desencriptado", ()=> {
    expect(useCipher("bcde",1,false)).toBe("abcd")
    expect(useCipher("CDE",2,false)).toBe("ABC")
    expect(useCipher("ab",2,false)).toBe("yz")

  })
})
