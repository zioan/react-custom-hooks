import { useEffect, useRef } from 'react';

// see modal component
//usefull for events like closing modal on click outside

function useEventListener(
  eventType = '',
  listener = () => null,
  target = window,
  options = null
) {
  const savedListener = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;

    const eventListener = (e) => savedListener.current(e);

    target.addEventListener(eventType, eventListener, options);

    return () => target.removeEventListener(eventType, eventListener, options);
  }, [eventType, target, options]);
}

export default useEventListener;
