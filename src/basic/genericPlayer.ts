export function genericPlayer(){

type Player<E> = {
  name: string;
  extraInfo: E; // extraInfo: any 대신 Generic 사용 (타입 안정성)
};

const jit: Player<{ favFood: string }> = {
  name: "jit",
  extraInfo: { favFood: "오늘점심" },
};

console.log(jit)
// 2. type alias
type PlayerB<E> = {
  name: string;
  extraInfo: E;
};

type JitPlayer = PlayerB<{ favFood: string }>;
const jit2: JitPlayer = {
  name: "jit2",
  extraInfo: { favFood: "오점맛" },
};
console.log(jit2);


// 3. type alias 분리
type PlayerC<E> = {
  name: string;
  extraInfo: E;
};

type JitExtra = { favFood: string };
type JitPlayer2 = PlayerC<JitExtra>;
const jit3: JitPlayer2 = {
  name: "jit3",
  extraInfo: { favFood: "타입얼라이스" },
};

console.log(jit3);

// 4. Generic type에 null 사용
type PlayerD<E> = {
  name: string;
  extraInfo: E;
};
type JitExtra2 = { favFood: string };
type JitPlayer3 = PlayerD<JitExtra2>;
const jit4: JitPlayer3 = {
  name: "jit4",
  extraInfo: { favFood: "점맛이요" },
};

console.log(jit4);
const lynn: PlayerD<null> = {
  name: "lynn",
  extraInfo: null,
};

// 5. Array 타입 (Generic)
// Array : interface Array<T> { ... }
type A = Array<number>;
let a: A = [1, 2, 3, 4];

// 6. 함수 인자로 Generic Array 사용
function printAllNumbers(arr: Array<number>) {
  console.log(arr)
}

printAllNumbers(a)
// 7. React useState 
// const [state, setState] = useState<number>(); // useState<number> 함수 사용

}