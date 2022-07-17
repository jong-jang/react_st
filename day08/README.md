### 리액트 88888

:seedling: useMemo

- useMemo : 메모이제이션된 값을 반환합니다.
- useMemo : 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산

- useMemo : 값을 기억한다 함수의 return 값을 기억한다
            사용자 정의 함수로 잘쓰기 쉽지 않다.
            context(상태관리)에서 사용한다

useMemo(콜백함수, [의존성])
useMemo(() => {}, [])
useMemo(() => {}, [바뀌는 값])

<hr>

:seedling: useCallback

- useCallback : 함수 자체를 기억한다.

useCallback(콜백함수, [의존성])
useCallback(() => {}, [])
useCallback(() => {}, [바뀌는 값])

<hr>

:seeding: useReducer

- 