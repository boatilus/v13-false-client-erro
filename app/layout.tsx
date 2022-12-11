import type { PropsWithChildren } from "react";

export default ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <title>Hello, world</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
