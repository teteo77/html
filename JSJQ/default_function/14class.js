class Person {
    constructor(name) {
      this.name = name;
    }
}
// constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다.
// 이름을 변경할 수 없다.

// constructor는 클래스 내에 최대 한 개만 존재할 수 있다.
// constructor는 생략할 수 있다. 생략하면 빈 constructor가 암묵적으로 정의된다.
// 인스턴스를 초기화하려면 constructor를 생략해서는 안된다.
// constructor는 별도의 반환문을 갖지 않아야 한다. 암묵적으로 this, 즉 인스턴스를 반환하기 때문이다.

const me = new Person("Lee");
console.log(me); // Person {name: "Lee"}