//Cuncurrent Mode
//https://ko.reactjs.org/docs/concurrent-mode-intro.html
//let the browser interrupt the rendering if there’s anything else that needs to be done.
//https://developer.mozilla.org/ko/docs/Web/API/Window/requestIdleCallback

/*
    - requestIdleCallback API를 통해 브라우저가 유후(Idle) 상태일때 workLoop를 실행
    - workLoop에서 nextUnitOfWOrk가 있으면 performUnitOfWork로 실행 
    - performUnitOfWork는 다음에 실행할 nextUnitOfWork를 리턴
    - nextUnitOfWork가 없거나 deadline 조건이 안맞으면 while loop를 빠져나오고
    - requestIdleCallback로 다음 유휴 상태에 실행할 workloop를 등록

    결과
    - render함수가 렌더링을 실행하는 중간 브라우저가 유후(Idle) 상태일 때 특정 작업을 실행
    - 모든 노드가 렌더링 될때까지 기다릴 필요없이 중간에 필요한 작업을 수행할 수 있음

    유후 상태
    https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%9C%B4_(CPU)
    - 컴퓨터 처리 장치에서 유휴 또는 아이들(idle)은 어떠한 프로그램에 의해서도 사용되지 않는 상태를 말한다.
*/

let nextUnitOfWork = null;

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(nextUnitOfWork) {}
