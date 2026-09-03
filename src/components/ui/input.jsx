import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const base =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500";

export const Input = forwardRef(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(base, className)} {...props} />
));
Input.displayName = "Input";

export const Textarea = forwardRef(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(base, "resize-none", className)} {...props} />
));
Textarea.displayName = "Textarea";

export const Select = forwardRef(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn(base, "pr-8", className)} {...props}>
    {children}
  </select>
));
Select.displayName = "Select";

export function Label({ className, ...props }) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-slate-700", className)}
      {...props}
    />
  );
}

export function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-3"
    >
      <span
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
          checked ? "bg-indigo-600" : "bg-slate-300"
        )}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </span>
      {label && <span className="text-sm font-medium text-slate-700">{label}</span>}
    </button>
  );
}
