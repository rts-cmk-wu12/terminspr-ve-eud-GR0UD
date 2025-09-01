export default function Heading({
  as = "h1",
  size = "lg",
  color = "default",
  className = "",
  children,
}) {
  const Tag = as === "h2" ? "h2" : "h1";
  const sizeClass = `heading--${size}`;
  const colorClass = color === "light" ? "heading--light" : "";
  const classes = ["heading", sizeClass, colorClass, className]
    .filter(Boolean)
    .join(" ");
  return (
    <header className='header'>
      <Tag className={classes}>{children}</Tag>
    </header>
  );
}

// Heading component
// example use: <Heading as="h2" size="sm" color="light">Small Heading</Heading>
