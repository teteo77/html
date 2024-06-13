// 객체 리터럴
const circle = {
    // 프로퍼티: 객체 고유의 상태 데이터
    radius: 5,
    // 메서드: 상태 데이터를 참조하고 조작하는 동작
    getDiameter() {
        // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
        // 자신이 속한 객체인 circle을 참조할 수 있어야 한다.
        // this는 메서드를 호출한 객체를 가리킨다.

        // return 2 * circle.radius;
            // ㄴ 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않고, 바람직 하지 않다.

        return 2 * this.radius;
            // ㄴ this가 권장된다.
        }
    };  
console.log(circle.getDiameter()); // 10


