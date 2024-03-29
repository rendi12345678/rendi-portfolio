import React, { forwardRef } from "react";

const List = forwardRef(({ children, className }, ref) => {
  return (
    <ul className={className} ref={ref}>
      {children}
    </ul>
  );
});

export default List;
