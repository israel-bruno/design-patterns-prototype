interface IPrototipo {
  clone(): this;
}

class Quadrado implements IPrototipo {
  lado: number;
  color: string;

  constructor(lado: number, color: string) {
    this.lado = lado;
    this.color = color;
  }

  clone(): this {
    return Object.assign({}, this);
  }
}

class Circulo implements IPrototipo {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  clone(): this {
    return Object.assign({}, this);
  }
}

export { Quadrado, Circulo };
