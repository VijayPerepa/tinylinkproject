# UI Components Rules

## Core Principle

**ALL UI elements in this application MUST use shadcn/ui components. DO NOT create custom components.**

## shadcn/ui Only

### Required Approach
- **ALWAYS** use shadcn/ui components from `@/components/ui/`
- **NEVER** create custom UI components from scratch
- If a component doesn't exist, add it using the shadcn CLI

```bash
# Add new shadcn components
npx shadcn@latest add [component-name]

# Examples
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## Common Components

```typescript
// ✅ CORRECT - Use shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

function MyForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="input">Label</Label>
        <Input id="input" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}

// ❌ INCORRECT - Creating custom components
function CustomButton({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 rounded">
      {children}
    </button>
  );
}

// ❌ INCORRECT - Creating custom card
function CustomCard({ title, children }) {
  return (
    <div className="border rounded-lg p-4">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
```

## Component Composition

You can compose shadcn components to create feature-specific components:

```typescript
// ✅ CORRECT - Composing shadcn components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function LinkCard({ link }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{link.title}</CardTitle>
        <Badge>{link.clicks} clicks</Badge>
      </CardHeader>
      <CardContent>
        <p>{link.shortCode}</p>
        <Button>Copy</Button>
      </CardContent>
    </Card>
  );
}
```

## Customization

Use the `cn()` utility and className prop to customize shadcn components:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ✅ CORRECT - Customize with className
<Button className="w-full">Full Width Button</Button>

// ✅ CORRECT - Conditional styling
<Button className={cn("w-full", isActive && "bg-green-600")}>
  Button
</Button>

// ✅ CORRECT - Use variants when available
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large Button</Button>
```

## Available Components

Common shadcn/ui components to use:

- **Buttons**: `button`
- **Forms**: `input`, `label`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`
- **Layout**: `card`, `separator`, `tabs`, `accordion`
- **Feedback**: `alert`, `toast`, `dialog`, `alert-dialog`, `sheet`
- **Data Display**: `badge`, `avatar`, `table`, `skeleton`
- **Navigation**: `dropdown-menu`, `navigation-menu`, `breadcrumb`
- **Overlays**: `popover`, `tooltip`, `hover-card`

## When You Need a Component

1. **Check if it exists** in `components/ui/`
2. **If not, add it** using shadcn CLI: `npx shadcn@latest add [component-name]`
3. **Never build from scratch** - always use shadcn components

## Configuration

Project uses shadcn/ui with:
- **Style**: New York
- **CSS Variables**: Enabled
- **Icon Library**: Lucide React
- **Tailwind CSS**: Version 4

```json
// components.json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "cssVariables": true
  },
  "iconLibrary": "lucide"
}
```

## Key Points

1. **shadcn/ui Only** - No custom UI components allowed
2. **Add via CLI** - Use `npx shadcn@latest add` to add new components
3. **Compose Components** - Build features by composing shadcn components
4. **Customize with className** - Use Tailwind classes to customize appearance
5. **Check Documentation** - Refer to [shadcn/ui docs](https://ui.shadcn.com) for component usage
