class User {
  private _id: number;
  private _name: string;
  private _age: number;

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (!userBuisinessRule.isNameLenghtValid(name)) {
      throw new Error('Invalid name');
    }
    this._name = name;
  }

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    this._age = age;
  }

  public constructor(id: number, name: string, age: number) {
    this._id = id;
    this._name = name;
    this._age = age;
  }
}

const userBuisinessRule = {
  isNameLenghtValid(name: string): boolean {
    return name.length > 0 && name.length < 12;
  },
};

export { User, userBuisinessRule };
