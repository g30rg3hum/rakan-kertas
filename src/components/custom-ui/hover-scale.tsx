interface Props {
  children: React.ReactNode;
}

export default function HoverScale({ children }: Props) {
  return (
    <span className="inline-block hover:scale-[1.05] transition text-md">
      {children}
    </span>
  );
}
