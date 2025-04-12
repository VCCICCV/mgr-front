import { Sheet, SheetContent } from "@/components/ui/sheet"
import { NAV_ITEMS } from "@/lib/constants"

export function Sidebar() {
    return (
        <Sheet>
            <SheetContent side="left" className="w-64">
                {NAV_ITEMS.map((item) => (
                    <Accordion key={item.title} type="single" collapsible>
                        <AccordionItem value={item.title}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                {item.children.map((child) => (
                                    <Link href={child.path} key={child.title}>
                                        {child.title}
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </SheetContent>
        </Sheet>
    )
}