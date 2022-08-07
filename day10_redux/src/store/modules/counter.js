//1. 액션만들기
const INCREMENT = 'counter/INCREMENT'; // 파일명/액션명 파일명 붙이는 이유는 액션명 중복때문에 프로젝트가 커질수록 중복될 확률이 높다
const DECREMENT = 'counter/DECREMENT';
const RESET     = 'counter/RESET'

//2. 액션 내보내기 (함수)
// dispatch({type: 액션명}) -> dispatch(aaa())

export const increment = () => ({type:INCREMENT});
export const decrement = () => ({type:DECREMENT});
export const reset     = () => ({type:RESET});

//3. 초기값
const initialState = {num : 0}
//4. 리듀서함수
const reducer = ( state = initialState, action ) => {
  switch(action.type){
    case INCREMENT :
      return {
        num : state.num + 1
      }
    case DECREMENT :
      return {
        num : state.num - 1
      }
    case RESET :
      return {
        num : 0
      }
    default :
      return state;
  }
}
export default reducer