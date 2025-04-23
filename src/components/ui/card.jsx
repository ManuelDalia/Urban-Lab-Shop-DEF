export function Card({ children, ...props }) {
  return <div {...props} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 12 }}>{children}</div>
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>
}
