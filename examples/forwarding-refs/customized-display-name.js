function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // Dê a este componente um nome mais visivelmente amigável no DevTools
  // e.g. "ForwardRef(logProps(MyComponent))"
  // highlight-range{1-2}
  const nome = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
