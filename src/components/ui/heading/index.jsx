export default function Heading({
  as = "h1",
  size = "lg",
  color = "default",
  className = "",
  children,
}) {
  const validTags = ["h1", "h2", "h3"];
  const Tag = validTags.includes(as) ? as : "h1";

  const sizeClass = size ? `heading--${size}` : "";
  const colorClass = color === "light" ? "heading--light" : "";

  const classes = ["heading", sizeClass, colorClass, className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}

// <Heading as="h2" size="sm" color="light">Small Heading</Heading>
