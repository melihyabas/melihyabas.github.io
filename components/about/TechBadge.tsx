interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-block text-xs font-mono text-accent-muted px-3 py-1.5 bg-bg-tertiary border border-border/50 rounded-full">
      {label}
    </span>
  );
}
